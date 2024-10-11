import React from "react";

interface AuthPromptProps {
  actionText: string;
  promptText: string;
  onActionClick: () => void;
}

const AuthPrompt: React.FC<AuthPromptProps> = ({
  actionText,
  promptText,
  onActionClick,
}) => {
  return (
    <div className="flex justify-start  mt-4">
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        {promptText}{" "}
        <button
          onClick={onActionClick}
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 focus:outline-none"
        >
          {actionText}
        </button>
      </p>
    </div>
  );
};

export default AuthPrompt;
