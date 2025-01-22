import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "@/components/wishlist-context"; // Import WishlistProvider
import Notifications from "@/components/Notifications";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider> {/* Wrap both providers */}
            <Notifications/>
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
