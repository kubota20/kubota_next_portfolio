import { NextAuthOptions, AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      const myEmail = process.env.NEXT_PUBLIC_MY_EMAIL as string;
      if (user.email && myEmail === user.email) {
        return true;
      } else {
        return false;
      }
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          name: token.name,
          email: token.email,
        },
      };
    },
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,
} as AuthOptions;
