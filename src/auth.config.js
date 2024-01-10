import { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/test/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/test/profile");
      const isOnLoginPage = nextUrl.pathname.startsWith("/test/login");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        if (isOnLoginPage) {
          return Response.redirect(new URL("/test/profile", nextUrl));
        }
      }
      return true;
    },
  },
  providers: [],
};
