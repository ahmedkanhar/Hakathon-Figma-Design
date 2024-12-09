import Navbar from "@/components/NavBar"
import Banner6 from "@/components/Banner6"
import ContactInfo from "@/components/ContactInfo"
import ShopBanner from "@/components/ShopBanner"
import Footer from "@/components/Footer"
export default function Contact(){
    return(
        <div>
            <div>
               <Navbar bgColor="bg-white"/>
            </div>
            <div>
              <Banner6/>
            </div>
            <div>
                <ContactInfo/>
            </div>
            <div>
            <ShopBanner/>
            </div>
            <div>
              <Footer/>
            </div>
        </div>
    )
}