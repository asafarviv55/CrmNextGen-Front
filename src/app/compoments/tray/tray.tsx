import { useState } from "react";
import styles from "./tray.module.css";


interface ITrayProps{
    children: React.ReactNode;
    setClose: () => void;
    title: string
}

export default function Tray({children, setClose, title}:ITrayProps ){

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