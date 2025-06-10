
import React from 'react';
import { MapPin, User, Heart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  profession: string;
  education: string;
  image: string;
  isOnline?: boolean;
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          {profile.isOnline && (
            <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Online
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1 bg-white/90 text-gray-900 hover:bg-white">
                <Heart className="h-4 w-4 mr-1" />
                Like
              </Button>
              <Button size="sm" className="flex-1 bg-rose-500 hover:bg-rose-600">
                <MessageSquare className="h-4 w-4 mr-1" />
                Message
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
            <span className="text-sm text-gray-500">{profile.age} years</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            {profile.location}
          </div>
          
          <p className="text-sm text-gray-700 mb-1">{profile.profession}</p>
          <p className="text-sm text-gray-600">{profile.education}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
