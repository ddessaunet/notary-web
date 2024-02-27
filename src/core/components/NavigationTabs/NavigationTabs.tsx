import Link from "next/link";

export default function NavigationTabs() {
    return (
        <div className="nav shadow">
            <ul id="content-nav" className="l-nav-list t-nav-list">
                <li id="nav-inicio"><Link href="/">INICIO</Link></li>
                <li id="nav-sitios"><a href="/links">LINKS</a></li>
                <li id="nav-contacto"><a href="/contacto">CONTACTO</a></li>
            </ul>
        </div>
    )
}
