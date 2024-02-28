export default function Header() {
    return (
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
    )
}
