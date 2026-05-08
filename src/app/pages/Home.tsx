import { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { BuilderOrFallback } from "../components/BuilderOrFallback";

export function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <BuilderOrFallback>
      <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mb-4">Welcome to Dominion Group of Company LLC</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 mb-8">
            A growing organization in Las Vegas delivering excellence through moral honesty and innovative solutions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/about"
              className="px-6 py-3 bg-primary-foreground text-primary rounded-lg hover:opacity-90 transition-opacity"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4">Stay Connected</h2>
          <p className="mb-8 text-muted-foreground">
            Subscribe to our newsletter for updates, insights, and exclusive offers
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-primary">Thank you for subscribing!</p>
          )}
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Mail className="text-primary-foreground" size={24} />
              </div>
              <h3 className="mb-2">Amazon Business Partner</h3>
              <p className="text-muted-foreground">
                Registered with Amazon Business to provide seamless procurement solutions for your organization
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Mail className="text-primary-foreground" size={24} />
              </div>
              <h3 className="mb-2">Reliable Service</h3>
              <p className="text-muted-foreground">
                Dedicated support to ensure smooth operations and quick resolution of any business needs
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Mail className="text-primary-foreground" size={24} />
              </div>
              <h3 className="mb-2">Building Connections</h3>
              <p className="text-muted-foreground">
                Committed to creating strong partnerships that benefit all parties through collaboration
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </BuilderOrFallback>
  );
}
