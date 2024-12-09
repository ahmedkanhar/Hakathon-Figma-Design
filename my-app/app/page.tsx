import Navbar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import BannerSection from "@/components/BannerSection"
import TopPicksSection from "@/components/TopPicksSection"
import NewArrival from "@/components/NewArrival"
import Blogs from "@/components/Blogs"
import Banner2 from "@/components/Banner2"
import Footer from "@/components/Footer"


export default function Home(){
  return(
    <div>
     <Navbar/>
     <HeroSection/>
     <BannerSection/>
     <TopPicksSection/>
     <NewArrival/>
     <Blogs/>
     <Banner2/>
    <Footer/>
    </div>
  )
}