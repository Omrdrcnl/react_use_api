import bootstrapsvg from "./bootstrap.svg";

const Header = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center text-dark text-decoration-none"
      >
        <img src={bootstrapsvg} alt="svg" />
        <span className="fs-4 ms-3">Api Tutorial</span>
      </a>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a className="btn btn-primary me-3 py-2" href="#/login">
          Login
        </a>
        <a className="btn btn-danger py-2" href="#/register">
          Register
        </a>
      </nav>
    </div>
  );
};

export default Header;
