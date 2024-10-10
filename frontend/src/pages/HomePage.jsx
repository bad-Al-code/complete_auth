import { Button } from "@mantine/core";
import { BackgroundBeams } from "../components/ui/BackgroundBeams";

export function HomePage() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Unlock a Seamless Authentication Experience
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Simplify login processes and secure your applications with fast,
          reliable, and intuitive authentication solutions.
        </p>
      </div>
      <BackgroundBeams />
      <Button size="md" variant="filled" radius="md">
        Get Started Now
      </Button>
    </div>
  );
}
