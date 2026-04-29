"use client";
import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-off-white py-12">
      <div className="w-[95%] mx-auto">
        {/* two col on md+ */}
        <div className="md:hidden">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
            Get in touch
          </p>
          <p className="text-2xl md:text-3xl  tracking-wider mb-4 leading-snug">
            Tell me about your idea
          </p>
        </div>
        <div className="grid grid-cols-1 md:flex md:justify-between md:gap-16 large:gap-24">
          {/* left — heading and contact info */}
          <div className="hidden md:block mb-10 md:mb-0">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              Get in touch
            </p>
            <p className="text-2xl font-semibold tracking-wider mb-4 leading-snug">
              Tell me about <br className="hidden medium:block" /> your idea
            </p>
            <p className="text-sm text-gray-500 mb-10 leading-relaxed">
              Have a project in mind? Fill out the form and I will get back to
              you shortly.
            </p>

            <div className="flex flex-col gap-4 md:flex-row md:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-black/10 rounded-sm flex items-center justify-center shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm">kunleace001@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-black/10 rounded-sm flex items-center justify-center shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-sm">+44 000 000 0000</p>
                </div>
              </div>
            </div>
          </div>

          {/* right — form */}
          <div className="md:basis-1/2">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="input-div flex-col">
                  <label className="text-[13px]" htmlFor="name">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="pl-1"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-div flex-col">
                  <label className="text-[13px]" htmlFor="email">
                    Email address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="pl-1"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-div flex-col mb-6">
                <label className="text-[13px]" htmlFor="message">
                  Project description
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full tracking-widest bg-black text-white py-2 rounded-xs cursor-pointer disabled:opacity-50 hover:opacity-80 transition-opacity"
              >
                {status === "loading" ? "Sending..." : "Send"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-600 mt-3 text-center">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500 mt-3 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
