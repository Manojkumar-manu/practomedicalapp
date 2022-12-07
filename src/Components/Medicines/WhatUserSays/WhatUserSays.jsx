import "./WhatUserSays.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const WhatUserSays = () => {
  // return (
  //   <div id="WhatUserSays">
  //     <div id="WhatUserSaysTitle">What our users have to say</div>
  //     <div id="WhatUserSaysTitle2">
  //       Beautiful application with elegant UI Design. I found this app very
  //       useful. Placed Order for a few medicines and recieved in just two days.
  //       Same medicine costs me +100 from local Shop. Recommended application.
  //       :-).
  //     </div>

  //     <div className="WhatUserSaysApplication">
  //       <div>
  //         <img
  //           src="https://www.practostatic.com/ecommerce-assets/static/media/home/common/testimony2.9e5212dc.jpg"
  //           alt=""
  //         />
  //       </div>
  //       <div id="WhatUserSaysApplicationInfo">
  //         <div id="WhatUserSaysApplicationName">Ayush Verma</div>
  //         <div id="WhatUserSaysApplicationTime">Oct 5, 2018 at 11:33 AM</div>
  //       </div>
  //     </div>
  //   </div>
  // );
      return (
      <Carousel>
        <div id="WhatUserSays">
          <div id="WhatUserSaysTitle">What our users have to say</div>
          <div id="WhatUserSaysTitle2">
            Beautiful application with elegant UI Design. I found this app very
            useful. Placed Order for a few medicines and recieved in just two
            days. Same medicine costs me +100 from local Shop. Recommended
            application. :-.
          </div>

          <div className="WhatUserSaysApplication">
            <div>
              <img
                src="https://www.practostatic.com/ecommerce-assets/static/media/home/common/testimony2.9e5212dc.jpg"
                alt=""
              />
            </div>
            <div id="WhatUserSaysApplicationInfo">
              <div id="WhatUserSaysApplicationName">Ayush Verma</div>
              <div id="WhatUserSaysApplicationTime">
                Oct 5, 2018 at 11:33 AM
              </div>
            </div>
          </div>
        </div>

        <div id="WhatUserSays">
          <div id="WhatUserSaysTitle">What our users have to say</div>
          <div id="WhatUserSaysTitle2">
            '' Very useful app. It saves time and money and genuine.Keep going
            Practo.Thank You.
          </div>

          <div className="WhatUserSaysApplication">
            <div>
              <img
                src="https://www.practostatic.com/ecommerce-assets/static/media/home/common/testimony1.07a22a47.jpg"
                alt=""
              />
            </div>
            <div id="WhatUserSaysApplicationInfo">
              <div id="WhatUserSaysApplicationName">Rakesh Raki</div>
              <div id="WhatUserSaysApplicationTime">
                Nov 11, 2018 at 11:27 AM
              </div>
            </div>
          </div>
        </div>

        <div id="WhatUserSays">
          <div id="WhatUserSaysTitle">What our users have to say</div>
          <div id="WhatUserSaysTitle2">
            '' Very useful app. It saves time and money and genuine.Keep going
            Practo.Thank You.
          </div>

          <div className="WhatUserSaysApplication">
            <div>
              <img
                src="https://www.practostatic.com/ecommerce-assets/static/media/home/common/testimony3.4d68a92d.jpg"
                alt=""
              />
            </div>
            <div id="WhatUserSaysApplicationInfo">
              <div id="WhatUserSaysApplicationName">Vamshi Krishna</div>
              <div id="WhatUserSaysApplicationTime">
                Oct 3, 2018 at 7 :13 PM
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    );
};

