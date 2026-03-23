import {Link2, Send, Carrot, Cpu, Sparkles,} from "lucide-react";

export default function BrandsSection() {
  return (
    <section className="brands">
      <div className="brands-container">
        <h2 className="brands-title">
          You're the brightest <br /> ray of light.
        </h2>

        <p className="brands-subtitle">
          Teams and individuals with illuminating insights use Rayst.
        </p>

        <div className="brands-logos">
          <div className="logo-item">
            <Link2 />
            <span>relate</span>
          </div>

          <div className="logo-item">
            <Send />
            <span>toss</span>
          </div>

          <div className="logo-item">
            <Carrot />
            <span>karrot</span>
          </div>

          <div className="logo-item function">
            <Cpu size={9} />
            <span>FUNCTION12</span>
          </div>

          <div className="logo-item">
            <Sparkles />
            <span>DISQUIET*</span>
          </div>
        </div>

        <div className="brands-newsletter">
          <div className="text">
            <p className="title">Subscribe to newsletter</p>
            <p className="desc">
              We'll summarize what we've shipped, updates.
            </p>
          </div>

          <input type="email" placeholder="Enter your email" />
        </div>
      </div>
    </section>
  );
}