// src/app/layout.tsx

import "../styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./layout.module.css"; // Import new CSS module for layout

export const metadata = {
  title: 'ImaginAR',
  description: 'Where Innovation Meets Reality',
  icons: {
    icon: [
      { url: '/assets/images/favicon.svg', type: 'image/svg+xml' },
      // You can also add a fallback ICO if needed:
      // { url: '/favicon.ico', sizes: 'any' }
    ],
  },
};

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
