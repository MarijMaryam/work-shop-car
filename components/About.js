function About() {
  try {
    const team = [
      {
        name: "Mike Johnson",
        role: "Master Technician & Owner",
        experience: "25+ years",
        certifications: "ASE Master Certified",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Sarah Davis",
        role: "Engine Specialist",
        experience: "15+ years",
        certifications: "ASE Engine Performance",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Carlos Rodriguez",
        role: "Brake & Suspension Expert",
        experience: "12+ years",
        certifications: "ASE Brakes & Suspension",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    ];

    return (
      <section id="about" className="section-padding bg-white" data-name="about" data-file="components/About.js">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">About AutoCare Hub</h2>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p className="text-lg">
                  Since 1995, AutoCare Hub has been the trusted choice for automotive excellence in our community. 
                  What started as a small family business has grown into a full-service automotive center, 
                  but we've never lost sight of our core values.
                </p>
                <p>
                  Our mission is simple: provide honest, reliable, and professional automotive services that 
                  keep you and your family safe on the road. We believe in transparent communication, 
                  fair pricing, and quality workmanship that stands the test of time.
                </p>
                <p>
                  Every vehicle that enters our shop receives the same careful attention we'd give our own family's cars. 
                  That's the AutoCare Hub difference.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="AutoCare Hub Workshop"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--primary-color)] text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-12">Our Values & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-heart text-2xl text-green-600"></div>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Honesty First</h4>
                <p className="text-[var(--text-secondary)] text-sm">Transparent pricing and honest recommendations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-award text-2xl text-blue-600"></div>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Quality Work</h4>
                <p className="text-[var(--text-secondary)] text-sm">Premium parts and expert craftsmanship</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-users text-2xl text-purple-600"></div>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Customer Focus</h4>
                <p className="text-[var(--text-secondary)] text-sm">Your satisfaction is our top priority</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-shield text-2xl text-orange-600"></div>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">ASE Certified</h4>
                <p className="text-[var(--text-secondary)] text-sm">Nationally recognized certifications</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-12">Meet Our Expert Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="card text-center">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{member.name}</h4>
                  <p className="text-[var(--primary-color)] font-medium mb-2">{member.role}</p>
                  <div className="space-y-1 text-sm text-[var(--text-secondary)]">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="icon-calendar text-sm"></div>
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="icon-badge text-sm"></div>
                      <span>{member.certifications}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}