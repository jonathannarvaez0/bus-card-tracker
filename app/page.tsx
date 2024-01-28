"use client";

import Login from "@/components/Login/Login";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <>{isLoggedIn ? <h1>Welcome</h1> : <Login />}</>;
}
