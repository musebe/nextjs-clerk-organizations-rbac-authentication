// utils/userUtils.js

function checkUserRole(session) {
  if (
    !session ||
    !session.user ||
    !session.user.organizationMemberships ||
    session.user.organizationMemberships.length === 0
  ) {
    return null; // Return null if the user is not a basic member
  }

  const organizationMemberships = session.user.organizationMemberships;

  // Loop through all organization memberships
  for (const membership of organizationMemberships) {
    if (membership.role) {
      return membership.role.toLowerCase(); // Return the role in lowercase if it exists
    }
  }

  return null; // Return null if no role is found in the memberships
}

function getUserRole(session) {
  // Check if the session exists and has user data
  if (session && session.user && session.user.organizationMemberships) {
    console.log('User data exists in the session.');
    const organizationMemberships = session.user.organizationMemberships;

    // Check if organizationMemberships array is empty or undefined
    if (organizationMemberships.length === 0) {
      console.log('The organization is null and has no roles.');
      return 'The organization is null and has no roles.';
    }

    // Get the role from the first organization membership
    const role = organizationMemberships[0].role;

    console.log(role);

    // Return the role if it exists, otherwise return null
    if (role) {
      console.log('User role found:', role);
      return role;
    } else {
      console.log('User role not found in the organization memberships.');
      return null;
    }
  }

  console.log(
    'User data or organization memberships not available in the session.'
  );
  // Return null if the session, user data, or organizationMemberships is not available
  return null;
}

export { checkUserRole, getUserRole };
