function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      vehicle: '',
      service: '',
      message: ''
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState('');

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', vehicle: '', service: '', message: '' });
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section id="contact" className="section-padding bg-[var(--secondary-color)]" data-name="contact" data-file="components/Contact.js">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Get In Touch</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Ready to schedule your service? Contact us today for a free quote or to book an appointment. 
              We're here to keep your vehicle running at its best.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Send Us a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="icon-check-circle text-green-600"></div>
                    <p className="text-green-700 font-medium">Thank you! We'll contact you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Vehicle (Make, Model, Year)</label>
                  <input
                    type="text"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleInputChange}
                    placeholder="e.g., 2018 Honda Civic"
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="oil-change">Oil Change</option>
                    <option value="brake-service">Brake Service</option>
                    <option value="engine-diagnostics">Engine Diagnostics</option>
                    <option value="transmission">Transmission Service</option>
                    <option value="bodywork">Bodywork & Paint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about your vehicle's needs..."
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="card">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="icon-map-pin text-xl text-[var(--primary-color)] mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Address</h4>
                      <p className="text-[var(--text-secondary)]">123 Main Street<br />Automotive District<br />City, State 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="icon-phone text-xl text-[var(--primary-color)] mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Phone</h4>
                      <p className="text-[var(--text-secondary)]">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="icon-mail text-xl text-[var(--primary-color)] mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Email</h4>
                      <p className="text-[var(--text-secondary)]">info@autocarehub.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="icon-clock text-xl text-[var(--primary-color)] mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Hours</h4>
                      <div className="text-[var(--text-secondary)]">
                        <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}