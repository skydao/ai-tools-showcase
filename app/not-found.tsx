export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-violet mb-4">404</h1>
        <p className="text-2xl text-secondaryText mb-8">工具未找到</p>
        <a
          href="/"
          className="button-primary inline-flex items-center gap-2"
        >
          返回首页
        </a>
      </div>
    </main>
  );
}