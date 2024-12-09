import Navbar from "@/components/NavBar"
import Banner4 from "@/components/Banner4"
import BillingDetails from "@/components/BillingDetails"
import ShopBanner from "@/components/ShopBanner"
import Footer from "@/components/Footer"
export default function Checkout(){
    return(
        <div>
          <div>
            <Navbar bgColor="bg-white"/>
          </div>
          <div>
            <Banner4/>
          </div>
          <div>
            <BillingDetails/>
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