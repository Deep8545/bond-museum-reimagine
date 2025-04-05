import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, CreditCard, Info, Check, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PlanYourVisit = () => {
  const [activeTicket, setActiveTicket] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/dbe945ef-58be-4174-a444-d8c037ab5b35.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-shadow">
              <span className="text-primary">PLAN YOUR</span> VISIT
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Your mission briefing for the ultimate James Bond experience
            </p>
            <Button size="lg" className="group">
              BOOK YOUR VISIT NOW
              <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Museum Timings & Address Section */}
      <section className="py-16 bg-secondary/30">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6 flex items-center">
                  <Clock className="text-primary mr-3" size={28} />
                  MUSEUM HOURS
                </h2>
                <div className="space-y-3 text-lg">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Saturday - Sunday</span>
                    <span className="font-medium">11:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Public Holidays</span>
                    <span className="font-medium">11:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-primary/90 pt-1">
                    <span>Last Entry</span>
                    <span className="font-medium">1 hour before closing</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6 flex items-center">
                  <MapPin className="text-primary mr-3" size={28} />
                  LOCATION
                </h2>
                <address className="not-italic text-lg space-y-2">
                  <p>007 Museum</p>
                  <p>Emmabodavägen 20</p>
                  <p>382 45 Nybro, Sweden</p>
                  <p className="pt-3">
                    <span className="font-medium text-primary">Phone:</span> +46 (0)491-129-50
                  </p>
                  <p>
                    <span className="font-medium text-primary">Email:</span> info@007museum.com
                  </p>
                </address>
              </div>
            </div>
            
            <div className="h-[400px] lg:h-full rounded-lg overflow-hidden border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2157.1833316136085!2d15.907418315787449!3d56.74183798060893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4657cc6c3f3f4bad%3A0xfde2c012b27ac797!2sNybro%20Glasbruk!5e0!3m2!1sen!2sus!4v1649261702764!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="007 Museum Location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Ticket Pricing Section */}
      <section className="py-16 bg-card-gradient">
        <div className="content-container">
          <h2 className="text-3xl font-heading font-bold mb-2 text-center">
            <span className="text-primary">ADMISSION</span> PRICES
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Choose your mission level. All tickets include access to permanent and temporary exhibits, 
            guided tour options, and our interactive Q Branch experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: 'Adult', price: '£20', details: 'Ages 18-64', description: 'Full museum access with digital guidebook' },
              { type: 'Student', price: '£15', details: 'Valid ID required', description: 'Same benefits as adult ticket' },
              { type: 'Child', price: '£10', details: 'Ages 6-17', description: 'Kid-friendly interactive exhibits' },
              { type: 'Senior', price: '£15', details: 'Ages 65+', description: 'Full access with priority queuing' }
            ].map((ticket) => (
              <Card 
                key={ticket.type}
                className={`border-2 transition-all duration-300 ${activeTicket === ticket.type ? 'border-primary bg-accent' : 'hover:border-primary/50'}`}
                onClick={() => setActiveTicket(ticket.type)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-heading">{ticket.type}</CardTitle>
                  <CardDescription>{ticket.details}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary mb-4">{ticket.price}</p>
                  <p className="text-sm text-muted-foreground">{ticket.description}</p>
                  <Button 
                    className={`w-full mt-4 ${activeTicket === ticket.type ? 'bg-primary' : 'bg-secondary'}`}
                    variant={activeTicket === ticket.type ? "default" : "secondary"}
                  >
                    {activeTicket === ticket.type ? 'Selected' : 'Select'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">Special group rates available for 10+ visitors</p>
            <Button size="lg" variant="default">
              BOOK YOUR TICKETS
            </Button>
          </div>
        </div>
      </section>
      
      {/* Visit Guidelines Section */}
      <section className="py-16 bg-secondary/20">
        <div className="content-container">
          <h2 className="text-3xl font-heading font-bold mb-2 text-center flex items-center justify-center">
            <Info className="text-primary mr-3" />
            VISIT GUIDELINES
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            To ensure an optimal experience for all visitors, please review our museum guidelines
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle>Photography & Recording</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Photography is permitted in most areas for personal use only</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>No flash photography, tripods, or professional equipment without prior permission</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Photography is prohibited in specially marked exhibit areas</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Commercial photography requires advance written permission</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle>Accessibility Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>The museum is fully wheelchair accessible with elevators to all levels</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Wheelchair rental is available free of charge (reservation recommended)</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Audio guides with descriptive content for visually impaired visitors</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Service animals are welcome throughout the museum</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle>General Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>No food or drinks in the exhibition areas</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Large bags and backpacks must be stored in lockers</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Please refrain from touching exhibits unless explicitly permitted</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Children under 12 must be accompanied by an adult</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle>Additional Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Audio guides available in 8 languages (£5 rental fee)</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Guided tours at 11:00 AM and 2:00 PM daily</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Museum café serving light refreshments and Bond-themed cocktails</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <p>Gift shop with exclusive 007 merchandise</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Updated background image here */}
      <section className="py-20 bg-[url('/lovable-uploads/f0469ba0-0971-486b-aef6-763122a0d511.png')] bg-cover bg-center">
        <div className="content-container relative">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              YOUR <span className="text-primary">MISSION</span> AWAITS
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Experience the thrill of the James Bond universe with exclusive exhibits, 
              iconic props, and immersive experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                BOOK YOUR VISIT NOW
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/contact">CONTACT US</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PlanYourVisit;
