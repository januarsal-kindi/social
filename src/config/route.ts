import React, { lazy } from "react";
// import Home from "../pages/home"

const Home = React.lazy(() => import('../pages/home'));
const UserDetail = React.lazy(() => import('../pages/user-detail'));

const routers = [
	{
		name: "user-list",
		path: "/",
		component: Home,
	},
	{
		name: "user-detail",
		path: "/user/:id",
		component: UserDetail,
	},
];

export default routers;
