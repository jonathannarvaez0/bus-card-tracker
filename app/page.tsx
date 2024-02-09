"use client";

import { ContextUsage } from "@/components/Context/ApplicationContext";
import Login from "@/components/Login/Login";
import { useState } from "react";

export default function Home() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Context = ContextUsage();

  return (
    <>
      {Context.isLoggedIn ? (
        <h1>Welcome</h1>
      ) : (
        <Login reload={() => {}}></Login>
      )}
    </>
  );
}
