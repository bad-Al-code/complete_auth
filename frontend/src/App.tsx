import OtpVerificationPage from "./pages/auth/OTPVerificationPage";

const App: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap  items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <OtpVerificationPage />
    </div>
  );
};

export default App;
