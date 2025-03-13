import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Camera, Users, Calendar, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find the Perfect Professional for Your Moments
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with talented photographers and videographers for your special events
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto flex gap-2">
              <Input 
                placeholder="Search photographers & videographers..." 
                className="h-12"
              />
              <Button size="lg">
                <Search className="h-5 w-5" />
                <span className="ml-2">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search</h3>
              <p className="text-gray-600">Browse through our curated list of professional photographers and videographers</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book</h3>
              <p className="text-gray-600">Choose your perfect match and book their services securely</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Capture</h3>
              <p className="text-gray-600">Get your moments captured professionally and beautifully</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example cards - will be dynamic in production */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1552334405-4677f2b97a49' : i === 2 ? '1552168324-d612d77725e3' : '1552083974-b7e346d3b1cd'}`} 
                  alt="Professional" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                  <p className="text-gray-600 mb-4">Professional Photographer</p>
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1">4.9 (120 reviews)</span>
                  </div>
                  <Link href="/profile/john-doe">
                    <Button className="w-full">View Profile</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1494790108377-be9c29b29330' : '1507003211169-0a1dd7228f2d'}`}
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-600">Event Organizer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Finding the perfect photographer for our event was a breeze with CapturePro. The platform is user-friendly, and the quality of professionals is outstanding!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Join our community of talented professionals and clients
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary">
                Join as Professional
              </Button>
            </Link>
            <Link href="/browse">
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white hover:text-primary">
                Find Professionals
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}