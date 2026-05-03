import { Users, Target, Award } from "lucide-react";
import signature from "../../imports/image.png";
import { BuilderOrFallback } from "../components/BuilderOrFallback";

export function About() {
  return (
    <BuilderOrFallback>
      <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4">About Us</h1>
          <p className="text-lg opacity-90">
            Learn more about our mission, values, and the team behind our success
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Dominion Group of Company LLC is a growing organization located in Las Vegas, dedicated to building
            strong connections and partnerships with businesses across various industries. We believe that building
            connections creates strong paths for every group that works with others.
          </p>
          <p className="text-muted-foreground">
            Excellence is delivered by our company through moral honesty and the creation of innovative solutions
            that help our customers. We have a team of highly skilled professionals who strive to create value
            while building long-lasting partnerships in many different fields of trade. Through our forward-thinking
            approach and constant dedication, we continue to strengthen our presence in the business community.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg border border-border">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="mb-2">Client Priority</h3>
              <p className="text-muted-foreground">
                Our clients are at the heart of everything we do. We prioritize understanding their unique
                needs and consistently exceeding their expectations through dedicated service.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <Target className="text-primary mb-4" size={32} />
              <h3 className="mb-2">Clear Communication</h3>
              <p className="text-muted-foreground">
                We believe in transparent and open communication. Building trust through honest dialogue
                creates stronger partnerships and better outcomes for everyone involved.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <Award className="text-primary mb-4" size={32} />
              <h3 className="mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Quality is non-negotiable. We maintain the highest standards in everything we do, from service
                delivery to customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Our Team</h2>
          <p className="text-muted-foreground mb-12">
            Our dedicated team brings expertise and vision to guide Dominion Group of Company LLC
            toward continued growth and success.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-muted-foreground" size={48} />
              </div>
              <h3 className="mb-1">Ibironke Mercy Alaga</h3>
              <p className="text-muted-foreground">Team Member</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-muted-foreground" size={48} />
              </div>
              <h3 className="mb-1">Brigitte Mbouda</h3>
              <p className="text-muted-foreground">Team Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Signature Section */}
      <section className="py-12 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">Authorized by:</p>
          <img src={signature} alt="CEO Signature" className="mx-auto max-w-xs h-auto" />
          <p className="mt-4 text-muted-foreground">Ibironke Mercy Alaga</p>
          <p className="text-muted-foreground">Chief Executive Officer</p>
        </div>
      </section>
      </div>
    </BuilderOrFallback>
  );
}
