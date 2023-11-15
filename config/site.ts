export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "ByteLearn - Unlock Your Potential",
	description: "Online platform where developers can access a wide range of online courses.",
	navItems: [
		{
		label: "Courses",
		href: "/courses",
		},
		{
		label: "Categories",
		href: "/categories",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/ericcasane/learning-platform-frontend"
	},
};
