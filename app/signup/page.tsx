"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignupPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        if (form.password !== form.confirmPassword) {
            setMessage("Passwords do not match")
            setLoading(false)
            return
        }

        try {
            const res = await fetch("http://localhost:8082/api/v1/users", {
                method: "POST",
                body: JSON.stringify({
                    name: form.fullname,
                    email: form.email,
                    password: form.password,
                }),
            })

            if (res.ok) {
                const data = await res.json()
                setMessage("✅ Account created successfully!")
                localStorage.setItem("token", data.token) // optional, if backend returns token
                setForm({ fullname: "", email: "", password: "", confirmPassword: "" })
                router.push("/")
            } else {
                const err = await res.json()
                setMessage("Error: " + err.message)
            }
        } catch (error) {
            setMessage("Failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Card className="shadow-xl border-0">
                    <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4">
                            <div className="w-16 h-16 bg-flipkart-blue rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">F</span>
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900">Create Account</CardTitle>
                        <CardDescription className="text-gray-600">
                            Join Flipkart for the best shopping experience
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fullname" className="text-sm font-medium text-gray-700">
                                        Full Name
                                    </Label>
                                    <Input
                                        id="fullname"
                                        type="text"
                                        value={form.fullname}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="h-12 border-gray-300 focus:border-flipkart-blue focus:ring-flipkart-blue"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        Email Address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        className="h-12 border-gray-300 focus:border-flipkart-blue focus:ring-flipkart-blue"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Create a strong password"
                                        className="h-12 border-gray-300 focus:border-flipkart-blue focus:ring-flipkart-blue"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </Label>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm your password"
                                        className="h-12 border-gray-300 focus:border-flipkart-blue focus:ring-flipkart-blue"
                                    />
                                </div>

                                <div className="flex items-start space-x-2">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="w-4 h-4 text-flipkart-blue border-gray-300 rounded focus:ring-flipkart-blue mt-1"
                                    />
                                    <Label
                                        htmlFor="terms"
                                        className="text-sm text-gray-600 leading-relaxed"
                                    >
                                        I agree to Flipkart's{" "}
                                        <Link href="/terms" className="text-flipkart-blue hover:underline">
                                            Terms of Use
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="/privacy" className="text-flipkart-blue hover:underline">
                                            Privacy Policy
                                        </Link>
                                    </Label>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-12 bg-flipkart-orange hover:bg-flipkart-orange/90 text-white font-semibold"
                            >
                                {loading ? "Creating..." : "Create Account"}
                            </Button>

                            {message && (
                                <p className="text-center text-sm text-red-500">{message}</p>
                            )}

                            <div className="relative">
                                <Separator />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="bg-white px-3 text-sm text-gray-500">OR</span>
                                </div>
                            </div>

                            <Button
                                type="button"
                                variant="outline"
                                className="w-full h-12 border-flipkart-blue text-flipkart-blue hover:bg-blue-50 bg-transparent"
                            >
                                Sign up with OTP
                            </Button>

                            <div className="text-center space-y-2">
                                <p className="text-sm text-gray-600">
                                    Already have an account?{" "}
                                    <Link
                                        href="/login"
                                        className="text-flipkart-blue hover:underline font-medium"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                                <Link href="/" className="text-sm text-flipkart-blue hover:underline">
                                    ← Back to Home
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">
                        By creating an account, you agree to our terms and conditions
                    </p>
                </div>
            </div>
        </div>
    )
}
