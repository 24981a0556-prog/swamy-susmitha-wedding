import { useState, useEffect } from 'react';
import { Heart, Menu, X, Calendar, Camera, User, Film, Clock } from 'lucide-react';
import { RSVP_CONFIG } from '../../data/wedding';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#our-story', icon: Heart },
    { name: 'Events', href: '#wedding-journey', icon: Calendar },
    { name: 'Couple & Family', href: '#meet-the-couple', icon: User },
    { name: 'Film', href: '#pre-wedding-video', icon: Film },
    { name: 'RSVP', href: '#rsvp', icon: Clock },
    { name: 'Gallery', href: '#photo-gallery', icon: Camera },
  ];

  if (!scrolled) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 animate-in fade-in select-none">
      <div className="max-w-5xl mx-auto px-4 py-2.5">
        <div className="rounded-full px-5 py-2 flex items-center justify-between bg-[#fcf8f0]/95 backdrop-blur-md border-2 border-[#c4942e] shadow-lg">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-1.5 group font-royal text-lg tracking-wider text-[#5c0f1c]"
          >
            <span className="font-bold group-hover:text-[#c4942e] transition-colors">S</span>
            <span className="font-accent text-[#c4942e] text-base">&amp;</span>
            <span className="font-bold group-hover:text-[#c4942e] transition-colors">S</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-royal font-semibold text-[#5c0f1c] hover:text-[#c4942e] transition-colors tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick RSVP Action Button */}
          <div className="flex items-center gap-2.5">
            <a
              href={`https://wa.me/${RSVP_CONFIG.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                RSVP_CONFIG.whatsappMessage,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-royal font-bold tracking-wider uppercase text-[#fcf8f0] bg-gradient-to-r from-[#7d1727] via-[#961d31] to-[#7d1727] hover:from-[#5c0f1c] hover:to-[#5c0f1c] border border-[#c4942e] shadow-sm transition-all"
            >
              RSVP
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-1 md:hidden text-[#5c0f1c] hover:text-[#c4942e]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-1 pb-3">
          <div className="rounded-2xl p-4 flex flex-col gap-2 bg-[#fcf8f0] border-2 border-[#c4942e] shadow-2xl">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-royal font-semibold text-[#5c0f1c] hover:bg-[#ede0c4] transition-colors uppercase tracking-wider"
                >
                  <Icon className="w-4 h-4 text-[#c4942e]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <a
              href={`https://wa.me/${RSVP_CONFIG.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                RSVP_CONFIG.whatsappMessage,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center py-2.5 rounded-xl font-royal font-bold text-xs tracking-wider uppercase text-[#fcf8f0] bg-gradient-to-r from-[#7d1727] via-[#961d31] to-[#7d1727] border border-[#c4942e]"
            >
              Confirm on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
