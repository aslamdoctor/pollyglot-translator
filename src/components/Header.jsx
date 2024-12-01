import logo from "../assets/parrot.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" className="logo" />
        <div className="heading-text">
          <h1>PollyGlot</h1>
          <h2>Perfect Translation Every Time</h2>
        </div>
      </div>
    </header>
  )
}

export default Header