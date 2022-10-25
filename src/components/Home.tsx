import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <section>
        <div className="container-fluid content">
          <div className="row">
            <div className="col-lg-12 content">
              <h1 className="big-text mt-4 mb-4">
                Welcome to BiziK, business industry zone by Ivan Kuper.
              </h1>
              <img
                className="image img-fluid mx-1 my-5"
                src="welcome.svg"
                alt=""
              />
              {/* <img src="Profile.jpg" width={300} alt="Profile" /> */}

              <div className="buttons">
                <div className="row">
                  <Link
                    to={"/signin"}
                    className="col-lg-3 btn btn-warning w-75 my-1"
                  >
                    <i className="fa-solid fa-right-to-bracket"></i> Login
                  </Link>
                  <Link
                    to={"/signup"}
                    className="col-lg-3 btn btn-warning my-1 w-75"
                  >
                    <i className="fa-solid fa-registered"></i> Register
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
