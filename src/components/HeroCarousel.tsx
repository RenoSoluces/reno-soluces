import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Caroussel1 from '../assets/Caroussel1.webp';
import Caroussel2 from '../assets/Caroussel2.webp';
import Caroussel3 from '../assets/Caroussel3.webp';

interface HeroCarouselProps {
  onPageChange: (page: string) => void;
}

interface Slide {
  image: string;
  title: string;
  items: string[];
  cta: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: Caroussel1,
      title: "Un projet de rénovation mérite une orientation adaptée",
      items: [
        "Analyse de votre projet et de vos besoins",
        "Diagnostic complet et gratuit de vos besoins",
        "Identification des dispositifs d'aides susceptibles de s'appliquer",
        "Accompagnement de A à Z pour votre projet"
      ],
      cta: "Simuler mon projet"
    },
    {
      image: Caroussel2,
      title: "Valorisez votre bien immobilier durablement",
      items: [
        "Solutions sur mesure pour chaque type de logement",
        "Matériaux performants et écologiques",
        "Augmentation de votre DPE (Diagnostic de Performance Énergétique)",
        "Travaux pouvant ouvrir droit à des aides, sous conditions"
      ],
      cta: "Simuler mon projet"
    },
    {
      image: Caroussel3,
      title: "Des éco-techniciens pour vous accompagner",
      items: [
        "Mise en relation avec des professionnels partenaires",
        "Informations claires avant la mise en relation",
        "Parcours de projet structuré",
        "Accompagnement dans vos échanges avec le professionnel"
      ],
      cta: "Simuler mon projet"
    }
  ];

  // Auto-rotation du carrousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[800px] overflow-hidden">
      {/* Images du carrousel */}
      <div className="relative w-full h-full">
        {slides.map((slideData, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slideData.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </div>
        ))}
      </div>

      {/* Encadré en superposition */}
      <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-90 text-white p-8 rounded-lg max-w-md">
        <h1 className="text-3xl font-bold mb-6 leading-tight">
          {slides[currentSlide].title}
        </h1>
        
        <div className="space-y-3 mb-8">
          {slides[currentSlide].items.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        <a href="/contact"
  className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium mb-4 transition-colors"
>
  {slides[currentSlide].cta}
</a>

        
        <p className="text-xs text-gray-300 mb-6">
          Gratuit et sans engagement.
        </p>
      </div>

      {/* Contrôles du carrousel */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;