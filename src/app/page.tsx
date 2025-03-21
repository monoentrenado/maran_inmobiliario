import Image from "next/image";
import { HomeIcon, NewspaperIcon, ChatAlt2Icon, MailIcon } from "@heroicons/react/outline";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="bg-caribbeanBlue-500 text-sandyBeach-500 font-body antialiased">
      <header className="bg-gradient-to-r from-caribbeanBlue-500 via-sunsetOrange-500 to-palmGreen-500 text-sandyBeach-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-heading">Marán Inmobiliario</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#products" className="hover:underline flex items-center"><HomeIcon className="h-5 w-5 mr-1" /> Products</a></li>
              <li><a href="#posts" className="hover:underline flex items-center"><NewspaperIcon className="h-5 w-5 mr-1" /> Posts</a></li>
              <li><a href="#testimonials" className="hover:underline flex items-center"><ChatAlt2Icon className="h-5 w-5 mr-1" /> Testimonials</a></li>
              <li><a href="#contact" className="hover:underline flex items-center"><MailIcon className="h-5 w-5 mr-1" /> Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section id="hero" className="text-center py-16 bg-hero-pattern">
          <h2 className="text-4xl font-heading mb-4">Welcome to Our Real Estate Platform</h2>
          <p className="text-lg mb-8">Explore premium residential lots, houses within premium residential developments, and commercial lots with high added value.</p>
          <a href="#products" className="bg-sunsetOrange-500 text-caribbeanBlue-500 py-2 px-4 rounded hover:bg-palmGreen-500 transform hover:scale-105 transition-transform duration-300">Explore Now</a>
        </section>

        <section id="products" className="py-16">
          <h2 className="text-3xl font-subheading mb-8 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-caribbeanBlue-500 text-sandyBeach-500 p-4 rounded shadow">
                  <h3 className="text-xl font-subheading mb-2">Premium Residential Lots</h3>
                  <p>Discover our exclusive residential lots located in prime areas.</p>
                </div>
                <div className="flip-card-back bg-caribbeanBlue-500 text-sandyBeach-500 p-4 rounded shadow">
                  <h3 className="text-xl font-subheading mb-2">Premium Residential Lots</h3>
                  <p>These lots offer stunning views, excellent amenities, and a serene environment perfect for building your dream home.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-caribbeanBlue-500 text-sandyBeach-500 p-4 rounded shadow">
                  <h3 className="text-xl font-subheading mb-2">Houses in Premium Developments</h3>
                  <p>Find your dream home in our premium residential developments.</p>
                </div>
                <div className="flip-card-back bg-caribbeanBlue-500 text-sandyBeach-500 p-4 rounded shadow">
                  <h3 className="text-xl font-subheading mb-2">Houses in Premium Developments</h3>
                  <p>Our houses are designed with modern architecture, luxurious interiors, and are located in secure, gated communities.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-caribbeanBlue-500 text-sandyBeach-500 p-4 rounded shadow">
                  <h3 className="text-xl font-subheading mb-2">Commercial Lots with High Added Value</h3>
                  <p>Invest in commercial lots that offer high returns and added value.</p>
                </div>
                <div className="flip-card-back bg-caribbeanBlue-500 text-sandyBeach-500 p-4 rounded shadow">
                  <h3 className="text-xl font-subheading mb-2">Commercial Lots with High Added Value</h3>
                  <p>These lots are strategically located in high-traffic areas, making them ideal for businesses and commercial ventures.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="posts" className="py-16 bg-gradient-to-r from-caribbeanBlue-500 via-sunsetOrange-500 to-palmGreen-500">
          <h2 className="text-3xl font-subheading mb-8 text-center">Editorial Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-caribbeanBlue-500 text-sandyBeach-500 p-4 rounded shadow hover:shadow-lg transform hover:rotate-3 transition-transform duration-300">
              <h3 className="text-xl font-subheading mb-2">The Future of Real Estate</h3>
              <p>As the real estate market evolves, new trends and technologies are shaping the future. Discover how smart homes, sustainable building practices, and digital platforms are transforming the industry.</p>
              <a href="#" className="text-sunsetOrange-500 hover:underline">Read more</a>
            </article>
            <article className="bg-caribbeanBlue-500 text-sandyBeach-500 p-4 rounded shadow hover:shadow-lg transform hover:rotate-3 transition-transform duration-300">
              <h3 className="text-xl font-subheading mb-2">Top Investment Opportunities</h3>
              <p>Explore the top real estate investment opportunities in 2023. From residential properties to commercial lots, find out where you should invest to maximize your returns.</p>
              <a href="#" className="text-sunsetOrange-500 hover:underline">Read more</a>
            </article>
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <h2 className="text-3xl font-subheading mb-8 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-caribbeanBlue-500 text-sandyBeach-500 p-4 rounded shadow hover:shadow-lg transform hover:rotate-3 transition-transform duration-300">
              <p className="mb-2">"This is the best real estate service I have ever used! The team was professional, and they helped me find the perfect home."</p>
              <footer className="text-sm text-sunsetOrange-500">- Happy Customer</footer>
            </blockquote>
            <blockquote className="bg-caribbeanBlue-500 text-sandyBeach-500 p-4 rounded shadow hover:shadow-lg transform hover:rotate-3 transition-transform duration-300">
              <p className="mb-2">"Highly recommend their premium residential lots. The locations are fantastic, and the amenities are top-notch."</p>
              <footer className="text-sm text-sunsetOrange-500">- Satisfied Client</footer>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gradient-to-r from-caribbeanBlue-500 via-sunsetOrange-500 to-palmGreen-500">
          <h2 className="text-3xl font-subheading mb-8 text-center">Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="bg-caribbeanBlue-500 text-sandyBeach-500 p-4 text-center">
        <p>&copy; 2023 Real Estate Services. All rights reserved.</p>
      </footer>
    </div>
  );
}
