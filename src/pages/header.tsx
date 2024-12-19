

const Header = () => {
  return (
    <div  className=" h-12 mb-10">
    <header className="flex items-center justify-center bg-white shadow-lg fixed top-0 left-0 w-full z-10 p-4 ">
    <img 
      src="logo.png" 
      className="w-10 h-12 mr-2" 
      alt="Chef Faith Icon"
    />
    <h2 className="font-inter font-medium text-3xl text-emerald-600">Easy Recipes</h2>
  </header>
  
</div>
  )
}

export default Header
