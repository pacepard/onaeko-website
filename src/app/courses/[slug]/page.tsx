import Link from 'next/link';
import { accountsLoginHref, getCourseBySlug } from '@/lib/catalogue';

export default async function CourseDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const response = await getCourseBySlug(slug);
    const course = (response.data || {}) as {
        title?: string;
        description?: string;
        hostName?: string;
        price?: number;
        outcomes?: string[];
        whoFor?: string[];
        whoNotFor?: string[];
        faculty?: Array<{ name?: string; title?: string }>;
    };

    return (
        <main className="mx-auto max-w-3xl px-4 py-16 space-y-6">
            <Link href="/courses" className="text-sm underline">
                All courses
            </Link>
            <h1 className="text-4xl font-semibold">{course.title || slug}</h1>
            {course.description && <p>{course.description}</p>}
            {course.hostName && <p>{course.hostName}</p>}
            {typeof course.price === 'number' && (
                <p>₦{(course.price / 100).toLocaleString('en-NG')}</p>
            )}
            {Array.isArray(course.outcomes) && course.outcomes.length > 0 && (
                <ul className="list-disc pl-5">
                    {course.outcomes.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )}
            <Link
                href={accountsLoginHref(
                    `${process.env.NEXT_PUBLIC_LEARN_URL || 'http://localhost:5402'}/courses/${slug}`,
                )}
                className="inline-flex min-h-11 items-center rounded-full bg-[#f36827] px-5 text-white"
            >
                Enrol Now
            </Link>
            {Array.isArray(course.whoFor) && course.whoFor.length > 0 && (
                <section>
                    <h2 className="font-semibold mb-2">Who this course is for</h2>
                    <ul className="list-disc pl-5">
                        {course.whoFor.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            )}
            {Array.isArray(course.faculty) && course.faculty.length > 0 && (
                <section>
                    <h2 className="font-semibold mb-2">Meet Course Faculty</h2>
                    <ul className="space-y-2">
                        {course.faculty.map((person) => (
                            <li key={person.name}>
                                {person.name}
                                {person.title ? ` / ${person.title}` : ''}
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </main>
    );
}
