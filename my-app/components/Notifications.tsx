// components/Notifications.tsx
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  info: (message: string) => toast.info(message),
};
export default function Notifications() {
    return (
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="colored" // Change theme to "colored", "light", or "dark"
      />
    );
  }
  
