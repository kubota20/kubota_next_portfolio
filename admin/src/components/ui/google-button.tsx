"use client";
import { Button } from "./button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const GoogleButton = () => {
  return (
    <Button variant="destructive" onClick={() => signIn("gitlab")}>
      <FcGoogle />
      Google
    </Button>
  );
};

export default GoogleButton;
