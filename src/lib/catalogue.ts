export type CatalogueEnvelope<T> = {
    error: boolean;
    errors: unknown[];
    data: T;
    message: string;
    status: number;
};

/** Pure gate — unit-tested. Production ignores the mock flag. */
export function isUseMocksEnabled(
    useMocksFlag: string | undefined,
    nodeEnv: string | undefined,
): boolean {
    return useMocksFlag === 'true' && nodeEnv !== 'production';
}

export const USE_MOCKS = isUseMocksEnabled(
    process.env.NEXT_PUBLIC_USE_MOCKS,
    process.env.NODE_ENV,
);

function ok<T>(data: T, message = 'Request completed successfully'): CatalogueEnvelope<T> {
    return { error: false, errors: [], data, message, status: 200 };
}

const PROGRAM = {
    _id: 'prog-ai-education',
    id: 'prog-ai-education',
    slug: 'ai-education',
    title: 'Project: AI Education for everyone',
    description: 'Free programme sample for local mock rail.',
    hostName: 'Damola Oladipo',
    partnerName: 'Onaeko',
    outcomes: ['Understand AI foundations', 'Apply tools to real work'],
    whoFor: ['Builders exploring AI'],
    whoNotFor: ['People seeking certification only'],
    faculty: [
        { name: 'Fareed', title: 'Faculty (QA placeholder)' },
        { name: 'Casey Winters', title: 'Faculty (QA placeholder)' },
    ],
    status: 'published',
};

const COURSE = {
    _id: 'course-growth-engineering',
    id: 'course-growth-engineering',
    slug: 'growth-engineering',
    title: 'Growth Engineering',
    description: 'Paid course sample for local mock rail.',
    price: 15000000,
    scholarshipPrice: 5000000,
    currency: 'NGN',
    status: 'published',
    whoFor: ['Operators and builders'],
    whoNotFor: ['Absolute beginners only'],
    outcomes: ['Ship growth loops', 'Instrument funnels'],
};

function mockCatalogueGet<T>(path: string): CatalogueEnvelope<T> {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    console.log(`[MOCK] GET ${normalized}`);

    if (normalized === '/programs/' || normalized === '/programs') {
        return ok({ items: [PROGRAM], programs: [PROGRAM] } as T);
    }
    if (normalized.startsWith('/programs/slug/')) {
        const slug = normalized.replace('/programs/slug/', '');
        if (slug === PROGRAM.slug) {
            return ok(PROGRAM as T);
        }
        return ok({ ...PROGRAM, slug, title: slug } as T);
    }
    if (normalized === '/courses/' || normalized === '/courses') {
        return ok({ items: [COURSE], courses: [COURSE] } as T);
    }
    if (normalized.startsWith('/courses/slug/')) {
        const slug = normalized.replace('/courses/slug/', '');
        if (slug === COURSE.slug) {
            return ok(COURSE as T);
        }
        return ok({ ...COURSE, slug, title: slug } as T);
    }

    console.warn(`[MOCK] unmatched catalogue path: GET ${normalized}`);
    return ok({} as T);
}

export const publicApiBase = (): string => {
    if (USE_MOCKS) {
        return (process.env.NEXT_PUBLIC_APP_API_URL || '').replace(/\/$/, '');
    }
    const base = process.env.NEXT_PUBLIC_APP_API_URL;
    if (!base) {
        throw new Error(
            'NEXT_PUBLIC_APP_API_URL is required for catalogue reads',
        );
    }
    return base.replace(/\/$/, '');
};

export const accountsLoginHref = (next?: string): string => {
    const accounts =
        process.env.NEXT_PUBLIC_ACCOUNTS_URL || 'http://localhost:5401';
    const dest =
        next ||
        process.env.NEXT_PUBLIC_LEARN_URL ||
        'http://localhost:5402';
    return `${accounts}/login?next=${encodeURIComponent(dest)}`;
};

export async function catalogueGet<T>(path: string): Promise<CatalogueEnvelope<T>> {
    if (USE_MOCKS) {
        return mockCatalogueGet<T>(path);
    }
    const url = `${publicApiBase()}${path.startsWith('/') ? path : `/${path}`}`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    const body = (await res.json()) as CatalogueEnvelope<T>;
    return body;
}

/** Test helper — same fixtures as the live mock rail. */
export function mockCatalogueCall<T>(path: string): CatalogueEnvelope<T> {
    return mockCatalogueGet<T>(path);
}

export const listPrograms = () => catalogueGet<unknown>('/programs/');
export const getProgramBySlug = (slug: string) =>
    catalogueGet<unknown>(`/programs/slug/${slug}`);
export const listCourses = () => catalogueGet<unknown>('/courses/');
export const getCourseBySlug = (slug: string) =>
    catalogueGet<unknown>(`/courses/slug/${slug}`);
