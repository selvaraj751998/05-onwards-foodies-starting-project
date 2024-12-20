import Link from "next/link"
import logo from '@/assets/logo.png'
import Image from "next/image"
import styles from './main-header.module.css'
import NavLink from "../nav-link/navlink"
export default function MainHeader(){
    return(
    <header  className={styles.header}>
        <Link  className={styles.logo} href="/">
        <Image src={logo} alt="Food is ready" width={5000000} height={500000}/>

        </Link>
        <nav className={styles.nav}>
            <ul>
                <li>
                <NavLink href={"/meals"}>Explore the Food</NavLink>

                </li>
                <li>
                <NavLink href={"/community"}>Join the World of FoodLovers</NavLink>

                </li>
            </ul>
        </nav>
       
    </header>
    )
    
}