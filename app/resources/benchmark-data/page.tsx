"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Activity, 
  ArrowRight, 
  Calculator, 
  Clock, 
  Users, 
  DollarSign,
  CheckCircle2,
  Download,
  Zap,
  Target,
  Smartphone
} from "lucide-react";

// Animated Number Component
function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1,
      onUpdate: (latest) => setDisplayValue(latest),
      ease: "easeOut"
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span>{prefix}{Math.floor(displayValue).toLocaleString()}{suffix}</span>
  );
}

export default function BenchmarkDataPage() {
  // ROI Calculator State
  const [callVolume, setCallVolume] = useState(500);
  const [avgCallDuration, setAvgCallDuration] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(25);
  
  // Calculations
  const monthlyHours = (callVolume * avgCallDuration) / 60;
  const currentCost = monthlyHours * hourlyRate;
  const aiCost = 299 + (monthlyHours * 60 * 0.12); // Base + usage estimate
  const monthlySavings = currentCost - aiCost;
  const annualSavings = monthlySavings * 12;
  const hoursSaved = monthlyHours;

  // Metallic style
  const metallicStyle = {
    background: 'linear-gradient(135deg, #e8e8e8 0%, #f8f8f8 20%, #c0c0c0 40%, #e8e8e8 60%, #f5f5f5 80%, #d8d8d8 100%)',
    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,255,255,0.7)'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-gray-200">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-gray-200 opacity-20 blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Metallic Badge */}
            <motion.div
              variants={itemVariants}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 cursor-default"
              style={metallicStyle}
            >
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <motion.span 
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent skew-x-12"
                />
              </span>
              <TrendingUp className="relative w-4 h-4 text-gray-600" />
              <span className="relative text-sm font-semibold text-gray-700 tracking-wide">Data & Insights</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900"
            >
              Benchmark Data
              <span className="relative ml-4 inline-block">
                <span className="bg-linear-to-r from-gray-900 via-gray-500 to-gray-900 bg-clip-text text-transparent bg-300% animate-gradient">
                  & ROI
                </span>
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -bottom-2 left-0 right-0 h-1.5 bg-linear-to-r from-transparent via-gray-300 to-transparent origin-left rounded-full"
                />
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Quantify the impact of AI automation. Compare industry benchmarks, calculate your potential savings, 
              and understand the performance metrics that drive growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Metrics */}
      <section className="py-12 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { 
                label: "Response Time", 
                value: "< 30s", 
                sub: "vs 4h industry avg", 
                icon: Clock,
                gradient: "from-gray-100 to-white"
              },
              { 
                label: "Lead Conversion", 
                value: "+45%", 
                sub: "Instant engagement lift", 
                icon: Activity,
                gradient: "from-gray-50 to-white"
              },
              { 
                label: "Cost Reduction", 
                value: "60%", 
                sub: "Operational savings", 
                icon: DollarSign,
                gradient: "from-gray-100 to-gray-50"
              },
            ].map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative p-8 rounded-[2rem] border border-gray-100 overflow-hidden group"
                style={{
                  background: `linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)`,
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)'
                }}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <metric.icon className="w-32 h-32 text-black transform rotate-12 translate-x-8 -translate-y-8" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="w-7 h-7 text-gray-900" />
                  </div>
                  <h3 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">{metric.value}</h3>
                  <p className="text-lg font-semibold text-gray-700 mb-1">{metric.label}</p>
                  <p className="text-sm text-gray-500 font-medium">{metric.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advanced ROI Calculator */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50/50" />
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Calculator Interface */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-white/50 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-black rounded-2xl shadow-lg shadow-black/20">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">ROI Calculator</h2>
                  <p className="text-gray-500 text-sm">Adjust parameters to estimate savings</p>
                </div>
              </div>

              <div className="space-y-10">
                {[
                  { 
                    label: "Monthly Call Volume", 
                    value: callVolume, 
                    setValue: setCallVolume, 
                    min: 100, 
                    max: 5000, 
                    step: 50,
                    unit: "calls"
                  },
                  { 
                    label: "Avg. Call Duration", 
                    value: avgCallDuration, 
                    setValue: setAvgCallDuration, 
                    min: 1, 
                    max: 15, 
                    step: 1,
                    unit: "mins"
                  },
                  { 
                    label: "Staff Hourly Rate", 
                    value: hourlyRate, 
                    setValue: setHourlyRate, 
                    min: 12, 
                    max: 50, 
                    step: 1,
                    unit: "£/hr"
                  }
                ].map((input, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between mb-4">
                      <label className="text-sm font-semibold text-gray-700">{input.label}</label>
                      <span className="text-sm font-bold text-black bg-gray-100 px-3 py-1 rounded-full">
                        {input.unit === "£/hr" ? `£${input.value}/hr` : `${input.value} ${input.unit}`}
                      </span>
                    </div>
                    <div className="relative h-6 flex items-center">
                      <input 
                        type="range" 
                        min={input.min} 
                        max={input.max} 
                        step={input.step}
                        value={input.value}
                        onChange={(e) => input.setValue(parseInt(e.target.value))}
                        className="absolute w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-black z-20 opacity-0"
                      />
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden relative z-10">
                        <motion.div 
                          className="h-full bg-black rounded-full"
                          style={{ width: `${((input.value - input.min) / (input.max - input.min)) * 100}%` }}
                          layoutId={`slider-fill-${i}`}
                        />
                      </div>
                      <motion.div 
                        className="absolute h-6 w-6 bg-white border-2 border-black rounded-full shadow-md z-10 pointer-events-none"
                        style={{ left: `${((input.value - input.min) / (input.max - input.min)) * 100}%`, x: '-50%' }}
                        layoutId={`slider-thumb-${i}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Results Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-black text-white p-8 rounded-[2.5rem] shadow-2xl shadow-black/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <h3 className="text-lg font-medium text-gray-400 mb-2">Projected Annual Savings</h3>
                <div className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight">
                  <AnimatedNumber value={annualSavings} prefix="£" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-300" />
                      <span className="text-sm font-medium text-gray-200">Hours Saved</span>
                    </div>
                    <span className="text-xl font-bold"><AnimatedNumber value={hoursSaved * 12} suffix=" hrs" /></span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-gray-300" />
                      <span className="text-sm font-medium text-gray-200">Efficiency Gain</span>
                    </div>
                    <span className="text-xl font-bold text-green-400">+340%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-6">Strategic Impact</h4>
                <ul className="space-y-4">
                  {[
                    "Reinvest savings into growth marketing",
                    "Free up staff for high-value tasks",
                    "Scale operations without hiring"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 p-1 rounded-full bg-green-100">
                        <CheckCircle2 className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <Link href="/#contact-form" className="block mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-2xl bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    Get Detailed Analysis
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Benchmarks */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Benchmarks</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              See how AI automation performs compared to traditional manual processes across key sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Chart 1: Response Time */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Lead Response Time</h3>
                  <p className="text-sm text-gray-500 mt-1">Time to first contact</p>
                </div>
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  <BarChart3 className="w-6 h-6 text-gray-900" />
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="font-semibold text-gray-600">Manual Process</span>
                    <span className="text-gray-500">4 hours</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gray-400 rounded-full" 
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="font-bold text-gray-900">AI Automation</span>
                    <span className="text-black font-bold">30 seconds</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "2%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-black rounded-full relative" 
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chart 2: Cost Per Lead */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Cost Per Interaction</h3>
                  <p className="text-sm text-gray-500 mt-1">Operational cost comparison</p>
                </div>
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  <PieChart className="w-6 h-6 text-gray-900" />
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="font-semibold text-gray-600">Human Agent</span>
                    <span className="text-gray-500">£2.50 avg</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gray-400 rounded-full" 
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="font-bold text-gray-900">AI Agent</span>
                    <span className="text-black font-bold">£0.20 avg</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "8%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-black rounded-full relative" 
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Report CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-12 md:p-16 shadow-2xl shadow-gray-200/50 border border-white/50 backdrop-blur-xl"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gray-50 mb-8 shadow-inner">
              <Download className="w-10 h-10 text-gray-900" />
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Download the 2025 Report
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
              Get our comprehensive 40-page analysis on the state of AI automation in UK businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-black text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Download PDF
                <Download className="w-4 h-4" />
              </motion.button>
              <Link href="/resources">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-full bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-all duration-300"
                >
                  Back to Resources
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
