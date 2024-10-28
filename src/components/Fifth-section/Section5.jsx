import apppleTvLogo from "../../commonResource/images/icons/apple-tv-logo.png";
import watch from "../../commonResource/images/icons/watch-series5-logo.png"
import banker from "../../commonResource/images/home/banker.png"; 
export default function Section5() {
  return (
    <>
      <section className="fifth-highlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={apppleTvLogo} />
                  </div>
                </div>

                <div className="tvshow-logo-wrapper">
                  <img src={banker} />
                </div>

                <div className="watch-more-wrapper">
                  <a href="#">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={watch} />
                  </div>
                </div>
                <div className="description-wrapper">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
