import Checkbox from "./components/Checkbox";
import TextButtonWithIcon from "./TextButtonWithIcon";

const App: React.FC = () => {
  const handleCheckboxChange = () => {};
  return (
    <div className="flex flex-col flex-wrap  items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <Checkbox
        id="agree"
        onChange={handleCheckboxChange}
        label="Agree to "
        linkText="Terms and Conditions"
        linkHref="#"
      />
    </div>
  );
};

export default App;
