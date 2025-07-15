
function Formulario({ name, email, message}){
    return (
        <>
            <h1>Formulario children</h1>
            <form>
                <label htmlFor="name">Nombre:</label>
                <input value={name} type="text" id="name" name="name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input value={email} type="email" id="email" name="email" />
                <br />
                <label htmlFor="message">Mensaje:</label>
                <textarea value={message} id="message" name="message"></textarea>
                <br />
            </form>
        </>
    )
}

export default Formulario;