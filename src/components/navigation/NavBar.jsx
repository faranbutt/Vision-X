import Logo from "../logo/logo";
const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between">
        <div><Logo /></div>
        <div className="group p-10 hover:underline text-2xl cursor-pointer">
          <p className="flex group-hover:text-gray-600">Sign Out</p>
        </div>
        
      </nav>
    </div>
  );
};

export default NavBar;
