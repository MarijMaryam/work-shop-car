function Hero() {
  try {
    const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollToServices = () => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700" data-name="hero" data-file="components/Hero.js">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
          }}
        ></div>
        <div className="absolute inset-0 gradient-overlay"></div>
        
        <div className="relative z-10 container-max text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
            Your Trusted Partner for
            <span className="block text-yellow-400">Automotive Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">
            Professional car workshop services with expert technicians, quality parts, and customer satisfaction guaranteed. From routine maintenance to complex repairs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={scrollToContact} className="btn-primary text-lg px-8 py-4">
              <div className="flex items-center space-x-2">
                <div className="icon-calendar text-xl"></div>
                <span>Book Service Now</span>
              </div>
            </button>
            <button onClick={scrollToServices} className="btn-secondary text-lg px-8 py-4">
              <div className="flex items-center space-x-2">
                <div className="icon-list text-xl"></div>
                <span>View Our Services</span>
              </div>
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="icon-shield-check text-xl text-blue-900"></div>
              </div>
              <div className="text-left">
                <div className="font-semibold">Certified Technicians</div>
                <div className="text-blue-200">Expert professionals</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="icon-clock text-xl text-blue-900"></div>
              </div>
              <div className="text-left">
                <div className="font-semibold">Quick Service</div>
                <div className="text-blue-200">Fast turnaround</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="icon-award text-xl text-blue-900"></div>
              </div>
              <div className="text-left">
                <div className="font-semibold">Quality Guarantee</div>
                <div className="text-blue-200">100% satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="icon-chevron-down text-2xl"></div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}