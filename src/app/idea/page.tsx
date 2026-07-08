"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function IdeaPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    idea_title: "",
    idea_description: "",
    stage: "",
    budget: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("idea_intake")
      .insert([form]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setSuccess(
      "✅ Thank you! Your idea has been submitted successfully. We'll review it and get back to you soon."
    );

    setForm({
      name: "",
      email: "",
      company: "",
      idea_title: "",
      idea_description: "",
      stage: "",
      budget: "",
    });
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 pt-24">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-4 text-4xl md:text-6xl font-bold">
          Submit Your Startup Idea
        </h1>

        <p className="mb-12 text-lg text-gray-400">
          Have an idea? Share it with us and let's explore how we can build it together.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Your Name
            </label>

            <input
              type="text"
              required
              placeholder="John Doe"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              required
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* Company */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Company (Optional)
            </label>

            <input
              type="text"
              placeholder="ABC Technologies"
              value={form.company}
              onChange={(e) =>
                setForm({ ...form, company: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* Idea Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Startup / Idea Title
            </label>

            <input
              type="text"
              required
              placeholder="AI Healthcare Platform"
              value={form.idea_title}
              onChange={(e) =>
                setForm({
                  ...form,
                  idea_title: e.target.value,
                })
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Describe Your Idea
            </label>

            <textarea
              rows={6}
              required
              placeholder="Describe your startup idea, the problem it solves, target audience, and your vision..."
              value={form.idea_description}
              onChange={(e) =>
                setForm({
                  ...form,
                  idea_description: e.target.value,
                })
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* Stage */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Current Stage
            </label>

            <input
              type="text"
              placeholder="Idea / MVP / Prototype / Launched"
              value={form.stage}
              onChange={(e) =>
                setForm({ ...form, stage: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Estimated Budget
            </label>

            <input
              type="text"
              placeholder="$5,000 - $10,000 (Optional)"
              value={form.budget}
              onChange={(e) =>
                setForm({ ...form, budget: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Idea"}
          </button>

          {success && (
            <p className="font-medium text-green-500">
              {success}
            </p>
          )}

        </form>

      </div>
    </main>
  );
}