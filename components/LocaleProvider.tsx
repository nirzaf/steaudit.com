'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type Locale = 'en' | 'ar';

type LocaleContextValue = {
    locale: Locale;
    isRTL: boolean;
    toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>(() => {
        if (typeof window === 'undefined') return 'en';
        const stored = window.localStorage.getItem('site-locale') as Locale | null;
        return stored === 'ar' ? 'ar' : 'en';
    });

    useEffect(() => {
        if (typeof document === 'undefined') return;
        document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = locale === 'ar' ? 'ar-QA' : 'en';
        document.body.classList.toggle('rtl', locale === 'ar');
        window.localStorage.setItem('site-locale', locale);
    }, [locale]);

    const value = useMemo(
        () => ({
            locale,
            isRTL: locale === 'ar',
            toggleLocale: () => setLocale((prev) => (prev === 'en' ? 'ar' : 'en')),
        }),
        [locale],
    );

    return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
    const ctx = useContext(LocaleContext);
    if (!ctx) {
        throw new Error('useLocale must be used within LocaleProvider');
    }
    return ctx;
}
