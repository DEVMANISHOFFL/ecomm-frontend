import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    originalPrice: "$129.99",
    rating: 4.8,
    image: "/wireless-headphones.png",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$199.99",
    originalPrice: "$249.99",
    rating: 4.9,
    image: "/smartwatch-product.png",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: "$49.99",
    originalPrice: "$69.99",
    rating: 4.7,
    image: "/laptop-backpack.png",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$79.99",
    originalPrice: "$99.99",
    rating: 4.6,
    image: "/bluetooth-speaker.png",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of trending products with amazing deals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-card-foreground">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-foreground">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
