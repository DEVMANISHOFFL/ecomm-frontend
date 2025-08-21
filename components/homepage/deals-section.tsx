"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export function DealsSection() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8082/api/v1/products")
      const json = await res.json()
      setProducts(json) 
    }
    fetchData()
  }, [])

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-gray-900">Deals of the Day</h2>
            <div className="flex items-center space-x-2 text-flipkart-blue">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">22:10:05 Left</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="text-flipkart-blue border-flipkart-blue hover:bg-flipkart-blue hover:text-white bg-transparent"
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image} // since your JSON has no image
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-flipkart-green text-white text-xs px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                  <p className="text-xs text-gray-600 truncate">{product.description}</p>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">
                        ₹{(product.price * 1.1).toFixed(0)} {/* fake originalPrice = +10% */}
                      </span>
                      <span className="text-sm text-flipkart-green font-medium">10% off</span>
                    </div>
                    <p className="text-xs text-gray-600">In stock: {product.quantity}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
