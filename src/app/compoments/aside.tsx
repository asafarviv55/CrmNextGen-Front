import Link from "next/link";
import Image from 'next/image';
import dashboardIcon from "../../../public/dashboard.svg";
import usersdIcon from "../../../public/users.svg";
import leadsIcon from "../../../public/leads.svg";
import customersIcon from "../../../public/customers.svg";

export default function Aside(){
    return (
        <aside>
            <div className="flex items-end">
                <h1 className="main-logo b-600">{ process.env.NEXT_PUBLIC_APP_NAME }</h1>
                <small className="text-blue">{process.env.NEXT_PUBLIC_APP_VERSION}</small>
            </div>
            <div className="hr"></div>
            <nav>
                <Link className="aside-link" href="/dashboard">
                    <div className="wrap-svg">
                        <Image priority  src={dashboardIcon} alt=""/>
                    </div>
                    <span>Dashboard</span>
                </Link>

                <Link className="aside-link" href="/dashboard/users">
                    <div className="wrap-svg">
                        <Image priority  src={usersdIcon} alt=""/>
                    </div>
                    <span>Users</span>
                </Link>

                <Link className="aside-link active" href="/dashboard/leads">
                    <div className="wrap-svg">
                        <Image priority  src={leadsIcon} alt=""/>
                    </div>
                    <span>Leads</span>
                </Link>
                
                <Link className="aside-link" href="/dashboard/Customers">
                    <div className="wrap-svg">
                        <Image priority  src={customersIcon} alt=""/>
                    </div>
                    <span>Customers</span>
                </Link>

            </nav>
        </aside>
    )
}