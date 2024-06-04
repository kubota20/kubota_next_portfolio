"use client";

import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";

export const UserAvatar = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <Avatar>
      {/* ユーザがいる場合 */}
      {user && <AvatarImage alt={user.name} src={user.image} />}

      {/* ユーザーがいない場合 */}
      <AvatarFallback>
        <UserRound size={25} />
      </AvatarFallback>
    </Avatar>
  );
};
