import React from "react";
import '../styles/globals.css';
import WhyDidYouRenderSetup from './WhyDidYouRenderSetup';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WhyDidYouRenderSetup />
        {children}
      </body>
    </html>
  );
}
