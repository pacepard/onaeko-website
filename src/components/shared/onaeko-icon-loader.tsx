import Image from 'next/image';

import { cn } from '@/lib/utils';

export type OnaekoIconLoaderProps = {
    className?: string;
    /** Pixel width and height (square). Default 48. */
    size?: number;
    /** Announced to assistive technology. */
    label?: string;
};

export function OnaekoIconLoader({
    className,
    size = 48,
    label = 'Loading',
}: OnaekoIconLoaderProps) {
    return (
        <div
            className={cn(
                'inline-flex flex-col items-center justify-center',
                className,
            )}
            role="status"
            aria-live="polite"
        >
            <span className="animate-onaeko-loader inline-flex will-change-transform">
                <Image
                    src="/blocks/onaeko-icon.png"
                    alt=""
                    width={size}
                    height={size}
                    className="block select-none"
                    aria-hidden
                    priority
                />
            </span>
            <span className="sr-only">{label}</span>
        </div>
    );
}
