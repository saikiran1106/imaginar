// src/app/layout.tsx

import "../styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./layout.module.css"; // Import new CSS module for layout

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background video for both Header and HeroSection */}
        <video autoPlay muted loop className={styles.backgroundVideo}>
          <source src="/assets/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content layers on top of the video */}
        <div className={styles.contentWrapper}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
