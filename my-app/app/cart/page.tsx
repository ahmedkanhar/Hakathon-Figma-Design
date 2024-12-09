import Banner5 from "@/components/Banner5"
import Navbar from "@/components/NavBar"
import CartInfo from "@/components/CartInfo"
import ShopBanner from "@/components/ShopBanner"
import Footer from "@/components/Footer"
export default function Cart(){
    return(
        <div>
            <div>
              <Navbar bgColor="bg-white"/>
            </div>
            <div>
                <Banner5/>
            </div>
            <div>
              <CartInfo/>
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