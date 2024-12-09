import Navbar from "@/components/NavBar"
import Banner7 from "@/components/Banner7"
import BlogInfo from "@/components/BlogInfo"
export default function Blog(){
    return(
        <div>
            <div>
              <Navbar bgColor="bg-white"/>
            </div>
            <div>
                <Banner7/>
            </div>
            <div>
                <BlogInfo/>
            </div>
        </div>
    )
}