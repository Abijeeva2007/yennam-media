export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-32">

      <h1 className="text-6xl font-bold mb-6">
        Marketing System
      </h1>

      <p className="text-gray-400 text-xl mb-16">
        We build structured brand identity, visibility,
        and growth systems.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-24">

        {[
          "Brand Identity Design",
          "Social Media Strategy",
          "Content Systems",
          "Growth Systems",
          "Campaign Execution",
        ].map((item) => (
          <div
            key={item}
            className="p-8 rounded-3xl border border-white/10 bg-white/5"
          >
            <h3 className="text-2xl font-semibold">
              {item}
            </h3>
          </div>
        ))}

      </div>

      <h2 className="text-4xl font-bold mb-12">
        How We Work
      </h2>

      <div className="space-y-8 text-2xl text-gray-300 mb-24">
        <p>1. Understand Brand</p>
        <p>2. Define Positioning</p>
        <p>3. Build Strategy</p>
        <p>4. Execute & Optimize</p>
      </div>

      <div className="text-center">

        <h2 className="text-5xl font-bold mb-10">
          Clear Identity.
          <br />
          Strong Presence.
          <br />
          Scalable Growth.
        </h2>

        <button className="bg-white text-black px-8 py-4 rounded-full">
          Start Marketing Project
        </button>

      </div>

    </main>
  );
}