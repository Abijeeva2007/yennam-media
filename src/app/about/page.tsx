export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          About Yennam Media
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mb-16">
          Yennam Media is a creative agency and venture studio focused on
          building brands, products, and businesses from the ground up.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-7">
              To help founders and businesses transform ideas into scalable
              brands and successful products.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-400 leading-7">
              Creating a future where great ideas become impactful businesses
              through design, strategy, and innovation.
            </p>
          </div>

        </div>

        <div className="mt-16 md:mt-24">

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What We Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white hover:text-black transition">
              Brand Building
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white hover:text-black transition">
              Product Development
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white hover:text-black transition">
              Venture Creation
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}