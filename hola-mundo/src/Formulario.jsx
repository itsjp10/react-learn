
function Formulario({ name, email, message }) {
    return (
        <>
            <h1>Formulario children</h1>
            <form>
                <label htmlFor="name">Nombre:</label>
                <div>{name}</div>

                <br />
                <label htmlFor="email">Email:</label>
                <div>{email}</div>

                <br />
                <label htmlFor="message">Mensaje:</label>
                <div>{message}</div>
                <br />
            </form>
        </>
    )
}

export default Formulario;