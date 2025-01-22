// app/dashboard/page.tsx
import AnalyticsDashboard from '@/components/AnalyticsDashboard'; // Adjust the path if necessary
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

const DashboardPage = () => {
  return (
    <div>
        <Navbar/>
        <div>
      <h1 className='flex justify-center text-4xl space-x-4 space-y-4 mt-4 mb-4 font-bold'>Analytics Dashboard</h1>
      <AnalyticsDashboard />
      </div>
      <Footer/>
    </div>
  );
};

export default DashboardPage;
