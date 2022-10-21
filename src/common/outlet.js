import { Outlet } from "react-router";
import {Footer} from "./footer";
import { Header } from "./header";

export function Template(){

return(
    <>
    <Header></Header>
    <Outlet></Outlet>
   <Footer></Footer>
    
    </>
);


}