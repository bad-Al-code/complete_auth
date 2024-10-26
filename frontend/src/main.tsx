import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import router from "./routes/routes";
import App from "./App";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <StrictMode>
            {/* <RouterProvider router={router} /> */}
            <App />
        </StrictMode>
    </QueryClientProvider>
);
