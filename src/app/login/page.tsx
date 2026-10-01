import { redirect } from 'next/navigation';
import { accountsLoginHref } from '@/lib/catalogue';

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ next?: string }>;
}) {
    const params = await searchParams;
    redirect(accountsLoginHref(params.next));
}
