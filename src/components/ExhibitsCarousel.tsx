
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ExhibitImage = {
  src: string;
  alt: string;
  description: string;
};

const ExhibitsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const exhibitImages: ExhibitImage[] = [
    {
      src: "/lovable-uploads/df4c7574-0232-4d6b-860e-3aef726b6cff.png",
      alt: "James Bond pinball machine in museum",
      description: "Classic James Bond pinball machine on display at the 007 Museum entrance",
    },
    {
      src: "/lovable-uploads/76bc8432-a51e-4603-93f7-4ce976c1da6e.png",
      alt: "BMW Z3 from GoldenEye outside the 007 Museum",
      description: "The iconic BMW Z3 from GoldenEye (1995) displayed outside the museum",
    },
    {
      src: "/lovable-uploads/54c7b78a-3fce-4ff4-b652-ba6550ef7140.png",
      alt: "Aston Martin with James Bond actors",
      description: "The legendary Aston Martin V8 with Bond actors at a special exhibition",
    },
    {
      src: "/lovable-uploads/bdf4f5f3-fd68-4cf6-b4af-628bbbbea28b.png",
      alt: "The Other Fellow movie poster",
      description: "Special exhibition featuring 'The Other Fellow' - a film about real men named James Bond",
    },
    {
      src: "/lovable-uploads/92d895a7-2a6f-4132-b517-a9d53803a366.png",
      alt: "007 Leica D-Lux 7 Camera",
      description: "Limited edition 007 Leica D-Lux 7 Camera with official Museum certificate",
    },
    {
      src: "/lovable-uploads/d959eb6f-8342-410a-b3fa-7b5083e71b15.png",
      alt: "BMW motorcycle from Tomorrow Never Dies",
      description: "BMW R1200 motorcycle from 'Tomorrow Never Dies' with original movie posters",
    },
    {
      src: "/lovable-uploads/e7edc2a0-cb14-45f2-925e-c4c742245cc4.png",
      alt: "Triumph motorcycle from Bond films",
      description: "Triumph motorcycle featured in recent Bond films against original movie posters",
    },
    {
      src: "/lovable-uploads/fe1d59b6-ed7e-4137-8245-76a99caa4290.png",
      alt: "Limited edition 007 guitar",
      description: "Exclusive 007-themed Duesenberg guitar with gun barrel design and certificate of authenticity",
    },
    {
      src: "/lovable-uploads/0c351abf-b99f-4706-a256-eb74ae3c32ad.png",
      alt: "Museum floor plan",
      description: "Interactive floor plan of the 007 Museum showing all 26 exhibit areas",
    },
    {
      src: "/lovable-uploads/829a14a6-b481-41c8-a387-134b048d6122.png",
      alt: "007 Museum brochure",
      description: "Official museum brochure showing location details and featured exhibits",
    },
  ];

  const handlePrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? exhibitImages.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) =>
      current === exhibitImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="w-full">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {exhibitImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="overflow-hidden rounded-lg border border-border">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                  <div className="bg-card/80 backdrop-blur-sm p-4">
                    <p className="text-sm text-card-foreground">{image.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-end gap-2 mt-4">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default ExhibitsCarousel;
