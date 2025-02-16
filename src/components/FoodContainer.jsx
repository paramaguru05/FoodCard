import { FaShoppingCart } from "react-icons/fa";

const FoodContainer = ({data,setOrder,order}) => {
  return (
    <div>
        <div className="mt-5 relative shadow-lg shadow-black bg-slate-100  rounded-2xl w-[300px] h-[30vh]  ">
            <img src={data.image} alt="" className=" w-full rounded-t-2xl h-[20vh]  " />
            <div className="ml-[5%]   w-[50%] mt-4 ">
            <h3 className="text-red-600 font-semibold overflow-hidden">{data.foodName}</h3>
            <h3>{data.price}</h3>
            </div>
                <div onClick={()=>setOrder( order + 1)} className="absolute bottom-4 bg-green-400 text-white cursor-pointer  w-[15%] h-[15%] flex items-center justify-center  right-2">
                    <FaShoppingCart/>
                </div>
         </div> 
    </div>
  )
}

export default FoodContainer