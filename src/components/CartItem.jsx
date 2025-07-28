import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { DeleteItem } from "../redux/cartSlice";

function CartItem({name,image,price,id,qty}) {
  let dispatch = useDispatch();
  return (
    <div key={id} className='w-full h-[120px]  rounded-2xl shadow-xl p-2 flex justify-between'>
      <div className='w-[60%] h-full flex gap-1'>
        <div className='w-[60%] h-full rounded-lg overflow-hidden'>
            <img src={image} className='object-cover' />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-5 p-1'>
            <div className='text-gray-600 text-sm'>{name}</div>
            <div className='w-[110px] h-[50px] flex rounded-lg text-green-400 border-1 font-semibold overflow-hidden shadow-lg text-xl'>
                <button className='w-[30%] flex justify-center items-center hover:bg-gray-200 cursor-pointer'>-</button>
                <span className='w-[40%] bg-slate-200 flex justify-center items-center'>{qty}</span>
                <button className='w-[30%] flex justify-center items-center hover:bg-gray-200 cursor-pointer'>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-6 p-3'>
        <span className='text-xl text-green-400 font-semibold'>Rs {price}/-</span>
        <ImBin onClick={()=>dispatch(DeleteItem(id))} className='text-red-500 w-[20px] h-[20px] cursor-pointer' />
      </div>
    </div>
  )
}

export default CartItem
