"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: "",
    image: "",
    name: "",
    address: "",
    phone: "",
    bio: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/auth/profile", { method: "GET" });
        if (!response.ok) throw new Error("Failed to fetch profile data");

        const data = await response.json();
        setProfile(data);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching the profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []); // Refetch on page load

  const handleUpdateProfile = () => {
    router.push("/profile/update");
  };

  const handleLogout = async () => {
    // Call logout API endpoint
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (response.ok) {
      const message="log out successful"
      console.log(message)
      router.push("/");
    } else {
      setError("Logout failed.");
    }
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
          <img
            src={profile.image || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border border-gray-300"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-800">{profile.name || "John Doe"}</h1>
            <p className="text-gray-600">@{profile.username || "username"}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <span className="w-32 font-medium text-gray-600">Address:</span>
            <p className="text-gray-800">{profile.address || "No address provided"}</p>
          </div>
          <div className="flex items-center">
            <span className="w-32 font-medium text-gray-600">Phone:</span>
            <p className="text-gray-800">{profile.phone || "No phone number provided"}</p>
          </div>
          <div className="flex items-center">
            <span className="w-32 font-medium text-gray-600">Bio:</span>
            <p className="text-gray-800">{profile.bio || "No bio provided"}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4 sm:space-x-4 sm:space-y-0 text-center sm:text-right">
          <button
            onClick={handleUpdateProfile}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
          >
            Update Profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition w-full sm:w-auto"
          >
            Logout
          </button>
          <button
            onClick={handleBackToHome}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition w-full sm:w-auto"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
