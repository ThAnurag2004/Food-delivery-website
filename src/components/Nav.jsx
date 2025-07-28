import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from "../context/UserContext";
import food_items from "../food";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, cate, setCate, setShowCart } = useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCate(newList);
  }, [input]);

   let item = useSelector(state=>state.cart)

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[45%] md:w-[70%] h-[60px] flex items-center gap-5 bg-white px-5 rounded-md shadow-xl "
      >
        <IoSearch className="text-green-500 w-[30px] h-[20px]" />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search Food items..."
          className="w-full border-none outline-none text-[16px] md:text-[20px]"
        />
      </form>
      <div onClick={()=>setShowCart(true)} className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer">
        <span className="absolute top-0 right-2 text-green-500 font-semibold text-[1.2rem]">
          {item.length}
        </span>
        <FiShoppingBag className="w-[20px] h-[20px] text-green-500 " />
      </div>
    </div>
  );
}

export default Nav;
