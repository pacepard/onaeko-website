import Link from 'next/link';
import { accountsLoginHref, getProgramBySlug } from '@/lib/catalogue';

export default async function ProgramDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const response = await getProgramBySlug(slug);
    const program = (response.data || {}) as {
        title?: string;
        description?: string;
        hostName?: string;
        partnerName?: string;
        outcomes?: string[];
        whoFor?: string[];
        whoNotFor?: string[];
        faculty?: Array<{ name?: string; title?: string }>;
    };

    return (
        <main className="mx-auto max-w-3xl px-4 py-16 space-y-6">
            <Link href="/programs" className="text-sm underline">
                All programs
            </Link>
            <h1 className="text-4xl font-semibold">
                {program.title || slug}
            </h1>
            {program.description && <p>{program.description}</p>}
            {program.hostName && <p>{program.hostName}</p>}
            {program.partnerName && <p>{program.partnerName}</p>}
            {Array.isArray(program.outcomes) && program.outcomes.length > 0 && (
                <section>
                    <h2 className="font-semibold mb-2">Course outcomes</h2>
                    <ul className="list-disc pl-5">
                        {program.outcomes.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            )}
            <Link
                href={accountsLoginHref(
                    `${process.env.NEXT_PUBLIC_LEARN_URL || 'http://localhost:5402'}/programs/${slug}`,
                )}
                className="inline-flex min-h-11 items-center rounded-full bg-[#f36827] px-5 text-white"
            >
                Enrol this course free
            </Link>
            {Array.isArray(program.whoFor) && program.whoFor.length > 0 && (
                <section>
                    <h2 className="font-semibold mb-2">Who this course is for</h2>
                    <ul className="list-disc pl-5">
                        {program.whoFor.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            )}
            {Array.isArray(program.whoNotFor) && program.whoNotFor.length > 0 && (
                <section>
                    <h2 className="font-semibold mb-2">Who this course is not for</h2>
                    <ul className="list-disc pl-5">
                        {program.whoNotFor.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            )}
            {Array.isArray(program.faculty) && program.faculty.length > 0 && (
                <section>
                    <h2 className="font-semibold mb-2">Meet Course Faculty</h2>
                    <ul className="space-y-2">
                        {program.faculty.map((person) => (
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
