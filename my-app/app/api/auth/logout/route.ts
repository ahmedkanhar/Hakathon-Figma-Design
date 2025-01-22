import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Log the logout attempt on the backend
    console.log("User is logging out");

    // Clear any session or cookies here if needed (e.g., authToken, session data)
    const response = NextResponse.json({ message: "Logout successful" });
    response.cookies.set("authToken", "", { maxAge: 0 }); // Optionally clear the auth token cookie if you're using it
    console.log("Auth token cleared");

    return response;
  } catch (error) {
    console.error("Error during logout:", error);
    return NextResponse.json(
      { error: "An error occurred during logout" },
      { status: 500 }
    );
  }
}
