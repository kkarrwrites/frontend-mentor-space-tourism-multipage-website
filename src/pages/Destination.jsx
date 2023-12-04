import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';

function Destination() {
  return (
    <>
      <h2>
        <span>01</span> Pick Your Destination
      </h2>
      <Tabs>
        <TabList aria-label="Technology">
          <Tab id="moon">Moon</Tab>
          <Tab id="mars">Mars</Tab>
          <Tab id="europa">Europa</Tab>
          <Tab id="titan">Titan</Tab>
        </TabList>
        <TabPanel id="moon">
          <h3>Moon</h3>
          <p>
            See our planet as you've never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you're there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <p>Avg. Distance 384,400 KM</p>
          <p>Est. Travel Time 3 Days</p>
        </TabPanel>
        <TabPanel id="mars">
          <h3>Mars</h3>
          <p>
            Don't forget to pack your hiking boots. You'll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It's two and a half times the size of Everest!
          </p>
          <p>Avg. Distance 225 Mil. KM</p>
          <p>Est. Travel Time 9 Months</p>
        </TabPanel>
        <TabPanel id="europa">
          <h3>Europa</h3>
          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover's dream. With an icy surface, it's perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <p>Avg. Distance 628 Mil. KM</p>
          <p>Est. Travel Time 3 Years</p>
        </TabPanel>
        <TabPanel id="titan">
          <h3>Titan</h3>
          <p>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
          <p>Avg. Distance 1.6 Bil. KM</p>
          <p>Est. Travel Time 7 Years</p>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Destination;
