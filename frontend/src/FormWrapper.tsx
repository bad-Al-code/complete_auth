interface FormWrapperProps {
  title: string;
  children: React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ title, children }) => {
  return (
    <div className="space-y-4 md:space-y-6 max-w-md w-full mx-auto p-4 bg-white rounded-lg shadow-lg dark:shadow-xl shadow-gray-400 dark:shadow-gray-900 border border-gray-800 dark:border-gray-700 md:mt-0 sm:max-w-md xl:p-4 dark:bg-gray-800">
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default FormWrapper;
