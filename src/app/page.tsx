import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.scss'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <main>
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
                        <li id="nav-inicio"><a href="javascript:void(0);">INICIO</a></li>
                        {/*<li>INICIO</li>*/}
                        <li id="nav-sitios"><a href="javascript:void(0);">LINKS</a></li>
                        {/*<li>LINKS</li>*/}
                        <li id="nav-contacto"><a href="javascript:void(0);">CONTACTO</a></li>
                        {/*<li>CONTACTO</li>*/}
                    </ul>
                </div>
                <div id="p-content" className="l-content t-content m-shadow">
                    <header className="l-title-section t-title-section">
                        <div className="l-logo-content t-logo-content"></div>
                        <h6>La escriban&iacute;a</h6>
                    </header>
                    <section id="inicio" className="s-section" data-state="enabled" data-title="La escriban&iacutea">
                        <div className="l-menu">
                            <ul id="inicio-nav" className="l-inicio-nav t-inicio-nav">
                                <li id="nav-compraventa"><a href="javascript:void(0);">Compraventa</a></li>
                                {/*<li id="nav-compraventa">Compraventa</li>*/}
                                <li id="nav-hipotecas"><a href="javascript:void(0);">Hipotecas</a></li>
                                {/*<li id="nav-hipotecas">Hipotecas</li>*/}
                                <li id="nav-sociedades"><a href="javascript:void(0);">Sociedades</a></li>
                                {/*<li id="nav-sociedades">Sociedades</li>*/}
                                <li id="nav-poderes"><a href="javascript:void(0);">Poderes</a></li>
                                {/*<li id="nav-poderes">Poderes</li>*/}
                                <li id="nav-actas"><a href="javascript:void(0);">Actas Notariales</a></li>
                                {/*<li id="nav-actas">Actas Notariales</li>*/}
                                <li id="nav-fideicomisos"><a href="javascript:void(0);">Fideicomisos</a></li>
                                {/*<li id="nav-fideicomisos">Fideicomisos</li>*/}
                                <li id="nav-donaciones"><a href="javascript:void(0);">Donaciones</a></li>
                                {/*<li id="nav-donaciones">Donaciones</li>*/}
                                <li id="nav-tramites"><a href="javascript:void(0);">Tramites Urgentes</a></li>
                                {/*<li id="nav-tramites">Tramites Urgentes</li>*/}
                                <li id="nav-asesoramiento"><a href="javascript:void(0);">Asesoramiento Jur&iacute;co Notarial</a></li>
                                {/*<li id="nav-asesoramiento">Asesoramiento Jur&iacute;co Notarial</li>*/}
                            </ul>
                        </div>
                        <article id="home" className="s-article" data-state="enabled"></article>
                        <article id="compraventa" className="s-article" data-state="disabled"></article>
                        <article id="hipotecas" className="s-article" data-state="disabled"></article>
                        <article id="sociedades" className="s-article" data-state="disabled"></article>
                        <article id="poderes" className="s-article" data-state="disabled"></article>
                        <article id="actas" className="s-article" data-state="disabled"></article>
                        <article id="fideicomisos" className="s-article" data-state="disabled"></article>
                        <article id="donaciones" className="s-article" data-state="disabled"></article>
                        <article id="tramites" className="s-article" data-state="disabled"></article>
                        <article id="asesoramiento" className="s-article" data-state="disabled"></article>
                    </section>
                    <section id="nosotros" className ="s-section" data-state="disabled" data-title="Nosotros"></section>
                    <section id="sitios" className ="s-section" data-state="disabled" data-title="Sitios de Interes"></section>
                    <section id="contacto" className ="s-section" data-state="disabled" data-title="Contacto"></section>
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
                {/*<div className="ddessarrollos">*/}
                {/*    <div className="dd-text">*/}
                {/*        <h6>Sitio desarrollado por:</h6>*/}
                {/*    </div>*/}
                {/*    <div className="dd-logo"><a href="http://ddessarrollos.com/"></a></div>*/}
                {/*</div>*/}
            </div>
        </div>
    </main>
  )
}

export default Home
