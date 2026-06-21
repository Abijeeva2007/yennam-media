export default function VenturePage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-32">
      <h1 className="text-6xl font-bold mb-6">
        Venture Studio
      </h1>

      <p className="text-gray-400 text-xl mb-16">
        We research real-world problems and turn them into products.
      </p>

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
            className="p-8 rounded-3xl border border-white/10 bg-white/5"
          >
            <h3 className="text-2xl font-semibold">{item}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}