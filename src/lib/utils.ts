import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Same helper as `@onaeko/ui` `cn` — local so Next RSC does not load the UI barrel. */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
