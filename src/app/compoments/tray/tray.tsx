import { useState } from "react";
import {ILayoutProps} from "../../layout";
import styles from "./tray.module.css";


interface ITrayProps{
    children: React.ReactNode;
    setClose: (is: boolean) => void;
    title: string
}

export default function Tray({children, setClose, title}:ILayoutProps ){

    const [open, setOpen] = useState<boolean>(true)
    const close = () => {
        setOpen(false);
        setTimeout(() => {
            setClose()
        }, 500);
    }
    
    return (
        <>
            <div onClick={close} className={open ? styles.trayBackdrop : styles.trayBackdropClose}></div>
            <div className={open ? styles.tray : styles.trayClose}>
                <h4 className={styles.title}>{title}</h4>
                <span className={styles.close} onClick={close}>✕</span>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    )
}