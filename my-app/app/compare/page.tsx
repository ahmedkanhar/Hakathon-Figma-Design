import ComparePage from "@/components/ComparePage"; // Import the ComparePage component
import Navbar from "@/components/NavBar"; // Import the Navbar component
import Footer from "@/components/Footer"; // Import the Footer component

export default function Compare() {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />
      
      {/* ComparePage content */}
      <ComparePage />
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
