'use client'
import React, { ReactNode } from "react";
import SideCol from "../SideCol";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
    <body>
      
    <div className="flex h-screen bg-white-100">
      <SideCol/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white-200 p-4">
          {children}
        </main>
      </div>
    </div>
    </body>
    </html>

  );
};
export default Layout;
