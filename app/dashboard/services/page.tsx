"use client"; // ضروري لأننا نستخدم hooks مثل useState و Framer Motion

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // تأكد من تثبيت framer-motion
import { useRouter } from 'next/navigation'; // استخدام Next.js Router بدلاً من react-router
import {
  Smartphone, Globe, Server, ArrowRight, Check,
  Code2, Palette, Rocket, Shield, Zap, Users
} from 'lucide-react';

const services = [
{
  id: 'mobile',
  icon: Smartphone,
  title: 'Flutter Development',
  subtitle: 'Cross-Platform Mobile Apps',
  description: 'Building scalable Flutter applications using Clean Architecture, MVVM, and modern state management solutions.',
  gradient: 'from-[#00d4ff] to-[#0066ff]',
  features: [
    'Clean Architecture implementation',
    'State Management (Cubit / Bloc)',
    'API Integration (REST APIs)',
    'MVVM Architecture',
    'Responsive UI Design',
    'Local Storage & Offline Support',
  ],
  technologies: [
    'Flutter',
    'Dart',
    'Bloc / Cubit',
    'Provider',
    'Firebase',
    'REST APIs',
    'Dio / HTTP',
  ],
},
{
  id: 'web',
  icon: Globe,
  title: 'Frontend Development',
  subtitle: 'React.js & Next.js',
  description: 'Building modern, scalable, and high-performance web applications using React and Next.js with a focus on clean architecture and user experience.',
  gradient: 'from-[#00ffff] to-[#00d4ff]',
  features: [
    'Responsive & Mobile-First Design',
    'Reusable Components Architecture',
    'State Management (Redux Toolkit)',
    'API Integration (REST APIs)',
    'Performance Optimization',
    'Interactive UI & Animations',
  ],
  technologies: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Redux Toolkit',
    'Tailwind CSS',
  ],
},
{
  id: 'backend',
  icon: Server,
  title: 'Backend Development',
  subtitle: 'Node.js & Scalable APIs',
  description: 'Backend Developer (Node.js) specializing in building secure, scalable, and production-ready systems that help businesses grow efficiently.',
  gradient: 'from-[#8b5cf6] to-[#00d4ff]',
  features: [
    'RESTful API Development',
    'Authentication & Authorization (JWT)',
    'Booking Systems & Business Logic',
    'Admin Dashboards & Custom Solutions',
    'Database Design & Optimization',
    'Performance & Security Best Practices',
  ],
  technologies: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'JWT',
    'REST APIs',
  ],
},
];

const additionalServices = [
  { icon: Code2, title: 'Custom Software', description: 'Tailored solutions' },
  { icon: Palette, title: 'UI/UX Design', description: 'Beautiful interfaces' },
  { icon: Rocket, title: 'MVP Development', description: 'Fast prototyping' },
  { icon: Shield, title: 'Security Audit', description: 'Protected systems' },
  { icon: Zap, title: 'Performance', description: 'Speed optimization' },
  { icon: Users, title: 'Consultation', description: 'Expert guidance' },
];

export default function ServicesScreen() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const router = useRouter(); // استخدام hook الخاص بـ Next.js

  return (
    <div className="min-h-full pb-8 bg-[#0a0a1a]"> {/* أضفت خلفية داكنة لتناسب التصميم */}
      {/* Header */}
      <section className="px-6 pt-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2">
            <span className="bg-linear-to-r from-[#00d4ff] to-[#00ffff] bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-gray-400">
            Comprehensive solutions for all your digital needs
          </p>
        </motion.div>
      </section>

      {/* Main Services */}
      <section className="px-6 mb-8">
        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = selectedService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl"
                style={{
                  background: 'rgba(26, 31, 58, 0.4)',
                  border: `1px solid ${isExpanded ? 'rgba(0, 212, 255, 0.4)' : 'rgba(0, 212, 255, 0.2)'}`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <motion.div
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedService(isExpanded ? null : service.id)}
                  className="p-6 cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-linear-to-r ${service.gradient}`}
                      style={{ boxShadow: '0 8px 20px rgba(0, 212, 255, 0.3)' }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#00d4ff]">{service.subtitle}</p>
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-[#00d4ff]" />
                    </motion.div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-6">
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-3">Features</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#00d4ff] mt-0.5 shrink-0" />
                                <span className="text-sm text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-lg text-xs text-[#00d4ff] bg-[#00d4ff1a] border border-[#00d4ff33]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => router.push('/request')} // تغيير المسار حسب هيكلة Next.js لديك
                          className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 text-white font-semibold bg-linear-to-r ${service.gradient}`}
                        >
                          <span>Request This Service</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Additional Services */}
      <section className="px-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Additional Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-xl text-center bg-[#1a1f3a4d] border border-[#00d4ff1a]"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 bg-[#00d4ff1a]">
                  <Icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{service.title}</h4>
                <p className="text-xs text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl text-center bg-linear-to-br from-[#00d4ff1a] to-[#0066ff1a] border border-[#00d4ff4d]"
        >
          <h3 className="text-xl font-bold text-white mb-2">Need a Custom Solution?</h3>
          <p className="text-gray-400 mb-4 text-sm">Let's discuss your unique requirements</p>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/request')}
            className="px-8 py-3 rounded-xl text-white font-semibold bg-linear-to-r from-[#00d4ff] to-[#0066ff]"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}