import { useEffect } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';

import LaunchVehiclePortrait from '../assets/img/technology/image-launch-vehicle-portrait.jpg';
import LaunchVehicleLandscape from '../assets/img/technology/image-launch-vehicle-landscape.jpg';
import SpaceportPortrait from '../assets/img/technology/image-spaceport-portrait.jpg';
import SpaceportLandscape from '../assets/img/technology/image-spaceport-landscape.jpg';
import SpaceCapsulePortrait from '../assets/img/technology/image-space-capsule-portrait.jpg';
import SpaceCapsuleLandscape from '../assets/img/technology/image-space-capsule-landscape.jpg';

function Technology() {
  useEffect(() => {
    document.body.classList.add('bg-technology');

    return () => {
      document.body.classList.remove('bg-technology');
    };
  }, []);

  return (
    <>
      <main>
        <div className="numbered-heading">
          <h2 className="ff-sans-condensed fs-med letter-spacing-4-72 uppercase text-white">
            <span className="bold text-opacity-25">03</span> Space Launch 101
          </h2>
        </div>
        <Tabs className="technology__button-image-text-container">
          <TabList
            aria-label="Technology"
            className="technology__button-container"
          >
            <Tab id="1" className="sm-button technology__button">
              1
            </Tab>
            <Tab id="2" className="sm-button technology__button">
              2
            </Tab>
            <Tab id="3" className="sm-button technology__button">
              3
            </Tab>
          </TabList>
          <TabPanel id="1" className="technology__image-text-container">
            <div className="technology__text-container">
              <p className="ff-sans-condensed fs-sm letter-spacing-2-7 uppercase text-light">
                The Terminology...
              </p>
              <h3 className="ff-serif-regular fs-xl uppercase text-white">
                Launch Vehicle
              </h3>
              <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
            <div className="technology__image-container">
              <picture>
                <source
                  media="(max-width: 64em)"
                  srcSet={LaunchVehicleLandscape}
                />
                <img src={LaunchVehiclePortrait} />
              </picture>
            </div>
          </TabPanel>
          <TabPanel id="2" className="technology__image-text-container">
            <div className="technology__text-container">
              <p className="ff-sans-condensed fs-sm letter-spacing-2-7 uppercase text-light">
                The Terminology...
              </p>
              <h3 className="ff-serif-regular fs-xl uppercase text-white">
                Spaceport
              </h3>
              <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth's rotation for
                launch.
              </p>
            </div>
            <div>
              <picture>
                <source media="(max-width: 64em)" srcSet={SpaceportLandscape} />
                <img src={SpaceportPortrait} />
              </picture>
            </div>
          </TabPanel>
          <TabPanel id="3" className="technology__image-text-container">
            <div className="technology__text-container">
              <p className="ff-sans-condensed fs-sm letter-spacing-2-7 uppercase text-light">
                The Terminology...
              </p>
              <h3 className="ff-serif-regular fs-xl uppercase text-white">
                Space Capsule
              </h3>
              <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </div>
            <div>
              <picture>
                <source
                  media="(max-width: 64em)"
                  srcSet={SpaceCapsuleLandscape}
                />
                <img src={SpaceCapsulePortrait} />
              </picture>
            </div>
          </TabPanel>
        </Tabs>
      </main>
    </>
  );
}

export default Technology;
