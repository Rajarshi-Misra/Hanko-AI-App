"use client";

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import { Logout } from "@/components/Logout";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_KEY || "";

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <hanko-profile />
      <Logout />
    </>
  );
}
