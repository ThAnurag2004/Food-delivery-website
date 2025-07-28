import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux'
import { AddItem } from "../redux/cartSlice";

function Cards({name,image,id,price,type}) {
  let dispatch = useDispatch();
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-3 border-green-300 transition-all '>
      <div className='w-full h-[60%] overflow-hidden rounded-lg'>
        <img src={image} className='object-cover w-full h-full' />
      </div>
      <div className='text-2xl font-semibold'>{name}</div>
      <div className='w-full justify-between flex items-center'>
        <div className='text-green-500 font-bold text-lg'>RS {price} /-</div>
        <div className={`flex justify-between items-center gap-2 ${type==="veg"? "text-green-500" : "text-red-500"} font-semibold text-lg`}>{type==="veg"? <LuLeafyGreen/> : <GiChickenOven />}<span>{type}</span></div>
      </div>
    <button onClick={()=>dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1}))} className='w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all '>ADD DISH</button>
    </div>
  )
}

export default Cards
