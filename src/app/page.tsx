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

        {/* VENTURE STUDIO */}

<section className="mx-auto max-w-7xl px-6 py-24">

  <div className="mb-14 text-center">

    <p className="mb-3 uppercase tracking-[0.35em] text-gray-500">
      Venture Studio
    </p>

    <h2 className="text-4xl font-bold md:text-6xl">
      We Build Startups
    </h2>

  </div>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

    {[
      "Problem Discovery",
      "Idea Validation",
      "Product Strategy",
      "UI / UX Design",
      "MVP Development",
      "Go-To-Market",
    ].map((item) => (

      <div
        key={item}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white hover:text-black"
      >

        <h3 className="text-2xl font-semibold">
          {item}
        </h3>

      </div>

    ))}

  </div>

</section>

{/* PROCESS */}

<section className="bg-zinc-950 py-24">

<div className="mx-auto max-w-6xl px-6">

<h2 className="mb-16 text-center text-4xl font-bold md:text-6xl">
Our Process
</h2>

<div className="grid grid-cols-1 gap-8 md:grid-cols-5">

{[
"Discover",
"Plan",
"Design",
"Build",
"Launch",
].map((step, index) => (

<div
key={step}
className="rounded-3xl border border-white/10 bg-black p-8 text-center"
>

<div className="mb-4 text-5xl font-bold text-gray-700">
0{index + 1}
</div>

<h3 className="text-xl font-semibold">
{step}
</h3>

</div>

))}

</div>

</div>

</section>

{/* WHY CHOOSE US */}

<section className="mx-auto max-w-7xl px-6 py-24">

<div className="mb-14 text-center">

<p className="mb-3 uppercase tracking-[0.35em] text-gray-500">
Why Choose Us
</p>

<h2 className="text-4xl font-bold md:text-6xl">
Why Yennam Media
</h2>

</div>

<div className="grid grid-cols-1 gap-8 md:grid-cols-2">

<div className="rounded-3xl border border-white/10 bg-white/5 p-10">

<h3 className="mb-4 text-3xl font-bold">
Startup Focused
</h3>

<p className="leading-8 text-gray-400">
We work with founders from idea validation to scaling,
providing strategic and technical support at every stage.
</p>

</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-10">

<h3 className="mb-4 text-3xl font-bold">
Execution Driven
</h3>

<p className="leading-8 text-gray-400">
From branding to development and marketing,
our team helps bring ideas to market quickly.
</p>

</div>

</div>

</section>

        {/* FINAL CTA */}

<section className="border-t border-white/10 py-24">

<div className="mx-auto max-w-4xl px-6 text-center">

<h2 className="mb-6 text-4xl font-bold md:text-6xl">
Ready to Build Something Great?
</h2>

<p className="mb-10 text-lg leading-8 text-gray-400">
Whether you're launching your first startup or scaling your business,
Yennam Media is ready to help.
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

<footer className="border-t border-white/10 py-8 text-center text-gray-500">
© 2026 Yennam Media. All Rights Reserved.
</footer>
     
           </main>
    </>
  );
}