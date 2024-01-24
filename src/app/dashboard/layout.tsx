import Link from "next/link";
import { redirect } from "next/navigation";
import styles from './layout.module.css'
import Aside from "../compoments/aside";
import Header from "../compoments/header/header";

interface IDashboardLayoutProps{
    children: React.ReactNode
  }
  
export default function DashboardLayout({children}:IDashboardLayoutProps){
    return (
        <div className={styles.layout}>
            <Aside />
            <main>
                <Header />
                <section>
                    {children}
                </section>
            </main>
        </div>
    )
}