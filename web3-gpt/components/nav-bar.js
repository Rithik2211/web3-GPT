import { ConnectWallet } from "@thirdweb-dev/react";
import { man } from "./assests/index";
import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/Home.module.css";

const NavBar = () => {
    return (
        <div style={{
            display : "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding : "1rem",
            width : "100%"
        }}>
            <h2>Web3 GPT Store</h2>
            <div style={{ marginRight: "5%"}}>
                <Link href='/' style={{marginRight : "1rem"}} className={styles.navLink}> Chat </Link>
                <Link href='/shop' className={styles.navLink}> Shop </Link>
            </div>
            <ConnectWallet 
                detailsBtn={() => (
                    <div> 
                        <Image src={man} alt="img" style={{ borderRadius: "15px", width: "40px", height: "40px"}}/>
                    </div>
                )}
            />
            
        </div>
    )
}
export default NavBar;