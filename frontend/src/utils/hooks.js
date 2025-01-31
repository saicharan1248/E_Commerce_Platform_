export const getNavigation = (role) => {
  if (!role) {
    window.location.href = "/";
  }
  switch (role) {
    case "student":
      window.location.href = "/Student";
      break;
    case "business_owner":
      window.location.href = "/Seller";
      break;
    case "school_admin":
      window.location.href = "/adminpage";
      break;
    case "super_admin":
      window.location.href = "/superadmin";
      break;
    default:
      window.location.href = "/";
  }
};
