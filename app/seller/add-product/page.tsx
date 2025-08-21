"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    status: "active",
    image: "", // will be an image URL
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔑 Get token from storage
    const token = localStorage.getItem("token"); // or sessionStorage depending on where you stored it
    if (!token) {
      alert("❌ You must be logged in to add a product");
      router.push("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:8082/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ pass token here
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          quantity: parseInt(formData.quantity, 10),
        }),
      });

      if (res.ok) {
        alert("✅ Product added successfully!");
        router.push("/"); // redirect to homepage
      } else {
        const err = await res.text();
        alert("❌ Failed: " + err);
      }
    } catch (err) {
      alert("❌ Network error: " + err);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="price" type="number" step="0.01" placeholder="Price" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="quantity" type="number" placeholder="Quantity" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="category" placeholder="Category" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="status" placeholder="Status" defaultValue="active" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="image" placeholder="Image URL" onChange={handleChange} className="w-full p-2 border rounded" required /> {/* new field */}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add Product
        </button>
      </form>
    </div>
  );
}
