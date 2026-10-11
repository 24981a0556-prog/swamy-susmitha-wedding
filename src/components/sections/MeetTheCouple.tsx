import { COUPLE, FAMILY } from '../../data/wedding';
import { PeacockArch } from '../ui/PeacockArch';
import { TempleCountdown } from '../ui/TempleCountdown';
import { TempleBorder } from '../ui/TempleBorder';
import { ToranGarland } from '../ui/ToranGarland';

export function MeetTheCouple() {
  const brideFamily = FAMILY.filter((f) => f.side === 'bride');
  const groomFamily = FAMILY.filter((f) => f.side === 'groom');

  return (
    <section id="meet-the-couple" className="relative py-12 sm:py-16 bg-kolam-light text-[#420813]">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="font-royal text-xs tracking-[0.25em] text-[#a1761e] font-semibold uppercase mb-1">
            ~ Sacred Union ~
          </p>
          <h2 className="font-accent text-4xl sm:text-5xl md:text-6xl text-[#7d1727]">
            The Bride &amp; Groom
          </h2>
        </div>

        {/* Groom & Bride Peacock Arches Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 max-w-4xl mx-auto mb-16">
          {/* Groom Arch with Peacock */}
          <PeacockArch
            imageSrc={COUPLE.groom.photo}
            imageAlt={COUPLE.groom.fullName}
            name="Potnuru Swamy Patnaik"
            title="SON OF"
            parents="Potnuru Purana Chandara Joshi Patnaik &amp; Rani Patnaik"
            quote="Found my forever partner, best friend, and greatest blessing in you."
            peacockOrientation="left"
          />

          {/* Bride Arch with Peacock */}
          <PeacockArch
            imageSrc={COUPLE.bride.photo}
            imageAlt={COUPLE.bride.fullName}
            name="Pakki Susmitha"
            title="DAUGHTER OF"
            parents="Pakki Shankrao &amp; Sunitha"
            quote="With every beat of my heart, I choose you to walk with me through every lifetime."
            peacockOrientation="right"
          />
        </div>

        {/* Stone Carved Arcade Countdown: OUR MUHURTHAM IN */}
        <TempleCountdown />

        {/* Families Introduction */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-royal text-xs tracking-[0.25em] text-[#a1761e] font-semibold uppercase mb-1">
              ~ Pillars of Love &amp; Blessings ~
            </p>
            <h3 className="font-display text-2xl sm:text-3xl text-[#5c0f1c] font-semibold">
              Our Loving Families
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Bride's Family */}
            <div className="p-6 rounded-2xl bg-[#fefdfa] border-2 border-[#c4942e]/50 shadow-md">
              <h4 className="font-royal text-sm sm:text-base font-bold tracking-wider text-[#7d1727] uppercase pb-3 mb-4 border-b border-[#c4942e]/30 flex items-center justify-between">
                <span>Bride&apos;s Family</span>
                <span className="text-xs text-[#a1761e]">✦</span>
              </h4>
              <div className="space-y-3">
                {brideFamily.map((member) => (
                  <div key={member.name} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-display font-medium text-[#420813]">{member.name}</span>
                    <span className="text-[#a1761e] italic font-light">{member.relationship}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Groom's Family */}
            <div className="p-6 rounded-2xl bg-[#fefdfa] border-2 border-[#c4942e]/50 shadow-md">
              <h4 className="font-royal text-sm sm:text-base font-bold tracking-wider text-[#7d1727] uppercase pb-3 mb-4 border-b border-[#c4942e]/30 flex items-center justify-between">
                <span>Groom&apos;s Family</span>
                <span className="text-xs text-[#a1761e]">✦</span>
              </h4>
              <div className="space-y-3">
                {groomFamily.map((member) => (
                  <div key={member.name} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-display font-medium text-[#420813]">{member.name}</span>
                    <span className="text-[#a1761e] italic font-light">{member.relationship}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <TempleBorder />
        <ToranGarland />
      </div>
    </section>
  );
}
