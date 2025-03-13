import Link from 'next/link';
import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <Camera className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">CapturePro</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Connecting talented photographers and videographers with clients worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Professionals</h3>
            <ul className="space-y-2">
              <li><Link href="/auth/register" className="text-sm text-gray-600 hover:text-primary">Join as Professional</Link></li>
              <li><Link href="/dashboard" className="text-sm text-gray-600 hover:text-primary">Dashboard</Link></li>
              <li><Link href="/jobs" className="text-sm text-gray-600 hover:text-primary">Find Jobs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Clients</h3>
            <ul className="space-y-2">
              <li><Link href="/browse" className="text-sm text-gray-600 hover:text-primary">Find Professionals</Link></li>
              <li><Link href="/jobs/post" className="text-sm text-gray-600 hover:text-primary">Post a Job</Link></li>
              <li><Link href="/how-it-works" className="text-sm text-gray-600 hover:text-primary">How it Works</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} CapturePro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}