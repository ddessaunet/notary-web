import React from "react";
import Link from "next/link";

export default function InicioLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <header className="l-title-section t-title-section">
                <div className="l-logo-content t-logo-content"></div>
                <h6>La escriban&iacute;a</h6>
            </header>
            <section id="inicio" className="s-section">
                <div className="l-menu">
                    <ul id="inicio-nav" className="l-inicio-nav t-inicio-nav">
                        <li id="nav-compraventa"><Link href="/compraventa">Compraventa</Link></li>
                        <li id="nav-hipotecas"><Link href="/hipotecas">Hipotecas</Link></li>
                        <li id="nav-sociedades"><Link href="/sociedades">Sociedades</Link></li>
                        <li id="nav-poderes"><Link href="/poderes">Poderes</Link></li>
                        <li id="nav-actas"><Link href="/actas">Actas Notariales</Link></li>
                        <li id="nav-fideicomisos"><Link href="/fideicomisos">Fideicomisos</Link></li>
                        <li id="nav-donaciones"><Link href="/donaciones">Donaciones</Link></li>
                        <li id="nav-tramites"><Link href="/tramites">Tramites Urgentes</Link></li>
                        <li id="nav-asesoramiento"><Link href="/asesoramiento">Asesoramiento Jur&iacute;co
                            Notarial</Link>
                        </li>
                    </ul>
                </div>
                <article className="s-article">{children}</article>
            </section>
        </>
    )
}
