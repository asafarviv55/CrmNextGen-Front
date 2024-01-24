import styles from "./header.module.css";
import Link from "next/link";
import Image from 'next/image';
import notificationIcon from "../../../../public/notification.svg";

export default function Header(){
    return (
        <header className="flex justify-between border-bottom">
            
            <div className="flex gap-20 items-center">
                <div>
                    <span className="text-inactive" >Dashboard / </span>
                    <span className="active">Leads</span>
                </div>
                <div className="input-search">
                    <input type="search" placeholder="Search here.."/>
                </div>
            </div>

            <div className="flex gap">
                <div className={styles.userMenu}>
                    <span>Aa</span>
                    <select>
                        <option>Assaf arviv</option>
                        <option>Change password</option>
                    </select>
                </div>
                <div className={styles.notification}>
                    <span>•</span>
                    <Image priority src={notificationIcon} alt=""/>
                </div>
            </div>
        </header>
    )
}