"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";
import dynamic from "next/dynamic";
const HankoAuth = dynamic(
  () => import("@/components/hanko-components/HankoAuth"),
  { ssr: false }
);

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_KEY || "";
export default function Login() {
  // const router = useRouter();
  // const [hanko, setHanko] = useState<Hanko>();

  // useEffect(() => {
  //   import("@teamhanko/hanko-elements").then(({ Hanko }) =>
  //     setHanko(new Hanko(hankoApi ?? ""))
  //   );
  // }, []);

  // const redirectAfterLogin = useCallback(() => {
  //   router.replace("/dashboard");
  // }, [router]);

  // useEffect(
  //   () =>
  //     hanko?.onAuthFlowCompleted(() => {
  //       redirectAfterLogin();
  //     }),
  //   [hanko, redirectAfterLogin]
  // );

  // useEffect(() => {
  //   //
  //   register(hankoApi ?? "").catch((error) => {
  //     console.log(error);
  //   });
  // }, []);

  return (
    <div className="flex min-h-screen justify-center items-center bg-black">
      <div className="bg-white sm:p-5 rounded-2xl shadow-md">
        {/* <hanko-auth /> */}
        <HankoAuth />
      </div>
    </div>
  );
}
