export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">About Dr Ehi Spell Caster</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-surface rounded-lg p-8 border border-accent/20">
            <div className="text-center">
              <div className="text-8xl mb-4">👤</div>
              <h3 className="text-2xl font-serif font-bold text-accent mb-4">
                Dr Ehi Spell Caster
              </h3>
              <p className="text-muted">Spiritual Guide & Master Practitioner</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted leading-relaxed">
              With over 25 years of dedicated spiritual practice, Dr Ehi Spell Caster has become a beacon of hope and transformation for thousands of seekers worldwide. My journey began in childhood when I discovered my natural connection to the spiritual realm.
            </p>

            <p className="text-lg text-muted leading-relaxed">
              Through rigorous study of ancient mystical traditions, meditation practices, and energy work, I have developed a unique approach to spell casting that honors both traditional wisdom and modern understanding. My methods are rooted in authenticity, compassion, and respect for the free will of all beings.
            </p>

            <p className="text-lg text-muted leading-relaxed">
              Every client is treated with the utmost care and confidentiality. I don't believe in quick fixes—instead, I work with clients to create lasting transformation through spiritual alignment and empowerment.
            </p>

            <div className="pt-4">
              <h4 className="text-accent font-serif font-bold mb-3">Specializations:</h4>
              <ul className="space-y-2 text-muted">
                <li>✓ Advanced Love Spell Casting</li>
                <li>✓ Wealth Manifestation Rituals</li>
                <li>✓ Energy Healing & Cleansing</li>
                <li>✓ Spiritual Guidance & Counseling</li>
                <li>✓ Protection & Removal Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
