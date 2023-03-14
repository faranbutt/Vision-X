import Logo from "../logo/logo";
const NavBar = ({isSignedIn,SIGN}) => {
  if(SIGN){
    return(
      <div>
      <nav className="flex justify-between">
        <div><Logo /></div>
        <div className="group p-10 hover:underline text-2xl cursor-pointer">
          <p onClick={() => isSignedIn('signin')} className="flex group-hover:text-gray-600">Sign Out</p>
        </div>
      </nav>
    </div>
    );
  }
  else if (SIGN === false){
    return (
      <div>
        <nav className="flex justify-between">
          <div><Logo /></div>
          <div className="p-10 text-2xl flex gap-5">
            <div className="group">
            <p onClick={() => isSignedIn('signin')} className="flex group-hover:text-gray-600 hover:underline cursor-pointer">Sign In</p>
            </div>
            <div className="group">
            <p onClick={() => isSignedIn('register')} className="flex group-hover:text-gray-600 hover:underline cursor-pointer">Register</p>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
};

export default NavBar;
