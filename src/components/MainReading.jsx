import MainMembers from "./MainMembers";
import TeamAbout from "./TeamAbout";
import bookIcon from './../assets/images/book.svg'
import readingIcon from './../assets/images/reading.svg'
import arrowIcon from './../assets/images/arrow.svg'
import iphoneIcon from './../assets/images/iphone.svg'
import starIcon from './../assets/images/star.svg'
import iphoneTopIcon from './../assets/images/iphonetop.svg'
import aimIcon from './../assets/images/aim.svg'
import statisticsIcon from './../assets/images/statistics.png'
import blockIcon from './../assets/images/block.svg' 
import customCollectionsIcon from './../assets/images/customcollections.png' 
import eyeIcon from './../assets/images/eye.svg' 
import reviewsIcon from './../assets/images/reviews.png' 

const MainReading = () => {
  return (
    <main className="container main">
      <section className="main__reading">
        <img className="book" src={bookIcon} alt="" />
        <div className="library">
          <h2>Track your reading and build your library</h2>
          <img src={readingIcon} alt="" />
        </div>
      </section>
      <section className="discover">
        <div className="stay__left">
            <img className="arrow" src={arrowIcon} alt=""/>
            <div>
            <img src={iphoneIcon} alt="" />
            <h2>Stay on track with a reading goal</h2>
            <p>If you're trying to kickstart a reading habit or just want to challenge yourself, motivate yourself to stick to it with a reading goal.</p>
            </div>
        </div>
        <div className="discover__right">
            <img className="star" src={starIcon} alt="" />
            <div>
                <h3>Discover your next favourite book</h3>
                <p>Connect with your friends to see what they're reading, or explore recommendations from the wider community.</p>
                <img src={iphoneTopIcon} alt="" />
            </div>
        </div>
      </section>
      <section className="container statistics">
        <div className="statistics__personal">
        <img className="aim" src={aimIcon} alt=""/>
          <h3>Unlock your personal statistics</h3>
          <img src={statisticsIcon} alt="" />
        </div>
      </section>
      <section className="features">
          <div className="app-features">
              <div className="app-features__left">
                <img className="block" src={blockIcon} alt="" />
                  <h3>Create custom collections</h3>
                  <img src={customCollectionsIcon} alt="" />
              </div>
              <div className="app-features__right">
                  <div className="app__reviews">
                    <img className="eye" src={eyeIcon} alt="" />
                    <h3>Read community reviews or leave one of your own</h3>
                    <img src={reviewsIcon} alt="" />
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
