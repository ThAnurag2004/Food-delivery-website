import { TiThSmallOutline } from "react-icons/ti";
import { TbSoup } from "react-icons/tb";
import { TiCoffee } from "react-icons/ti";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";

const Categories =[
    {
        id:1,
        name: "All",
        icon:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:2,
        name: "Breakfast",
        icon:<TiCoffee className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:3,
        name: "Soups",
        icon:<TbSoup className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:4,
        name: "Pasta",
        icon:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:5,
        name: "Dinner",
        icon:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:6,
        name: "Pizza",
        icon:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:7,
        name: "Burger",
        icon:<GiHamburger className="w-[60px] h-[60px] text-green-600"/>
    },

]


export default Categories;