"use client";

import { useLoginModal } from "@/hooks/use-login-modal";

import { Modal } from "@/components/ui/modal";
import GoogleButton from "@/components/ui/google-button";

export const LoginModal = () => {
  const loginModal = useLoginModal();

  return (
    <Modal
      title="ログイン"
      description="管理者用ログイン"
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
    >
      <div className="flex items-center justify-center my-4">
        <GoogleButton />
      </div>
    </Modal>
  );
};
