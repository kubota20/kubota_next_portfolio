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
    maxAge: 24 * 60 * 60, // ログイン時間、24時間まで
  },
  callbacks: {
    async signIn({ user }) {
      const myEmail = process.env.NEXT_PUBLIC_MY_EMAIL as string;
      return user.email === myEmail;
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
