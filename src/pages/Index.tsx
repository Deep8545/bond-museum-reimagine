import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Car, Ticket, Clock, MapPin, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExhibitsCarousel from '@/components/ExhibitsCarousel';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/fd6d9d66-4cdd-40c5-b3ad-82c23103b5fd.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90"></div>
        </div>
        
        <div className="content-container relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl bond-header mb-6">
              Step Into the World of <span className="text-primary">007</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Explore the official James Bond Museum, featuring authentic props, vehicles, and gadgets from the legendary spy saga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-md" asChild>
                <Link to="/plan-your-visit">
                  PLAN YOUR VISIT <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-md" asChild>
                <Link to="/explore-exhibits">
                  EXPLORE EXHIBITS
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="content-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-card/80 backdrop-blur-md p-4 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">OPENING HOURS</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 10AM-5PM, Sat-Sun: 11AM-4PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Ticket className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">ADMISSION</p>
                  <p className="text-sm text-muted-foreground">Adults: 150 SEK, Children/Seniors: 100 SEK</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">LOCATION</p>
                  <p className="text-sm text-muted-foreground">Nybrogatan 16, 554 39 Jönköping, Sweden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Exhibits */}
      <section className="py-20">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl bond-header mb-4">Featured Exhibits</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Discover our collection of iconic James Bond memorabilia from over 60 years of cinematic history.
            </p>
          </div>

          <div className="mb-16">
            <ExhibitsCarousel />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exhibit Card 1 */}
            <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-300">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="/lovable-uploads/76bc8432-a51e-4603-93f7-4ce976c1da6e.png" 
                  alt="BMW Z3 from James Bond films" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold">Iconic Vehicles</h3>
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">
                  From the legendary Aston Martin DB5 to BMW Z3 from GoldenEye, explore Bond's most famous cars.
                </p>
                <Link to="/gallery" className="text-primary flex items-center text-sm font-medium hover:underline">
                  VIEW COLLECTION <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Exhibit Card 2 */}
            <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-300">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="/lovable-uploads/92d895a7-2a6f-4132-b517-a9d53803a366.png" 
                  alt="007 Leica Camera" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold">Q Branch Gadgets</h3>
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Discover the ingenious spy gadgets that helped 007 save the world time and again.
                </p>
                <Link to="/gallery" className="text-primary flex items-center text-sm font-medium hover:underline">
                  VIEW COLLECTION <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Exhibit Card 3 */}
            <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-300">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="/lovable-uploads/fe1d59b6-ed7e-4137-8245-76a99caa4290.png" 
                  alt="007 Themed Guitar" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold">Movie Memorabilia</h3>
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Original collectibles, limited editions, and rare merchandise from the James Bond film series.
                </p>
                <Link to="/gallery" className="text-primary flex items-center text-sm font-medium hover:underline">
                  VIEW COLLECTION <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery">VIEW ALL EXHIBITS</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Visitor Information */}
      <section className="py-20 bg-accent">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl bond-header mb-4">Plan Your Visit</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know to make the most of your 007 Museum experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-heading font-bold mb-4">Getting Here</h3>
              <p className="text-muted-foreground mb-6">
                The 007 Museum is located in central Nybro, easily accessible by public transportation and private vehicles.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">Emmabodavägen 20, 382 45 Nybro, Sweden</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-muted-foreground">Monday to Friday: 10AM - 5PM</p>
                    <p className="text-muted-foreground">Saturday and Sunday: 11AM - 4PM</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6" asChild>
                <Link to="/plan-your-visit">GET DIRECTIONS</Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-heading font-bold mb-4">Tickets & Admissions</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <p>Adult (18+)</p>
                  <p className="font-medium">150 SEK</p>
                </div>
                <div className="border-t border-border"></div>
                <div className="flex justify-between items-center">
                  <p>Student / Senior (65+)</p>
                  <p className="font-medium">120 SEK</p>
                </div>
                <div className="border-t border-border"></div>
                <div className="flex justify-between items-center">
                  <p>Child (7-17)</p>
                  <p className="font-medium">80 SEK</p>
                </div>
                <div className="border-t border-border"></div>
                <div className="flex justify-between items-center">
                  <p>Family (2 adults + 2 children)</p>
                  <p className="font-medium">350 SEK</p>
                </div>
                <div className="border-t border-border"></div>
                <div className="flex justify-between items-center">
                  <p>Group (10+ people, per person)</p>
                  <p className="font-medium">120 SEK</p>
                </div>
              </div>
              <Button asChild>
                <Link to="/plan-your-visit">BOOK TICKETS ONLINE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/15e77be0-9c86-4ff8-a0e2-f3e4d02eb2ac.png')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl bond-header mb-6">
              Become a Bond Insider
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Join our membership program for exclusive access to special events, preview nights, and behind-the-scenes tours of the 007 Museum.
            </p>
            <Button size="lg" asChild>
              <Link to="/plan-your-visit">JOIN THE PROGRAM</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
