import { FiMenu, FiSlack } from "react-icons/fi";
import pic01 from "./compoents/img/scientific-research.png";
import pic0A from "./compoents/img/scientific-education-or-research.png";
import pic0B from "./compoents/img/scientific-education-or-research (2).png";
import pic0C from "./compoents/img/scientific-education-or-research (1).png";
import { useRef } from "react";

function App() {

  const rocketlist = [
    { head: "Explorer", pic:pic0A, description:"Affordable Exploration" },
    { head: "Adventurer", pic:pic0B, description:"Best Selling Rocket" },
    { head: "Infinity", pic:pic0C, description:"Luxury Starship" },
  ];

  const rockets = useRef(null)
  const contactUs = useRef(null)
  const home = useRef(null)

  const scrollToSection =(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  return (
    <div className=" min-h-screen  bg-black text-white m-0 p-0">
      {/* --NavBar-- */}
      <header className=" bg-teal-800 sticky top-0 z-10" ref={home}>
        <section className=" max-w-4xl mx-auto px-3 py-3 flex justify-between items-center ">
          <a href="#" className=" text-3xl font-extrabold">
            Acme Rockets
          </a>
          <button className=" md:hidden">
            <FiMenu className="text-3xl"></FiMenu>
          </button>
          <div className="hidden md:block space-x-8 text-lg">
            <a href="#" className=" hover:opacity-50">
              Home
            </a>
            <a onClick={()=> scrollToSection(rockets)} className=" hover:opacity-50 cursor-pointer">
              Rockets
            </a>
            <a onClick={()=> scrollToSection(contactUs)} className=" hover:opacity-50 cursor-pointer">
              Contact Us
            </a>
          </div>
        </section>
      </header>

      <main className=" max-w-4xl mx-auto">
        {/* --first section --*/}
        <section className="flex flex-col md:flex-row md:justify-between items-center md:py-20">
          <div className="md:w-4/5 ">
            <img src={pic01} className=" w-max" />
          </div>
          <div className=" mx-10">
            <div className=" text-3xl text-gray-300 font-extrabold text-center">
              We Boldly Go{" "}
              <span className=" text-purple-300">Where No Rocket</span> Has Gone
              Before...
            </div>
            <div className=" text-xl font-semibold text-center mt-3 text-gray-400">
              We're building rockets for the next century today. From the moon
              to Mars, Jupiter and beyond...
            </div>
            <div className=" text-xl text-gray-300 font-semiblod text-center mt-5">
              Think Acme Rockets.
            </div>
          </div>
        </section>

        <div className=" h-0.5 w-48 rounded-lg mx-auto bg-slate-400 mt-14 md:w-56"></div>

        {/* --second section-- */}
        <section ref={rockets}>
          <h1 className="text-center font-extrabold text-3xl my-10 md:mt-24">Rockets</h1>
          <section className=" flex flex-col justify-center space-y-10 text-center">
            {
              rocketlist.map((item, index)=>{
                return(
                  <div className=" border-gray-400  w-2/3 mx-auto rounded-xl border-2 md:w-1/3">
                    <div className=""><img src={item.pic} /></div>
                    <div className=" font-bold text-3xl text-gray-300">{item.head}</div>
                    <div className=" font-semibold text-xl text-gray-400 my-4">{item.description}</div>
                  </div>
                )
              })
            }
          </section>
        </section>
      </main>

      <footer className=" bg-teal-800 mt-10" ref={contactUs}>
        <section className=" max-w-4xl mx-auto  py-4">
            <div className=" font-semibold text-lg ml-4">Acme Rocket-Power Products, Inc.</div>
            <div className=" font-semibold text-lg ml-4">555 Astro Way</div>
            <div className=" font-semibold text-lg ml-4">Fairfield, New Jersey 12345-5555</div>
            <div className=" font-semibold text-lg ml-4">Email: Inquires@acemerockets.com</div>
            <div className=" font-semibold text-lg ml-4">Phone: (555) 555-5555</div> 
            <div className=" font-semibold text-lg text-right mr-4">Copyright © 2022</div>
            <div className=" font-semibold text-lg text-right mr-4">All Rights Reserved</div>
        </section>
      </footer>

    </div>
  );
}

export default App;
