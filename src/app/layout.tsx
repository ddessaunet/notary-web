import '../styles/main.scss'

import AsideInformation from "@/core/components/AsideInformation";
import Header from "@/core/components/Header";
import Footer from "@/core/components/Footer";
import NavigationTabs from "@/core/components/NavigationTabs";
import Content from "@/core/components/Content";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <div className="l-wrapper t-wrapper">
          <Header />
          <div className="l-content-wrapper">
              <NavigationTabs />
              <Content>
                  {children}
                  <Footer />
              </Content>
              <AsideInformation />
          </div>
      </div>
      </body>
    </html>
  )
}
