import Link from 'next/link';
import { listCourses } from '@/lib/catalogue';

export default async function CoursesPage() {
    const response = await listCourses();
    const rows = Array.isArray(response.data)
        ? response.data
        : ((response.data as { items?: unknown[] } | null)?.items ?? []);

    return (
        <main className="mx-auto max-w-5xl px-4 py-16">
            <h1 className="text-4xl font-semibold mb-8">Courses</h1>
            {response.error && (
                <p className="text-red-700">{response.message}</p>
            )}
            {rows.length === 0 && !response.error && (
                <p>No published courses yet.</p>
            )}
            <ul className="grid gap-4 md:grid-cols-2">
                {rows.map((row: { slug?: string; title?: string }) => (
                    <li key={row.slug}>
                        <Link
                            href={`/courses/${row.slug}`}
                            className="block rounded-2xl border p-4 min-h-11"
                        >
                            {row.title || row.slug}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
