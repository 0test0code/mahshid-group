
import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
    // read from `cookies()`, `headers()`, etc.
    // const locales = ['en','persian'];
    // if(!locales.includes(locale as any)) notFound();
  // A list of all locales that are supported
  locales: ['en', 'fa'],
 
  // Used when no locale matches
  defaultLocale: 'fa'
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);