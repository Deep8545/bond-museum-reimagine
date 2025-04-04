
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, History, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-top">
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl bond-header mb-6">
              About the <span className="text-primary">007</span> Museum
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              The world's most comprehensive collection of James Bond memorabilia and artifacts, dedicated to preserving the legacy of 007.
            </p>
          </div>
        </div>
      </section>
      
      {/* Museum History */}
      <section className="py-16">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl bond-header mb-6">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                Founded in 2008 by Gunnar Schäfer, the 007 Museum in Nybro is the only James Bond museum in the world. Born from a deep passion for Ian Fleming's iconic character, our museum has grown to become an international destination for Bond enthusiasts.
              </p>
              <p className="mb-4 text-muted-foreground">
                What began as a personal collection has evolved into a comprehensive archive spanning all 25 official Bond films, from Dr. No to No Time to Die, along with literary works and video games in the franchise.
              </p>
              <p className="mb-6 text-muted-foreground">
                Today, we proudly display hundreds of original props, vehicles, costumes, and production materials that tell the story of one of cinema's most enduring heroes.
              </p>
              <div className="flex gap-4">
                <Link to="#founder" className="spy-link text-sm">MEET OUR FOUNDER</Link>
                <Link to="#timeline" className="spy-link text-sm">VIEW TIMELINE</Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-lg overflow-hidden border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                  alt="007 Museum Exterior" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg border border-border shadow-lg">
                <p className="text-primary font-heading font-bold text-4xl">15+</p>
                <p className="text-sm text-muted-foreground">YEARS OF HISTORY</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-accent">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl bond-header mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We are dedicated to preserving and celebrating the cultural impact of James Bond through education, exhibition, and engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full mb-4">
                <History className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Preservation</h3>
              <p className="text-muted-foreground">
                We safeguard original Bond artifacts for future generations, maintaining their historical integrity.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full mb-4">
                <Award className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in our exhibitions, research, and visitor experience.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full mb-4">
                <Users className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground">
                We foster a global community of Bond enthusiasts through events, forums, and shared experiences.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full mb-4">
                <Star className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace innovative presentation methods and technologies to enhance the visitor experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section id="founder" className="py-16">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl bond-header mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate experts who make the 007 Museum possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border border-border">
              <div className="h-80">
                <img 
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                  alt="Gunnar Schäfer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Gunnar Schäfer</h3>
                <p className="text-primary mb-4">Founder & Director</p>
                <p className="text-muted-foreground mb-4">
                  A lifelong Bond aficionado who turned his passion into the world's only dedicated 007 museum.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden border border-border">
              <div className="h-80">
                <img 
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                  alt="Maria Johansson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Maria Johansson</h3>
                <p className="text-primary mb-4">Head Curator</p>
                <p className="text-muted-foreground mb-4">
                  Film historian and preservation specialist with expertise in cinematic props and memorabilia.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden border border-border">
              <div className="h-80">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Erik Lindberg" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Erik Lindberg</h3>
                <p className="text-primary mb-4">Events & Education Coordinator</p>
                <p className="text-muted-foreground mb-4">
                  Former film industry professional who leads our special events and educational programs.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section id="timeline" className="py-16 bg-accent">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl bond-header mb-4">Museum Timeline</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Key milestones in the history of the 007 Museum.
            </p>
          </div>
          
          <div className="relative border-l border-primary ml-6 md:ml-0 md:mx-auto md:max-w-3xl space-y-12 py-4">
            <div className="relative">
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border border-primary bg-card flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-1">2008</h3>
                <p className="text-primary mb-2">Museum Founded</p>
                <p className="text-muted-foreground">
                  Gunnar Schäfer established the 007 Museum in Nybro, Sweden, opening with a small collection of Bond memorabilia.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border border-primary bg-card flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-1">2012</h3>
                <p className="text-primary mb-2">Skyfall Exhibition</p>
                <p className="text-muted-foreground">
                  The museum celebrated the release of Skyfall with a special exhibition featuring props and costumes from the film.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border border-primary bg-card flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-1">2015</h3>
                <p className="text-primary mb-2">Expansion</p>
                <p className="text-muted-foreground">
                  The museum expanded to a larger location, adding several new exhibits including the iconic vehicle collection.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border border-primary bg-card flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-1">2020</h3>
                <p className="text-primary mb-2">Digital Archive</p>
                <p className="text-muted-foreground">
                  Launched an online digital archive providing global access to the museum's collection and research materials.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border border-primary bg-card flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-1">Present</h3>
                <p className="text-primary mb-2">Ongoing Mission</p>
                <p className="text-muted-foreground">
                  The museum continues to grow, with new acquisitions and special exhibitions celebrating the Bond legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="content-container">
          <div className="bg-card rounded-lg p-8 md:p-12 border border-border">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl bond-header mb-4">Ready to Experience Bond's World?</h2>
                <p className="text-muted-foreground max-w-xl">
                  Plan your visit to the 007 Museum today and immerse yourself in the legendary world of James Bond.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  BOOK TICKETS <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  CONTACT US
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
