import oku from './../assets/images/Oku.svg'
import exit from './../assets/images/exit.svg'
const HeaderMore = () => {
  return (
    <section className="header__more">
        <div>
            <span>👋Reading is now</span>
            <img src={oku} alt=""/>
        </div>
        <div className="header__more-learn">
            <span>Learn more →</span>
           <div className="image-wrapper">
              <img src={exit} alt=""/>
           </div>
        </div>
    </section>
  )
}

export default HeaderMore
