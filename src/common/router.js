import { BrowserRouter,Route,Routes} from "react-router-dom";
import { Template } from "./outlet";
import{ Home} from "../pages/home"
import {Contact} from '../pages/contact';
import { Error } from "../pages/error";
import { Cart } from "../pages/cart";
import { About } from "../pages/About";
import Team from "../pages/Team";
import Ourservice from "../ourservice";


export function Rout(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Template></Template>}>
                    <Route  path='/'  element={<Home></Home>}></Route>
                    <Route  path='/home'  element={<Home></Home>}></Route>
                    <Route  path='/about'  element={<About></About>}></Route>
                    <Route  path='/contact-us' element={<Contact></Contact>}></Route>
                    <Route  path='/team'  element={<Team></Team>}></Route>
                   
                    <Route  path ="pages/cart.js"  element={<Cart></Cart>}></Route>  
                   <Route path="/service"  element={<Ourservice></Ourservice>}></Route>
                    </Route>
                    <Route  path="*" element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
        
        
        </>
    );
}