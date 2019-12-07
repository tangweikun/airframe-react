import React from "react";

import { SidebarMenu } from "./../../components";

export const SidebarMiddleNav = () => (
	<SidebarMenu>
		<SidebarMenu.Item icon={<i className="fa fa-fw fa-th"></i>} title="DASHBOARDS" to="/dashboards/analytics" exact />
		<SidebarMenu.Item icon={<i className="fa fa-fw fa-clone"></i>} title="TASKS" to="/dashboards/projects" exact />

		<SidebarMenu.Item icon={<i className="fa fa-fw fa-home"></i>} title="REQUESTS">
			<SidebarMenu.Item title="My Requests" to="/cards/cards" exact />
			<SidebarMenu.Item title="My Actions" to="/cards/cardsheaders" exact />
			<SidebarMenu.Item title="New Requests" to="/dashboards/system" exact />
		</SidebarMenu.Item>

		<SidebarMenu.Item icon={<i className="fa fa-fw fa-columns"></i>} title="EXECUTIVE">
			<SidebarMenu.Item title="Tasks &amp; Topics" to="/dashboards/monitor" exact />
			<SidebarMenu.Item title="Work Reports" to="/dashboards/financial" exact />
			<SidebarMenu.Item title="Minutes of Meeting" to="/dashboards/stock" exact />
			<SidebarMenu.Item title="Correspondence" to="/dashboards/reports" exact />
		</SidebarMenu.Item>

		<SidebarMenu.Item icon={<i className="fa fa-fw fa-toggle-on"></i>} title="PLANNING">
			<SidebarMenu.Item title="Main Contract" to="/interface/colors" />
			<SidebarMenu.Item title="Organization Plan" to="/interface/typography" />
			<SidebarMenu.Item title="Budget Management" to="/interface/buttons" />
		</SidebarMenu.Item>

		<SidebarMenu.Item icon={<i className="fa fa-fw fa-pie-chart"></i>} title="PEOPLE LOGISTICS">
			<SidebarMenu.Item title="Visa &amp; Passport" to="/graphs/re-charts" />
			<SidebarMenu.Item title="Travel Request" to="/interface/navbars" />
			<SidebarMenu.Item title="Site Permission" to="/interface/notifications" />
		</SidebarMenu.Item>

		<SidebarMenu.Item icon={<i className="fa fa-fw fa-check-square-o"></i>} title="FINANCE">
			<SidebarMenu.Item title="Insurance" to="/forms/forms" />
		</SidebarMenu.Item>

		<SidebarMenu.Item icon={<i className="fa fa-fw fa-trello"></i>} title="FACILITY">
			<SidebarMenu.Item title="Facility Service" to="/tables/tables" />
			<SidebarMenu.Item title="Stationery Management" to="/tables/extended-table" />
			<SidebarMenu.Item title="Survey" to="/tables/ag-grid" />
		</SidebarMenu.Item>

		<SidebarMenu.Item icon={<i className="fa fa-fw fa-mouse-pointer"></i>} title="HSSE">
			<SidebarMenu.Item title="PPE Request" to="/apps/projects/list" />
			<SidebarMenu.Item title="PPE Management" to="/apps/projects/grid" />
			<SidebarMenu.Item title="DDT Training Request" to="/apps/tasks-kanban" />
			<SidebarMenu.Item title="Security Report" to="/apps/files/list" />
		</SidebarMenu.Item>

		<SidebarMenu.Item title="HR" icon={<i className="fa fa-fw fa-trello"></i>}>
			<SidebarMenu.Item title="Timesheet" to="/forms/sliders" />
			<SidebarMenu.Item title="Recruitment">
				<SidebarMenu.Item title="Candidates" to="/apps/tasks/list" />
				<SidebarMenu.Item title="Job Positions" to="/apps/tasks/grid" />
				<SidebarMenu.Item title="Offers" to="/apps/tasks-kanban" />
				<SidebarMenu.Item title="Template" to="/apps/task-details" />
			</SidebarMenu.Item>
			<SidebarMenu.Item title="Mobilization">
				<SidebarMenu.Item title="Plan" to="/forms/dropzone" />
				<SidebarMenu.Item title="Servey" to="/interface/avatars" />
				<SidebarMenu.Item title="Offers" to="/forms/date-picker" />
				<SidebarMenu.Item title="Template" to="/forms/date-picker" />
			</SidebarMenu.Item>
			<SidebarMenu.Item title="Onboarding" to="/apps/sessions-edit" />
			<SidebarMenu.Item title="Offboarding" to="/forms/text-mask" />
		</SidebarMenu.Item>

		<SidebarMenu.Item title="IT" icon={<i className="fa fa-fw fa-folder-open-o"></i>}>
			<SidebarMenu.Item title="IT ASSETS" to="/apps/users/list" />
			<SidebarMenu.Item title="IT Support" to="/apps/users/grid" />
		</SidebarMenu.Item>

		<SidebarMenu.Item icon={<i className="fa fa-fw fa-copy"></i>} title="USER ADMIN">
			<SidebarMenu.Item title="USERS" to="/apps/search-results" />
			<SidebarMenu.Item title="GROUPS" to="/apps/images-results" />
			<SidebarMenu.Item title="ROLES" to="/apps/videos-results" />
			<SidebarMenu.Item title="CONTRACTORS" to="/apps/users-results" />
		</SidebarMenu.Item>

		<SidebarMenu.Item title="SETTINGS" icon={<i className="fa fa-fw fa-star-o"></i>}>
			<SidebarMenu.Item title="DATABASE" to="/apps/inbox" />
			<SidebarMenu.Item title="API/SDK" to="/apps/new-email" />
			<SidebarMenu.Item title="OTHERS" to="/apps/email-details" />
		</SidebarMenu.Item>

		{/* <SidebarMenu.Item icon={<i className="fa fa-fw fa-mouse-pointer"></i>} title="Apps">
			<SidebarMenu.Item title="Projects">
				<SidebarMenu.Item title="Projects List" to="/apps/projects/list" />
				<SidebarMenu.Item title="Projects Grid" to="/apps/projects/grid" />
			</SidebarMenu.Item>

			<SidebarMenu.Item title="Files">
				<SidebarMenu.Item title="Files List" to="/apps/files/list" />
				<SidebarMenu.Item title="Files Grid" to="/apps/files/grid" />
			</SidebarMenu.Item>
			<SidebarMenu.Item title="Search Results">
	
			</SidebarMenu.Item>

			<SidebarMenu.Item title="Gallery">
				<SidebarMenu.Item title="Gallery Grid" to="/apps/gallery-grid" />
				<SidebarMenu.Item title="Gallery Table" to="/apps/gallery-table" />
			</SidebarMenu.Item>

			<SidebarMenu.Item title="Profile">
				<SidebarMenu.Item title="Profile Details" to="/apps/profile-details" />
				<SidebarMenu.Item title="Profile Edit" to="/apps/profile-edit" />
				<SidebarMenu.Item title="Account Edit" to="/apps/account-edit" />
				<SidebarMenu.Item title="Billing Edit" to="/apps/billing-edit" />
				<SidebarMenu.Item title="Settings Edit" to="/apps/settings-edit" />
				<SidebarMenu.Item title="Sessions Edit" to="/apps/sessions-edit" />
			</SidebarMenu.Item>
			<SidebarMenu.Item title="Clients" to="/apps/clients" exact />
			<SidebarMenu.Item title="Chat" to="/apps/chat" exact />
		</SidebarMenu.Item> */}

		{/* <SidebarMenu.Item icon={<i className="fa fa-fw fa-star-o"></i>} title="Icons" to="/icons" />
		<SidebarMenu.Item
			icon={<i className="fa fa-fw fa-bookmark-o"></i>}
			title="Docs"
			href="https://webkom.gitbook.io/spin/v/airframe/airframe-react/documentation-react"
		/> */}
		{/* -------- Versions ---------*/}
		{/* <SidebarMenu.Item icon={<i className="fa fa-fw fa-folder-open-o"></i>} title="Versions">
			<SidebarMenu.Item title="NextJS (React)" href="http://airframe.nextjs.webkom.co/" />
			<SidebarMenu.Item title="React" href="http://dashboards.webkom.co/react/airframe" />
			<SidebarMenu.Item title="jQuery" to="http://dashboards.webkom.co/jquery/airframe/" />
			<SidebarMenu.Item title="Vue" to="http://dashboards.webkom.co/vue/airframe" />
			<SidebarMenu.Item title="Angular" to="http://dashboards.webkom.co/angular/airframe" />
			<SidebarMenu.Item title=".NET MVC" to="http://dashboards.webkom.co/net-mvc/airframe" />
		</SidebarMenu.Item> */}
	</SidebarMenu>
);
