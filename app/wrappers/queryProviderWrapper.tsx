"use client";
import { QueryClient, QueryClientProvider } from "react-query";
type Props = {
  children: React.ReactNode;
};
export const QueryWrapper: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
