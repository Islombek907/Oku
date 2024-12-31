import MainMembers from "./MainMembers";
import TeamAbout from "./TeamAbout";

const MainReading = () => {
  return (
    <main className="container main">
      <section className="main__reading">
        <img className="book" src="src\assets\images\book.svg" alt="" />
        <div className="library">
          <h2>Track your reading and build your library</h2>
          <img src="src\assets\images\reading.png" alt="" />
        </div>
      </section>
      <section className="discover">
        <div className="stay__left">
            <img className="arrow" src="src\assets\images\arrow.svg" alt=""/>
            <div>
            <img src="src\assets\images\iphone.png" alt="" />
            <h2>Stay on track with a reading goal</h2>
            <p>If you're trying to kickstart a reading habit or just want to challenge yourself, motivate yourself to stick to it with a reading goal.</p>
            </div>
        </div>
        <div className="discover__right">
            <img className="star" src="src\assets\images\star.svg" alt="" />
            <div>
                <h3>Discover your next favourite book</h3>
                <p>Connect with your friends to see what they're reading, or explore recommendations from the wider community.</p>
                <img src="src\assets\images\iphonetop.png" alt="" />
            </div>
        </div>
      </section>
      <section className="container statistics">
        <div className="statistics__personal">
        <img className="aim" src="src\assets\images\aim.svg" alt=""/>
          <h3>Unlock your personal statistics</h3>
          <img src="src\assets\images\statistics.png" alt="" />
        </div>
      </section>
      <section className="features">
          <div className="app-features">
              <div className="app-features__left">
                <img className="block" src="src\assets\images\block.svg" alt="" />
                  <h3>Create custom collections</h3>
                  <img src="src\assets\images\customcollections.png" alt="" />
              </div>
              <div className="app-features__right">
                  <div className="app__reviews">
                    <img className="eye" src="src\assets\images\eye.svg" alt="" />
                    <h3>Read community reviews or leave one of your own</h3>
                    <img src="src\assets\images\reviews.png" alt="" />
                  </div>
              </div>
          </div>
      </section>
      <MainMembers/>
      <TeamAbout/>
    </main>
  );
};

export default MainReading;
