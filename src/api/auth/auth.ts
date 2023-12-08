'use server';

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

// async function getUser(email: string): Promise<User | undefined> {
//     try {
//       const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//       return user.rows[0];
//     } catch (error) {
//       console.error('Failed to fetch user:', error);
//       throw new Error('Failed to fetch user.');
//     }
//   }

async function getDummyUser(email: string) {
  // return new Promise((resolve, reject) => {
  //   // Simulating an asynchronous operation, such as fetching data from an API
  //   const found = email === 'tomasjakovlevas@gmail.com';

  //   if (found) {
  //     resolve({
  //       firstName: 'Tomas',
  //     });
  //   } else {
  //     reject(new Error('User not found'));
  //   }
  // });
  try {
    const response = await fetch('https://dummyjson.com/users/1');

    switch (response.status) {
      case 200:
        return await response.json();

      default:
        return null;
    }
  } catch (error) {
    return 'not found';
  }
}

async function getUser(email: string): Promise<any> {
  try {
    const found = await getDummyUser(email);

    return found;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;

          return user;

          //   const passwordsMatch = await bcrypt.compare(password, user.password);
          // const passwordsMatch = true;

          // if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
});
