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
    if (membership.role === 'admin') {
      return 'admin'; // Return "admin" in lowercase
    }
  }

  return null; // Return null if the user is not an admin
}

export { checkUserRole };