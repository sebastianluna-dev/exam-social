import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: '3ec38f845ca16683c18a',
      clientSecret: '0017cc47a10ee71e22c58264c1f3928c9d9a0260',
    }),
  ],
});
