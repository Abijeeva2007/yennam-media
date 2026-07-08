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

    setSuccess("Idea submitted successfully!");

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
    <main className="min-h-screen pt-20 bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-6xl font-bold mb-4">
          Submit Your Startup Idea
        </h1>

        <p className="text-gray-400 mb-12">
          Tell us about your idea and let's build it together.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            className="w-full p-4 bg-zinc-900 rounded-xl"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="w-full p-4 bg-zinc-900 rounded-xl"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            className="w-full p-4 bg-zinc-900 rounded-xl"
            placeholder="Company"
            value={form.company}
            onChange={(e) =>
              setForm({ ...form, company: e.target.value })
            }
          />

          <input
            className="w-full p-4 bg-zinc-900 rounded-xl"
            placeholder="Idea Title"
            value={form.idea_title}
            onChange={(e) =>
              setForm({
                ...form,
                idea_title: e.target.value,
              })
            }
          />

          <textarea
            rows={6}
            className="w-full p-4 bg-zinc-900 rounded-xl"
            placeholder="Describe your idea"
            value={form.idea_description}
            onChange={(e) =>
              setForm({
                ...form,
                idea_description: e.target.value,
              })
            }
          />

          <input
            className="w-full p-4 bg-zinc-900 rounded-xl"
            placeholder="Current Stage"
            value={form.stage}
            onChange={(e) =>
              setForm({ ...form, stage: e.target.value })
            }
          />

          <input
            className="w-full p-4 bg-zinc-900 rounded-xl"
            placeholder="Budget"
            value={form.budget}
            onChange={(e) =>
              setForm({ ...form, budget: e.target.value })
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
          >
            {loading ? "Submitting..." : "Submit Idea"}
          </button>

          {success && (
            <p className="text-green-500">
              {success}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}