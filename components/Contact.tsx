"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I will respond soon.");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-surface p-8 rounded-lg border border-accent/20"
        >
          <div>
            <label className="block text-sm font-semibold text-accent mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-accent/30 rounded-lg text-text focus:border-accent focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-accent mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-accent/30 rounded-lg text-text focus:border-accent focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-accent mb-2">
              Service Interest
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-accent/30 rounded-lg text-text focus:border-accent focus:outline-none transition-colors"
            >
              <option value="">Select a service</option>
              <option value="love">Love & Relationships</option>
              <option value="prosperity">Prosperity & Wealth</option>
              <option value="protection">Protection & Healing</option>
              <option value="career">Career & Success</option>
              <option value="health">Health & Wellness</option>
              <option value="custom">Custom Rituals</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-accent mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-background border border-accent/30 rounded-lg text-text focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your situation and what you're seeking..."
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-accent text-2xl mb-2">📧</p>
            <p className="text-sm text-muted">Email</p>
            <a href="mailto:drehispellcaster.info@gmail.com" className="text-accent font-semibold hover:opacity-80 transition-opacity">
              drehispellcaster.info@gmail.com
            </a>
          </div>
          <div>
            <p className="text-accent text-2xl mb-2">💬</p>
            <p className="text-sm text-muted">WhatsApp</p>
            <a href="https://wa.me/2349160947050" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:opacity-80 transition-opacity">
              +234 916 094 7050
            </a>
          </div>
          <div>
            <p className="text-accent text-2xl mb-2">🌍</p>
            <p className="text-sm text-muted">Available</p>
            <p className="text-accent font-semibold">Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
