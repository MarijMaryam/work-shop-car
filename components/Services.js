function Services() {
  try {
    const services = [
      {
        category: "Routine Maintenance",
        icon: "settings",
        services: [
          { name: "Oil Change & Filter", description: "Regular oil changes to keep your engine running smoothly", price: "Starting from $39" },
          { name: "Tire Rotation & Balance", description: "Extend tire life and improve vehicle handling", price: "Starting from $49" },
          { name: "Brake Inspection", description: "Comprehensive brake system safety check", price: "Starting from $29" }
        ]
      },
      {
        category: "Engine Diagnostics & Repair",
        icon: "cpu",
        services: [
          { name: "Computer Diagnostics", description: "Advanced diagnostic tools to identify engine issues", price: "Starting from $89" },
          { name: "Engine Tune-Up", description: "Complete engine optimization for peak performance", price: "Starting from $149" },
          { name: "Transmission Service", description: "Transmission fluid change and system inspection", price: "Quote Required" }
        ]
      },
      {
        category: "Brakes & Suspension",
        icon: "disc",
        services: [
          { name: "Brake Pad Replacement", description: "High-quality brake pads for optimal stopping power", price: "Starting from $129" },
          { name: "Suspension Repair", description: "Shock and strut replacement for smooth ride", price: "Quote Required" },
          { name: "Wheel Alignment", description: "Precise alignment for even tire wear", price: "Starting from $79" }
        ]
      },
      {
        category: "Bodywork & Paint",
        icon: "palette",
        services: [
          { name: "Dent Repair", description: "Professional dent removal and body work", price: "Quote Required" },
          { name: "Paint Touch-Up", description: "Color-matched paint repair for scratches", price: "Starting from $99" },
          { name: "Collision Repair", description: "Complete accident damage restoration", price: "Quote Required" }
        ]
      }
    ];

    return (
      <section id="services" className="section-padding bg-[var(--secondary-color)]" data-name="services" data-file="components/Services.js">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Our Professional Services</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              From routine maintenance to complex repairs, we provide comprehensive automotive services 
              with transparent pricing and quality guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((category, index) => (
              <div key={index} className="service-card">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <div className={`icon-${category.icon} text-xl text-white`}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-l-4 border-[var(--primary-color)] pl-4 py-2">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-[var(--text-primary)]">{service.name}</h4>
                        <span className="text-[var(--primary-color)] font-semibold text-sm">{service.price}</span>
                      </div>
                      <p className="text-[var(--text-secondary)] text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="icon-info text-xl text-yellow-600"></div>
                <h3 className="font-semibold text-yellow-800">Need a Custom Quote?</h3>
              </div>
              <p className="text-yellow-700 mb-4">
                Every vehicle is unique. Contact us for a personalized quote based on your specific needs.
              </p>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    return null;
  }
}