import { Films, PeopleDetails, People } from "../page";

const routes = [
  {
    path: "/",
    exact: true,
    component: Films,
  },
  {
    path: "/people",
    exact: true,
    component: People,
  },
  {
    path: "/people-details/:id",
    exact: true,
    component: PeopleDetails,
  },
];

export default routes;
