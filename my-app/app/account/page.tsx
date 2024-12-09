"use client";
import Navbar from "@/components/NavBar";
import Banner3 from "@/components/Banner3";
import Login from "@/components/LogIn"
import ShopBanner from "@/components/ShopBanner";
import Footer from "@/components/Footer";

const AccountPage = () => {
  return (
    <div>
        <Navbar bgColor="bg-white"/>
    <div>
       <Banner3/>
    </div>
    <div>
        <Login/>
    </div>
    <div>
     <ShopBanner/>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
};

export default AccountPage;