"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-foreground/80 mb-12">
            Have a project in mind or just want to say hello? Fill out the form
            below and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="text-center p-4 rounded-sm bg-green-100 text-green-800 border border-green-200">
              Thank you for your message! We will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 rounded-sm bg-background border border-foreground/20 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition duration-150 ease-in-out"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 rounded-sm bg-background border border-foreground/20 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition duration-150 ease-in-out"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-sm bg-background border border-foreground/20 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition duration-150 ease-in-out"
                  placeholder="Web Development Project"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-sm bg-background border border-foreground/20 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition duration-150 ease-in-out"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  style={{ backgroundColor: "var(--color-primary)" }}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white rounded-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 transition-all duration-300 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
