


export const NuevoIngreso = () => {


  return (


    <div className="form-box container">
      <h2>Nuevo Ingreso</h2>

      <form className="form-control">
        <input
          type="email"
          placeholder="Correo Electrónico"
          className="form-control"
          name="email"
          autoComplete="off"
          value={ '' }
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="form-control"
          name="password"
          autoComplete="off"
          value={ ''}
        />
    </form>
    </div>

  )
}

