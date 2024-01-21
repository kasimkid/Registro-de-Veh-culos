import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const onInputChange = (e) => {
    console.log(onInputChange, "click");
  };

  const onLogIn = (e) => {
    e.preventDeafault();
    navigate("/nuevo_ingreso");
  };

  return (
    <>
    <h1>Inicio de Sesión</h1>
      <form className="form-control" onSubmit={onLogIn}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          className="form-control"
          name="email"
          autoComplete="off"
          value={ '' }
          onChange={onInputChange}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="form-control"
          name="password"
          autoComplete="off"
          value={ ''}
          onChange={onInputChange}
        />

        <button className="btn btn-primary mt-2">Ingresar</button>
      </form>
    </>
  );
};
