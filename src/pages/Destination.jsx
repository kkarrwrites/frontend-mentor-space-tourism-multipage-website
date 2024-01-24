import { useEffect } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';

// Images
import Moon from '../assets/img/destination/image-moon.png';
import Mars from '../assets/img/destination/image-mars.png';
import Europa from '../assets/img/destination/image-europa.png';
import Titan from '../assets/img/destination/image-titan.png';

function Destination() {
  useEffect(() => {
    document.body.classList.add('bg-destination');

    return () => {
      document.body.classList.remove('bg-destination');
    };
  }, []);

  return (
    <>
      <h2 className="ff-sans-condensed fs-med letter-spacing-4-72 uppercase text-white">
        <span className="bold text-opacity-25">01</span> Pick Your Destination
      </h2>
      <Tabs>
        <TabList aria-label="Technology" className="mini-nav">
          <Tab id="moon" className="mini-nav__item">
            Moon
          </Tab>
          <Tab id="mars" className="mini-nav__item">
            Mars
          </Tab>
          <Tab id="europa" className="mini-nav__item">
            Europa
          </Tab>
          <Tab id="titan" className="mini-nav__item">
            Titan
          </Tab>
        </TabList>
        <TabPanel id="moon" className="destination-grid__container">
          <div className="destination-grid__container-item-1">
            <img src={Moon} alt="Moon" />
          </div>
          <div className="destination-grid__container-item-2">
            <h3 className="ff-serif-regular fs-2xl uppercase text-white">
              Moon
            </h3>
            <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
              See our planet as you've never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you're there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase text-light">
              Avg. Distance
            </p>
            <p className="ff-serif-regular fs-med uppercase text-white">
              384,400 km
            </p>
            <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase text-light">
              Est. Travel Time
            </p>
            <p className="ff-serif-regular fs-med uppercase text-white">
              3 Days
            </p>
          </div>
        </TabPanel>
        <TabPanel id="mars" className="destination-grid__container">
          <div className="destination-grid__container-item-1">
            <img src={Mars} alt="Mars" />
          </div>
          <div className="destination-grid__container-item-2">
            <h3 className="ff-serif-regular fs-2xl uppercase text-white">
              Mars
            </h3>
            <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
              Don't forget to pack your hiking boots. You'll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It's two and a half times the size of Everest!
            </p>
            <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase text-light">
              Avg. Distance
            </p>
            <p className="ff-serif-regular fs-med uppercase text-white">
              225 Mil. km
            </p>
            <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase text-light">
              Est. Travel Time
            </p>
            <p className="ff-serif-regular fs-med uppercase text-white">
              9 Months
            </p>
          </div>
        </TabPanel>
        <TabPanel id="europa" className="destination-grid__container">
          <div className="destination-grid__container-item-1">
            <img src={Europa} alt="Europa" />
          </div>
          <div className="destination-grid__container-item-2">
            <h3 className="ff-serif-regular fs-2xl uppercase text-white">
              Europa
            </h3>
            <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover's dream. With an icy surface, it's perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
            <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase text-light">
              Avg. Distance
            </p>
            <p className="ff-serif-regular fs-med uppercase text-white">
              628 Mil. km
            </p>
            <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase text-light">
              Est. Travel Time
            </p>
            <p className="ff-serif-regular fs-med uppercase text-white">
              3 Years
            </p>
          </div>
        </TabPanel>
        <TabPanel id="titan" className="destination-grid__container">
          <div className="destination-grid__container-item-1">
            <img src={Titan} alt="Titan" />
          </div>
          <div className="destination-grid__container-item-2">
            <h3 className="ff-serif-regular fs-2xl uppercase text-white">
              Titan
            </h3>
            <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
            <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase text-light">
              Avg. Distance
            </p>
            <p className="ff-serif-regular fs-med uppercase text-white">
              1.6 Bil. km
            </p>
            <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase text-light">
              Est. Travel Time
            </p>
            <p className="ff-serif-regular fs-med uppercase text-white">
              7 Years
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Destination;
