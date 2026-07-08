export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 bg-black text-white px-8 py-32">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-6xl font-bold mb-8">
          About Yennam Media
        </h1>

        <p className="text-xl text-gray-400 mb-16">
          Yennam Media is a creative agency and venture studio focused on
          building brands, products, and businesses from the ground up.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <h2 className="text-3xl font-semibold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-400">
              To help founders and businesses transform ideas into
              scalable brands and successful products.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <h2 className="text-3xl font-semibold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-400">
              Creating a future where great ideas become impactful
              businesses through design, strategy, and innovation.
            </p>
          </div>

        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-8">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              Brand Building
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              Product Development
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              Venture Creation
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}