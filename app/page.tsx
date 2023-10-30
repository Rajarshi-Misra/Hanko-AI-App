"use client";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Login() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-black">
      <div>
        <div className="sm:text-9xl text-6xl text-white">HOMEDEC</div>
        <div className="sm:text-5xl text-white">
          AI HOME DECORATOR FOR ALL YOUR NEEDS
        </div>
      </div>
      <Button
        variant="contained"
        href="/login  "
        className="text-4xl flex mt-20"
      >
        GET STARTED
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
}
