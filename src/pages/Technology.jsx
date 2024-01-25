import { useEffect } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';

import LaunchVehicle from '../assets/img/technology/image-launch-vehicle-portrait.jpg';
import Spaceport from '../assets/img/technology/image-spaceport-portrait.jpg';
import SpaceCapsule from '../assets/img/technology/image-space-capsule-portrait.jpg';

function Technology() {
  useEffect(() => {
    document.body.classList.add('bg-technology');

    return () => {
      document.body.classList.remove('bg-technology');
    };
  }, []);

  return (
    <>
      <h2 className="ff-sans-condensed fs-med letter-spacing-4-72 uppercase text-white">
        <span className="bold text-opacity-25">03</span> Space Launch 101
      </h2>
      <Tabs className="technology-grid__container">
        <TabList
          aria-label="Technology"
          className="technology-grid__container-item-1"
        >
          <Tab id="1" className="sm-button">
            1
          </Tab>
          <Tab id="2" className="sm-button">
            2
          </Tab>
          <Tab id="3" className="sm-button">
            3
          </Tab>
        </TabList>
        <TabPanel
          id="1"
          className="technology-grid__container-item-2 technology-inner-grid__container"
        >
          <div className="technology-inner-grid__container-item-1">
            <p className="ff-sans-condensed fs-sm letter-spacing-2-7 uppercase text-light">
              The Terminology...
            </p>
            <h3 className="ff-serif-regular fs-xl uppercase text-white">
              Launch Vehicle
            </h3>
            <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
          <div className="technology-inner-grid__container-item-2">
            <img src={LaunchVehicle} alt="Launch Vehicle" />
          </div>
        </TabPanel>
        <TabPanel
          id="2"
          className="technology-grid__container-item-2 technology-inner-grid__container"
        >
          <div className="technology-inner-grid__container-item-1">
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
          </div>{' '}
          <div className="technology-inner-grid__container-item-2">
            <img src={Spaceport} alt="Spaceport" />
          </div>
        </TabPanel>
        <TabPanel
          id="3"
          className="technology-grid__container-item-2 technology-inner-grid__container"
        >
          <div className="technology-inner-grid__container-item-1">
            <p className="ff-sans-condensed fs-sm letter-spacing-2-7 uppercase text-light">
              The Terminology...
            </p>
            <h3 className="ff-serif-regular fs-xl uppercase text-white">
              Space Capsule
            </h3>
            <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
              A space capsule is an often-crewed spacecraft that uses a
              blunt-body reentry capsule to reenter the Earth's atmosphere
              without wings. Our capsule is where you'll spend your time during
              the flight. It includes a space gym, cinema, and plenty of other
              activities to keep you entertained.
            </p>
          </div>
          <div className="technology-inner-grid__container-item-2">
            <img src={SpaceCapsule} alt="Space Capsule" />
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Technology;
