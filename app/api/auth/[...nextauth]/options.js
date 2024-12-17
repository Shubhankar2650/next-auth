import GoogleProvider from 'next-auth/providers/google'

export const options = {
    providers: [
        GoogleProvider({
            profile(profile) {
                console.log("Google Profile: ", profile);
                const userRole = (profile?.email === 'skasusvivobook@gmail.com') ? "Admin User" : "Google User";
                console.log("User Role: ", userRole);
                return {
                    ...profile,
                    role: userRole,
                    id: profile.sub,
                }
            },
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    // secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;

            }
            return token
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.role = token.role;
                session.user.id = token.id;
            }
            return session;
        },
    },

}