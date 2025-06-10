
import React from 'react';
import { Heart, Star, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      couple: 'Arjun & Meera',
      weddingDate: 'March 2024',
      location: 'Mumbai, India',
      story: 'We connected on SoulMate in January 2023. What started as casual conversations quickly turned into deep discussions about life, values, and dreams. We found that we shared the same vision for our future - a life filled with love, respect, and adventure. After 3 months of getting to know each other, we decided to meet in person. The chemistry was instant! We got engaged in October 2023 and had our dream wedding this past March. Thank you SoulMate for bringing us together!',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop',
      testimonial: 'SoulMate made our journey to finding each other so smooth and natural. The platform\'s matching system is incredible!',
      rating: 5,
    },
    {
      id: 2,
      couple: 'Vikram & Kavya',
      weddingDate: 'November 2023',
      location: 'Bangalore, India',
      story: 'Both of us had given up on finding love online until we tried SoulMate. Vikram sent me a thoughtful message that showed he had actually read my profile carefully. We bonded over our shared love for travel and similar career goals. Our families met after 4 months, and everyone instantly connected. We had a beautiful traditional wedding last November, and we\'re now expecting our first child! SoulMate truly changed our lives.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop',
      testimonial: 'The verification process gave us confidence, and the quality of profiles was outstanding. We found our perfect match!',
      rating: 5,
    },
    {
      id: 3,
      couple: 'Rohit & Shreya',
      weddingDate: 'August 2023',
      location: 'Delhi, India',
      story: 'As a doctor and an engineer, we both had very busy schedules. SoulMate\'s efficient matching system helped us connect despite our hectic lives. We appreciated how the platform focused on compatibility rather than just looks. Our conversations flowed naturally from the very first message. We discovered we both valued family, had similar life goals, and shared a passion for helping others. We got married just 8 months after our first conversation!',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop',
      testimonial: 'The detailed profiles and compatibility matching saved us so much time. We knew we were right for each other!',
      rating: 5,
    },
    {
      id: 4,
      couple: 'Anish & Priyanka',
      weddingDate: 'June 2024',
      location: 'Chennai, India',
      story: 'We were both skeptical about online matrimonial platforms, but our families encouraged us to try SoulMate. The detailed questionnaire helped us understand what we were truly looking for in a partner. When we matched, we were amazed by how much we had in common - from our taste in music to our views on work-life balance. Our video calls during the lockdown period actually brought us closer together. We had our wedding this June and couldn\'t be happier!',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
      testimonial: 'SoulMate\'s video calling feature was a game-changer during the pandemic. We fell in love before we even met in person!',
      rating: 5,
    },
    {
      id: 5,
      couple: 'Karan & Divya',
      weddingDate: 'February 2024',
      location: 'Pune, India',
      story: 'After several unsuccessful attempts on other platforms, we were losing hope. SoulMate\'s personalized approach made all the difference. The relationship counselor helped us understand what we really wanted in a partner. When we connected, it felt different - more genuine and purposeful. We took our time getting to know each other, and every conversation reinforced that we were meant to be together. Our February wedding was a celebration of not just our love, but also our families coming together beautifully.',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=400&fit=crop',
      testimonial: 'The personalized support and guidance we received made our journey so much easier. Forever grateful to SoulMate!',
      rating: 5,
    },
    {
      id: 6,
      couple: 'Aditya & Riya',
      weddingDate: 'September 2023',
      location: 'Hyderabad, India',
      story: 'Long-distance relationships are challenging, but SoulMate\'s features made it work for us. Aditya was in Hyderabad while I was in Kolkata for work. The platform\'s messaging system and video calls kept us connected daily. We discovered we complemented each other perfectly - he\'s the calm to my storm, and I bring adventure to his structured life. After 6 months of daily conversations and weekend visits, we knew we were ready for marriage. Our September wedding was a beautiful blend of Bengali and Telugu traditions.',
      image: 'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=600&h=400&fit=crop',
      testimonial: 'Distance was no barrier with SoulMate\'s amazing communication tools. We built a strong foundation before marriage!',
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Success
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Stories</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Real couples, real love stories. Discover how thousands of people found their perfect life partners 
            through SoulMate and started their happily ever after.
          </p>
          <div className="flex items-center justify-center space-x-8 text-gray-600">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">50K+</div>
              <div className="text-sm">Happy Couples</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">15</div>
              <div className="text-sm">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">2M+</div>
              <div className="text-sm">Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story) => (
              <Card key={story.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.couple}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{story.couple}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {story.weddingDate}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {story.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{story.story}</p>
                  
                  <div className="border-l-4 border-rose-400 pl-4 bg-rose-50 p-4 rounded-r-lg mb-4">
                    <p className="text-gray-700 italic">"{story.testimonial}"</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-500">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Heart className="h-5 w-5 text-rose-500" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Share Your Success Story</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Found your soulmate through our platform? We'd love to hear your story and inspire others 
            on their journey to find love.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
            Submit Your Story
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Own Love Story?
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful couples who found their perfect match on SoulMate. 
            Your happily ever after is just a click away!
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
            Start Your Journey Today
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;
