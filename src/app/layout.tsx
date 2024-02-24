// import './globals.css'
import '../styles/base.css'
import '../styles/layout.css'
import '../styles/module.css'
import '../styles/state.css'
import '../styles/theme.css'
import Link from "next/link";

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
          <header className="m-shadow">
              <div className="l-nombre t-nombre">
                  <h1>Mar&iacute;a Florencia Lepez Matinati</h1>
                  <h2>Escribana</h2>
              </div>
              <div className="l-datos t-datos">
                  <div className="l-datos-a">
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      <h3>Ayacucho 457, 1er piso, Oficina "12"</h3>
                      <h3>Telefax: 4951-6487</h3>
                  </div>
                  <div className="l-datos-b">
                      <h3></h3>
                      <h3>Cel: 15-63540707</h3>
                  </div>
              </div>
          </header>
          <div className="l-content-wrapper">
              <div className="nav shadow">
                  <ul id="content-nav" className="l-nav-list t-nav-list">
                      <li id="nav-inicio"><Link href="/">INICIO</Link></li>
                      <li id="nav-sitios"><a href="/links">LINKS</a></li>
                      <li id="nav-contacto"><a href="/contacto">CONTACTO</a></li>
                  </ul>
              </div>
              <div id="p-content" className="l-content t-content m-shadow">
                  {/*<header className="l-title-section t-title-section">*/}
                  {/*    <div className="l-logo-content t-logo-content"></div>*/}
                  {/*    <h6>La escriban&iacute;a</h6>*/}
                  {/*</header>*/}
                  {/*<section id="inicio" className="s-section" data-state="enabled" data-title="La escriban&iacutea">*/}
                  {/*    <div className="l-menu">*/}
                  {/*        <ul id="inicio-nav" className="l-inicio-nav t-inicio-nav">*/}
                  {/*            <li id="nav-compraventa"><Link href="/compraventa">Compraventa</Link></li>*/}
                  {/*            <li id="nav-hipotecas"><Link href="/hipotecas">Hipotecas</Link></li>*/}
                  {/*            <li id="nav-sociedades"><Link href="/sociedades">Sociedades</Link></li>*/}
                  {/*            <li id="nav-poderes"><Link href="/poderes">Poderes</Link></li>*/}
                  {/*            <li id="nav-actas"><Link href="/actas">Actas Notariales</Link></li>*/}
                  {/*            <li id="nav-fideicomisos"><Link href="/fideicomisos">Fideicomisos</Link></li>*/}
                  {/*            <li id="nav-donaciones"><Link href="/donaciones">Donaciones</Link></li>*/}
                  {/*            <li id="nav-tramites"><Link href="/tramites">Tramites Urgentes</Link></li>*/}
                  {/*            <li id="nav-asesoramiento"><Link href="/asesoramiento">Asesoramiento Jur&iacute;co Notarial</Link></li>*/}
                  {/*        </ul>*/}
                  {/*    </div>*/}
                  {/*    <article className="s-article">{children}</article>*/}
                  {/*</section>*/}
                  {children}
                  {/*<section id="nosotros" className="s-section" data-state="disabled" data-title="Nosotros"></section>*/}
                  {/*<section id="sitios" className="s-section" data-state="disabled" data-title="Sitios de Interes"></section>*/}
                  {/*<section id="contacto" className="s-section" data-state="disabled" data-title="Contacto"></section>*/}
                  <footer className="l-footer-content t-footer-content">
                      <h1>Escribana M. Florencia LEPEZ MATINATI</h1>
                      <h3>Titular del Registro Notarial 267</h3>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      <h3>Ayacucho 457, 1er piso, oficina "12", Ciudad Autonoma de Buenos Aires</h3>
                      <h3>Cel 15-63540707 - Telefono: 4951-6487</h3>
                  </footer>
              </div>
              <div className="l-aside t-aside m-shadow">
                  <section id="estudio">
                      <header>
                          <div id="logo-estudio"></div>
                          <div id="datos-estudio">
                              <h1>Estudio C&R Asociados</h1>
                              <h3></h3>
                              <h3></h3>
                          </div>
                      </header>
                      <div id="estudio-content">
                          <h1>Dr. Emilio David Cucarese</h1>
                          <h2>Abogado U.B.A - Socio</h2>
                          <div>
                              <ul className="l-derecho">
                                  <li>CIVIL</li>
                                  <li>COMERCIAL</li>
                                  <li>LABORAL</li>
                                  <li>PENAL</li>
                                  <li>SOCIEDADES</li>
                                  <li>ASESORAMIENTO A EMPRESAS</li>
                                  <li>ASISTENCIA NOTARIAL</li>
                              </ul>
                          </div>
                      </div>
                      <footer>
                          <h3>emiliodavidcucarese@hotmail.com</h3>
                          <h3>Cel.: 15-5956-1739</h3>
                          <h3>Tel.: 4362-5496</h3>
                      </footer>
                  </section>
              </div>
          </div>
      </div>
      </body>
    </html>
  )
}
