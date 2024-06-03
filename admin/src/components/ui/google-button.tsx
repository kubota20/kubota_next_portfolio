"use client";
import { Button } from "./button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl }); // 'google'プロバイダーを使用してサインインを開始
  };
  return (
    <Button onClick={handleGoogleSignIn}>
      <FcGoogle size={20} className="mr-2" />
      Google
    </Button>
  );
};

export default GoogleButton;
