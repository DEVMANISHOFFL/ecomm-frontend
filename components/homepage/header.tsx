"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, User } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  return (
    <header className="bg-flipkart-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link href="/">
              <h1 className="text-2xl font-bold italic cursor-pointer">Flipkart</h1>
            </Link>
            <span className="text-xs">
              Explore <span className="flipkart-orange font-semibold">Plus</span>
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full pl-4 pr-12 py-2 text-gray-900 bg-white border-0 rounded-sm"
              />
              <Button
                size="sm"
                className="absolute right-0 top-0 h-full bg-flipkart-orange hover:bg-flipkart-orange/90 rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-6">
            {!isLoggedIn ? (
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:bg-white/10 flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span className="text-sm">Login</span>
                </Button>
              </Link>
            ) : (
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 flex items-center space-x-1"
                onClick={() => {
                  localStorage.removeItem("token")
                  setIsLoggedIn(false)
                }}
              >
                <span className="text-sm">Logout</span>
              </Button>
            )}

            <Button variant="ghost" className="text-white hover:bg-white/10 flex items-center space-x-1">
              <ShoppingCart className="h-4 w-4" />
              <span className="text-sm">Cart</span>
            </Button>
            <Link href="/sellersignup">
              <Button variant="ghost" className="text-white hover:bg-white/10 flex items-center space-x-1">
                <span className="text-sm">Become a Seller</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}