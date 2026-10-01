import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
    accountsLoginHref,
    isUseMocksEnabled,
    mockCatalogueCall,
} from './catalogue';

describe('P115 catalogue helper', () => {
    it('builds an Accounts continue URL', () => {
        const href = accountsLoginHref('http://localhost:3020/programs');
        assert.match(href, /\/login\?next=/);
        assert.match(href, /programs/);
    });

    it('P116 login continue does not stay on the website Coming Soon path', () => {
        const href = accountsLoginHref();
        assert.match(href, /\/login\?next=/);
        assert.doesNotMatch(href, /coming-soon/i);
    });
});

describe('P083 Website USE_MOCKS gate', () => {
    it('is false in production even when the flag is set', () => {
        assert.equal(isUseMocksEnabled('true', 'production'), false);
    });

    it('is true only when flag is true and not production', () => {
        assert.equal(isUseMocksEnabled('true', 'development'), true);
        assert.equal(isUseMocksEnabled('true', 'test'), true);
        assert.equal(isUseMocksEnabled('false', 'development'), false);
        assert.equal(isUseMocksEnabled(undefined, 'development'), false);
    });
});

describe('P083 Website mock catalogue envelope', () => {
    it('returns locked envelope keys for GET /programs/', () => {
        const res = mockCatalogueCall<{ items: Array<{ slug: string }> }>(
            '/programs/',
        );
        assert.equal(res.error, false);
        assert.ok(Array.isArray(res.errors));
        assert.equal(typeof res.message, 'string');
        assert.equal(res.status, 200);
        assert.equal(res.data.items[0].slug, 'ai-education');
    });

    it('returns locked envelope keys for GET /courses/slug/growth-engineering', () => {
        const res = mockCatalogueCall<{ slug: string; title: string }>(
            '/courses/slug/growth-engineering',
        );
        assert.equal(res.error, false);
        assert.equal(res.status, 200);
        assert.equal(res.data.slug, 'growth-engineering');
        assert.equal(res.data.title, 'Growth Engineering');
    });
});
