import { ChevronDown } from "lucide-react"

const categories = [
  "Electronics",
  "TVs & Appliances",
  "Men",
  "Women",
  "Baby & Kids",
  "Home & Furniture",
  "Sports, Books & More",
  "Flights",
  "Offer Zone",
]

export function CategoryNav() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-8">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center space-x-1 cursor-pointer hover:text-flipkart-blue group">
                <span className="text-sm font-medium text-gray-700 group-hover:text-flipkart-blue">{category}</span>
                <ChevronDown className="h-3 w-3 text-gray-500 group-hover:text-flipkart-blue" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
