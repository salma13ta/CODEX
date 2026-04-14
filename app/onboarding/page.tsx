'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const slides = [
    {
        id: 1,
        type: 'splash',
        title: 'CODEX',
        subtitle: 'DIGITAL SOLUTIONS',
        icon: true,
    },
    {
        id: 2,
        type: 'service',
        title: 'Mobile Development',
        description: 'Native & cross-platform mobile apps built with cutting-edge technology for iOS and Android.',
        buttonText: 'Continue',
    },
    {
        id: 3,
        type: 'service',
        title: 'Web Development',
        description: 'Responsive, lightning-fast web applications with modern frameworks and stunning UI/UX.',
        buttonText: 'Continue',
    },
    {
        id: 4,
        type: 'service',
        title: 'Backend Systems',
        description: 'Scalable, secure backend infrastructure with cloud integration and API development.',
        buttonText: 'Get Started',
    },
];

export default function OnboardingPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(currentSlide === 0);
    const router = useRouter();

    useEffect(() => {
        if (currentSlide === 0) {
            // Auto-advance from splash screen after 3 seconds
            const timer = setTimeout(() => {
                setCurrentSlide(1);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [currentSlide]);

    const handleNext = () => {
        if (currentSlide === slides.length - 1) {
            router.push('/dashboard/home');
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handleSkip = () => {
        router.push('/dashboard/home');
    };

    return (
        <>
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes bounce-dot {
                    0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
                    50% { transform: translateY(-15px) scale(1.2); }
                }
                
                @keyframes glow-pulse {
                    0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
                    50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.8); }
                }
                
                @keyframes slide-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slide-out-down {
                    from {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                }
                
                @keyframes float-glow {
                    0%, 100% { opacity: 0.05; }
                    50% { opacity: 0.15; }
                }
                
                .dot-bounce {
                    animation: bounce-dot 1.5s ease-in-out infinite;
                }
                
                .circle-glow {
                    animation: glow-pulse 2s ease-in-out infinite;
                }
                
                .slide-enter {
                    animation: slide-in-up 0.6s ease-out forwards;
                }
                
                .slide-exit {
                    animation: slide-out-down 0.4s ease-in forwards;
                }
                
                .float-icon {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>

            <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
                {/* Animated Background Orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animation: 'float-glow 6s ease-in-out infinite' }}></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animation: 'float-glow 8s ease-in-out infinite 1s' }}></div>

                {/* Dotted Background */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dots" x="30" y="30" width="30" height="30" patternUnits="userSpaceOnUse">
                                <circle cx="15" cy="15" r="2" fill="rgba(34, 211, 238, 0.6)" />
                                <circle cx="15" cy="15" r="3" fill="rgba(34, 211, 238, 0.3)" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots)" />
                    </svg>
                </div>

                {/* Skip Button */}
                <button
                    onClick={handleSkip}
                    className="absolute top-8 right-8 px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 z-50"
                >
                    Skip
                </button>

                {/* Slides Container */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${index === currentSlide
                                    ? 'opacity-100 scale-100 pointer-events-auto'
                                    : index < currentSlide
                                        ? 'opacity-0 scale-95 pointer-events-none'
                                        : 'opacity-0 scale-105 pointer-events-none'
                                }`}
                        >
                            {slide.type === 'splash' ? (
                                <>
                                    {/* Splash Screen */}
                                    <div className="relative mb-12 slide-enter">
                                        <div className="w-40 h-40 border-2 border-cyan-400 rounded-full flex items-center justify-center circle-glow">
                                            <svg
                                                className="w-24 h-24 text-cyan-400 float-icon"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1}
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <h1 className="text-6xl font-black text-cyan-400 tracking-widest mb-2 slide-enter" style={{ animationDelay: '0.1s' }}>
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl text-cyan-300 tracking-[0.3em] slide-enter" style={{ animationDelay: '0.2s' }}>
                                        {slide.subtitle}
                                    </p>

                                    {/* Animated Dots */}
                                    <div className="mt-20 flex gap-4" style={{ animationDelay: '0.3s' }}>
                                        {[0, 1, 2].map((dot, i) => (
                                            <div
                                                key={i}
                                                className="w-3 h-3 bg-cyan-400 rounded-full dot-bounce"
                                                style={{
                                                    animationDelay: `${i * 0.3}s`,
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Service Screen */}
                                    <div className="relative mb-12 slide-enter">
                                        <div className="w-52 h-52 border-2 border-cyan-400 border-opacity-40 rounded-full circle-glow"></div>
                                    </div>

                                    <h2 className="text-5xl font-bold text-white mb-8 text-center slide-enter" style={{ animationDelay: '0.1s' }}>
                                        {slide.title}
                                    </h2>
                                    <p className="text-xl text-gray-300 text-center max-w-2xl px-8 leading-relaxed slide-enter" style={{ animationDelay: '0.2s' }}>
                                        {slide.description}
                                    </p>

                                    {/* Progress Dots */}
                                    <div className="mt-20 flex gap-3 mb-12 slide-enter" style={{ animationDelay: '0.3s' }}>
                                        {[0, 1, 2].map((dot, i) => (
                                            <div
                                                key={i}
                                                className={`h-1 rounded-full transition-all duration-500 ${i < currentSlide - 1
                                                        ? 'w-8 bg-cyan-400'
                                                        : i === currentSlide - 1
                                                            ? 'w-8 bg-cyan-400 animate-pulse'
                                                            : 'w-3 bg-gray-600'
                                                    }`}
                                            ></div>
                                        ))}
                                    </div>

                                    {/* Continue Button */}
                                    <button
                                        onClick={handleNext}
                                        className="px-12 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-lg rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 slide-enter"
                                        style={{ animationDelay: '0.4s' }}
                                    >
                                        {slide.buttonText}
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
