import LandingPage from "views/LandingPage";

var routes = [
  {
    path: "/",
    name: "navbar.landing_page",
    component: <LandingPage />,
    layout: "/cavedevsofware",
    hidden: true,
    requires_login: false,
    requires_logged_out: true,
    staff_only: false,
    staff_hide: true,
    super_admin_only: false
  },
];

export default routes;
