import React from "react";

export default function LinksLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <header className="l-title-section t-title-section">
                <div className="l-logo-content t-logo-content"></div>
                <h6>Sitios de Interes</h6>
            </header>
            <section id="sitios" className="s-section">
                {children}
            </section>
        </>
    )
}

