"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

/**
 * Root providers component — wraps the app with TanStack Query and React Hot Toast.
 * Add additional providers here (e.g., ThemeProvider, AnalyticsProvider) as needed.
 */
export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000, // 1 minute
                        retry: 1,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        borderRadius: "8px",
                        background: "#0a2540",
                        color: "#fff",
                    },
                }}
            />
        </QueryClientProvider>
    );
}
