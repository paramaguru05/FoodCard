import { useState } from "react";
import BriyaniCombo from "./assets/Briyani Combo.jpeg"
import ButterscotchIceCream from "./assets/ButterscotchIceCream.jpeg"
import CheckeFriedRice from "./assets/Chicken Fried Rice.jpeg"
import FishFry from "./assets/Fish Fry.jpeg"
import FriedRice from "./assets/Fried Rice.jpeg"
import HyderabadBiryani from "./assets/Hyderabad Biryani.jpeg"
import Meals from "./assets/Meals.jpeg"
import MushroomSoup from "./assets/MushroomSoup.jpeg"
import Parotta from "./assets/Parotta.jpeg"
import Thali from "./assets/Thali.jpeg"
import { FaShoppingCart } from "react-icons/fa";
import FoodContainer from "./components/FoodContainer";


const App = () => {
  const [order,setOrder] = useState(0)


  const foodData = [
    {
      image:BriyaniCombo,
      foodName:"Briyani combo",
      price:"399 RS",
      ratings:"4.5"
    },
    {
      image:ButterscotchIceCream,
      foodName:"ice cream",
      price:"79 RS",
      ratings:"2.5"
    },
    {
      image:CheckeFriedRice,
      foodName:"Checken fried rice",
      price:"120 RS",
      ratings:"3.5"
    },
    {
      image:FishFry,
      foodName:"Fish fry",
      price:"159 RS",
      ratings:"5.0"
    },
    {
      image:FriedRice,
      foodName:"Fried rice",
      price:"99 RS",
      ratings:"1.5"
    },
    {
      image:HyderabadBiryani,
      foodName:"Hyderabad biryani",
      price:"199 RS",
      ratings:"4.0"
    },
    {
      image:Meals,
      foodName:"Meals",
      price:"189 RS",
      ratings:"3.5"
    },
    {
      image:MushroomSoup,
      foodName:"Mushroom soup",
      price:"89 RS",
      ratings:"5.0"
    },
    {
      image:Parotta,
      foodName:"Parotta",
      price:"20 RS",
      ratings:"5.0"
    },
    {
      image:Thali,
      foodName:"Thali",
      price:"299 RS",
      ratings:"4.5"
    },
  ]

  return (
    <>
    <section  className="bg-slate-800 relative h-screen py-4  " >
      <header className="fixed shadow-md shadow-slate-50  w-full z-10 top-0 flex bg-slate-200 h-[10vh] items-center justify-between p-5  text-white" >
          <div className="">
            <h1 className="text-3xl  text-red-600 font-bold font-mono">FOOD CARD</h1>
          </div>
          <div className="text-black text-[18px] flex flex-col justify-center items-center mt-5 ml-3">
            Total order
            <span>{order}</span>
          </div>
      </header>
      <main className=" z-0 mt-[9%] sm:mt-[7%] md:mt-[5%] lg:mt-[3%] grid  bg-slate-800 md:grid-cols-2 lg:grid-cols-3  justify-items-center   p-3 gap-4">
       {
        foodData.map((val,index)=>{
          return(
            <div key={index} className=" ">
               <FoodContainer setOrder={setOrder} order={order} data={val}/>
            </div>
          )
        })
       }
      </main>
    </section>

    </>
  )
}

export default App