"use client";

import { useEffect } from "react";
import { useLoginModal } from "@/hooks/use-login-modal";

const LoginPage = () => {
  const onOpen = useLoginModal((state) => state.onOpen);
  const isOpen = useLoginModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default LoginPage;
