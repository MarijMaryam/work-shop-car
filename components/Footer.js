function Footer() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <footer className="bg-gray-900 text-white" data-name="footer" data-file="components/Footer.js">
        <div className="container-max">
          <div className="section-padding">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-wrench text-xl text-white"></div>
                  </div>
                  <span className="text-2xl font-bold">AutoCare Hub</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Your trusted partner for automotive excellence since 1995. Professional car workshop services 
                  with expert technicians and quality guaranteed.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors cursor-pointer">
                    <div className="icon-facebook text-lg"></div>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors cursor-pointer">
                    <div className="icon-twitter text-lg"></div>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors cursor-pointer">
                    <div className="icon-instagram text-lg"></div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
                  <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                  <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                  <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors">Reviews</button></li>
                  <li><button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-white transition-colors">Gallery</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="icon-phone text-sm text-[var(--primary-color)]"></div>
                    <span className="text-gray-400">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="icon-mail text-sm text-[var(--primary-color)]"></div>
                    <span className="text-gray-400">info@autocarehub.com</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="icon-map-pin text-sm text-[var(--primary-color)] mt-1"></div>
                    <span className="text-gray-400">123 Main Street<br />City, State 12345</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 AutoCare Hub. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Warranty</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}