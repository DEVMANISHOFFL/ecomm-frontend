"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        try {
            const res = await fetch("http://localhost:8082/api/v1/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: form.email, password: form.password }),
            })

            if (res.ok) {
                const data = await res.json()
                setMessage("Login successful ✅")
                localStorage.setItem("token", data.token) // store JWT if returned
                setForm({ email: "", password: "" })
                router.push("/");
            } else {
                const err = await res.json()
                setMessage("Error: " + err.message)
            }
        } catch (error) {
            setMessage("Network error ❌")
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
                        <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
                        <CardDescription className="text-gray-600">
                            Sign in to your Flipkart account
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        Email or Mobile Number
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="text"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Enter Email ID or Mobile Number"
                                        className="h-12 border-gray-300 focus:border-flipkart-blue focus:ring-flipkart-blue"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Enter Password"
                                        className="h-12 border-gray-300 focus:border-flipkart-blue focus:ring-flipkart-blue"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            className="w-4 h-4 text-flipkart-blue border-gray-300 rounded focus:ring-flipkart-blue"
                                        />
                                        <Label htmlFor="remember" className="text-sm text-gray-600">
                                            Remember me
                                        </Label>
                                    </div>
                                    <Link
                                        href="/forgot-password"
                                        className="text-sm text-flipkart-blue hover:underline"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-12 bg-flipkart-orange hover:bg-flipkart-orange/90 text-white font-semibold"
                            >
                                {loading ? "Logging in..." : "Login"}
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
                                Request OTP
                            </Button>

                            <div className="text-center space-y-2">
                                <p className="text-sm text-gray-600">
                                    New to Flipkart?{" "}
                                    <Link
                                        href="/signup"
                                        className="text-flipkart-blue hover:underline font-medium"
                                    >
                                        Create an account
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
                        By continuing, you agree to Flipkart&apos;s{" "}
                        <Link href="/terms" className="text-flipkart-blue hover:underline">
                            Terms of Use
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-flipkart-blue hover:underline">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
