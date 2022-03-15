import "../footer/footer.css";

const Footer = () => {
  return (
    <div className="contenedorFooter">
      <div className="contenedorPagos">
        <div className="div1">
          <h3>
            <i className="fa-solid fa-truck"></i>Envianos tu compra
          </h3>{" "}
          <p>Hacemos envios a todo el pais</p>
        </div>
        <div className="div2">
          <h3>
            <i className="fa-solid fa-credit-card"></i>Paga como quieras
          </h3>{" "}
          <p>Tarjetas de credito o efectivo</p>
        </div>
        <div className="div3">
          <h3>
            <i className="fa-solid fa-lock"></i>Compra con seguridad
          </h3>{" "}
          <p>Tus datos siempre protegidos</p>
        </div>
      </div>
      <nav className="footer">
        <ul>
          <a href="asd">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="asd">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="asd">
            <i className="fab fa-twitter-square"></i>
          </a>
        </ul>
      </nav>
    </div>
  );
};
export default Footer;
