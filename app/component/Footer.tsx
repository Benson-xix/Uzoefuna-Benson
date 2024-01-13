import Link from "next/link"

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
     <div className="container p-12 flex justify-between">
     <div className="bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 w-[100px] h-[100px] rounded-full border-2 border-white flex justify-center items-center py-4 ">
  <Link href={'/'} className="lg:text-5xl text-xl  text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-700 to-white font-semibold  ">UB</Link>
      </div>
    <p className="text-orange-600 flex items-center">© 2024 Relax. All rights reserved</p>
      </div> 
    </footer>
  )
}

export default Footer
