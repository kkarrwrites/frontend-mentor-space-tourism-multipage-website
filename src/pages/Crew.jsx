import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';

function Crew() {
  return (
    <>
      <h2>
        <span>02</span> Meet Your Crew
      </h2>
      <Tabs>
        <TabList aria-label="Technology">
          <Tab id="1">1</Tab>
          <Tab id="2">2</Tab>
          <Tab id="3">3</Tab>
          <Tab id="4">4</Tab>
        </TabList>
        <TabPanel id="1">
          <h3>Commander</h3>
          <h4>Douglas Hurley</h4>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </TabPanel>
        <TabPanel id="2">
          <h3>Mission Specialist</h3>
          <h4>Mark Shuttleworth</h4>
          <p>
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        </TabPanel>
        <TabPanel id="3">
          <h3>Pilot</h3>
          <h4>Victor Glover</h4>
          <p>
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </TabPanel>
        <TabPanel id="4">
          <h3>Flight Engineer</h3>
          <h4>Anousheh Ansairi</h4>
          <p>
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Crew;
