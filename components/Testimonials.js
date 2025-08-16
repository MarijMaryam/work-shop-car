
function Testimonials() {
  try {
    const testimonials = [
      {
        name: "Jennifer Martinez",
        location: "Local Customer",
        rating: 5,
        text: "Outstanding service! Mike and his team fixed my transmission issue quickly and at a fair price. They explained everything clearly and kept me updated throughout the process.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Robert Chen",
        location: "Business Fleet Manager",
        rating: 5,
        text: "We've been bringing our company vehicles to AutoCare Hub for 3 years. Reliable, professional, and they always get our fleet back on the road fast.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Lisa Thompson",
        location: "Satisfied Customer",
        rating: 5,
        text: "Honest mechanics are hard to find, but AutoCare Hub exceeded my expectations. They could have charged me much more but recommended a simple fix instead.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    ];

    return (
      <section id="testimonials" className="section-padding bg-[var(--secondary-color)]" data-name="testimonials" data-file="components/Testimonials.js">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">What Our Customers Say</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued customers have to say about their experience with AutoCare Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="icon-star text-yellow-400 text-lg"></div>
                  ))}
                </div>
                
                <p className="text-[var(--text-secondary)] italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-4xl font-bold text-[var(--primary-color)]">4.9</div>
                <div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="icon-star text-yellow-400 text-xl"></div>
                    ))}
                  </div>
                  <p className="text-[var(--text-secondary)]">Based on 127+ reviews</p>
                </div>
              </div>
              <p className="text-[var(--text-primary)] font-semibold">Trusted by hundreds of satisfied customers</p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    return null;
  }
}
