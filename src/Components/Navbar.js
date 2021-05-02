export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo container">SMS</h1>
      <div className="nav-links container">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Signup</a></li>
        </ul>
      </div>
    </nav>
  );
}
