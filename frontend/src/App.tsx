import TextButtonWithIcon from "./TextButtonWithIcon";

const App: React.FC = () => {
  const handleClick = () => {};
  return (
    <div className="flex flex-col flex-wrap  items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <TextButtonWithIcon
        onClick={handleClick}
        label="Go BackWhere you came from"
      />
    </div>
  );
};

export default App;
