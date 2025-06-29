import Image from "../Image";
import Logo from "../../assets/logo.png";
import Item from "../Navber/Item";

const Navber = () => {
  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-4 md:px-8 Poppins">
        <div className="navbar-start">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-8 md:w-14 rounded-full ring ring-offset-2">
              <Image src={Logo} />
            </div>
          </div>
          <div className="font-extrabold text-xl md:text-2xl lg:text-3xl px-4">
            <span className="text-emerald-600">BIJIT </span>DEB
          </div>
        </div>

        <div className="navbar-end md:w-10/12">

          <div className="hidden lg:flex pr-6">
            <ul className="menu menu-horizontal px-1 flex gap-x-6  text-lg font-medium font-pop justify-end">
              <Item Item="Home" href="/" />
              <Item Item="About" href="/about" />
              <Item Item="Skills" href="/skills" />
              <Item Item="Project" href="/project" />
              <Item Item="Education" href="/education" />
              <Item Item="Contact" href="/contact" />
            </ul>
          </div>

          <div className="hidden lg:block lg:1/12">
            <a href="https://rxresu.me/bijitdeb087/bijit-deb" target="_blank">
              <button className="btn btn-success font-bold cursor-pointer">Resume</button>

            </a>
          </div>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Item Item="Home" href="#Home" />
              <Item Item="About" href="#About" />
              <Item Item="Skills" href="#Skills" />
              <Item Item="Project" href="#Project" />
              <Item Item="Education" href="#Education" />
              <Item Item="Contact" href="#Contact" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
