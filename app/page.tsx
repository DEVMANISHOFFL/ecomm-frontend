import { Header } from "@/components/homepage/header"
import { CategoryNav } from "@/components/homepage/category-nav"
import { BannerCarousel } from "@/components/homepage/banner-carousel"
import { CategoriesGrid } from "@/components/homepage/categories-grid"
import { DealsSection } from "@/components/homepage/deals-section"
import { FlipkartFooter } from "@/components/homepage/flipkart-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-flipkart-light-blue">
      <Header />
      <CategoryNav />
      <main>
        <BannerCarousel />
        <CategoriesGrid />
        <DealsSection />
      </main>
      <FlipkartFooter />
    </div>
  )
}
