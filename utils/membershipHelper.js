// utils/membershipHelper.js

const extractMembershipRole = (dataArray) => {
  if (!Array.isArray(dataArray) || dataArray.length === 0) {
    return null;
  }

  const firstElement = dataArray[0];

  if (firstElement && firstElement.membership && firstElement.membership.role) {
    sessionStorage.setItem('role', firstElement.membership.role);
    return firstElement.membership.role;
  }

  return null;
};

export default extractMembershipRole;
