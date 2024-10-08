import Link from 'next/link';
import './navbar.css'
const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-slate-200 navbar-white h-[4rem] shadow-lg">
        <Link className="navbar-brand" href="/">
          <span className="hhh">KLIE</span> <span className="ggg">Hospital Managment System</span>
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item mt-1 font-bold">
            <Link className="nav-link" href="/">
             Home
            </Link>
          </li>
          <li className="nav-item mt-1 font-bold">
            <Link className="nav-link" href="/Patient">
            Patient
            </Link>
          </li>
          <li className="nav-item mt-1 font-bold">
            <Link className="nav-link" href="/Doctor">
            Doctor
            </Link>
          </li>
          <li className="nav-item mt-1 font-bold">
            <Link className="nav-link" href="/Appoinment">
            Appoinment
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

