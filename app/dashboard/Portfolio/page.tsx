"use client"; // ضروري لاستخدام useState و AnimatePresence

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Download, X, Smartphone, Globe, Server } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FinTech Mobile App',
    category: 'Mobile',
    icon: Smartphone,
    description: 'A comprehensive mobile banking solution with real-time transactions and AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    technologies: ['React Native', 'Node.js', 'PostgreSQL'],
    stats: { users: '50K+', rating: '4.8', downloads: '100K+' },
    gradient: 'from-[#00d4ff] to-[#0066ff]',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web',
    icon: Globe,
    description: 'Modern e-commerce platform with AI recommendations and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    technologies: ['Next.js', 'Stripe', 'MongoDB'],
    stats: { users: '30K+', rating: '4.9', orders: '250K+' },
    gradient: 'from-[#00ffff] to-[#00d4ff]',
  },
  {
    id: 3,
    title: 'Healthcare Portal',
    category: 'Web',
    icon: Globe,
    description: 'Patient management system with telemedicine capabilities and secure data storage.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    technologies: ['React', 'GraphQL', 'AWS'],
    stats: { users: '20K+', rating: '4.7', hospitals: '150+' },
    gradient: 'from-[#00ffff] to-[#00d4ff]',
  },
  {
    id: 4,
    title: 'Cloud Infrastructure',
    category: 'Backend',
    icon: Server,
    description: 'Scalable microservices architecture handling millions of requests per day.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    technologies: ['Kubernetes', 'Docker', 'Redis'],
    stats: { uptime: '99.9%', requests: '5M/day', latency: '<50ms' },
    gradient: 'from-[#8b5cf6] to-[#00d4ff]',
  },
  {
    id: 5,
    title: 'Fitness Tracker App',
    category: 'Mobile',
    icon: Smartphone,
    description: 'AI-powered fitness companion with personalized workout plans and nutrition tracking.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    technologies: ['Flutter', 'Firebase', 'TensorFlow'],
    stats: { users: '75K+', rating: '4.9', workouts: '1M+' },
    gradient: 'from-[#00d4ff] to-[#0066ff]',
  },
  {
    id: 6,
    title: 'Social Network API',
    category: 'Backend',
    icon: Server,
    description: 'High-performance API serving a social platform with real-time messaging.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    technologies: ['Node.js', 'WebSocket', 'PostgreSQL'],
    stats: { uptime: '99.95%', users: '100K+', messages: '10M/day' },
    gradient: 'from-[#8b5cf6] to-[#00d4ff]',
  },
];

const categories = ['All', 'Mobile', 'Web', 'Backend'];

export default function PortfolioScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a0e27] pb-8 text-white">
      {/* Header */}
      <section className="px-6 pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight">
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#00ffff] bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Showcasing our finest digital creations
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-8">
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full whitespace-nowrap border transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#00d4ff] to-[#0066ff] border-transparent text-white shadow-lg shadow-blue-500/20'
                  : 'bg-[#1a1f3a]/60 border-blue-400/20 text-gray-400 hover:border-blue-400/40'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                  className="relative overflow-hidden rounded-2xl cursor-pointer bg-[#1a1f3a]/40 border border-blue-400/20 group backdrop-blur-md"
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 border border-blue-400/30 backdrop-blur-xl text-[#00d4ff]">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-r ${project.gradient} shadow-lg shadow-blue-500/20 flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">{project.title}</h3>
                        <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{project.description}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0a0e27] border border-blue-400/30 shadow-2xl pointer-events-auto no-scrollbar"
              >
                {/* Header/Image */}
                <div className="relative h-72">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent" />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">{selectedProject.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="p-4 rounded-2xl bg-blue-500/5 border border-blue-400/10 text-center">
                        <div className="text-xl font-bold text-[#00d4ff]">{value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-400/20 text-[#00d4ff] font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <button className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-[#00d4ff] to-[#0066ff] text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                      <ExternalLink size={20} />
                      Live Preview
                    </button>
                    <button className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-[#00d4ff] hover:bg-white/10 transition-colors">
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}