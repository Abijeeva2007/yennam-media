"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (loading) return;
  setLoading(true);
  try {
    const { error } = await supabase
      .from("contact_submissions")
      .insert([form]);

    if (error) throw error;

    await emailjs.send(
      "service_yubmqb8",
      "template_wdlhxj3",
      {
        name: form.name,
        email: form.email,
        message: form.message,
        time: new Date().toLocaleString(),
      },
      "Y-RKrLttFI07Nexdv"
    );

    setSuccess("✅ Message sent successfully!");
    setForm({
      name: "",
      email: "",
      message: "",
    });
    } finally {
      setLoading(false);
}
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err));
  }
};
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 pt-24">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-4 text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>

        <p className="mb-12 text-gray-400 text-lg">
          Tell us about your project and we'll get back to you.
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

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Project Details
            </label>

            <textarea
              rows={6}
              required
              placeholder="Tell us about your project, goals, timeline and budget..."
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
             type="submit"
             disabled={loading}
             className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
             {loading ? "Sending..." : "Send Message"}
            </button>

          {success && (
            <p className="text-green-500 font-medium">
              {success}
            </p>
          )}

        </form>

      </div>
    </main>
  );
}