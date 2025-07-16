import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveChat from '@/components/LiveChat';
import Map from '@/components/Map';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: '', email: '', company: '', phone: '', service: '', budget: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "contact@techsolutionspro.com",
      description: "Send us an email anytime",
      link: "mailto:contact@techsolutionspro.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Tech Street, Innovation City",
      description: "Our headquarters location",
      link: "https://maps.google.com"
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Tech Street, Innovation City, NY 10001",
      phone: "+1 (555) 123-4567",
      timezone: "EST"
    },
    {
      city: "London",
      address: "456 Innovation Ave, London, UK EC1A 1BB",
      phone: "+44 20 7123 4567",
      timezone: "GMT"
    },
    {
      city: "Tokyo",
      address: "789 Tech Tower, Shibuya, Tokyo 150-0002",
      phone: "+81 3-1234-5678",
      timezone: "JST"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-secondary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's Start Your <span className="gradient-text">Project</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with innovative technology solutions? 
            Get in touch with our experts today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Contact */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="glass rounded-2xl p-6 card-hover animate-fade-in-up block group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{info.title}</h3>
                    <p className="font-semibold text-primary mb-1">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="glass rounded-2xl p-6 animate-fade-in-up animation-delay-400">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-primary">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-primary">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="glass rounded-2xl p-6 animate-fade-in-up animation-delay-600">
                <h3 className="font-bold text-lg mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  {[
                    "Free initial consultation",
                    "24/7 expert support",
                    "Transparent pricing",
                    "Guaranteed project delivery",
                    "Money-back guarantee"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8 animate-fade-in-up animation-delay-200">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="glass border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        className="glass border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="glass border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="glass border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full glass border-border/50 focus:border-primary rounded-md px-3 py-2 bg-background"
                      >
                        <option value="">Select a service</option>
                        <option value="custom-software">Custom Software Development</option>
                        <option value="cloud-infrastructure">Cloud Infrastructure</option>
                        <option value="cybersecurity">Cybersecurity Solutions</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="data-analytics">Data Analytics & AI</option>
                        <option value="digital-transformation">Digital Transformation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full glass border-border/50 focus:border-primary rounded-md px-3 py-2 bg-background"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, goals, timeline, and any specific challenges you're facing..."
                      rows={6}
                      className="glass border-border/50 focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient text-primary-foreground px-8 py-6 text-lg rounded-full w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Find <span className="gradient-text">Our Office</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at our headquarters or connect with our global team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Map />
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Our Global Offices</h3>
              
              {offices.map((office, index) => (
                <div key={index} className="glass rounded-xl p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{office.city}</h4>
                      <p className="text-muted-foreground mb-2">{office.address}</p>
                      <p className="text-sm text-primary font-semibold mb-1">{office.phone}</p>
                      <p className="text-xs text-muted-foreground">Timezone: {office.timezone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChat />
    </div>
  );
};

export default ContactPage;