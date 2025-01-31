export const UserNavigate = () => {
  const role = localStorage.getItem("role");

  if (role === "student") {
    window.location.href = "/Student";
  } else if (role === "business_owner") {
    window.location.href = "/Seller";
  } else if (role === "school_admin") {
    window.location.href = "/adminpage";
  } else if (role === "super_admin") {
    window.location.href = "/superadmin";
  }
};
