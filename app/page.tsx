"use client";

import Link from "next/link";
import { featuredTools, categories } from "@/lib/data";
import { Search, Star, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

function MouseTrail() {
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let id = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = { x: e.clientX, y: e.clientY, id: ++id };
      setTrails((prev) => [...prev.slice(-15), newTrail]);
      
      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="absolute w-2 h-2 rounded-full bg-brand-violet opacity-60 blur-sm animate-ping"
          style={{
            left: trail.x,
            top: trail.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}

function HomeContent() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Mouse Trail Effect */}
      <MouseTrail />

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-indigo/5 animate-gradient" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-linear sm:text-6xl lg:text-7xl">
              探索最好的
              <span className="text-brand-violet"> AI 工具</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondaryText sm:text-xl">
              发现和探索最新、最实用的 AI 工具，提升你的工作效率
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/tools"
                className="button-primary flex items-center gap-2"
              >
                浏览工具 <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="button-ghost">了解更多</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-linear sm:text-4xl">
              精选工具
            </h2>
            <p className="mt-4 text-lg text-secondaryText">
              发现最受欢迎的 AI 工具
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="card-base p-6 group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col gap-4">
                  {/* Logo - Large and Prominent */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 hover:scale-110 transition-transform duration-300">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-linear text-primary">
                        {tool.name}
                      </h3>
                      <p className="mt-1 text-sm text-secondaryText">
                        {tool.nameEn}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-brand-violet">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="text-lg font-semibold">{tool.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-base text-tertiary">{tool.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-subtle px-3 py-1 text-sm text-secondaryText bg-brand-indigo/5">
                      {tool.category}
                    </span>
                    {tool.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-subtle px-3 py-1 text-sm text-tertiary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 border-t border-subtle relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-linear sm:text-4xl">
              按类别浏览
            </h2>
            <p className="mt-4 text-lg text-secondaryText">
              找到适合你的 AI 工具
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/tools?category=${category}`}
                className="card-base p-6 flex items-center gap-4 group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-violet group-hover:bg-brand-violet group-hover:text-white transition-all duration-300">
                  <Sparkles className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary group-hover:text-brand-violet transition-colors text-lg">
                    {category}
                  </h3>
                  <p className="text-sm text-tertiary">
                    {
                      featuredTools.filter((t) => t.category === category)
                        .length
                    }{" "}
                    个工具
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-subtle relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="card-base p-12 text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-semibold tracking-tight text-linear sm:text-4xl">
              发现更多 AI 工具
            </h2>
            <p className="mt-4 text-lg text-secondaryText">
              探索我们收录的 {featuredTools.length}+ 个精选 AI 工具
            </p>
            <Link
              href="/tools"
              className="mt-8 inline-flex button-primary items-center gap-2"
            >
              查看所有工具 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Home() {
  return <HomeContent />;
}