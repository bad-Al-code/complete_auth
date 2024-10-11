import Input from "./components/Input";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap  items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <Input label="Input" />
    </div>
  );
};

export default App;
