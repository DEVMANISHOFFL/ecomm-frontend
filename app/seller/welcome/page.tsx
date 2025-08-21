import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SellerWelcomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3">🎉 Welcome to Flipkart!</h1>

        <p className="text-gray-600 mb-6">
          Congratulations! You're now a Flipkart seller. Ready to start your journey?
        </p>

        <div className="space-y-3">
          <Button asChild className="w-full bg-flipkart-orange hover:bg-orange-600 text-white font-semibold py-3">
            <Link href="/seller/add-product">🚀 Let's Add Your First Product</Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="w-full border-flipkart-blue text-flipkart-blue hover:bg-blue-50 bg-transparent"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Join <span className="font-semibold text-flipkart-blue">10L+ sellers</span> reaching{" "}
            <span className="font-semibold text-flipkart-blue">45Cr+ customers</span>
          </p>
        </div>
      </div>
    </div>
  )
}
