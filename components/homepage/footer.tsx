import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading">ShopEase</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Your trusted online shopping destination for quality products at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:opacity-80 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:opacity-80 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:opacity-80 cursor-pointer" />
              <Mail className="h-5 w-5 hover:opacity-80 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Home & Garden
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Sports
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">© 2024 ShopEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
