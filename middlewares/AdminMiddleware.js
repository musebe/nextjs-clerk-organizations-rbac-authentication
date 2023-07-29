'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@clerk/nextjs';

const AdminMiddleware = ({ children }) => {
  const { push, pathname } = useRouter();
  const session = useSession();

  useEffect(() => {
    let isSubscribed = true;

    const getSessionData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (isSubscribed) {
            resolve(session);
          }
        }, 3000);
      });
    };

    if (session && session.isLoaded && session.isSignedIn) {
      getSessionData().then((sessionData) => {
        console.log('Session:', sessionData);

        // Now we have the session data, let's proceed with the middleware logic
        const userRole =
          sessionData?.user?.organizationMemberships?.length > 0
            ? sessionData.user.organizationMemberships[0].role
            : null;

        console.log('User role:', userRole);

        // If the user is not an admin and trying to access /admin page, redirect to the previous page
        if (userRole !== 'admin' && pathname === '/admin') {
          console.log('Redirecting to Home Page');
          push('/');
        }
      });
    } else {
      console.log('No session loaded');
    }

    return () => {
      isSubscribed = false;
    };
  }, [pathname, push, session]);

  // Render the children for all pages
  return children;
};

export default AdminMiddleware;
