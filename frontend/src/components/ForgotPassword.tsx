interface ForgotPasswordProps {
  onForgotPasswordClick: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  onForgotPasswordClick,
}) => {
  return (
    <div className="flex justify-start mt-4">
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        <button
          onClick={onForgotPasswordClick}
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 focus:outline-none"
        >
          Forgot Password?
        </button>
      </p>
    </div>
  );
};

export default ForgotPassword;
