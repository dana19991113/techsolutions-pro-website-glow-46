import { Users, Award, Globe, Heart, Target, Eye, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveChat from '@/components/LiveChat';

const AboutPage = () => {
  const achievements = [
    {
      icon: Users,
      number: "50+",
      label: "Expert Team Members",
      description: "Skilled professionals across various technologies"
    },
    {
      icon: Award,
      number: "500+",
      label: "Successful Projects",
      description: "Delivered with excellence and on time"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    },
    {
      icon: Heart,
      number: "99%",
      label: "Client Satisfaction",
      description: "Measured through continuous feedback"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      experience: "15+ years in tech leadership",
      image: "photo-1494790108755-2616b612b786"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      experience: "12+ years in software architecture",
      image: "photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Emily Davis",
      role: "Head of Design",
      experience: "10+ years in UX/UI design",
      image: "photo-1438761681033-6461ffad8d80"
    },
    {
      name: "David Rodriguez",
      role: "Lead Developer",
      experience: "8+ years in full-stack development",
      image: "photo-1500648767791-00dcc994a43e"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">About TechSolutions Pro</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Leading <span className="gradient-text">Innovation</span>
            <br />
            Since <span className="gradient-text">2010</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to transforming businesses 
            through innovative digital solutions and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010 with a vision to bridge the gap between cutting-edge technology 
                  and real-world business solutions, TechSolutions Pro has grown from a small startup 
                  to a globally recognized technology partner.
                </p>

                <p>
                  Our journey began when our founders, experienced software engineers from leading 
                  tech companies, noticed that many businesses struggled to implement effective 
                  digital solutions. They set out to create a company that would combine technical 
                  excellence with genuine business understanding.
                </p>

                <p>
                  Today, we serve clients across 25+ countries, have delivered 500+ successful 
                  projects, and maintain a 99% client satisfaction rate. Our secret? We treat 
                  every project as if it were our own business.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up animation-delay-400">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 text-center card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>
                  
                  <div className="font-semibold mb-2">
                    {achievement.label}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Mission",
                description: "To empower businesses worldwide with innovative technology solutions that drive digital transformation and create sustainable competitive advantages."
              },
              {
                icon: Eye,
                title: "Vision",
                description: "To be the world's most trusted technology partner, known for exceptional innovation, reliability, and client success."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible, embracing new technologies and methodologies to deliver cutting-edge solutions."
              }
            ].map((value, index) => (
              <div key={index} className="glass rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The brilliant minds behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center card-hover">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${member.image}?w=200&h=200&fit=crop&crop=face`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
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

export default AboutPage;