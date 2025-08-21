import { Card } from "@/components/ui/card"

const banners = [
  {
    id: 1,
    image: "https://rukminim2.flixcart.com/fk-p-flap/480/80/image/5b309e98775e22e4.jpg?q=80",
    alt: "Big Billion Days Sale",
  },
  {
    id: 2,
    image: "https://rukminim2.flixcart.com/fk-p-flap/960/160/image/5b309e98775e22e4.jpg?q=60",
    alt: "Mobile Offers",
  },
  {
    id: 3,
    image: "/flipkart-banner-3.png",
    alt: "Fashion Sale",
  },
]

export function BannerCarousel() {
  return (
    <section className="py-4 bg-flipkart-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4">
          <Card className="overflow-hidden">
            <img
              src={
                banners[1].image || "/placeholder.svg?height=200&width=1200&query=Flipkart Big Billion Days Sale Banner"
              }
              alt={banners[0].alt}
              className="w-full h-48 object-cover"
            />
          </Card>
        </div>
      </div>
    </section>
  )
}
