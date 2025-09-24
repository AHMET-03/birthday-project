import React, { useState, useEffect } from 'react';
import { Heart, Camera, BookOpen, MessageCircle, Clock } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-25T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-vintage-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-vintage-sepia/20 to-vintage-cream/40">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-vintage-paper opacity-10"></div>
        
        {/* Placeholder for hero background image */}
        <div className="absolute inset-0 flex items-center justify-center bg-vintage-sepia/30 text-vintage-gold/60">
          <div className="text-center p-8 bg-vintage-cream/90 rounded-lg shadow-lg">
            <Camera size={48} className="mx-auto mb-4" />
            <p className="text-lg font-playfair">dadaji.jpeg</p>
            <p className="text-sm text-vintage-sepia mt-2">Full-width background image of her</p>
          </div>
        </div>
        
        <div className="relative z-10 text-center text-vintage-burgundy">
          <div className="vintage-border p-12 bg-vintage-cream/95 backdrop-blur-sm shadow-2xl">
            <h1 className="font-playfair text-5xl md:text-7xl mb-4 font-bold">
              Happy 20th Birthday,
            </h1>
            <h2 className="font-dancing text-4xl md:text-6xl text-vintage-gold mb-8">
              Precious
            </h2>
            
            {/* Countdown Timer */}
            <div className="bg-vintage-sepia/10 p-6 rounded-lg border-2 border-vintage-gold/30">
              <p className="font-playfair text-lg mb-4 text-vintage-burgundy/80">
                Countdown to your special day
              </p>
              <div className="flex justify-center space-x-6">
                <div className="text-center">
                  <div className="bg-vintage-burgundy text-vintage-cream p-3 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                    {timeLeft.days}
                  </div>
                  <p className="text-sm mt-2 font-playfair">Days</p>
                </div>
                <div className="text-center">
                  <div className="bg-vintage-burgundy text-vintage-cream p-3 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                    {timeLeft.hours}
                  </div>
                  <p className="text-sm mt-2 font-playfair">Hours</p>
                </div>
                <div className="text-center">
                  <div className="bg-vintage-burgundy text-vintage-cream p-3 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                    {timeLeft.minutes}
                  </div>
                  <p className="text-sm mt-2 font-playfair">Minutes</p>
                </div>
                <div className="text-center">
                  <div className="bg-vintage-burgundy text-vintage-cream p-3 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                    {timeLeft.seconds}
                  </div>
                  <p className="text-sm mt-2 font-playfair">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-vintage-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-vintage-gold rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-vintage-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="font-playfair text-5xl font-bold text-vintage-burgundy mb-4">
                Our Unforgettable Journey
              </h2>
              <div className="w-32 h-1 bg-vintage-gold mx-auto"></div>
              <div className="flex justify-center mt-4">
                <Heart className="text-vintage-gold" size={24} />
              </div>
            </div>
          </div>
          
          <div className="space-y-20">
            {/* Memory 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="vintage-frame p-4 bg-vintage-sepia/10 rounded-lg">
                  <div className="aspect-[4/3] bg-vintage-sepia/20 rounded-lg flex items-center justify-center text-vintage-gold/70">
                    <div className="text-center">
                      <Camera size={48} className="mx-auto mb-4" />
                      <p className="font-playfair text-lg">ADD A PHOTO OF OUR MEMORY HERE</p>
                      <p className="text-sm text-vintage-sepia mt-2">(Memory #1)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="vintage-paper p-8 rounded-lg shadow-lg">
                  <div className="bg-vintage-cream/80 p-6 rounded border-l-4 border-vintage-gold">
                    <p className="font-playfair text-lg text-vintage-sepia/70 italic">
                      [WRITE THE STORY OF THIS MEMORY HERE]
                    </p>
                    <p className="text-sm text-vintage-burgundy/60 mt-4">
                      Replace this with your cherished memory story, describing the moment, 
                      what made it special, and how it made you feel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Memory 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="vintage-frame p-4 bg-vintage-sepia/10 rounded-lg">
                  <div className="aspect-[4/3] bg-vintage-sepia/20 rounded-lg flex items-center justify-center text-vintage-gold/70">
                    <div className="text-center">
                      <Camera size={48} className="mx-auto mb-4" />
                      <p className="font-playfair text-lg">ADD A PHOTO OF OUR MEMORY HERE</p>
                      <p className="text-sm text-vintage-sepia mt-2">(Memory #2)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="vintage-paper p-8 rounded-lg shadow-lg">
                  <div className="bg-vintage-cream/80 p-6 rounded border-l-4 border-vintage-gold">
                    <p className="font-playfair text-lg text-vintage-sepia/70 italic">
                      [WRITE THE STORY OF THIS MEMORY HERE]
                    </p>
                    <p className="text-sm text-vintage-burgundy/60 mt-4">
                      Replace this with your second cherished memory story, describing 
                      another special moment you shared together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Memory 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="vintage-frame p-4 bg-vintage-sepia/10 rounded-lg">
                  <div className="aspect-[4/3] bg-vintage-sepia/20 rounded-lg flex items-center justify-center text-vintage-gold/70">
                    <div className="text-center">
                      <Camera size={48} className="mx-auto mb-4" />
                      <p className="font-playfair text-lg">ADD A PHOTO OF OUR MEMORY HERE</p>
                      <p className="text-sm text-vintage-sepia mt-2">(Memory #3)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="vintage-paper p-8 rounded-lg shadow-lg">
                  <div className="bg-vintage-cream/80 p-6 rounded border-l-4 border-vintage-gold">
                    <p className="font-playfair text-lg text-vintage-sepia/70 italic">
                      [WRITE THE STORY OF THIS MEMORY HERE]
                    </p>
                    <p className="text-sm text-vintage-burgundy/60 mt-4">
                      Replace this with your third cherished memory story, describing 
                      what makes this moment unforgettable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-vintage-sepia/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="font-playfair text-5xl font-bold text-vintage-burgundy mb-4">
                A Gallery of Beautiful Moments
              </h2>
              <div className="w-32 h-1 bg-vintage-gold mx-auto"></div>
              <div className="flex justify-center mt-4">
                <Camera className="text-vintage-gold" size={24} />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 15 }, (_, index) => (
              <div key={index} className="vintage-photo-frame group">
                <div className="aspect-square bg-vintage-sepia/20 rounded-lg flex items-center justify-center text-vintage-gold/60 hover:bg-vintage-sepia/30 transition-all duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <Camera size={24} className="mx-auto mb-2" />
                    <p className="text-xs font-playfair">Photo {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="bg-vintage-cream/80 p-6 rounded-lg border-2 border-vintage-gold/30 max-w-2xl mx-auto">
              <p className="font-playfair text-lg text-vintage-burgundy">
                [UPLOAD YOUR FAVORITE PHOTOS HERE]
              </p>
              <p className="text-sm text-vintage-sepia mt-2">
                Replace these placeholders with 10-15 of your most cherished photos of her and memories together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Letter Section */}
      <section className="py-20 bg-vintage-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="font-playfair text-5xl font-bold text-vintage-burgundy mb-4">
                A Letter From My Heart
              </h2>
              <div className="w-32 h-1 bg-vintage-gold mx-auto"></div>
              <div className="flex justify-center mt-4">
                <BookOpen className="text-vintage-gold" size={24} />
              </div>
            </div>
          </div>
          
          <div className="vintage-letter relative">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-vintage-burgundy rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-vintage-gold rounded-full opacity-10"></div>
            
            <div className="bg-vintage-paper p-12 rounded-lg shadow-2xl border border-vintage-sepia/20 relative z-10">
              <div className="mb-8">
                <p className="font-dancing text-2xl text-vintage-burgundy">My Dearest Friend,</p>
              </div>
              
              <div className="space-y-6 text-vintage-sepia">
                <div className="bg-vintage-cream/50 p-6 rounded border-l-4 border-vintage-gold">
                  <p className="font-playfair text-lg italic">
                    [WRITE YOUR PERSONAL BIRTHDAY MESSAGE TO HER HERE]
                  </p>
                  <div className="mt-6 text-sm text-vintage-burgundy/70">
                    <p className="mb-2">This is where you'll write your heartfelt message. Consider including:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>What she means to you</li>
                      <li>Your favorite qualities about her</li>
                      <li>Birthday wishes for her new year</li>
                      <li>Hopes for your friendship's future</li>
                      <li>Why she's so special and beautiful</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-right">
                <p className="font-dancing text-xl text-vintage-burgundy">
                  With all my love,
                </p>
                <p className="font-dancing text-lg text-vintage-sepia mt-2">
                  [Your name]
                </p>
              </div>
              
              <div className="absolute top-8 right-8">
                <Heart className="text-vintage-gold/30" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Well Wishes Section */}
      <section className="py-20 bg-vintage-sepia/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="font-playfair text-5xl font-bold text-vintage-burgundy mb-4">
                Words of Love from Friends & Family
              </h2>
              <div className="w-32 h-1 bg-vintage-gold mx-auto"></div>
              <div className="flex justify-center mt-4">
                <MessageCircle className="text-vintage-gold" size={24} />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="vintage-note group hover:scale-105 transition-transform duration-300">
                <div className="bg-vintage-cream p-6 rounded-lg shadow-lg border-l-4 border-vintage-gold relative">
                  <div className="absolute top-2 right-2">
                    <div className="w-3 h-3 bg-vintage-gold rounded-full opacity-60"></div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-playfair text-base text-vintage-sepia/70 italic">
                      [INSERT A WISH FROM A FRIEND/FAMILY MEMBER HERE]
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-dancing text-lg text-vintage-burgundy">
                      - [Name]
                    </p>
                  </div>
                  
                  <div className="mt-4 text-xs text-vintage-sepia/50">
                    <p>Replace with a heartfelt message from someone who loves her</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="vintage-note group hover:scale-105 transition-transform duration-300">
              <div className="bg-vintage-cream p-6 rounded-lg shadow-lg border-l-4 border-vintage-gold relative">
                <div className="absolute top-2 right-2">
                  <div className="w-3 h-3 bg-vintage-gold rounded-full opacity-60"></div>
                </div>
                
                <div className="mb-4">
                  <p className="font-playfair text-base text-vintage-sepia/70 italic">
                    [INSERT A WISH FROM A FRIEND/FAMILY MEMBER HERE]
                  </p>
                </div>
                
                <div className="text-right">
                  <p className="font-dancing text-lg text-vintage-burgundy">
                    - [Name]
                  </p>
                </div>
                
                <div className="mt-4 text-xs text-vintage-sepia/50">
                  <p>Add one more special wish to complete the collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-vintage-burgundy text-vintage-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <Heart className="mx-auto text-vintage-gold" size={32} />
          </div>
          <p className="font-dancing text-2xl mb-4">
            Made with endless love for someone truly special
          </p>
          <p className="font-playfair text-sm opacity-80">
            A vintage love story • September 25th, 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;