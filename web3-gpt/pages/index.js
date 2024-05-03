import styles from "../styles/Home.module.css";
import { ConnectEmbed, darkTheme, useShowConnectEmbed } from '@thirdweb-dev/react';
import { NextPage } from 'next';

const customTheme = darkTheme({
  colors: {
    modalBg : "black"
  }
})

export default function Home() {
  const showConnectEmbed = useShowConnectEmbed();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {
          showConnectEmbed ? (
          <div style={{
            display: "flex",
            flexDirection : "column",
            justifyContent: "center",
            alignItems : "center",
            height : "100vh"
          }}>
            <h1>Login To Chat!</h1>
            <ConnectEmbed 
              theme={customTheme}
              style={{
                border : "none"
              }}
            />
          </div>
          ) : (
          <div> 
           <h1>Hi</h1>
          </div>
          )
        }
      </div>
    </main>
  );
}
