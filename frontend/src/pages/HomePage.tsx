import { BackgroundBeams } from "../components/ui/background-beams";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 relative z-10 text-center">
        {" "}
        <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Unlock a Seamless Authentication Experience
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm md:text-base">
          Simplify login processes and secure your applications with fast,
          reliable, and intuitive authentication solutions.
        </p>
        <div className="flex justify-center mt-6">
          {" "}
          <Button label="Get Started Now" onClick={() => navigate("/signup")} />
        </div>
      </div>
      <BackgroundBeams className="absolute inset-0 z-0" />
    </div>
  );
};

export default HomePage;
