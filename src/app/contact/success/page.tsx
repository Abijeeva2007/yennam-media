import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">

        <div className="text-6xl mb-6">✅</div>

        <h1 className="text-5xl font-bold mb-6">
          Thank You!
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          We've received your enquiry successfully.
          Our team will contact you soon.
        </p>

        <Link
          href="/"
          className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}