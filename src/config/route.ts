import React, { lazy } from "react";
// import Home from "../pages/home"

const Home = React.lazy(() => import('../pages/home'));
const UserDetail = React.lazy(() => import('../pages/user-detail'));

const routers = [
	{
		name: "user-list",
		path: "social/",
		component: Home,
	},
	{
		name: "user-detail",
		path: "social/user/:id",
		component: UserDetail,
	},
];

export default routers;
