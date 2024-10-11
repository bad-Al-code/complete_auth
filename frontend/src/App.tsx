import LoginPage from "./pages/auth/LoginPage";

const App: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap  items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <LoginPage />
    </div>
  );
};

export default App;
