
import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
    mainNav: [
        {
            title: "Support",
            href: "/support",
            disabled: true,
        },
    ],
    sidebarNav: [
        {
            title: "Chatbots",
            href: "/dashboard",
            icon: "bot",
        },
        {
            title: "Crawlers",
            href: "/dashboard/crawlers",
            icon: "post",
        },
        {
            title: "Billing",
            href: "/dashboard/billing",
            icon: "billing",
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: "settings",
        },
    ],
}