import { FaUser } from 'react-icons/fa';
import { GiLotus } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <div className="container-custom">
        <div className="navbar-content">
          {/* Left: Logo */}
          <div className="navbar-brand">
            <GiLotus className="logo-icon" />
            <span className="brand-text">JyotishGuru</span>
          </div>

          {/* Center: Title */}
          <div className="navbar-center">
            <h5 className="navbar-title">
              Clear Your Doubt - Connect to Guru
            </h5>
          </div>

          {/* Right: Login + User */}
          <div className="navbar-actions">
            <button className="btn-primary-custom">Login</button>
            <div className="user-avatar">
              <FaUser />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 