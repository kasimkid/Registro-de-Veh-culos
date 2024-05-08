
const Registro = () => {

    return (


        <div className="container p-5 mt-5 box shadow">
            <h2>Nuevo Ingreso</h2>

            <form className="form-control ">
                <div className="row justify-content-center">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="form-control"
                    name="nombre"
                    autoComplete="off"
                />

                <input
                    type="number"
                    placeholder="Telefono"
                    className="form-control"
                    name="telefono"
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="Tipo de vehiculo"
                    className="form-control"
                    name="text"
                    autoComplete="off"
                />
                
                <input
                    type="text"
                    placeholder="Patente"
                    className="form-control"
                    name="text"
                    autoComplete="off"
                />
                <input
                    type="number"
                    placeholder="Puesto"
                    className="form-control"
                    name="number"
                    autoComplete="off"
                />
                </div>


            </form>
        </div>
    )
}

export default Registro
