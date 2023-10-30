"use client";
import dynamic from "next/dynamic";
const HankoAuth = dynamic(
  () => import("@/components/hanko-components/HankoAuth"),
  { ssr: false }
);

export default function Login() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-black">
      <div className="bg-white sm:p-5 rounded-2xl shadow-md">
        <HankoAuth />
      </div>
    </div>
  );
}
