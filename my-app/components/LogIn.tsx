"use client";
export default function AuthPage() {
  return (
    <div className="w-full min-h-screen p-6 sm:p-12 md:p-32 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-white">
      
      <div className="bg-white p-6 sm:p-8 rounded-lg flex flex-col justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Log In</h1>

        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            User Name or Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-100"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-100"
          />
        </div>

        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
          <label className="flex items-center text-sm mb-3 sm:mb-0">
            <input
              type="checkbox"
              className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring focus:ring-yellow-100"
            />
            <span className="ml-2">Remember Me</span>
          </label>
          <a href="#" className="text-sm text-black hover:underline">
            Lost your password?
          </a>
        </div>

      
        <button className="w-full sm:w-[215px] h-[48px] sm:h-[64px] py-2 px-4 bg-transparent border border-black text-black font-semibold rounded-lg hover:bg-gray-200 transition">
          Log In
        </button>
      </div>

      
      <div className="bg-white p-6 sm:p-8 rounded-lg flex flex-col justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Register</h1>

        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="register-email">
            Email Address
          </label>
          <input
            type="email"
            id="register-email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-100"
          />
        </div>

    
        <p className="text-sm text-gray-600 mb-2">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Your personal data will be used to support your experience throughout this website&#44; to manage access to your account&#44; and for other purposes described in our privacy policy.
        </p>

        
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Privacy Policy!</h2>

      
        <button className="w-full sm:w-[215px] h-[48px] sm:h-[64px] py-2 px-4 bg-transparent border border-black text-black font-semibold rounded-lg hover:bg-gray-200 transition">
          Register
        </button>
      </div>
    </div>
  );
}