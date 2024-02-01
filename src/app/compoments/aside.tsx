"use client"

import Link from "next/link";
import Image from 'next/image';
import dashboardIcon from "../../../public/dashboard.svg";
import usersdIcon from "../../../public/users.svg";
import leadsIcon from "../../../public/leads.svg";
import customersIcon from "../../../public/customers.svg";
import { usePathname } from "next/navigation";

export default function Aside(){
    const pathname = usePathname();

    const links = [
        {
            href: "/dashboard",
            icon: dashboardIcon,
            text: "Dashboard"
        },
        {
            href: "/dashboard/users",
            icon: usersdIcon,
            text: "Users"
        },
        {
            href: "/dashboard/leads",
            icon: leadsIcon,
            text: "Leads"
        },
        {
            href: "/dashboard/customers",
            icon: customersIcon,
            text: "Customers"
        },
    ];

    return (
        <aside>
            <div className="flex items-end">
                <h1 className="main-logo b-600">{ process.env.NEXT_PUBLIC_APP_NAME }</h1>
                <small className="text-blue">{process.env.NEXT_PUBLIC_APP_VERSION}</small>
            </div>
            <div className="hr"></div>
            <nav>

                { links.map(l => (
                    <Link key={l.href} className={`aside-link ${pathname === l.href ? 'active' : ''}`} href={l.href}>
                        <div className="wrap-svg">
                            <Image priority src={l.icon} alt=""/>
                        </div>
                        <span>{l.text}</span>
                    </Link>

                ))}
            </nav>
        </aside>
    )
}