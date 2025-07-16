import { ArrowRight, Code, Cloud, Shield, Smartphone, Database, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveChat from '@/components/LiveChat';

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to meet your specific business requirements.",
      features: ["Full-Stack Development", "API Integration", "Modern Frameworks", "Scalable Architecture"],
      price: "Starting from $15,000"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud solutions that grow with your business and ensure maximum uptime.",
      features: ["AWS/Azure/GCP", "Auto-scaling", "Load Balancing", "Disaster Recovery"],
      price: "Starting from $5,000/month"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security measures to protect your digital assets and ensure compliance.",
      features: ["Security Audits", "Threat Detection", "Data Encryption", "Compliance Management"],
      price: "Starting from $8,000"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"],
      price: "Starting from $25,000"
    },
    {
      icon: Database,
      title: "Data Analytics & AI",
      description: "Turn your data into actionable insights with advanced analytics and machine learning.",
      features: ["Business Intelligence", "Machine Learning", "Data Visualization", "Predictive Analytics"],
      price: "Starting from $12,000"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Strategic guidance to modernize your business processes and embrace digital innovation.",
      features: ["Process Automation", "Legacy System Migration", "Digital Strategy", "Change Management"],
      price: "Starting from $20,000"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Professional Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Technology</span> Services
            <br />
            That <span className="gradient-text">Scale</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From custom software development to digital transformation, we provide comprehensive 
            technology services that drive innovation and business growth.
          </p>

          <Button className="btn-gradient text-primary-foreground px-8 py-4 rounded-full">
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl p-8 card-hover group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-lg font-bold text-primary mb-4">
                  {service.price}
                </div>

                <Button 
                  variant="ghost" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all w-full"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap" },
              { step: "03", title: "Development", description: "Building with best practices" },
              { step: "04", title: "Delivery", description: "Launch and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <LiveChat />
    </div>
  );
};

export default ServicesPage;