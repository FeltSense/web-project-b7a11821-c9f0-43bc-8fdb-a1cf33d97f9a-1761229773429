'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out" id="navbar">
  <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg shadow-purple-500/20 transition-all duration-500" id="nav-container">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between transition-all duration-500 py-6" id="nav-content">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            Nexus <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Labs</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            Home
          </a>
          <a href="#services" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            Services
          </a>
          <a href="#about" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            About
          </a>
          <a href="#pricing" className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
            Pricing
          </a>
          <a href="#contact" className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg text-gray-200 hover:bg-white/10 transition-colors duration-300"
          onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div id="mobile-menu" className="hidden md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20">
      <div className="px-4 py-4 space-y-2">
        <a href="#home" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          Home
        </a>
        <a href="#services" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          Services
        </a>
        <a href="#about" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          About
        </a>
        <a href="#pricing" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
          Pricing
        </a>
        <a href="#contact" className="block px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
          Contact
        </a>
      </div>
    </div>
  </div>

  <script dangerouslySetInnerHTML={{__html: `
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      const navContent = document.getElementById('nav-content');
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        navContent.classList.remove('py-6');
        navContent.classList.add('py-3');
      } else {
        navContent.classList.remove('py-3');
        navContent.classList.add('py-6');
      }
      
      lastScroll = currentScroll;
    });
  `}} />
</nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
  {/* Animated Gradient Orbs */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute -bottom-1/4 left-1/3 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>

  {/* Floating Grid Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

  {/* Floating Text Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-[10%] text-purple-400/10 font-mono text-sm animate-float">
      neural_networks.train()
    </div>
    <div className="absolute top-40 right-[15%] text-violet-400/10 font-mono text-sm animate-float delay-300">
      &lt;AI_Model /&gt;
    </div>
    <div className="absolute bottom-32 left-[20%] text-fuchsia-400/10 font-mono text-sm animate-float delay-700">
      predictive_analytics()
    </div>
    <div className="absolute top-1/2 right-[8%] text-purple-400/10 font-mono text-sm animate-float delay-500">
      machine_learning.optimize()
    </div>
    <div className="absolute bottom-48 right-[25%] text-violet-400/10 font-mono text-sm animate-float delay-200">
      data.transform()
    </div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
    <div className="max-w-5xl mx-auto text-center space-y-8">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm animate-fade-in">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <span className="text-purple-300 text-sm font-medium">Enterprise AI Solutions</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in-up">
        <span className="block text-white mb-2">Nexus AI Labs</span>
        <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Intelligence Amplified
        </span>
      </h1>

      {/* Description */}
      <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
        Transform your marketing strategy with cutting-edge AI models that predict customer behavior, optimize campaigns in real-time, and deliver unprecedented ROI.
      </p>

      {/* Stats Bar */}
      <div className="flex flex-wrap justify-center gap-8 py-6 animate-fade-in-up delay-300">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-purple-400">340%</div>
          <div className="text-sm text-slate-400 mt-1">Avg. ROI Increase</div>
        </div>
        <div className="w-px h-12 bg-purple-500/20"></div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-violet-400">2.8M+</div>
          <div className="text-sm text-slate-400 mt-1">Predictions Daily</div>
        </div>
        <div className="w-px h-12 bg-purple-500/20"></div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-fuchsia-400">98.7%</div>
          <div className="text-sm text-slate-400 mt-1">Accuracy Rate</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up delay-400">
        <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40">
          <span className="flex items-center gap-2">
            Schedule AI Audit
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50">
          View Case Studies
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="pt-12 animate-fade-in-up delay-500">
        <p className="text-slate-500 text-sm mb-6">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
          <div className="text-slate-400 font-semibold text-lg">FORTUNE 500</div>
          <div className="text-slate-400 font-semibold text-lg">ENTERPRISE</div>
          <div className="text-slate-400 font-semibold text-lg">GLOBAL BRANDS</div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(-10px) translateX(-10px); }
      75% { transform: translateY(-30px) translateX(5px); }
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-float {
      animation: float 8s ease-in-out infinite;
    }
    .animate-fade-in {
      animation: fade-in 1s ease-out forwards;
    }
    .animate-fade-in-up {
      animation: fade-in-up 1s ease-out forwards;
    }
    .delay-200 { animation-delay: 200ms; }
    .delay-300 { animation-delay: 300ms; }
    .delay-400 { animation-delay: 400ms; }
    .delay-500 { animation-delay: 500ms; }
    .delay-700 { animation-delay: 700ms; }
    .delay-1000 { animation-delay: 1000ms; }
  `}</style>
</div>
      
      {/* Services Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 px-6 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
        <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">AI-Powered Marketing Solutions</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Transform Your Marketing with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Nexus AI Labs</span>
      </h2>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto">
        End-to-end AI development from strategy to deployment, trusted by Fortune 500 companies and innovative startups
      </p>
    </div>

    {/* Hover Reveal Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {/* Card 1 - Predictive Analytics */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 flex flex-col items-center justify-center">
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Predictive Customer Analytics</h3>
            <p className="text-slate-400 text-center">AI-powered insights for customer behavior</p>
            <div className="mt-6 text-blue-400 text-sm font-semibold flex items-center gap-2">
              <span>Hover to reveal details</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Predictive Customer Analytics</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>ML models predicting customer lifetime value and churn probability</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Real-time behavioral segmentation with clear ROI metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom solutions by expert AI researchers and data scientists</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm text-white/80">Nexus AI Labs • Ongoing optimization & support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 - Content Generation */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 flex flex-col items-center justify-center">
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">AI Content Generation</h3>
            <p className="text-slate-400 text-center">Scalable, brand-aligned content creation</p>
            <div className="mt-6 text-purple-400 text-sm font-semibold flex items-center gap-2">
              <span>Hover to reveal details</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Content Generation</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom LLM fine-tuning for brand voice consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Multi-channel content optimization (email, social, web)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ethical AI practices with compliance-first approach</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm text-white/80">Nexus AI Labs • Trusted by Fortune 500 companies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 - Campaign Optimization */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 flex flex-col items-center justify-center">
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Campaign Optimization AI</h3>
            <p className="text-slate-400 text-center">Real-time performance enhancement</p>
            <div className="mt-6 text-emerald-400 text-sm font-semibold flex items-center gap-2">
              <span>Hover to reveal details</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Campaign Optimization AI</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Automated A/B testing with reinforcement learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Budget allocation optimization across channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Transparent process with measurable ROI metrics</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm text-white/80">Nexus AI Labs • ML engineers & AI researchers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 - Personalization Engine */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 flex flex-col items-center justify-center">
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Hyper-Personalization Engine</h3>
            <p className="text-slate-400 text-center">1:1 customer experience at scale</p>
            <div className="mt-6 text-orange-400 text-sm font-semibold flex items-center gap-2">
              <span>Hover to reveal details</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Hyper-Personalization Engine</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Deep learning recommendation systems for retail</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Dynamic content adaptation based on user behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Industry-specific expertise with proven track record</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm text-white/80">Nexus AI Labs • Strategy to deployment</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <div className="inline-flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-8 py-4">
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-slate-900"></div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-slate-900"></div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 border-2 border-slate-900"></div>
        </div>
        <div className="text-left">
          <p className="text-white font-semibold">Join 500+ innovative companies</p>
          <p className="text-slate-400 text-sm">Transforming marketing with Nexus AI Labs</p>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .perspective-1000 {
      perspective: 1000px;
    }
    .transform-style-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
    .group:hover .group-hover\\:rotate-y-180 {
      transform: rotateY(180deg);
    }
  `}</style>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">
        What Marketing Leaders Say
      </h2>
      <p className="text-purple-200 text-lg">
        Discover how Nexus AI Labs transforms marketing strategies
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Testimonial 1 - Modal Popup Style */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
          {/* Modal-style header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-500/30">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                alt="Sarah Mitchell"
                className="w-14 h-14 rounded-full border-2 border-purple-400 shadow-lg"
              />
              <div>
                <h3 className="text-white font-bold text-lg">Sarah Mitchell</h3>
                <p className="text-purple-300 text-sm">CMO, BrandVision Inc.</p>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
          </div>
          
          {/* Modal content */}
          <div className="space-y-4">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              &quot;Nexus AI Labs revolutionized our content strategy. Their AI-powered insights helped us increase engagement by 340% in just three months. The predictive analytics are game-changing for campaign planning.&quot;
            </p>
            <div className="pt-4 flex items-center gap-2 text-purple-400 text-sm font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verified Customer
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - Modal Popup Style */}
      <div className="group relative md:mt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
          {/* Modal-style header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-blue-500/30">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
                alt="Marcus Chen"
                className="w-14 h-14 rounded-full border-2 border-blue-400 shadow-lg"
              />
              <div>
                <h3 className="text-white font-bold text-lg">Marcus Chen</h3>
                <p className="text-blue-300 text-sm">VP Marketing, TechFlow</p>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
          </div>
          
          {/* Modal content */}
          <div className="space-y-4">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              &quot;The ROI we&apos;ve seen with Nexus AI Labs is unprecedented. Their machine learning models helped us optimize ad spend and reduce customer acquisition costs by 58%. It&apos;s like having a data scientist on every campaign.&quot;
            </p>
            <div className="pt-4 flex items-center gap-2 text-blue-400 text-sm font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verified Customer
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - Modal Popup Style */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
          {/* Modal-style header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-cyan-500/30">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
                alt="Emily Rodriguez"
                className="w-14 h-14 rounded-full border-2 border-cyan-400 shadow-lg"
              />
              <div>
                <h3 className="text-white font-bold text-lg">Emily Rodriguez</h3>
                <p className="text-cyan-300 text-sm">Director, GrowthMetrics</p>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
          </div>
          
          {/* Modal content */}
          <div className="space-y-4">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              &quot;Nexus AI Labs transformed how we approach personalization. Their AI segmentation tools helped us deliver hyper-targeted campaigns that boosted conversion rates by 215%. The platform is intuitive and incredibly powerful.&quot;
            </p>
            <div className="pt-4 flex items-center gap-2 text-cyan-400 text-sm font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verified Customer
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
        Join 500+ Marketing Teams
      </button>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">
        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Marketing</span> Plan
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Transform your marketing with Nexus AI Labs&apos; cutting-edge automation
      </p>
    </div>

    {/* Two-Tier Comparison */}
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      
      {/* Starter Tier */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="text-5xl font-extrabold text-white">$49</span>
            <span className="text-gray-400">/month</span>
          </div>
          <p className="text-gray-300">Perfect for small businesses</p>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-200">AI-powered content generation (50 posts/month)</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-200">Social media scheduling & analytics</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-200">Email campaign automation</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-200">Basic audience insights</span>
          </li>
        </ul>

        <button
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
        >
          Get Started Now
        </button>

        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span>Secure SSL Payment</span>
        </div>
      </div>

      {/* Professional Tier */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 border-2 border-yellow-400 relative hover:transform hover:scale-105