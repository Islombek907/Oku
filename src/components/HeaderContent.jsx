import weird__woman from './../assets/images/weird__woman.png'
const HeaderContent = () => {
  return (
    <section className="container header__content">
        <div className="header__desc">
            <div>
            <h1>The companion app for your book shelf</h1>
            <a href="">Create your account</a>
            <p>
                Already a member?
                <a href="#">Sign in.</a>
            </p>
            </div>
            <img src={weird__woman} alt="" />
        </div>
    </section>
  )
}
export default HeaderContent
