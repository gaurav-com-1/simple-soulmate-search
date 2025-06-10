
import React from 'react';
import { Heart, Users, Shield, Award, Target, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const About = () => {
  const stats = [
    { number: '2M+', label: 'Active Members' },
    { number: '50K+', label: 'Success Stories' },
    { number: '15+', label: 'Years of Experience' },
    { number: '99%', label: 'Customer Satisfaction' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      description: '15+ years in matrimonial services with a vision to connect hearts worldwide.',
    },
    {
      name: 'Priya Nair',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
      description: 'Expert in customer relations and profile verification processes.',
    },
    {
      name: 'Amit Sharma',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      description: 'Leading our technology team to create the best matching algorithms.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> SoulMate</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to help people find meaningful, lasting relationships. 
              For over 15 years, we've been bringing hearts together with trust, technology, and care.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                SoulMate was founded in 2009 with a simple belief: everyone deserves to find their perfect life partner. 
                What started as a small matrimonial service has grown into one of the most trusted platforms for serious 
                relationships, serving millions of members worldwide.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our founders, having experienced the challenges of finding compatible partners through traditional means, 
                envisioned a platform that would combine the trust of family introductions with the convenience of modern 
                technology. Today, we're proud to have facilitated over 50,000 successful marriages.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that finding love shouldn't be left to chance. That's why we've invested heavily in creating 
                sophisticated matching algorithms, comprehensive verification processes, and personalized support to help 
                our members find their ideal partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust & Safety</h3>
                <p className="text-gray-600">
                  We prioritize the safety and privacy of our members through rigorous verification and security measures.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Authentic Connections</h3>
                <p className="text-gray-600">
                  We believe in fostering genuine relationships based on compatibility, values, and shared life goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We're committed to providing the best possible experience through continuous innovation and improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-rose-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-rose-100 max-w-3xl mx-auto">
            To create a world where everyone has the opportunity to find their perfect life partner through 
            meaningful connections built on trust, compatibility, and shared values. We're not just a platform; 
            we're your partners in finding lasting love.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
