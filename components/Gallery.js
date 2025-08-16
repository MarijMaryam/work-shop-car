function Gallery() {
  try {
    const galleryImages = [
      {
        src: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Modern workshop facility",
        category: "Workshop"
      },
      {
        src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Professional car maintenance",
        category: "Service"
      },
      {
        src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Engine diagnostic equipment",
        category: "Equipment"
      },
      {
        src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Brake repair service",
        category: "Service"
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Clean workshop environment",
        category: "Workshop"
      },
      {
        src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Professional tools and equipment",
        category: "Equipment"
      }
    ];

    return (
      <section id="gallery" className="section-padding bg-white" data-name="gallery" data-file="components/Gallery.js">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Our Workshop Gallery</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Take a look inside our state-of-the-art facility and see the quality equipment and clean environment where we service your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item relative overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="icon-eye text-2xl mb-2"></div>
                    <p className="font-semibold">{image.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-[var(--secondary-color)] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Visit Our Workshop</h3>
              <p className="text-[var(--text-secondary)] mb-6">
                We welcome you to visit our facility and see our professional setup firsthand. 
                Our clean, organized workshop reflects our commitment to quality service.
              </p>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Gallery component error:', error);
    return null;
  }
}