import Header from "@/components/header/page";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/page";
import { requireAuth } from "@/services/server-side/authen";
import { StoreProvider } from "@/store";
import { Providers } from "@/redux/provider";
import { store } from "@/redux/configure-store";
import Script from "next/script";
import LayoutFacebook from "@/components/common/Facebook/LayoutFacebook";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audition",
  description: "Audition",
};

export default async function asyncRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await requireAuth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="w-full overflow-hidden">
            <Header token={token} />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
      {/* <Script id="js-jquery" async src={"/js/jquery-1.9.1.min.js"} />
      <Script
        id="header-login"
        async
        src="https://header.vtcgame.vn/headerJS/headjs.js?vs=13062023"
      />
      <Script
        id="body-login"
        async
        src="https://header.vtcgame.vn/headerJS/BodyCall.js?vs=20161227"
      /> */}
    </html>
  );
}
