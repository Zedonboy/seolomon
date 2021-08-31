import React, { useState } from "react";
import Link from "../../utils/ActiveLink";

const Navbar = ({ data }) => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <img className="h-[4rem]" src={data?.logo?.url} alt="logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link passHref href="/blog">
                      <a className="nav-link">Blog</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/pricing">
                      <a className="nav-link">Pricing</a>
                    </Link>
                  </li>
                  {data?.navLinks?.map((v) => (
                    <li className="nav-item">
                      <Link passHref href={v?.link || ""}>
                        <a className="nav-link">{v?.text}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="others-option d-flex align-items-center">
                {/* <div className="option-item">
                                    <div className="cart-btn">
                                        <Link href="/cart">
                                            <a>
                                                <i className="flaticon-shopping-cart"></i>
                                                <span>1</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div> */}

                <div className="option-item">
                  <div className="search-box" onClick={handleToggleSearchModal}>
                    <i className="flaticon-search"></i>
                  </div>
                </div>

                {/* <div className="option-item">
                                    <div className="side-menu-btn" onClick={handleToggleSidebarModal}>
                                        <i className="flaticon-menu"></i>
                                    </div>
                                </div> */}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="flaticon-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right ${
          isActiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="bx bx-x"></i>
            </button>

            <div className="modal-body">
              <div className="logo">
                <Link href="/">
                  <a className="d-inline-block">
                    <img src="/images/logo.png" alt="image" />
                  </a>
                </Link>
              </div>

              <div className="instagram-list">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img1.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img2.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img3.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img4.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img5.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img6.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-contact-info">
                <h2>
                  <a href="tel:+11234567890">+1 (123) 456 7890</a>
                  <span>OR</span>
                  <a href="mailto:hello@mibix.com">hello@mibix.com</a>
                </h2>
              </div>

              <ul className="social-list">
                <li>
                  <span>Follow Us On:</span>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  );
};

export default Navbar;
