const services = [
  {
    id: 1,
    title: "Love & Relationships",
    description: "Heal broken hearts, attract true love, and strengthen your emotional bonds with powerful love spells and guidance.",
    icon: "💕",
  },
  {
    id: 2,
    title: "Prosperity & Wealth",
    description: "Unlock financial abundance, remove obstacles to success, and manifest wealth into your life through ancient practices.",
    icon: "💎",
  },
  {
    id: 3,
    title: "Protection & Healing",
    description: "Shield yourself from negative energies, cleanse your spirit, and restore balance with protective and healing rituals.",
    icon: "🛡️",
  },
  {
    id: 4,
    title: "Career & Success",
    description: "Advance your professional journey, secure promotions, and achieve your career goals with focused spiritual work.",
    icon: "🚀",
  },
  {
    id: 5,
    title: "Health & Wellness",
    description: "Support your physical and mental wellbeing through holistic spiritual practices and energy balancing.",
    icon: "🌟",
  },
  {
    id: 6,
    title: "Custom Rituals",
    description: "Personalized spell work and rituals tailored specifically to your unique situation and spiritual needs.",
    icon: "✨",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">My Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-background rounded-lg border border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-accent mb-3">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
