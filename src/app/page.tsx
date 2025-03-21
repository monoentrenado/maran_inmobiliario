import Image from "next/image";
import { FormEvent } from "react";

export default function Home() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Real Estate Services</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="#posts" className="hover:underline">Posts</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section id="hero" className="text-center py-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Real Estate Platform</h2>
          <p className="text-lg mb-8">Explore premium residential lots, houses within premium residential developments, and commercial lots with high added value.</p>
          <a href="#products" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Explore Now</a>
        </section>

        <section id="products" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Premium Residential Lots</h3>
              <p>Discover our exclusive residential lots located in prime areas.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Houses in Premium Developments</h3>
              <p>Find your dream home in our premium residential developments.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Commercial Lots with High Added Value</h3>
              <p>Invest in commercial lots that offer high returns and added value.</p>
            </div>
          </div>
        </section>

        <section id="posts" className="py-16 bg-gray-50">
          <h2 className="text-3xl font-bold mb-8 text-center">Editorial Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Post Title 1</h3>
              <p>Summary of the editorial post content goes here...</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </article>
            <article className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Post Title 2</h3>
              <p>Summary of the editorial post content goes here...</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </article>
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-gray-100 p-4 rounded shadow">
              <p className="mb-2">"This is the best real estate service I have ever used!"</p>
              <footer className="text-sm text-gray-700">- Happy Customer</footer>
            </blockquote>
            <blockquote className="bg-gray-100 p-4 rounded shadow">
              <p className="mb-2">"Highly recommend their premium residential lots."</p>
              <footer className="text-sm text-gray-700">- Satisfied Client</footer>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-50">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
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
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 Real Estate Services. All rights reserved.</p>
      </footer>
    </div>
  );
}
