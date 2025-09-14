function SideBar() {
  return (
    <aside className="w-1/4 bg-gray-200 p-4">
      
      <ul className="space-y-2">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Projects</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
    </aside>
  );
}
export default SideBar;
