'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import styles from './navlink.module.css';

export default function NavLink({href , children}){
    const path = usePathname()
    return(
        
         <nav className={styles.nav}>
            <Link href={href} className={path.startsWith(href) ? `${styles.link} ${styles.active}` : undefined}>{children}</Link>
        </nav>
        
    )
}