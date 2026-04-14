'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Smartphone, Globe, Server, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const services = [
    {
        icon: Smartphone,
        title: 'Mobile Apps',
        description: 'Native iOS & Android',
        gradient: 'from-[#00d4ff] to-[#0066ff]',
    },
    {
        icon: Globe,
        title: 'Web Development',
        description: 'Modern & Responsive',
        gradient: 'from-[#00ffff] to-[#00d4ff]',
    },
    {
        icon: Server,
        title: 'Backend',
        description: 'Scalable Infrastructure',
        gradient: 'from-[#8b5cf6] to-[#00d4ff]',
    },
];

const features = [
    { icon: Sparkles, text: 'AI-Powered Solutions' },
    { icon: Zap, text: 'Lightning Fast Delivery' },
    { icon: Shield, text: 'Enterprise Security' },
];

const stats = [
    { value: '500+', label: 'Projects' },
    { value: '98%', label: 'Success Rate' },
    { value: '24/7', label: 'Support' },
];

export default function HomePage() {
    const router = useRouter();

    return (
        <>
            <style>{`
                @keyframes float-glow {
                    0%, 100% { opacity: 0.05; }
                    50% { opacity: 0.15; }
                }
            `}</style>

            <div className="min-h-screen pb-8 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative">
                {/* Animated Background Orbs */}
                <div className="fixed top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full opacity-5 blur-3xl" style={{ animation: 'float-glow 6s ease-in-out infinite' }}></div>
                <div className="fixed bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl" style={{ animation: 'float-glow 8s ease-in-out infinite 1s' }}></div>

                {/* Dotted Background */}
                <div className="fixed inset-0 opacity-10 pointer-events-none">
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

                {/* Content */}
                <div className="relative z-10">
                    <div className="min-h-full pb-8">
                        {/* Hero Section */}
                        <section className="relative px-6 pt-8 pb-12 overflow-hidden">
                            {/* Animated Glow */}
                            <motion.div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-30"
                                style={{ background: 'linear-gradient(135deg, #00d4ff, #0066ff)' }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >

                                    <h1 className="text-4xl font-bold mb-4 leading-tight text-white">
                                        We Build  {' '}
                                        <span style={{
                                            background: 'linear-gradient(135deg, #00d4ff, #00ffff)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}>
                                            Digital Solutions
                                        </span>
                                    </h1>

                                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                        Transform your ideas into powerful applications with cutting-edge technology and stunning design.
                                    </p>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => router.push('/dashboard/requestProject')}
                                        className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 relative overflow-hidden group"
                                        style={{
                                            background: 'linear-gradient(135deg, #00d4ff, #0066ff)',
                                            boxShadow: '0 10px 40px rgba(0, 212, 255, 0.3)',
                                        }}
                                    >
                                        <span className="font-semibold text-white text-lg">Start Project</span>
                                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </motion.div>
                            </div>
                        </section>

                        {/* Stats Section */}
                        <section className="px-6 mb-8">
                            <div className="grid grid-cols-3 gap-4">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="text-center p-4 rounded-2xl"
                                        style={{
                                            background: 'rgba(26, 31, 58, 0.4)',
                                            border: '1px solid rgba(0, 212, 255, 0.2)',
                                            backdropFilter: 'blur(10px)',
                                        }}
                                    >
                                        <div className="text-2xl font-bold mb-1"
                                            style={{
                                                background: 'linear-gradient(135deg, #00d4ff, #00ffff)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}>
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-gray-400">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Services Section */}
                        <section className="px-6 mb-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-white">Our Services</h2>
                                <button
                                    onClick={() => router.push('/dashboard/services')}
                                    className="text-[#00d4ff] text-sm flex items-center gap-1"
                                >
                                    View All <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {services.map((service, index) => {
                                    const Icon = service.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => router.push('/dashboard/services')}
                                            className="relative p-6 rounded-2xl cursor-pointer group overflow-hidden"
                                            style={{
                                                background: 'rgba(26, 31, 58, 0.4)',
                                                border: '1px solid rgba(0, 212, 255, 0.2)',
                                                backdropFilter: 'blur(10px)',
                                            }}
                                        >
                                            {/* Hover Glow */}
                                            <motion.div
                                                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                                            />

                                            <div className="relative flex items-center gap-4">
                                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r ${service.gradient}`}
                                                    style={{ boxShadow: '0 8px 20px rgba(0, 212, 255, 0.3)' }}>
                                                    <Icon className="w-7 h-7 text-white" />
                                                </div>

                                                <div className="flex-1">
                                                    <h3 className="text-lg font-semibold text-white mb-1">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-400">{service.description}</p>
                                                </div>

                                                <ArrowRight className="w-5 h-5 text-[#00d4ff] group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </section >

                        {/* Features Section */}
                        < section className="px-6 mb-8" >
                            <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us</h2>

                            <div className="space-y-3">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-4 p-4 rounded-xl"
                                            style={{
                                                background: 'rgba(26, 31, 58, 0.3)',
                                                border: '1px solid rgba(0, 212, 255, 0.1)',
                                            }}
                                        >
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                                                style={{ background: 'rgba(0, 212, 255, 0.1)' }}>
                                                <Icon className="w-5 h-5 text-[#00d4ff]" />
                                            </div>
                                            <span className="text-gray-300">{feature.text}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </section >

                        {/* CTA Section */}
                        < section className="px-6" >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="relative p-6 rounded-2xl overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 102, 255, 0.1))',
                                    border: '1px solid rgba(0, 212, 255, 0.3)',
                                }}
                            >
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Ready to start your project?
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    Let's discuss your ideas and bring them to life
                                </p>
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => router.push('/dashboard/chat')}
                                    className="px-6 py-3 rounded-xl text-white font-semibold"
                                    style={{ background: 'linear-gradient(135deg, #00d4ff, #0066ff)' }}
                                >
                                    Contact Us
                                </motion.button>
                            </motion.div>
                        </section >
                    </div >
                </div>
            </div>
        </>
    );
}
