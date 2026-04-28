import { aiTools } from "@/lib/data";
import Link from "next/link";
import { Star, ExternalLink, ArrowLeft, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return aiTools.map((tool) => ({
    id: tool.id,
  }));
}

export default function ToolPage({ params }: { params: { id: string } }) {
  const tool = aiTools.find((t) => t.id === params.id);

  if (!tool) {
    notFound();
  }

  const relatedTools = aiTools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 text-secondaryText hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          返回工具列表
        </Link>

        {/* Tool Header */}
        <div className="card-base p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-linear mb-2">
                {tool.name}
              </h1>
              <p className="text-lg text-secondaryText">{tool.nameEn}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-brand-violet">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-semibold">{tool.rating}</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-tertiary mb-6">{tool.description}</p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-subtle px-3 py-1.5 text-sm text-secondaryText bg-brand-indigo/5">
              {tool.category}
            </span>
            <span className="text-sm text-tertiary">{tool.pricing}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center gap-2"
            >
              访问官网 <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Tool Details */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="card-base p-6">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-5 w-5 text-brand-violet" />
              <h3 className="font-semibold">标签</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-subtle px-3 py-1.5 text-sm text-secondaryText"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="card-base p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-brand-violet" />
              <h3 className="font-semibold">定价</h3>
            </div>
            <p className="text-secondaryText">{tool.pricing}</p>
          </div>
        </div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-linear mb-6">
              相关工具
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTools.map((relatedTool) => (
                <Link
                  key={relatedTool.id}
                  href={`/tools/${relatedTool.id}`}
                  className="card-base p-6 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-linear text-primary group-hover:text-brand-violet transition-colors">
                        {relatedTool.name}
                      </h3>
                      <p className="mt-1 text-sm text-secondaryText">
                        {relatedTool.nameEn}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-brand-violet">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">
                        {relatedTool.rating}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-tertiary line-clamp-2">
                    {relatedTool.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}