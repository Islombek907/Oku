const MainMembers = () => {
  return (
    <section className="container members">
      <div className="members__left">
        <h3>You're in good company</h3>
        <p>
          53% of our members have imported their historical data from Goodreads.
          It's time for a change. Don't loathe your reading list –– liberate it.
        </p>
      </div>
      <div className="members__social">
        <div className="members__right">
          <img src="" alt="" />
          <div className="members__right-card">
            <div className="fem">
              <img src="src\assets\images\fem.png" alt="" />
              <div>
                <span className="name">fem</span>
                <span className="name__email">@femke</span>
              </div>
            </div>
            <p className="name__desc">
              i still think @readngco was my favourite new app of 2020. Such a
              refreshing experience from goodreads.
            </p>
            <span className="name__follow">
              follow me here: https://beta.readng.co/user/femke
            </span>
            <span className="name__time">2:48 PM · Mar 23, 2021</span>
          </div>
        </div>
        <div className="members__right">
          <img src="" alt="" />
          <div className="members__right-card">
            <div className="fem">
              <img src="src\assets\images\Joe.svg" alt="" />
              <div>
                <span className="name">Joe Russell</span>
                <span className="name__email">@Joebob</span>
              </div>
            </div>
            <p className="name__desc changejoe">
                Reading app is really lovely and simple. It works for people who have barely read in years as well as those who consume more pages than food.
            </p>
            <span className="name__follow">
              follow me here: https://beta.readng.co/user/femke
            </span>
            <span className="name__time">1:29 PM · Feb 21, 2021</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainMembers;
