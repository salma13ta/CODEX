"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Upload, Check, ChevronRight, Smartphone, Globe, 
  Server, ArrowLeft, FileText, X 
} from 'lucide-react';

const projectTypes = [
  { id: 'mobile', icon: Smartphone, label: 'Mobile App', gradient: 'from-[#00d4ff] to-[#0066ff]' },
  { id: 'web', icon: Globe, label: 'Web App', gradient: 'from-[#00ffff] to-[#00d4ff]' },
  { id: 'backend', icon: Server, label: 'Backend System', gradient: 'from-[#8b5cf6] to-[#00d4ff]' },
];

export default function RequestProjectScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    file: null as File | null,
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      {/* Header & Progress */}
      <section className="px-6 pt-10 pb-4 sticky top-0 bg-[#0a0e27]/90 backdrop-blur-md z-40">
        <div className="flex items-center gap-4 mb-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => currentStep === 1 ? router.back() : prevStep()}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          
          <div className="flex-1">
            <h1 className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent uppercase tracking-tighter">
              {currentStep <= 3 ? 'Project Request' : 'Success'}
            </h1>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              {currentStep <= 3 ? `Step 0${currentStep} / 03` : 'Reviewing Process'}
            </p>
          </div>
        </div>

        {currentStep <= 3 && (
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        )}
      </section>

      <div className="max-w-md mx-auto">
        <AnimatePresence mode="wait">
          {/* Step 1: Info */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-6 py-8 space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-black italic">Who are you?</h2>
                <p className="text-gray-500 text-sm font-medium">Help us reach out to you properly.</p>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Full Name', key: 'name', type: 'text', placeholder: 'e.g. Ahmed Ali' },
                  { label: 'Work Email', key: 'email', type: 'email', placeholder: 'name@company.com' },
                  { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+966 50 000 0000' }
                ].map((input) => (
                  <div key={input.key} className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">{input.label}</label>
                    <input
                      type={input.type}
                      value={(formData as any)[input.key]}
                      onChange={(e) => setFormData({ ...formData, [input.key]: e.target.value })}
                      placeholder={input.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-cyan-500/50 outline-none transition-all"
                    />
                  </div>
                ))}
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={nextStep}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="w-full py-5 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/20 disabled:opacity-30"
              >
                Continue to Type
              </motion.button>
            </motion.div>
          )}

          {/* Step 2: Project Type */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-6 py-8 space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-black italic">Select Category</h2>
                <p className="text-gray-500 text-sm font-medium">What type of solution do you need?</p>
              </div>

              <div className="grid gap-4">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = formData.projectType === type.id;
                  return (
                    <motion.div
                      key={type.id}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setFormData({ ...formData, projectType: type.id })}
                      className={`p-5 rounded-3xl border-2 cursor-pointer flex items-center gap-5 transition-all
                        ${isSelected ? 'bg-cyan-500/10 border-cyan-500 shadow-lg' : 'bg-white/5 border-white/5'}`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${type.gradient}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`font-black text-sm uppercase tracking-tighter ${isSelected ? 'text-cyan-400' : 'text-white'}`}>
                        {type.label}
                      </span>
                      {isSelected && <Check className="ml-auto w-5 h-5 text-cyan-400" />}
                    </motion.div>
                  );
                })}
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={nextStep}
                disabled={!formData.projectType}
                className="w-full py-5 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 font-black text-xs uppercase tracking-widest disabled:opacity-30"
              >
                Continue to Details
              </motion.button>
            </motion.div>
          )}

          {/* Step 3: Description */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-6 py-8 space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-black italic">Project Vision</h2>
                <p className="text-gray-500 text-sm font-medium">Explain your ideas and requirements.</p>
              </div>

              <div className="space-y-4">
                <textarea
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe main features, target audience..."
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 text-sm focus:border-cyan-500/50 outline-none transition-all resize-none"
                />

                <div className="relative">
                  <input type="file" id="file" className="hidden" onChange={handleFileChange} />
                  <label 
                    htmlFor="file"
                    className="flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-dashed border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                  >
                    <Upload className="w-8 h-8 text-cyan-500 mb-2" />
                    <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">
                      {formData.file ? formData.file.name : 'Attach Reference / Mockups'}
                    </span>
                  </label>
                  {formData.file && (
                    <button 
                      onClick={() => setFormData({...formData, file: null})}
                      className="absolute top-2 right-2 p-1 bg-red-500/20 rounded-full text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={nextStep}
                disabled={!formData.description}
                className="w-full py-5 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 font-black text-xs uppercase tracking-widest shadow-2xl shadow-cyan-500/40"
              >
                Submit Project Request
              </motion.button>
            </motion.div>
          )}

          {/* Success Step */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-20 flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: 'spring', damping: 12 }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-8 shadow-2xl shadow-cyan-500/40"
              >
                <Check className="w-12 h-12 text-white stroke-[3px]" />
              </motion.div>

              <h2 className="text-3xl font-black italic mb-4">Request Sent!</h2>
              <p className="text-gray-500 text-sm font-medium max-w-[250px] leading-relaxed mb-10">
                Our architects are reviewing your vision. Expect a call within <span className="text-white">24 hours</span>.
              </p>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/app')}
                className="px-10 py-5 rounded-3xl bg-white text-[#0a0e27] font-black text-xs uppercase tracking-widest shadow-xl"
              >
                Back to Dashboard
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}