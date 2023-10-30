"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";
import LogoutIcon from "@mui/icons-material/Logout";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_KEY;

export const Logout = () => {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = () => {
    hanko?.user
      .logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    router.push("/");
    router.refresh();
  };
  return (
    <>
      <button type="button" onClick={logout} className="font-bold text-2xl">
        <LogoutIcon fontSize="large" />
        LOGOUT
      </button>
    </>
  );
};
