const testimonials = [
  {
    id: 1,
    videoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vdfr_1783692173120-b9PtFdgi5aZyLjbOqqdRuP8OMax8O4.mp4",
  },
  {
    id: 2,
    videoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vdfr_1784204852227-5SW1bKRZwVfjqft8OHVR8LkaPDYLqp.mp4",
  },
  {
    id: 3,
    videoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vdfr_1783788647882-kTn4RjjtUCcogODTzt6dWCSKaWiNWq.mp4",
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
              className="bg-background rounded-lg border border-accent/20 hover:border-accent/50 transition-all overflow-hidden"
            >
              <video
                src={testimonial.videoUrl}
                controls
                className="w-full aspect-video bg-black"
                controlsList="nodownload"
              />
              <div className="p-4">
                <p className="text-sm text-muted text-center">
                  Client Testimonial
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
