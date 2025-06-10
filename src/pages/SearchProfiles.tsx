
import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import ProfileCard from '@/components/ProfileCard';

const SearchProfiles = () => {
  const [searchFilters, setSearchFilters] = useState({
    ageFrom: '',
    ageTo: '',
    location: '',
    profession: '',
    education: '',
  });

  const profiles = [
    {
      id: '1',
      name: 'Priya Sharma',
      age: 28,
      location: 'Mumbai, India',
      profession: 'Software Engineer',
      education: 'Masters in Computer Science',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop',
      isOnline: true,
    },
    {
      id: '2',
      name: 'Rahul Singh',
      age: 32,
      location: 'Delhi, India',
      profession: 'Marketing Manager',
      education: 'MBA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      isOnline: false,
    },
    {
      id: '3',
      name: 'Anjali Patel',
      age: 26,
      location: 'Bangalore, India',
      profession: 'Doctor',
      education: 'MBBS',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
      isOnline: true,
    },
    {
      id: '4',
      name: 'Vikram Reddy',
      age: 30,
      location: 'Hyderabad, India',
      profession: 'Business Analyst',
      education: 'BTech',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop',
      isOnline: true,
    },
    {
      id: '5',
      name: 'Kavya Iyer',
      age: 25,
      location: 'Chennai, India',
      profession: 'Teacher',
      education: 'Masters in Education',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
      isOnline: false,
    },
    {
      id: '6',
      name: 'Arjun Mehta',
      age: 29,
      location: 'Pune, India',
      profession: 'Architect',
      education: 'Masters in Architecture',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop',
      isOnline: true,
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your
              <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Perfect Match</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Browse through thousands of verified profiles and connect with your ideal partner
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      placeholder="Search by name or ID..." 
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Age From" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="18">18</SelectItem>
                    <SelectItem value="21">21</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="30">30</SelectItem>
                    <SelectItem value="35">35</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Age To" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="30">30</SelectItem>
                    <SelectItem value="35">35</SelectItem>
                    <SelectItem value="40">40</SelectItem>
                    <SelectItem value="45">45</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                  <Button variant="outline" size="sm">
                    Online Now
                  </Button>
                  <Button variant="outline" size="sm">
                    Recently Joined
                  </Button>
                </div>
                <div className="text-sm text-gray-600">
                  Showing {profiles.length} profiles
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"
            >
              Load More Profiles
            </Button>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-12 bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Unlock Premium Features
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Get unlimited messaging, advanced filters, and see who liked your profile with our premium membership.
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
            Upgrade to Premium
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SearchProfiles;
