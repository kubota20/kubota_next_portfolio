import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // const {pathname} = req.nextUrl
  },

  {
    pages: {
      signIn: "/login",
    },
    callbacks: {
      authorized: ({ token }) => !!token, // ユーザーが認証されていることを確認します
    },
  }
);

export const config = {
  matcher: ["/((?!api/auth|_next/static|favicon.ico).*)"],
};
