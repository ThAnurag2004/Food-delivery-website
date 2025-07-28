import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Cards from "../components/Cards";
import food_items from "../food.js";
import { dataContext } from "../context/UserContext.jsx";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import CartItem from '../components/CartItem.jsx'
function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);
  

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newlist = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newlist);
    }
  }

  let items = useSelector(state=>state.cart)

  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full ">
          {Categories.map((item) => {
            return (
              <div
                onClick={() => filter(item.name)}
                className="w-[140px] h-[150px] bg-white flex flex-col items-start justify-start gap-5 p-5 text-[20px] text-gray-600 font-semibold rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200"
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="flex justify-center flex-wrap gap-4 pt-8 pb-8">
        {cate.map((item) => (
          <Cards
            name={item.food_name}
            image={item.food_image}
            type={item.food_type}
            id={item.id}
            price={item.price}
          />
        ))}
      </div>

      <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 overflow-auto bg-white shadow-xl p-6 ${showCart?"translate-x-0":"translate-x-full"} transition-all duration-200`}>
        <header className="flex justify-between items-center">
          <h1 className="text-green-500 font-bold text-xl">Order items</h1>
          <IoCloseSharp className="w-[30px] h-[30px] text-green-500 hover:text-gray-600 cursor-pointer" onClick={()=>setShowCart(false)} />
        </header>
        {/* cart item */}
        <div className="w-full mt-8 flex flex-col gap-5">
          {items.map((item) => (
            <div key={item.id}><CartItem name={item.name} price={item.price} image={item.image} qty={item.qty} id={item.id}/></div>
          ))}
        </div>

        {/* price section */}

        <div className="w-full border-t-2 border-b-2 border-gray-700 mt-3 flex justify-between py-4">
          <div className="flex flex-col">
            <span>SubTotal</span>
            <span>Delivery Fee</span>
            <span>Taxes</span>
          </div>
          <div className="flex flex-col items-end">
            <span>Rs 399/-</span>
            <span>Rs 20/-</span>
            <span>Rs 1,995/-</span>
          </div>
        </div>

        {/* total */}
        <div className="flex justify-between py-4">
          <span className="text-2xl font-semibold">Total</span>
          <span className="text-2xl font-bold text-green-400">Rs 420/-</span>
        </div>

        {/* button */}
        <button className="w-full p-2 bg-green-500 rounded-md text-white">Place Order</button>
      </div>
    </div>
  );
}

export default Home;
