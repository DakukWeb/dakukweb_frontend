"use client";

import { axiosClient } from "../api/axiosClient";
import { useRequestProcessor } from "../api/requestProcessor";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Dakuk Web */}
      <TestingFetch />
      {/* </main> */}
    </QueryClientProvider>
  );
}

const TestingFetch = () => {
  const { Query } = useRequestProcessor();

  const { data, isPending, error } = Query("test", () =>
    fetch("http://localhost:8000/api/products").then((res) => res.json())
  );

  /*   const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('http://localhost:8000/api/products').then((res) =>
        res.json(),
      ),
  }) */

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return <div>EXITO ROTUNDO</div>;
};
