import { OnaekoIconLoader } from '@/components/shared/onaeko-icon-loader';

export default function Loading() {
    return (
        <div className="flex min-h-[50dvh] w-full items-center justify-center bg-background">
            <OnaekoIconLoader size={56} />
        </div>
    );
}
