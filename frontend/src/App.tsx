import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

const App: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap  items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <ForgotPasswordPage />
    </div>
  );
};

export default App;
