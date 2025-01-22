import { NextRequest, NextResponse } from "next/server";

let mockProfileData = {
  username: "johndoe",
  image: "https://via.placeholder.com/150",
  name: "John Doe",
  address: "123 Main St",
  phone: "123-456-7890",
  bio: "Lorem ipsum dolor sit amet.",
};

export async function GET() {
  try {
    console.log("GET handler called");
    return NextResponse.json(mockProfileData);
  } catch (error) {
    console.error("GET Error:", error);
    return new NextResponse("Failed to fetch profile", { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("PUT handler called with body:", body);

    mockProfileData = { ...mockProfileData, ...body }; // Update mock data
    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("PUT Error:", error);
    return new NextResponse("Failed to update profile", { status: 500 });
  }
}
