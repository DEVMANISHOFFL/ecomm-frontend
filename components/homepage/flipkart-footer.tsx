import { Mail, HelpCircle } from "lucide-react"

export function FlipkartFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Flipkart Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Cancellation & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Report Infringement
                </a>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Policy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-flipkart-blue">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Mail className="h-5 w-5 text-flipkart-orange" />
              <span className="text-sm">Become a Flipkart Seller</span>
            </div>
            <div className="flex items-center space-x-4">
              <HelpCircle className="h-5 w-5 text-flipkart-orange" />
              <span className="text-sm">24x7 Customer Care</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">© 2007-2024 Flipkart.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
