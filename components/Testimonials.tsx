const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "CEO",
    content:
      "Dr Ehi completely changed my life. After the prosperity spell, my business grew beyond my wildest dreams. The results were incredible!",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    title: "Entrepreneur",
    content:
      "I was skeptical at first, but the love spell worked wonders. I met my soulmate within weeks. Dr Ehi is the real deal.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    title: "Therapist",
    content:
      "The healing rituals provided me with spiritual clarity I had been searching for years. Highly recommend to anyone seeking transformation.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Student",
    content:
      "The success spell helped me pass my exams with flying colors. I finally feel confident and focused. Thank you, Dr Ehi!",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    title: "Nurse",
    content:
      "After years of health struggles, the healing work Dr Ehi did for me made a real difference. I feel renewed and energized.",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Brown",
    title: "Artist",
    content:
      "The creative inspiration spell unlocked my artistic potential. My work is more authentic and fulfilling than ever before.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Testimonials</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-background rounded-lg border border-accent/20 hover:border-accent/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-muted mb-4 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              <div>
                <p className="font-serif font-bold text-accent">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
