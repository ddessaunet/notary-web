export default function Contato() {
    return (
        <div id="contact-form">
            <form name="contact" id="contact" method="POST" noValidate="novalidate">
                <p>(*) Campos obligatorios</p>
                <div className="l-fieds">
                    <label>Nombre*</label><br/>
                    <input type="text" id="name" name="name"
                           placeholder="Pablo" required/><br/>

                    <label>Apellido</label><br/>
                    <input type="text" id="lastname" name="lastname" placeholder="Rodriguez"/><br/>

                    <label>E-mail*</label><br/>
                    <input type="email" id="email_addr" name="email_addr"
                           placeholder="juan@ejemplo.com" required/><br/>

                    <label>Telefono</label><br/>
                    <input type="tel" id="telefone" name="telefone"
                           placeholder="55555555" pattern="[0-9]"/><br/>
                </div>
                <div className="l-message">
                    <label>Mensaje*</label><br/>
                    <textarea id="message" name="message"
                              pattern="[A-Za-z0-9]{6}" placeholder="Su consulta no molesta"
                              required></textarea><br/>
                    <div className="error"></div>
                    <div className="e-send">Por favor intente nuevamente.</div>
                    <div className="s-send">Mensaje enviado con exito.</div>
                    <input id="enviar" type="submit" value="ENVIAR"/>
                </div>
            </form>
        </div>
    )
}
