export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-10 m-2">
      <ul className="flex space-x-4 justify-center font-semibold text-blue-600">
        <li><a href="#profile">Profile</a></li>
        <li><a href="#academics">Academics</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#extras">Extras</a></li>
      </ul>
    </nav>
  );
}