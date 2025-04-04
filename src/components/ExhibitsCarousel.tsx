
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
    // Original images
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
    // New images from the first set
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
    // New images from the second set
    {
      src: "/lovable-uploads/03032bcc-1876-4df1-bef8-44609dc8f4c1.png",
      alt: "Daniel Craig as James Bond with Aston Martin DB5",
      description: "Daniel Craig standing beside the iconic Aston Martin DB5 from Skyfall",
    },
    {
      src: "/lovable-uploads/b197d2f3-d899-4d84-988d-10481fafa152.png",
      alt: "The Golden Gun prop",
      description: "The famous golden gun prop from 'The Man with the Golden Gun' (1974) with promotional poster",
    },
    {
      src: "/lovable-uploads/15e77be0-9c86-4ff8-a0e2-f3e4d02eb2ac.png",
      alt: "Casino Royale movie poster",
      description: "Original Casino Royale (2006) movie poster featuring Daniel Craig in his Bond debut",
    },
    {
      src: "/lovable-uploads/fd6d9d66-4cdd-40c5-b3ad-82c23103b5fd.png",
      alt: "No Time To Die movie poster",
      description: "Official No Time To Die (2021) poster - Daniel Craig's final appearance as James Bond",
    },
    {
      src: "/lovable-uploads/f0469ba0-0971-486b-aef6-763122a0d511.png",
      alt: "GoldenEye movie poster",
      description: "Original French GoldenEye (1995) poster featuring Pierce Brosnan's first Bond film",
    },
    {
      src: "/lovable-uploads/5c86a508-0e3f-4444-8b27-7bd7cc507664.png",
      alt: "Bollinger champagne 007 special edition",
      description: "Limited edition Bollinger 007 champagne display from the official Bond partnership",
    },
    {
      src: "/lovable-uploads/4e394b07-3395-4853-b80b-3194bb720bb0.png",
      alt: "Original James Bond pinball machine",
      description: "Vintage James Bond pinball machine at the entrance to the 007 Museum in Sweden",
    },
    {
      src: "/lovable-uploads/3c191c5e-52b2-47a3-8f6b-87dfbb993735.png",
      alt: "BMW Z3 outside 007 Museum",
      description: "The BMW Z3 from GoldenEye displayed outside the 007 Museum building",
    },
    {
      src: "/lovable-uploads/af69fb83-fe31-4879-9756-b7531e5e4142.png",
      alt: "Aston Martin with museum curators",
      description: "Aston Martin V8 on display with museum curators at a special Bond exhibition",
    },
    {
      src: "/lovable-uploads/bd1fd23f-388f-4425-971f-99b0998ff922.png",
      alt: "Triumph motorcycle from No Time To Die",
      description: "The Triumph motorcycle used in 'No Time To Die' with promotional materials",
    },
    {
      src: "/lovable-uploads/3e3d8744-e2ca-40e2-839d-9ca58dedcff1.png",
      alt: "The Other Fellow documentary poster",
      description: "Poster for 'The Other Fellow' documentary about real men named James Bond",
    },
    {
      src: "/lovable-uploads/01c895c9-1672-4bd4-afa4-ff8e5153962a.png",
      alt: "Bond actor in tuxedo",
      description: "Actor from the 007 franchise in the iconic Bond tuxedo at museum photoshoot",
    },
    {
      src: "/lovable-uploads/d8bc8999-0611-457d-bd4a-31809a44a377.png",
      alt: "Limited edition Omega watches",
      description: "Official 007 Omega watches exhibition with special Bond edition timepieces",
    },
    {
      src: "/lovable-uploads/78318fb4-10c6-46f5-9316-1a3e362a6d4c.png",
      alt: "007 Duesenberg guitar",
      description: "Limited edition white 007 Duesenberg guitar with the iconic gun barrel spiral design",
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
