import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        {/* HERO SECTION */}
        <section className="relative min-h-screen pt-20 flex flex-col justify-center items-center text-center overflow-hidden px-6">

          <div className="absolute w-[900px] h-[900px] bg-white/5 rounded-full blur-[220px]" />

          <div className="relative z-10">
            <p className="uppercase tracking-[10px] text-gray-500 mb-6">
              Helping Founders Build The Next Big Thing
            </p>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Yennam Media
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Helping founders validate ideas, build products, create strong brands, and launch scalable businesses.

            </p>

            <div className="flex gap-6 justify-center flex-wrap">

  <Link
  href="/contact"
  className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
>
  Start a Project
</Link>

<Link
  href="/idea"
  className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
>
  Submit Your Idea
</Link>

</div>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
<section className="max-w-6xl mx-auto px-6 pb-24">
  <div className="grid md:grid-cols-3 gap-8">

    <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
      <h3 className="text-2xl font-bold mb-4">
        Venture Building
      </h3>

      <p className="text-gray-400">
        Supporting founders from idea validation to product launch.
      </p>
    </div>

    <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
      <h3 className="text-2xl font-bold mb-4">
        Brand Strategy
      </h3>

      <p className="text-gray-400">
        Creating memorable brands that connect with audiences.
      </p>
    </div>

    <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
      <h3 className="text-2xl font-bold mb-4">
        Product Development
      </h3>

      <p className="text-gray-400">
        Turning ideas into scalable digital products and businesses.
      </p>
    </div>

  </div>
</section>

        {/* MARKETING SECTION */}
        <section className="py-32 px-6 max-w-7xl mx-auto">

          <h2 className="text-6xl font-bold text-center mb-16">
            Marketing System
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Brand Identity Design",
              "Social Media Strategy",
              "Content Creation",
              "Campaign Management",
              "Growth Marketing",
              "Performance Analytics",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white hover:text-black transition duration-300"
              >
                <h3 className="text-2xl font-semibold">{item}</h3>
              </div>
            ))}

          </div>
        </section>

        {/* VENTURE SECTION */}
        <section className="py-32 px-6 max-w-7xl mx-auto">

          <h2 className="text-6xl font-bold text-center mb-16">
            Venture Studio
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

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
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white hover:text-black transition duration-300"
              >
                <h3 className="text-2xl font-semibold">{item}</h3>
              </div>
            ))}

          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-32 px-6">

          <h2 className="text-6xl font-bold text-center mb-24">
            Our Process
          </h2>

          <div className="flex flex-wrap justify-center gap-8 text-3xl text-gray-300">

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

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border border-white/10 p-8 rounded-3xl bg-white/5">
              <h3 className="text-5xl font-bold mb-4">01</h3>
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