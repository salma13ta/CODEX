'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/context/LanguageContext';

export default function OnboardingPage() {
    const router = useRouter();
    const { t } = useLanguage();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown(prev => (prev <= 1 ? 0 : prev - 1));
        }, 1000);

        const timer = setTimeout(() => {
            localStorage.setItem('onboarded', 'true');
            router.replace('/dashboard/home');
        }, 5000);

        return () => {
            clearTimeout(timer);
            clearInterval(countdownInterval);
        };
    }, [router]);

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
            <div className="absolute top-0 end-0 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500 rounded-full opacity-[0.08] blur-3xl motion-safe:animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 start-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500 rounded-full opacity-[0.06] blur-3xl motion-safe:animate-pulse pointer-events-none" />

            <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="onboarding-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                            <circle cx="16" cy="16" r="1.5" fill="rgba(34, 211, 238, 0.5)" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#onboarding-dots)" />
                </svg>
            </div>

            <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
                <div className="flex flex-col items-center justify-center text-center max-w-xl">
                    <div className="relative mb-8 sm:mb-12 flex items-center justify-center">
                        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border-4 border-t-cyan-400 border-r-transparent border-b-blue-500 border-l-transparent motion-safe:animate-spin [animation-duration:1.5s]" />
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-cyan-400 rounded-full motion-safe:animate-pulse opacity-80" />
                        </div>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-cyan-400 tracking-wide sm:tracking-widest mb-3 sm:mb-4">
                        {t('onboarding.title')}
                    </h1>
                    <p className="text-xs sm:text-base md:text-lg text-cyan-300/90 tracking-wide sm:tracking-[0.15em] leading-relaxed px-2">
                        {t('onboarding.subtitle')}
                    </p>
                    <p className="text-sm sm:text-lg text-cyan-400 mt-6 sm:mt-8 font-bold">
                        {t('onboarding.redirect').replace('{n}', String(countdown))}
                    </p>
                </div>
            </div>
        </div>
    );
}
