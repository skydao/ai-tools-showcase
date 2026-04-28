import { aiTools, categories } from "@/lib/data";
import Link from "next/link";
import { Search, Star, Filter, ArrowRight } from "lucide-react";

export default function ToolsPage({
  searchParams,
}: {
  searchParams: { category?: string; tag?: string };
}) {
  const filteredTools = aiTools.filter((tool) => {
    if (searchParams.category && tool.category !== searchParams.category) {
      return false;
    }
    if (searchParams.tag && !tool.tags.includes(searchParams.tag)) {
      return false;
    }
    return true;
  });

  return (
    <main className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-linear">
            工具列表
          </h1>
          <p className="mt-4 text-lg text-secondaryText">
            探索 {aiTools.length} 个精选 AI 工具
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar Filters */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="card-base p-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-brand-violet" />
                <h3 className="font-semibold">筛选</h3>
              </div>
              <div className="space-y-2">
                <Link
                  href="/tools"
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    !searchParams.category
                      ? "bg-brand-indigo/10 text-brand-violet"
                      : "text-secondaryText hover:text-primary"
                  }`}
                >
                  全部
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/tools?category=${category}`}
                    className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      searchParams.category === category
                        ? "bg-brand-indigo/10 text-brand-violet"
                        : "text-secondaryText hover:text-primary"
                    }`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Tools Grid */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-8 card-base p-4 flex items-center gap-4">
              <Search className="h-5 w-5 text-tertiary" />
              <input
                type="text"
                placeholder="搜索工具..."
                className="flex-1 bg-transparent text-primary placeholder-tertiary outline-none"
              />
            </div>

            {/* Active Filters */}
            {searchParams.category && (
              <div className="mb-6 flex items-center gap-2">
                <span className="text-sm text-tertiary">筛选:</span>
                <span className="rounded-full border border-subtle px-3 py-1 text-sm text-secondaryText bg-brand-indigo/5">
                  {searchParams.category}
                </span>
              </div>
            )}

            {/* Tools Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="card-base p-6 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-linear text-primary group-hover:text-brand-violet transition-colors">
                        {tool.name}
                      </h3>
                      <p className="mt-1 text-sm text-secondaryText">
                        {tool.nameEn}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-brand-violet">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{tool.rating}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-tertiary line-clamp-2">
                    {tool.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-subtle px-2 py-1 text-xs text-secondaryText">
                      {tool.category}
                    </span>
                    {tool.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-subtle px-2 py-1 text-xs text-tertiary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-tertiary">{tool.pricing}</span>
                    <ArrowRight className="h-4 w-4 text-tertiary group-hover:text-brand-violet transition-colors" />
                  </div>
                </Link>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="card-base p-12 text-center">
                <p className="text-secondaryText">没有找到匹配的工具</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}