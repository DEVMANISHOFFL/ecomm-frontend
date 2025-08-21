import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-muted py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-heading leading-tight">
              Discover Amazing Products at
              <span className="text-primary"> Unbeatable Prices</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shop the latest trends in fashion, electronics, home & garden, and more. Quality products, fast shipping,
              and exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                Browse Categories
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/modern-ecommerce-hero.png"
              alt="Featured products showcase"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
