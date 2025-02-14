import React from 'react';
import { Heart, Sparkles, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const LoveLetterContent = () => (
  <div className="relative">
    {/* Decorative Bow */}
    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
      <div className="relative">
        <div className="absolute w-16 h-16 bg-purple-400 rounded-full transform -rotate-45 -left-8"></div>
        <div className="absolute w-16 h-16 bg-purple-400 rounded-full transform rotate-45 left-8"></div>
        <div className="absolute w-8 h-8 bg-purple-500 rounded-full top-6 left-4"></div>
        <div className="absolute w-4 h-24 bg-purple-400 transform rotate-45 top-8 left-4"></div>
        <div className="absolute w-4 h-24 bg-purple-400 transform -rotate-45 top-8 left-4"></div>
      </div>
    </div>

    <Card className="bg-white/95 backdrop-blur-sm p-8 md:p-12 border-2 border-purple-200 rounded-3xl shadow-xl relative overflow-hidden">
      {/* Decorative Corner Hearts */}
      <div className="absolute top-4 left-4">
        <Heart className="w-6 h-6 text-purple-300" />
      </div>
      <div className="absolute top-4 right-4">
        <Heart className="w-6 h-6 text-purple-300" />
      </div>
      <div className="absolute bottom-4 left-4">
        <Heart className="w-6 h-6 text-purple-300" />
      </div>
      <div className="absolute bottom-4 right-4">
        <Heart className="w-6 h-6 text-purple-300" />
      </div>

      {/* Letter Content */}
      <div className="text-center mb-8">
        <Sparkles className="inline-block w-8 h-8 text-purple-500 mb-4" />
        <h1 className="text-4xl font-serif text-purple-600 mb-6">My Beloved Leilani</h1>
      </div>

      <div className="space-y-6 text-gray-700 font-serif leading-relaxed max-w-2xl mx-auto">
        <p className="indent-6">
          In the tapestry of my life, your presence has woven the most beautiful pattern I could have ever imagined. Your name, Leilani, means "heavenly flower," and truly, you have brought the beauty of paradise into my world. Each day with you unfolds like a precious blossom, revealing new depths of joy and wonder.
        </p>
        
        <p className="indent-6">
          Your grace and strength amaze me daily. The way you face life's challenges with unwavering determination, the gentleness in your touch, and the warmth in your smile have captured my heart completely. You've shown me what it means to love deeply and be loved in return, and for that, I am eternally grateful.
        </p>
        
        <p className="indent-6">
          I treasure every moment we share – from our quiet conversations that stretch into the night to our shared laughter that brightens even the darkest days. You've become my sanctuary, my inspiration, and my greatest adventure. With you, even the simplest moments become magical, and I find myself falling in love with you more deeply with each passing day.
        </p>
        
        <p className="indent-6">
          On this Valentine's Day, I want you to know that my heart beats in harmony with yours. You are my morning sunshine and my evening star, my present and my future. Your love is the greatest gift I could ever receive, and I promise to cherish and nurture it always.
        </p>

        <div className="text-right mt-8 mr-8">
          <p className="text-purple-600">With All My Love,</p>
          <p className="font-bold text-purple-700 mt-2">Sencia</p>
        </div>
      </div>

      {/* Decorative Sparkles */}
      <div className="absolute top-1/4 left-4">
        <Sparkles className="w-4 h-4 text-purple-300" />
      </div>
      <div className="absolute bottom-1/4 right-4">
        <Sparkles className="w-4 h-4 text-purple-300" />
      </div>
    </Card>
  </div>
);

const LoveLetter = () => {
  return (
    <section className="mb-16 text-center">
      <Dialog>
        <DialogTrigger asChild>
          <div className="inline-block hover:scale-105 transition-transform">
            <Button 
              variant="outline" 
              className="bg-purple-50 hover:bg-purple-100 text-purple-600 border-purple-200 shadow-md"
            >
              <Mail className="mr-2 h-5 w-5" />
              Open My Love Letter
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <LoveLetterContent />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LoveLetter;