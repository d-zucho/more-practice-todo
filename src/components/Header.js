const Header = () => {
  return (
    <header className='w-full bg-neutral-200 h-10 mb-8'>
      <div className='header-wrapper h-full flex justify-between w-[90%] mx-auto'>
        <div className='logo font-extrabold text-xl'>Logo</div>
        <ul className='flex  space-x-4 items-center font-medium'>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
