export default function BillingDetails() {
  return (
    <div className="w-full min-h-[1100px] px-8 py-8 flex gap-8 flex-col md:flex-row">
      
      <div className="flex-1 bg-white p-8">
        <h1 className="text-2xl font-bold mb-6">Billing Details</h1>
        <form className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>
          </div>

          
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>

          
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country / Region
            </label>
            <input
              type="text"
              id="country"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>

          
          <div>
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>

          
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              Town / City
            </label>
            <input
              type="text"
              id="city"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>

        
          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700">
              Province
            </label>
            <input
              type="text"
              id="province"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>

  
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>

  
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>

          
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              rows={4}
            ></textarea>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white p-8">
        
        <div className="mb-8">
      
          <div className="grid grid-cols-2 mb-4">
            <h1 className="text-2xl font-bold">Products</h1>
            <h1 className="text-2xl font-bold text-right">Subtotal</h1>
          </div>

    
          <div className="grid grid-cols-2 gap-2">
            <p className="text-gray-700 mb-4">Asgaard Sofa <span className="text-black">X 1</span></p>
            <p className="text-gray-700 mb-4 text-right">$250000.00</p>

            <p className="text-black mb-4">subtotal</p>
            <p className="text-black mb-4 text-right">$250000.00</p>
          </div>
        </div>

        
        <div>
          <div className="grid grid-cols-2">
            <h1 className="text-3xl font-bold">Total</h1>
            <p className="text-yellow-900 text-3xl text-right font-extrabold">$250000.00</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-6"></div>

        <div className="mt-6">
          <div className="flex items-center">
            
            <div className="w-2 h-2 bg-gray-800 rounded-full mt-1 mr-3"></div>
            
            <h2 className="text-xl font-bold">Direct Bank Transfer</h2>
          </div>
          
          <p className="text-gray-700 mt-2">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 mt-4">
         
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 border border-gray-800 rounded-full flex items-center justify-center">
             
            </div>
            <p className="text-sm text-gray-600">Direct Bank Transfer</p>
          </div>

         
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 border border-gray-800 rounded-full flex items-center justify-center">
             
            </div>
            <p className="text-sm text-gray-600">Cash on Delievery</p>
          </div>
        </div>

        <p className="text-gray-700 mt-4">
          Your personal data will be used to support your experience throughout this website&#44; to manage access to your account&#44; and for other purposes described in our <span className="text-lg font-semibold text-black">privacy policy.</span>
        </p>

        <div className="flex justify-center mt-8">
          <button className="w-[318px] h-[64px] py-2 px-4 bg-transparent flex justify-center items-center border border-black text-black font-semibold rounded-3xl hover:bg-gray-200 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
