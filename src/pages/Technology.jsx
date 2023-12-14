import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';

function Technology() {
  return (
    <>
      <h2 className="ff-sans-condensed fs-med letter-spacing-4-72 uppercase">
        <span className="bold">03</span> Space Launch 101
      </h2>
      <Tabs>
        <TabList aria-label="Technology">
          <Tab id="1">1</Tab>
          <Tab id="2">2</Tab>
          <Tab id="3">3</Tab>
        </TabList>
        <TabPanel id="1">
          <p className="ff-sans-condensed fs-sm letter-spacing-2-7 uppercase">
            The Terminology...
          </p>
          <h3 className="ff-serif-regular fs-xl uppercase">Launch Vehicle</h3>
          <p className="ff-sans-regular fs-regular line-height-1-5">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </TabPanel>
        <TabPanel id="2">
          <p className="ff-sans-condensed fs-sm letter-spacing-2-7 uppercase">
            The Terminology...
          </p>
          <h3 className="ff-serif-regular fs-xl uppercase">Spaceport</h3>
          <p className="ff-sans-regular fs-regular line-height-1-5">
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth's rotation for
            launch.
          </p>
        </TabPanel>
        <TabPanel id="3">
          <p className="ff-sans-condensed fs-sm letter-spacing-2-7 uppercase">
            The Terminology...
          </p>
          <h3 className="ff-serif-regular fs-xl uppercase">Space Capsule</h3>
          <p className="ff-sans-regular fs-regular line-height-1-5">
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Technology;
