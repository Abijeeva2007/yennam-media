"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from("contact_submissions")
      .insert([form]);

    if (error) {
      alert(error.message);
      return;
    }

    setSuccess("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen pt-20 bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-6xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-gray-400 mb-12">
          Tell us about your project.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

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

          <textarea
            rows={6}
            className="w-full p-4 bg-zinc-900 rounded-xl"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button
            type="submit"
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
          >
            Send Message
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