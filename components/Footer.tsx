export default function Footer() {
  return (
    <footer className="bg-surface border-t border-accent/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-accent mb-4">Dr Ehi Spell Caster</h3>
            <p className="text-muted text-sm">
              Transforming lives through authentic spiritual guidance and powerful spell work.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#services" className="hover:text-accent transition-colors">Love & Relationships</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Prosperity & Wealth</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Protection & Healing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8 text-center text-muted text-sm">
          <p>&copy; 2024 Dr Ehi Spell Caster. All rights reserved. | Mystical Guidance & Authentic Spell Work</p>
        </div>
      </div>
    </footer>
  );
}
