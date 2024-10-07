import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center h-100 w-100 flex-column"
        style={{ height: "100vh" }}
      >
        <h1>ERROR BROOO !!!!!</h1>
        <Link to="/">
          Kembali Ke <b className="fs-5">Beranda</b>
        </Link>
      </div>
    </>
  );
};

export default Error;
