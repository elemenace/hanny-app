import{NavLink} from "react-router";


function Header() {
  return (
    <div className="sticky top-0">
      <header className="w-full bg-white shadow py-4">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-blue-500">Sweet Treats</h1>
          <ul className="flex space-x-4">

          
              <NavLink to="/" className="hover:text-blue-500">
                Home
              </NavLink>
            
            
              <NavLink to="/about" className="hover:text-blue-500">
                About Us
              </NavLink>
           
              <NavLink to="/gallery" className="hover:text-blue-500">
               Product
              </NavLink>
           
          </ul>
        </nav>
      </header> 

     


      
    </div>
  );
}


export default Header;
