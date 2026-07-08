import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        {/* HERO SECTION */}
<section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-24 pb-20">

  <div className="absolute h-[450px] w-[450px] rounded-full bg-white/10 blur-[150px] md:h-[700px] md:w-[700px]" />

  <div className="relative z-10 mx-auto max-w-5xl text-center">

    <p className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-gray-500 md:text-sm">
      Creative Agency • Venture Studio
    </p>

    <h1 className="mb-8 text-5xl font-bold leading-tight sm:text-6xl lg:text-8xl">
      Building Ideas
      <br />
      Into Brands.
    </h1>

    <p className="mx-auto mb-10 max-w-3xl text-base leading-8 text-gray-400 md:text-xl">
      We partner with startups, founders and businesses to design,
      build and grow brands, digital products and scalable ventures.
    </p>

    <div className="flex flex-col justify-center gap-4 sm:flex-row">

      <Link
        href="/contact"
        className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
      >
        Start a Project
      </Link>

      <Link
        href="/idea"
        className="rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
      >
        Submit Your Idea
      </Link>

    </div>

  </div>

</section>

{/* SERVICES OVERVIEW */}

<section className="mx-auto max-w-7xl px-6 py-20">

  <div className="mb-14 text-center">

    <p className="mb-3 uppercase tracking-[0.35em] text-gray-500">
      What We Build
    </p>

    <h2 className="text-4xl font-bold md:text-6xl">
      From Idea To Launch
    </h2>

  </div>

  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:bg-white hover:text-black">

      <h3 className="mb-4 text-2xl font-bold">
        Venture Building
      </h3>

      <p className="leading-7 text-gray-400">
        Validate ideas, create MVPs and launch ventures with confidence.
      </p>

    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:bg-white hover:text-black">

      <h3 className="mb-4 text-2xl font-bold">
        Brand Strategy
      </h3>

      <p className="leading-7 text-gray-400">
        Build a memorable identity with positioning, storytelling and design.
      </p>

    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:bg-white hover:text-black">

      <h3 className="mb-4 text-2xl font-bold">
        Product Development
      </h3>

      <p className="leading-7 text-gray-400">
        Design and develop scalable digital products ready for the market.
      </p>

    </div>

  </div>

</section>

{/* MARKETING */}

<section className="mx-auto max-w-7xl px-6 py-24">

  <div className="mb-14 text-center">

    <p className="mb-3 uppercase tracking-[0.35em] text-gray-500">
      Marketing
    </p>

    <h2 className="text-4xl font-bold md:text-6xl">
      Growth Driven Marketing
    </h2>

  </div>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

    {[
      "Brand Identity",
      "Social Media Strategy",
      "Content Creation",
      "Performance Marketing",
      "Campaign Management",
      "Analytics & Growth",
    ].map((item) => (

      <div
        key={item}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:bg-white hover:text-black hover:-translate-y-2"
      >

        <h3 className="text-2xl font-semibold">
          {item}
        </h3>

      </div>

    ))}

  </div>

</section>

        {/* VENTURE SECTION */}
        <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
            Venture Studio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Problem Research",
              "Idea Validation",
              "Product Strategy",
              "UI/UX Design",
              "MVP Development",
              "Launch Planning",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white hover:text-black transition duration-300"
              >
                <h3 className="text-2xl font-semibold">{item}</h3>
              </div>
            ))}

          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-32 px-6">

          <h2 className="text-4xl md:text-6xl font-bold text-center mb-24">
            Our Process
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xl md:text-3xl text-gray-300">

            <span>Understand</span>
            <span>→</span>

            <span>Strategy</span>
            <span>→</span>

            <span>Create</span>
            <span>→</span>

            <span>Launch</span>
            <span>→</span>

            <span>Scale</span>

          </div>
        </section>

        {/* WHY YENNAM */}
        <section className="py-32 px-6 max-w-7xl mx-auto">

          <h2 className="text-6xl font-bold text-center mb-16">
            Why Yennam?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="border border-white/10 p-8 rounded-3xl bg-white/5">
              <h3 className="text-4xl md:text-6xl font-bold mb-4">01</h3>
              <p>Creative Excellence</p>
            </div>

            <div className="border border-white/10 p-8 rounded-3xl bg-white/5">
              <h3 className="text-5xl font-bold mb-4">02</h3>
              <p>Startup Mindset</p>
            </div>

            <div className="border border-white/10 p-8 rounded-3xl bg-white/5">
              <h3 className="text-5xl font-bold mb-4">03</h3>
              <p>Execution Focused</p>
            </div>

            <div className="border border-white/10 p-8 rounded-3xl bg-white/5">
              <h3 className="text-5xl font-bold mb-4">04</h3>
              <p>Long-Term Growth</p>
            </div>

          </div>
        </section>

        {/* FINAL CTA */}
<section className="py-40 px-6 text-center">

  <h2 className="text-7xl font-bold mb-8">
    Build With Yennam Media
  </h2>

  <p className="text-gray-400 text-xl mb-10 max-w-3xl mx-auto">
    From startup concepts to market-ready products,
    we help founders transform ideas into real businesses.
  </p>

  <a
    href="/idea"
    className="inline-block bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition"
  >
    Submit Your Idea
  </a>

</section>
<footer className="border-t border-white/10 py-10 text-center text-gray-500">
  © 2026 Yennam Media. All rights reserved.
</footer>
      </main>
    </>
  );
}