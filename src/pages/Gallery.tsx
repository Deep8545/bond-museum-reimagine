
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExhibitsCarousel from "@/components/ExhibitsCarousel";

const CATEGORY_ALL = "all";
const CATEGORY_VEHICLES = "vehicles";
const CATEGORY_GADGETS = "gadgets";
const CATEGORY_MEMORABILIA = "memorabilia";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string[];
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORY_ALL);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/lovable-uploads/76bc8432-a51e-4603-93f7-4ce976c1da6e.png",
      alt: "BMW Z3 outside 007 Museum",
      title: "BMW Z3 from GoldenEye",
      description: "The BMW Z3 featured in GoldenEye (1995) was James Bond's first BMW, representing the brand's 007 partnership.",
      category: [CATEGORY_VEHICLES],
    },
    {
      id: 2,
      src: "/lovable-uploads/54c7b78a-3fce-4ff4-b652-ba6550ef7140.png",
      alt: "Aston Martin with Bond actors",
      title: "Aston Martin V8 Vantage",
      description: "The iconic Aston Martin with James Bond actors at a special exhibition outside the museum.",
      category: [CATEGORY_VEHICLES],
    },
    {
      id: 3,
      src: "/lovable-uploads/df4c7574-0232-4d6b-860e-3aef726b6cff.png",
      alt: "James Bond pinball machine",
      title: "007 Pinball Machine",
      description: "A classic James Bond themed pinball machine featuring iconic characters from the franchise.",
      category: [CATEGORY_MEMORABILIA],
    },
    {
      id: 4,
      src: "/lovable-uploads/92d895a7-2a6f-4132-b517-a9d53803a366.png",
      alt: "007 Leica D-Lux 7 Camera",
      title: "Limited Edition 007 Leica Camera",
      description: "Exclusive Leica D-Lux 7 Camera with 007 branding and official certificate of authenticity.",
      category: [CATEGORY_GADGETS],
    },
    {
      id: 5,
      src: "/lovable-uploads/d959eb6f-8342-410a-b3fa-7b5083e71b15.png",
      alt: "BMW motorcycle from Tomorrow Never Dies",
      title: "BMW R1200 Motorcycle",
      description: "The BMW motorcycle featured in 'Tomorrow Never Dies' displayed with original movie posters.",
      category: [CATEGORY_VEHICLES],
    },
    {
      id: 6,
      src: "/lovable-uploads/e7edc2a0-cb14-45f2-925e-c4c742245cc4.png",
      alt: "Triumph motorcycle",
      title: "Triumph Speed Triple",
      description: "A Triumph motorcycle featured in recent Bond films, on display with film promotional materials.",
      category: [CATEGORY_VEHICLES],
    },
    {
      id: 7,
      src: "/lovable-uploads/fe1d59b6-ed7e-4137-8245-76a99caa4290.png",
      alt: "007 guitar",
      title: "Limited Edition 007 Duesenberg Guitar",
      description: "Exclusive James Bond themed guitar featuring the iconic gun barrel design and certificate of authenticity.",
      category: [CATEGORY_MEMORABILIA],
    },
    {
      id: 8,
      src: "/lovable-uploads/bdf4f5f3-fd68-4cf6-b4af-628bbbbea28b.png",
      alt: "The Other Fellow movie poster",
      title: "'The Other Fellow' Exhibition",
      description: "A special exhibition featuring the documentary about real men named James Bond.",
      category: [CATEGORY_MEMORABILIA],
    },
  ];

  const filteredItems = galleryItems.filter(
    item => activeCategory === CATEGORY_ALL || item.category.includes(activeCategory)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="content-container">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl bond-header mb-4">Exhibit Gallery</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of authentic James Bond memorabilia, vehicles, and gadgets from over 60 years of 007 films.
            </p>
          </div>

          <div className="mb-12">
            <ExhibitsCarousel />
          </div>

          <div className="mb-8">
            <Tabs defaultValue={CATEGORY_ALL} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-xl">
                  <TabsTrigger 
                    value={CATEGORY_ALL}
                    onClick={() => setActiveCategory(CATEGORY_ALL)}
                  >
                    All Exhibits
                  </TabsTrigger>
                  <TabsTrigger 
                    value={CATEGORY_VEHICLES}
                    onClick={() => setActiveCategory(CATEGORY_VEHICLES)}
                  >
                    Vehicles
                  </TabsTrigger>
                  <TabsTrigger 
                    value={CATEGORY_GADGETS}
                    onClick={() => setActiveCategory(CATEGORY_GADGETS)}
                  >
                    Gadgets
                  </TabsTrigger>
                  <TabsTrigger 
                    value={CATEGORY_MEMORABILIA}
                    onClick={() => setActiveCategory(CATEGORY_MEMORABILIA)}
                  >
                    Memorabilia
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeCategory} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-300"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <AspectRatio ratio={4/3}>
                          <img 
                            src={item.src} 
                            alt={item.alt} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Our museum constantly updates its exhibits. Visit us in person to see even more Bond memorabilia!
            </p>
            <Button size="lg">PLAN YOUR VISIT</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
