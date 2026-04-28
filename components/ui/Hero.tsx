'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-text-secondary">
            Discover the best AI tools
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">AI Tools</span> for Modern
          <br />
          Creators & Developers
        </h1>

        <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
          Explore our curated collection of cutting-edge AI tools designed to 
          enhance your productivity, creativity, and development workflow.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="button-primary text-base px-6 py-3 flex items-center gap-2">
            Explore Tools
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="button-secondary text-base px-6 py-3">
            Submit a Tool
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-text-primary mb-1">15+</div>
            <div className="text-sm text-text-tertiary">Curated Tools</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-text-primary mb-1">6</div>
            <div className="text-sm text-text-tertiary">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-text-primary mb-1">100%</div>
            <div className="text-sm text-text-tertiary">Free to Explore</div>
          </div>
        </div>
      </div>
    </section>
  )
}