import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { NavigationItems } from './navigation.tsx';

describe('P114 website nav', () => {
    it('points AI Education and Courses at catalogue routes', () => {
        const ai = NavigationItems.find((item) => item.label === 'AI Education');
        const courses = NavigationItems.find((item) => item.label === 'Courses');
        assert.equal(ai?.href, '/programs');
        assert.equal(courses?.href, '/courses');
    });
});
