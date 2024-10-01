"use client";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const SanityUIProvider = (props: Props) => {
  const { children } = props;
  const path = usePathname();

  return (
    <>
      {path.split("/")[1] == "studio" ? (
        <>{children}</>
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default SanityUIProvider;
