"use client";
import { useEffect, useState } from "react";
import { register } from "@teamhanko/hanko-elements";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
const hankoApi = "https://8d67d81e-87b4-44d9-a529-5313c7d48f11.hanko.io";

export const Profile = () => {
  const [openState, setOpenState] = useState(false);

  useEffect(() => {
    register(hankoApi ?? "").catch((error) => {
      console.log(error);
    });
  }, []);

  const openProfile = () => {
    setOpenState(!openState);
  };

  return (
    <>
      <button
        type="button"
        onClick={openProfile}
        className="font-bold text-2xl"
      >
        <ManageAccountsIcon fontSize="large" />
        PROFILE
      </button>
      {openState && (
        <div className=" absolute top-14 ">
          <section className=" w-[450px] h-auto rounded-2xl bg-white p-5">
            <hanko-profile />
          </section>
        </div>
      )}
    </>
  );
};
