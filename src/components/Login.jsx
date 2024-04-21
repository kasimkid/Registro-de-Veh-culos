import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const onInputChange = () => {
    console.log(onInputChange, "click");
  };

  const onLogIn = (e) => {
    e.preventDeafault();
    navigate("/nuevo_ingreso");
  };

  return (
    <>
    <h1>Inicio de Sesión</h1>
    <div className="form-box container">
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
        <div className="btns d-flex justify-content-center mt-2 gap-2">
        <button className="btn btn-primary outline">Ingresar</button>
        <button className="btn btn-danger outline">Cancelar</button>
        </div>

      </form>
      </div>
    </>
  );
};
