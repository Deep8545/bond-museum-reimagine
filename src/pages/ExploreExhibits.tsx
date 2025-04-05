
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Filter, Search, ChevronRight, ArrowRight, Star, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type ExhibitCategory = 'all' | 'vehicles' | 'gadgets' | 'costumes' | 'memorabilia';

interface Exhibit {
  id: string;
  title: string;
  category: ExhibitCategory;
  description: string;
  image: string;
  featured?: boolean;
}

const ExploreExhibits = () => {
  const [activeCategory, setActiveCategory] = useState<ExhibitCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const exhibits: Exhibit[] = [
    {
      id: '1',
      title: 'Aston Martin DB5',
      category: 'vehicles',
      description: 'The iconic car from Goldfinger (1964), complete with ejector seat and machine guns.',
      image: '/lovable-uploads/df4c7574-0232-4d6b-860e-3aef726b6cff.png',
      featured: true
    },
    {
      id: '2',
      title: 'Golden Gun',
      category: 'gadgets',
      description: 'The signature weapon of Francisco Scaramanga from The Man with the Golden Gun (1974).',
      image: '/lovable-uploads/81b70d35-93a4-455d-8b1c-765b58bef4e4.png',
      featured: true
    },
    {
      id: '3',
      title: 'Walther PPK',
      category: 'gadgets',
      description: 'Bond\'s primary sidearm throughout the majority of the film franchise.',
      image: '/lovable-uploads/f0469ba0-0971-486b-aef6-763122a0d511.png',
      featured: false
    },
    {
      id: '4',
      title: 'Tuxedo from Casino Royale',
      category: 'costumes',
      description: 'The Tom Ford tuxedo worn by Daniel Craig in Casino Royale (2006).',
      image: '/lovable-uploads/92d895a7-2a6f-4132-b517-a9d53803a366.png',
      featured: false
    },
    {
      id: '5',
      title: 'Lotus Esprit S1',
      category: 'vehicles',
      description: 'The submarine car from The Spy Who Loved Me (1977).',
      image: '/lovable-uploads/d5166ac4-8545-45fb-a840-e80eeffda46f.png',
      featured: true
    },
    {
      id: '6',
      title: 'Jaws\' Metal Teeth',
      category: 'memorabilia',
      description: 'The metal teeth worn by Richard Kiel as the character Jaws.',
      image: '/lovable-uploads/03032bcc-1876-4df1-bef8-44609dc8f4c1.png',
      featured: false
    },
    {
      id: '7',
      title: 'Odd Job\'s Hat',
      category: 'gadgets',
      description: 'The deadly razor-rimmed hat used by Odd Job in Goldfinger (1964).',
      image: '/lovable-uploads/d8bc8999-0611-457d-bd4a-31809a44a377.png',
      featured: false
    },
    {
      id: '8',
      title: 'Vesper\'s Dress',
      category: 'costumes',
      description: 'The evening gown worn by Eva Green as Vesper Lynd in Casino Royale (2006).',
      image: '/lovable-uploads/3c191c5e-52b2-47a3-8f6b-87dfbb993735.png',
      featured: false
    }
  ];
  
  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredExhibits = exhibits
    .filter(exhibit => activeCategory === 'all' || exhibit.category === activeCategory)
    .filter(exhibit => 
      exhibit.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      exhibit.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const featuredExhibits = exhibits.filter(exhibit => exhibit.featured);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/d959eb6f-8342-410a-b3fa-7b5083e71b15.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-shadow">
              <span className="text-primary">EXPLORE</span> EXHIBITS
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Discover the world's largest collection of James Bond memorabilia
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group">
                FEATURED EXHIBITS <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                BOOK GUIDED TOUR
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Exhibits */}
      <section className="py-16 bg-secondary/30">
        <div className="content-container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-heading font-bold">
              <span className="text-primary">FEATURED</span> EXHIBITS
            </h2>
            <Button variant="ghost" className="group flex items-center">
              View All <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredExhibits.map((exhibit) => (
              <Card key={exhibit.id} className="overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={exhibit.image} 
                    alt={exhibit.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="bg-background/80 backdrop-blur-sm p-1 rounded-full">
                      <Star className="h-5 w-5 text-primary" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{exhibit.title}</CardTitle>
                    <span className="text-xs uppercase bg-primary/20 text-primary px-2 py-1 rounded">
                      {exhibit.category}
                    </span>
                  </div>
                  <CardDescription>{exhibit.description}</CardDescription>
                </CardHeader>
                
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="default" className="w-full group mr-2">
                    VIEW DETAILS <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={14} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Exhibits Section */}
      <section className="py-16">
        <div className="content-container">
          <div className="mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <h2 className="text-3xl font-heading font-bold">
              <span className="text-primary">ALL</span> EXHIBITS
            </h2>
            
            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                <Button 
                  variant={activeCategory === 'all' ? "default" : "secondary"} 
                  size="sm"
                  onClick={() => setActiveCategory('all')}
                >
                  All
                </Button>
                <Button 
                  variant={activeCategory === 'vehicles' ? "default" : "secondary"} 
                  size="sm"
                  onClick={() => setActiveCategory('vehicles')}
                >
                  Vehicles
                </Button>
                <Button 
                  variant={activeCategory === 'gadgets' ? "default" : "secondary"} 
                  size="sm"
                  onClick={() => setActiveCategory('gadgets')}
                >
                  Gadgets
                </Button>
                <Button 
                  variant={activeCategory === 'costumes' ? "default" : "secondary"} 
                  size="sm"
                  onClick={() => setActiveCategory('costumes')}
                >
                  Costumes
                </Button>
                <Button 
                  variant={activeCategory === 'memorabilia' ? "default" : "secondary"} 
                  size="sm"
                  onClick={() => setActiveCategory('memorabilia')}
                >
                  Memorabilia
                </Button>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search exhibits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 py-2 bg-secondary rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExhibits.map((exhibit) => (
              <Card key={exhibit.id} className="overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={exhibit.image} 
                    alt={exhibit.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <button 
                    onClick={() => toggleFavorite(exhibit.id)}
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-full transition-transform hover:scale-110"
                  >
                    <Heart 
                      className={`h-5 w-5 ${favorites.includes(exhibit.id) ? 'text-red-500 fill-red-500' : 'text-muted-foreground'}`}
                    />
                  </button>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{exhibit.title}</CardTitle>
                    <span className="text-xs uppercase bg-secondary text-muted-foreground px-2 py-0.5 rounded">
                      {exhibit.category}
                    </span>
                  </div>
                  <CardDescription className="line-clamp-2">{exhibit.description}</CardDescription>
                </CardHeader>
                
                <CardFooter className="flex justify-between pt-0">
                  <Button size="sm" variant="secondary" className="w-1/2">
                    <Info className="h-4 w-4 mr-1" /> Details
                  </Button>
                  <Button 
                    size="sm" 
                    variant={favorites.includes(exhibit.id) ? "default" : "outline"} 
                    className="w-1/2 ml-2"
                    onClick={() => toggleFavorite(exhibit.id)}
                  >
                    <Heart className={`h-4 w-4 mr-1 ${favorites.includes(exhibit.id) && 'fill-current'}`} />
                    {favorites.includes(exhibit.id) ? 'Saved' : 'Save'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredExhibits.length === 0 && (
            <div className="text-center py-16">
              <p className="text-2xl text-muted-foreground mb-2">No exhibits found</p>
              <p className="text-muted-foreground">Try adjusting your filters or search query</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[url('/lovable-uploads/d339edcb-b0b9-44ec-830f-c11066a919c4.png')] bg-cover bg-center">
        <div className="content-container relative">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              EXPERIENCE THE <span className="text-primary">LEGACY</span>
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Discover the complete collection of Bond memorabilia with a guided tour from our expert staff.
              Learn fascinating stories and see exclusive items not on public display.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                BOOK A GUIDED TOUR
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/plan-your-visit">PLAN YOUR VISIT</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ExploreExhibits;
