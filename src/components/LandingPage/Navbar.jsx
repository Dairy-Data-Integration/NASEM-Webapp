// Navbar component for landing page
// Includes nav links on the left and login/signup buttons on the right
// Responsive spacing handled with Tailwind's `lg:` modifiers

const Navbar = () => {
  return (
    <nav className="shadow-md bg-bg flex justify-between items-center px-10 py-6 w-full">
      
      {/* Navigation links (left side) */}
      <ul className="flex gap-4 text-sm lg:gap-10 lg:text-base">
        <a className="cursor-pointer">Home</a>
        <a className="cursor-pointer">Inputs</a>
        <a className="cursor-pointer">Feed Library</a>
        <a className="cursor-pointer">Diet</a>
        <a className="cursor-pointer">Outputs</a>
      </ul>

      {/* Auth buttons (right side) */}
      <div className="flex items-center gap-4 lg:gap-6 text-sm lg:text-base">
        {/* Reusable 'btn' class defined in index.css*/}
        <button className="btn bg-[#3f554a]">Login</button>
        <button className="btn bg-[#34565e]">Sign-up</button>
      </div>
    </nav>
  );
};

export default Navbar;
