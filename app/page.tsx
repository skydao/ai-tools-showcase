import Link from "next/link";
import { featuredTools, categories } from "@/lib/data";
import { Star, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
      <section className="py-24">
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
                className="card-base p-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-panel rounded-lg flex items-center justify-center text-3xl">
                      {tool.name.charAt(0)}
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
      <section className="py-24 border-t border-subtle">
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
                className="card-base p-6 flex items-center gap-4"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-violet">
                  <Sparkles className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">
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
      <section className="py-24 border-t border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="card-base p-12 text-center">
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