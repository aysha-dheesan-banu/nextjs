import NextAuth from "next-auth";

export const authOptions = {
  providers: [
    {
      id: "wytpass",
      name: "WytPass",
      type: "oauth",
      issuer: "https://api.wytnet.com",
      wellKnown: "https://api.wytnet.com/.well-known/openid-configuration",
      authorization: { params: { scope: "openid profile email offline_access" } },
      clientId: process.env.WYTPASS_CLIENT_ID,
      clientSecret: process.env.WYTPASS_CLIENT_SECRET,
      client: {
        token_endpoint_auth_method: "client_secret_post",
      },
      idToken: true,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name || profile.nickname || profile.email,
          email: profile.email,
          image: profile.picture,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
