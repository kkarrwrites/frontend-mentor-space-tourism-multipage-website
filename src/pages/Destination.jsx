import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';

function Destination() {
  return (
    <>
      <h2 className="ff-sans-condensed fs-med letter-spacing-4-72 uppercase">
        <span className="bold">01</span> Pick Your Destination
      </h2>
      <Tabs>
        <TabList
          aria-label="Technology"
          className="ff-sans-condensed fs-sm letter-spacing-2-7 uppercase"
        >
          <Tab id="moon">Moon</Tab>
          <Tab id="mars">Mars</Tab>
          <Tab id="europa">Europa</Tab>
          <Tab id="titan">Titan</Tab>
        </TabList>
        <TabPanel id="moon">
          <h3 className="ff-serif-regular fs-2xl uppercase">Moon</h3>
          <p className="ff-sans-regular fs-regular line-height-1-5">
            See our planet as you've never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you're there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase">
            Avg. Distance
          </p>
          <p className="ff-serif-regular fs-med uppercase">384,400 km</p>
          <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase">
            Est. Travel Time
          </p>
          <p className="ff-serif-regular fs-med uppercase">3 Days</p>
        </TabPanel>
        <TabPanel id="mars">
          <h3 className="ff-serif-regular fs-2xl uppercase">Mars</h3>
          <p className="ff-sans-regular fs-regular line-height-1-5">
            Don't forget to pack your hiking boots. You'll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It's two and a half times the size of Everest!
          </p>
          <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase">
            Avg. Distance
          </p>
          <p className="ff-serif-regular fs-med uppercase">225 Mil. km</p>
          <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase">
            Est. Travel Time
          </p>
          <p className="ff-serif-regular fs-med uppercase">9 Months</p>
        </TabPanel>
        <TabPanel id="europa">
          <h3 className="ff-serif-regular fs-2xl uppercase">Europa</h3>
          <p className="ff-sans-regular fs-regular line-height-1-5">
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover's dream. With an icy surface, it's perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase">
            Avg. Distance
          </p>
          <p className="ff-serif-regular fs-med uppercase">628 Mil. km</p>
          <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase">
            Est. Travel Time
          </p>
          <p className="ff-serif-regular fs-med uppercase">3 Years</p>
        </TabPanel>
        <TabPanel id="titan">
          <h3 className="ff-serif-regular fs-2xl uppercase">Titan</h3>
          <p className="ff-sans-regular fs-regular line-height-1-5">
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
          <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase">
            Avg. Distance
          </p>
          <p className="ff-serif-regular fs-med uppercase">1.6 Bil. km</p>
          <p className="ff-sans-condensed fs-xs letter-spacing-2-36 uppercase">
            Est. Travel Time
          </p>
          <p className="ff-serif-regular fs-med uppercase">7 Years</p>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Destination;
