import profilePicture from "./P.jpg";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-6 text-center">
    
      <img
        src={profilePicture} 
        alt="Profile"
        className="mx-auto rounded-full mb-3 w-3 h-3 object-cover" 
      />
      <h1 className="text-2xl font-bold">BRADFORD.S</h1>
      <p>Tipanoy, Cityville</p>
      <p>Email: BRADFORD.S.PH</p>
    </header>
  );
}

export default Header;
