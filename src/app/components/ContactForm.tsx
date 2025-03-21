"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="max-w-lg mx-auto bg-white p-8 rounded shadow" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
        <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
        <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send Message</button>
    </form>
  );
}
