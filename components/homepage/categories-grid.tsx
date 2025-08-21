import { Card } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Mobiles",
    image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100",
    offer: "Up to 40% Off",
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100",
    offer: "Min 50% Off",
  },
  {
    id: 3,
    name: "Electronics",
    image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100",
    offer: "Up to 80% Off",
  },
  {
    id: 4,
    name: "Home & Kitchen",
    image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100",
    offer: "Up to 70% Off",
  },
  {
    id: 5,
    name: "Appliances",
    image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100",
    offer: "Up to 60% Off",
  },
  {
    id: 6,
    name: "Travel",
    image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100",
    offer: "Up to ₹10,000 Off",
  },
  {
    id: 7,
    name: "Beauty, Toys & More",
    image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100",
    offer: "Up to 80% Off",
  },
  {
    id: 8,
    name: "Two Wheelers",
    image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/a22a213ca6221b65.png?q=100",
    offer: "Up to ₹40,000 Off",
  },
]

export function CategoriesGrid() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-6">
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="text-center cursor-pointer group">
                <div className="mb-3">
                  <img
                    src={category.image || "/placeholder.svg?height=80&width=80&query=" + category.name}
                    alt={category.name}
                    className="w-16 h-16 mx-auto object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">{category.name}</h3>
                <p className="text-xs text-flipkart-green font-medium">{category.offer}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
