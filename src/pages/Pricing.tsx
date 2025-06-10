
import React from 'react';
import { Check, Crown, Heart, Sparkles, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'Forever',
      icon: Heart,
      iconColor: 'text-gray-500',
      iconBg: 'bg-gray-100',
      features: [
        'Create basic profile',
        'View limited profiles',
        'Send 3 interests per day',
        'Basic search filters',
        'Community support'
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Premium',
      price: '₹1,999',
      period: 'per month',
      icon: Star,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      features: [
        'Unlimited profile views',
        'Send unlimited interests',
        'Advanced search filters',
        'See who viewed your profile',
        'Priority customer support',
        'Profile boost feature',
        'Video calling feature'
      ],
      cta: 'Choose Premium',
      popular: true,
    },
    {
      name: 'Elite',
      price: '₹4,999',
      period: 'per month',
      icon: Crown,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      features: [
        'All Premium features',
        'Dedicated relationship manager',
        'Profile verification priority',
        'Exclusive elite member access',
        'Personal matchmaking assistance',
        'Premium placement in search',
        'Advanced compatibility reports',
        'Wedding planning assistance'
      ],
      cta: 'Go Elite',
      popular: false,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Love at
              <span className="block bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                Every Budget
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan to start your journey towards finding your soulmate. 
              From free basic features to premium matchmaking services.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card 
                  key={plan.name}
                  className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular 
                      ? 'ring-2 ring-rose-500 scale-105 bg-gradient-to-b from-white to-rose-50' 
                      : 'hover:-translate-y-1'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center p-4 ${plan.iconBg} rounded-2xl mb-4`}>
                        <IconComponent className={`h-8 w-8 ${plan.iconColor}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg'
                          : plan.name === 'Elite'
                          ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg'
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Upgrade?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Unlock premium features to increase your chances of finding the perfect match
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Star className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Increased Visibility</h3>
                  </div>
                  <p className="text-gray-600">
                    Premium members get 5x more profile views and appear higher in search results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <Crown className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Personal Assistance</h3>
                  </div>
                  <p className="text-gray-600">
                    Elite members get dedicated relationship managers and personalized matchmaking.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Join thousands of success stories. Start your journey today with our premium features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-rose-600 text-lg px-8 py-6">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
