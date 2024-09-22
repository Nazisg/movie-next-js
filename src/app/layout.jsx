"use client"
import { inter } from "@/libs/font";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import '@/styles/reset.scss'
import '@/styles/global.scss';
import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en" className={inter.className}>
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[85%]">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
