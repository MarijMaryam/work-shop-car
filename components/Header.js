function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50" data-name="header" data-file="components/Header.js">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-wrench text-xl text-white"></div>
              </div>
              <span className="text-2xl font-bold text-[var(--primary-color)]">AutoCare Hub</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('gallery')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Contact</button>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
                <div className="icon-phone text-lg text-[var(--primary-color)]"></div>
                <span className="font-semibold">(555) 123-4567</span>
              </div>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">Book Service</button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl text-[var(--primary-color)]`}></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[var(--border-color)]">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Services</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">About</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Reviews</button>
                <button onClick={() => scrollToSection('gallery')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Gallery</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Contact</button>
                <div className="pt-4 border-t border-[var(--border-color)]">
                  <div className="flex items-center space-x-2 text-[var(--text-secondary)] mb-4">
                    <div className="icon-phone text-lg text-[var(--primary-color)]"></div>
                    <span className="font-semibold">(555) 123-4567</span>
                  </div>
                  <button onClick={() => scrollToSection('contact')} className="btn-primary w-full">Book Service</button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}