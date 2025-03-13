'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Camera, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Camera className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">CapturePro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/browse" className="text-gray-700 hover:text-primary px-3 py-2">
              Find Professionals
            </Link>
            <Link href="/jobs" className="text-gray-700 hover:text-primary px-3 py-2">
              Jobs
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary px-3 py-2">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary px-3 py-2">
              Contact
            </Link>
            <Link href="/auth/login">
              <Button variant="outline" className="ml-4">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Sign Up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/browse" className="block text-gray-700 hover:text-primary px-3 py-2">
              Find Professionals
            </Link>
            <Link href="/jobs" className="block text-gray-700 hover:text-primary px-3 py-2">
              Jobs
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-primary px-3 py-2">
              Blog
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-primary px-3 py-2">
              Contact
            </Link>
            <Link href="/auth/login" className="block px-3 py-2">
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
            <Link href="/auth/register" className="block px-3 py-2">
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}