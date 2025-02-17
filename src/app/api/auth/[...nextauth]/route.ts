import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn({ profile }: { profile: { login: string } }) {
      console.log(profile)
      return profile.login === 'RafalKielbasa' ? true : false
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
