"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Send logout request to the backend API
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      // Handle backend response
      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Show logout message from the backend
        router.push("/account"); // Redirect to the login or account page
      } else {
        console.error("Failed to log out:", await response.json());
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/dashboard"
                className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 transition"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 transition"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/customers"
                className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 transition"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                href="/reports"
                className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 transition"
              >
                Reports
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 transition"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Admin!</h1>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="p-6 flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800">Total Sales</h3>
              <p className="text-2xl font-semibold text-blue-600">$24,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800">Orders</h3>
              <p className="text-2xl font-semibold text-green-600">120</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800">New Customers</h3>
              <p className="text-2xl font-semibold text-purple-600">45</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
