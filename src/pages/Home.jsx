import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.body.classList.add('bg-home');

    return () => {
      document.body.classList.remove('bg-home');
    };
  }, []);

  return (
    <>
      <main className="home-grid__container">
        <div className="home-grid__container-item-1">
          <h2 className="ff-sans-condensed fs-med line-height-1-5 letter-spacing-4-72 uppercase text-light">
            So, you want to travel to
          </h2>
          <h3 className="ff-serif-regular fs-3xl line-height-1-5 uppercase text-white">
            Space
          </h3>
          <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-grid__container-item-2">
          <button className="lg-button">Explore</button>
        </div>
      </main>
    </>
  );
}

export default Home;
