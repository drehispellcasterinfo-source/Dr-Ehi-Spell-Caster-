export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-surface">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 text-6xl animate-pulse">✨</div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance">
          Transform Your <span className="text-accent">Destiny</span>
        </h1>
        
        <p className="text-xl text-muted mb-8 text-balance max-w-2xl mx-auto">
          Welcome to the mystical realm of Dr Ehi Spell Caster. With decades of spiritual expertise, I channel ancient wisdom to guide you through life's challenges and unlock your true potential.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">Book a Consultation</button>
          <button className="btn-secondary">Learn More</button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8">
          <div>
            <div className="text-3xl text-accent mb-2">25+</div>
            <p className="text-muted">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl text-accent mb-2">5000+</div>
            <p className="text-muted">Lives Transformed</p>
          </div>
          <div>
            <div className="text-3xl text-accent mb-2">100%</div>
            <p className="text-muted">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
