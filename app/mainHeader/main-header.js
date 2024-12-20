import Link from "next/link"
import logo from '@/assets/logo.png'
import Image from "next/image"
import styles from './main-header.module.css'
export default function MainHeader(){
    return(
    <header  className={styles.header}>
        <Link  className={styles.logo} href="/">
        <Image src={logo} alt="Food is ready" width={5000000} height={500000}/>
       
        </Link>
        <nav className={styles.nav}>
            <Link href="/meals" >Meals</Link>
            <Link href="/community">Community</Link>
        </nav>
    </header>
    )
    
}