import { NavBarTab } from "./nav-tab";

const Navbar = () => {
  return (
    <div className="w-full h-14 ">
      <div className="w-full h-full border-b border-b-biscuit-dark grid grid-cols-5 text-lg font-semibold">
        <NavBarTab text="Home" path="/" />
        <NavBarTab text="Menu" path="/menu" />
        <NavBarTab text="Ashish Bakery" className="text-4xl font-eatos-cursive" path="/" noAnimate />
        <NavBarTab text="About Us" path="/about" />
        <NavBarTab text="Contact" path="/contact" />
      </div>
    </div>
  )
}

export default Navbar;
