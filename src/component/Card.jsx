import React, { useState } from "react";
import "./Card.css";
import Header from "./Header";
import Footer from "./Footer";
import image1 from "../assets/gyaan-half-sleeve-t-shirt-black-310957-1655748557-1.webp";
import image2 from "../assets/women-s-black-toxic-graphic-printed-oversized-t-shirt-591188-1684998832-1.webp";
import image3 from "../assets/women-s-pink-dress-2-584764-1688995604-2.webp";
import image4 from "../assets/women-s-purple-back-to-howgwarts-graphic-printed-oversized-hoodies-625612-1703686509-1.webp";
import image5 from "../assets/women-s-white-attempting-to-adult-graphic-printed-oversized-t-shirt-530393-1699428261-1.webp";
import image6 from "../assets/women-s-brown-treat-people-with-kindness-graphic-printed-boyfriend-t-shirt-580205-1694765338-1.webp";
import image7 from "../assets/men-printed-co-ord-set-3-619987-1700047584-1.webp";
import image8 from "../assets/men-s-black-i-need-my-space-typography-oversized-hoodies-556976-1703741397-1.webp";
function Card() {
  const [quantity1, setQuantity1] = useState(0);
  const handleAddToCart1 = () => {
    setQuantity1(quantity1 + 1);
  };
  const handleRemoveFromCart1 = () => {
    if (quantity1 > 0) {
      setQuantity1(quantity1 - 1);
    }
  };

  const [quantity2, setQuantity2] = useState(0);
  const handleAddToCart2 = () => {
    setQuantity2(quantity2 + 1);
  };
  const handleRemoveFromCart2 = () => {
    if (quantity2 > 0) {
      setQuantity2(quantity2 - 1);
    }
  };

  const [quantity3, setQuantity3] = useState(0);
  const handleAddToCart3 = () => {
    setQuantity3(quantity3 + 1);
  };
  const handleRemoveFromCart3 = () => {
    if (quantity3 > 0) {
      setQuantity3(quantity3 - 1);
    }
  };

  const [quantity4, setQuantity4] = useState(0);
  const handleAddToCart4 = () => {
    setQuantity4(quantity4 + 1);
  };
  const handleRemoveFromCart4 = () => {
    if (quantity4 > 0) {
      setQuantity4(quantity4 - 1);
    }
  };

  const [quantity5, setQuantity5] = useState(0);
  const handleAddToCart5 = () => {
    setQuantity5(quantity5 + 1);
  };
  const handleRemoveFromCart5 = () => {
    if (quantity5 > 0) {
      setQuantity5(quantity5 - 1);
    }
  };

  const [quantity6, setQuantity6] = useState(0);
  const handleAddToCart6 = () => {
    setQuantity6(quantity6 + 1);
  };
  const handleRemoveFromCart6 = () => {
    if (quantity6 > 0) {
      setQuantity6(quantity6 - 1);
    }
  };

  const [quantity7, setQuantity7] = useState(0);
  const handleAddToCart7 = () => {
    setQuantity7(quantity7 + 1);
  };
  const handleRemoveFromCart7 = () => {
    if (quantity7 > 0) {
      setQuantity7(quantity7 - 1);
    }
  };

  const [quantity8, setQuantity8] = useState(0);
  const handleAddToCart8 = () => {
    setQuantity8(quantity8 + 1);
  };
  const handleRemoveFromCart8 = () => {
    if (quantity8 > 0) {
      setQuantity8(quantity8 - 1);
    }
  };
  return (
    <>
      {/* Navigation */}{" "}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {quantity1 +
                    quantity2 +
                    quantity3 +
                    quantity4 +
                    quantity5 +
                    quantity6 +
                    quantity7 +
                    quantity8}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Header />
      {/* section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img className="card-img-top" src={image1} alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Mens Tshirt</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {quantity1 > 0 ? (
                      <>
                        <button
                          className="btn btn-outline-dark me-2"
                          onClick={() => handleRemoveFromCart1()}
                        >
                          -
                        </button>
                        {quantity1}
                        <button
                          className="btn btn-outline-dark ms-2"
                          onClick={() => handleAddToCart1()}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => handleAddToCart1()}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img className="card-img-top" src={image2} alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Women Tshirt</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $15.00
                    </span>
                    $10.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {quantity2 > 0 ? (
                      <>
                        <button
                          className="btn btn-outline-dark me-2"
                          onClick={() => handleRemoveFromCart2()}
                        >
                          -
                        </button>
                        {quantity2}
                        <button
                          className="btn btn-outline-dark ms-2"
                          onClick={() => handleAddToCart2()}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => handleAddToCart2()}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img className="card-img-top" src={image3} alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Pink Dress </h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $25.00
                    </span>
                    $22.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {quantity3 > 0 ? (
                      <>
                        <button
                          className="btn btn-outline-dark me-2"
                          onClick={() => handleRemoveFromCart3()}
                        >
                          -
                        </button>
                        {quantity3}
                        <button
                          className="btn btn-outline-dark ms-2"
                          onClick={() => handleAddToCart3()}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => handleAddToCart3()}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img className="card-img-top" src={image4} alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $13.00
                    </span>
                    $9.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {quantity4 > 0 ? (
                      <>
                        <button
                          className="btn btn-outline-dark me-2"
                          onClick={() => handleRemoveFromCart4()}
                        >
                          -
                        </button>
                        {quantity4}
                        <button
                          className="btn btn-outline-dark ms-2"
                          onClick={() => handleAddToCart4()}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => handleAddToCart4()}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img className="card-img-top" src={image5} alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $23.00
                    </span>
                    $21.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {quantity5 > 0 ? (
                      <>
                        <button
                          className="btn btn-outline-dark me-2"
                          onClick={() => handleRemoveFromCart5()}
                        >
                          -
                        </button>
                        {quantity5}
                        <button
                          className="btn btn-outline-dark ms-2"
                          onClick={() => handleAddToCart5()}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => handleAddToCart5()}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img className="card-img-top" src={image6} alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $13.00
                    </span>
                    $9.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {quantity6 > 0 ? (
                      <>
                        <button
                          className="btn btn-outline-dark me-2"
                          onClick={() => handleRemoveFromCart6()}
                        >
                          -
                        </button>
                        {quantity6}
                        <button
                          className="btn btn-outline-dark ms-2"
                          onClick={() => handleAddToCart6()}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => handleAddToCart6()}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img className="card-img-top" src={image7} alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $15.00
                    </span>
                    $14.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {quantity7 > 0 ? (
                      <>
                        <button
                          className="btn btn-outline-dark me-2"
                          onClick={() => handleRemoveFromCart7()}
                        >
                          -
                        </button>
                        {quantity7}
                        <button
                          className="btn btn-outline-dark ms-2"
                          onClick={() => handleAddToCart7()}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => handleAddToCart7()}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img className="card-img-top" src={image8} alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $19.00
                    </span>
                    $17.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {quantity8 > 0 ? (
                      <>
                        <button
                          className="btn btn-outline-dark me-2"
                          onClick={() => handleRemoveFromCart8()}
                        >
                          -
                        </button>
                        {quantity8}
                        <button
                          className="btn btn-outline-dark ms-2"
                          onClick={() => handleAddToCart8()}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => handleAddToCart8()}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Card;
