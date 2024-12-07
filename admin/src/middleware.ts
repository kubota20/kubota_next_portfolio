import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    console.log("Middleware triggered for path:", pathname);

    // 認証情報の確認
    const token = req.nextauth.token;
    console.log("Token:", token);

    // 認証トークンがあるかどうか確認
    if (!token) {
      console.log("No token found, redirecting to login");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login",
    },
    callbacks: {
      authorized: ({ token }) => {
        console.log("Authorization callback triggered, token:", token);
        return !!token; // ユーザーが認証されていることを確認します
      },
    },
  }
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
