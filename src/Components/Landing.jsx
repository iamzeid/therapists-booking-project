import { Link } from "react-router-dom";
import { auth } from "./config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

export default function Landing() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <div>
      {/* section1.............. */}
      <div className="landing position-relative">
        <div className="container d-flex align-items-center py-5 min-vh-100">
          <div className="text flex-grow-1 text-center text-md-start">
            <h1 className="display-2 text-capitalize">
              we're ready to <br />
              listen to your issues
            </h1>
            <p className="lead text-muted">100% positive results</p>
            {/* <Link
              type="button"
              className="btn btn-success p-2 text-capitalize rounded-2"
              to="/register"
            >
              book an appointment
            </Link> */}
            {
              user ? (
                <Link
                  type="button"
                  className="btn btn-success p-2 text-capitalize rounded-2"
                  to="/search"
                >
                  book an appointment
                </Link>
              ) : (
                <Link
                  type="button"
                  className="btn btn-success p-2 text-capitalize rounded-2"
                  to="/register"
                >
                  book an appointment
                </Link>
              )
            }
          </div>
          <div className="image d-none d-md-block">
            <img
              src="images/imgesection1.png"
              alt="beautiful-for-landing"
              className="img-fluid"
            />
          </div>
        </div>
        <a
          href="#"
          className="go-down position-absolute bottom-0 start-50 translate-middle-x text-white"
        >
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
      </div>
      {/* section2............... */}
      <section className="know why_choose img-content ">
        <div className="position-relative">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-7 ms-auto">
                <div className="content">
                  <h3 className="animated slideInRight">
                    When You want a Medical Website Design, Why Choose Us?
                  </h3>
                  <p className="animated fadeInUp">
                    Our expertise lies in designing medical websites with
                    specific goals in mind, from attracting new patients to
                    patient engagement and strengthening your online reputation.
                  </p>
                  <p className="animated slideInLeft">
                    We prioritize your target audience's needs, ensuring your
                    website is both visually appealing and capable of attracting
                    patients and improving conversion rates. Our designs are
                    search-engine-friendly, ensuring that your website is
                    discoverable by relevant visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section3.................................. */}
      <section>
        <div className="container p-5 section2">
          <h2 className="text-center ">Let us help you be successful</h2>
          <div className="row g-4 mt-5">
            <div className="col-md-4">
              <div className="shadow p-2 rounded-3 posts">
                <a target="_blank" href="#">
                  <img
                    className="img-fluid rounded-2"
                    src="images/card 3.jpg"
                    alt="Benefits of Digital PR for Your Healthcare Practice"
                    data-uw-rm-alt-original="Benefits of Digital PR for Your Healthcare Practice"
                  />
                </a>
                <div className="p-4">
                  <p>Posted on February 23, 2024</p>
                  <h6>Benefits of Digital PR for Your Healthcare Practice</h6>
                  <a target="_blank" className="btn btn-success mt-4" href="#">
                    Continue Reading
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="shadow p-2 rounded-3 posts">
                <a target="_blank" href="#">
                  <img
                    className="img-fluid rounded-2"
                    src="images/card 2.webp"
                    alt="Patient Engagement on Social Media – Tips to Stay Connected"
                    data-uw-rm-alt-original="Patient Engagement on Social Media – Tips to Stay Connected"
                  />
                </a>
                <div className="p-4">
                  <p>Posted on January 31, 2024</p>
                  <h6>Benefits of Digital PR for Your Healthcare Practice</h6>
                  <a target="_blank" className="btn btn-success mt-4" href="#">
                    Continue Reading
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="shadow p-2 rounded-3 posts">
                <a target="_blank" href="3">
                  <img
                    className="img-fluid rounded-2"
                    src="images/card 3.jpg"
                    alt="The Patient Journey: A Roadmap to Wellness"
                    data-uw-rm-alt-original="The Patient Journey: A Roadmap to Wellness"
                  />
                </a>
                <div className="p-4">
                  <p>Posted on January 25, 2024</p>
                  <h6>Benefits of Digital PR for Your Healthcare Practice </h6>
                  <a target="_blank" className="btn btn-success mt-4" href="3">
                    Continue Reading
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section4.......................... */}

      <div className="content container">
        <h2>FAQs</h2>
        <div className="accordion mt-4" id="accordionExample">
          <div className="accordion-item">
            <div className="accordion-header ">
              <button
                style={{ backgroundColor: "rgb(182, 215, 191)" }}
                className="accordion-button collapsed "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="false"
                aria-controls="collapse1"
                fdprocessedid="qrmk1x"
              >
                How do I know if my website is responsive?{" "}
              </button>
            </div>
            <div
              id="collapse1"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={{}}
            >
              <div className="accordion-body">
                {" "}
                To quickly determine if your website is responsive, open it on
                various devices, such as a desktop, laptop, tablet, and
                smartphone. If the website adjusts and looks good on all screen
                sizes, it is responsive.{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <button
                style={{ backgroundColor: "rgb(182, 215, 191)" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
                fdprocessedid="aqr2ml"
              >
                {" "}
                How do I know if my website appeals to patients?{" "}
              </button>
            </div>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {" "}
                Ask your current patients for their honest feedback regarding
                what they like most and least about your site's content,
                appearance, ease of use, and navigation. Let their responses be
                your guide. Remember that it’s about them, not you.{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <button
                style={{ backgroundColor: "rgb(182, 215, 191)" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
                fdprocessedid="onrq8d"
              >
                {" "}
                How long does it take to design a website?{" "}
              </button>
            </div>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {" "}
                The time it takes to design a website varies based on its
                complexity and features. A simple site may take a few weeks,
                while a complex one with advanced functionalities could take
                several months. Clear communication between the client and the
                web designer helps in setting realistic timelines.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <button
                style={{ backgroundColor: "rgb(182, 215, 191)" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
                fdprocessedid="zcsnh"
              >
                {" "}
                What makes a good website design?{" "}
              </button>
            </div>
            <div
              id="collapse4"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {" "}
                A good website design is user-friendly, visually appealing, and
                functional. It should have a clear navigation structure, a
                responsive layout, relevant content, and fast loading times.
                Consistent branding, easy-to-read content, and high-quality
                images contribute to a positive user experience.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <button
                style={{ backgroundColor: "rgb(182, 215, 191)" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
                fdprocessedid="n11q4g"
              >
                {" "}
                What is responsive web design?{" "}
              </button>
            </div>
            <div
              id="collapse5"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {" "}
                Responsive web design ensures a website adapts to different
                devices and screen sizes, providing an optimal viewing
                experience. It uses flexible grids and layouts, along with CSS
                media queries, to adjust content and design elements. This
                approach enhances usability and accessibility across desktops,
                tablets, and smartphones.{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <button
                style={{ backgroundColor: "rgb(182, 215, 191)" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse6"
                aria-expanded="false"
                aria-controls="collapse6"
                fdprocessedid="e5dtvt"
              >
                Why is web design important for a medical practice?{" "}
              </button>
            </div>
            <div
              id="collapse6"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {" "}
                Web design is crucial for a medical practice as it establishes a
                strong online presence, builds trust with patients, and
                facilitates information dissemination. A well-designed medical
                website can showcase services, provide educational content,
                offer appointment scheduling, and create a positive first
                impression for potential patients.{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <button
                style={{ backgroundColor: "rgb(182, 215, 191)" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse8"
                aria-expanded="false"
                aria-controls="collapse7"
                fdprocessedid="bjjjo"
              >
                How to choose a web design agency specializing in healthcare?{" "}
              </button>
            </div>
            <div
              id="collapse8"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={{}}
            >
              <div className="accordion-body">
                When selecting a web design agency for a medical practice,
                consider their experience in the healthcare industry. Look for
                portfolios with relevant projects, check client testimonials,
                and assess their understanding of medical regulations and
                privacy concerns. Ensure the agency offers responsive design,
                SEO optimization, and ongoing support for updates and
                maintenance.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section5.............................. */}

      <section className="contact mt-5 mb-2 pb-5" id="tops">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4">
              <div className="user  ">
                <img
                  className="img-fluid mt-5 w-100 mb-0 ms-5"
                  src="images/doctor_PNG15959.png"
                  alt="Contact Us"
                  data-uw-rm-alt-original="Contact Us"
                />
              </div>
            </div>
            <div className="col-sm-5 col-md-6 col-lg-7 col-xl-6 me-xl-5 mt-5  ">
              <div className="c_form  p-4 ms-0">
                <h2 className="text-white">Contact Us</h2>
                <p className="text-white">
                  Got questions or need assistance? Get in touch with our
                  dedicated team.
                </p>
                <form
                  className="mt-4"
                  autocomplete="off"
                  onsubmit="return side_validatecstraining();"
                  method="post"
                  id="cstraining_commentForm"
                  novalidate="novalidate"
                >
                  <div className="mb-3 cf-field">
                    <input
                      type="text"
                      name="full_name"
                      className="form-control border-0 required"
                      placeholder="Full Name*"
                      pattern="[A-Z a-z]{1,32}"
                      onkeypress="return ((event.charCode > 64 &amp;&amp; event.charCode < 91) || (event.charCode > 96 &amp;&amp; event.charCode < 123) || event.charCode == 8 || event.charCode == 32 || (event.charCode >= 48 &amp;&amp; event.charCode <= 57));"
                      fdprocessedid="b6zp9"
                    />
                  </div>
                  <div className="mb-3 cf-field">
                    <input
                      type="text"
                      name="phone"
                      className="form-control border-0 required digits"
                      placeholder="Phone*"
                      onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                      maxlength="14"
                      minlength="10"
                      fdprocessedid="yfco2c"
                    />
                  </div>
                  <div className="mb-3 cf-field">
                    <input
                      type="email"
                      name="email"
                      className="form-control border-0 required"
                      placeholder="Email*"
                      fdprocessedid="1em0qo"
                    />
                  </div>
                  <div className="mb-3 cf-field">
                    <input
                      type="text"
                      name="address"
                      className="form-control border-0 required"
                      placeholder="Address*"
                      fdprocessedid="cer8as"
                    />
                  </div>

                  <div className="mb-3">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6Lf1VqMZAAAAAHSWntbM0gBjm781YgO3f6RsBxVC"
                      data-callback="recaptchaCallback"
                      style={{
                        transform: "scale(0.95)",
                        webkitTtransform: "scale(0.95)",
                        transformOorigin: "0 0",
                        webkitTransformOrigin: "0 0",
                      }}
                    >
                      <div style={{ width: "304px", height: "78px" }}>
                        <div>
                          <iframe
                            title="reCAPTCHA"
                            width="304"
                            height="78"
                            role="presentation"
                            name="a-hgyj45m47rf7"
                            frameborder="0"
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Lf1VqMZAAAAAHSWntbM0gBjm781YgO3f6RsBxVC&amp;co=aHR0cHM6Ly93d3cucHJhY3RpY2VidWlsZGVycy5jb206NDQz&amp;hl=en&amp;v=1kRDYC3bfA-o6-tsWzIBvp7k&amp;size=normal&amp;cb=orebgnrihhxc"
                            data-lf-yt-playback-inspected-dzlr5a50g9n4boq2="true"
                            data-lf-vimeo-playback-inspected-dzlr5a50g9n4boq2="true"
                            style={{ maxWwidth: "100%", maxHeight: "78px" }}
                          ></iframe>
                        </div>
                        <textarea
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                          className="g-recaptcha-response"
                          style={{
                            width: "250px",
                            height: "40px",
                            border: "1px solid rgb(193, 193, 193)",
                            margin: "10px 25px",
                            padding: "0px ",
                            resize: "none",
                            display: "none",
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <span style={{ color: "red" }} id="scisseb3"></span>{" "}
                    <span
                      style={{ color: "red" }}
                      className="error"
                      id="captcha56"
                    >
                      {" "}
                    </span>
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
