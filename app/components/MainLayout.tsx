'use client';
import Image from 'next/image';
import logoImage from './photo_2026-04-11_00-21-06.jpg';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Briefcase, FolderOpen, Download, MessageCircle, User, Bell } from 'lucide-react';

const navItems = [
    { path: '/dashboard/home', icon: Home, label: 'Home' },
    { path: '/dashboard/services', icon: Briefcase, label: 'Services' },
    { path: '/dashboard/Portfolio', icon: FolderOpen, label: 'Portfolio' },
    // { path: '/dashboard/downloads', icon: Download, label: 'Downloads' },
    { path: '/dashboard/profile', icon: User, label: 'Profile' },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/dashboard/home') {
            return pathname === '/dashboard/home';
        }
        return pathname.startsWith(path);
    };

    return (
        <div className="min-h-screen flex flex-col"
            style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #050810 100%)' }}>
            {/* Header */}
            <header className="relative z-20 px-6 py-4 flex items-center justify-between"
                style={{
                    background: 'rgba(26, 31, 58, 0.6)',
                    borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
                        style={{
                            background: 'linear-gradient(135deg, #00d4ff, #0066ff)',
                            boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                        }}>
                        <Image
                            src={logoImage}
                            alt="Codex logo"
                            width={36}
                            height={36}
                            className="rounded-full"
                        />
                    </div>
                    <h1 className="text-xl font-bold"
                        style={{
                            background: 'linear-gradient(135deg, #00d4ff, #00ffff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                        CODEX
                    </h1>
                </div>

                {/* <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push('/dashboard/notifications')}
                    className="relative w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                        background: 'rgba(26, 31, 58, 0.6)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                    }}
                >
                    <Bell className="w-5 h-5 text-[#00d4ff]" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-[#00ffff] rounded-full" />
                </motion.button> */}
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto pb-20">
                {children}
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 z-30 px-4 pb-6 pt-2"
                style={{
                    background: 'linear-gradient(to top, rgba(5, 8, 16, 0.98), rgba(10, 14, 39, 0.95))',
                    borderTop: '1px solid rgba(0, 212, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                }}>
                <div className="flex items-center justify-around max-w-md mx-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);

                        return (
                            <motion.button
                                key={item.path}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => router.push(item.path)}
                                className="relative flex flex-col items-center gap-1 py-2 px-4"
                            >
                                {active && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 rounded-2xl"
                                        style={{
                                            background: 'rgba(0, 212, 255, 0.1)',
                                            border: '1px solid rgba(0, 212, 255, 0.3)',
                                        }}
                                        transition={{ type: 'spring', duration: 0.6 }}
                                    />
                                )}

                                <div className="relative">
                                    <Icon
                                        className={`w-6 h-6 transition-colors ${active ? 'text-[#00d4ff]' : 'text-gray-400'
                                            }`}
                                        style={active ? { filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.6))' } : {}}
                                    />
                                </div>

                                <span className={`text-xs transition-colors ${active ? 'text-[#00d4ff]' : 'text-gray-500'
                                    }`}>
                                    {item.label}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>
            </nav>

        </div>
    );
}
