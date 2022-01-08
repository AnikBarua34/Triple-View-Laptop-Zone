import React from 'react';
import { FcShop} from "react-icons/fc";
import { BsFacebook} from "react-icons/bs";
import { BsTwitter} from "react-icons/bs";
import { IoLogoYoutube} from "react-icons/io";

const Footer = () => {
    const handleSocialLink = ()=>{
        alert('Currently We Dont have any Social Pages !! This will update soon')
    }
    return (
        <div className="bg-dark text-light mt-5 pt-5">

            <div className="mt-1 p-3">
            <h3 className="text-warning"><FcShop/>TRIPPLE VIEW LAPTOP STORE<FcShop/></h3>
            <p>A Brand Laptops Zone</p>
            <h2> <button onClick={handleSocialLink} className="btn btn-primary"><BsFacebook/></button> <button onClick={handleSocialLink} className="btn btn-danger"><IoLogoYoutube/></button> <button onClick={handleSocialLink} className="btn btn-success"><BsTwitter/></button></h2>
            <p>Copyright@ANIK_BARUA_TURJOY_2022</p> <br />
            <p>P.HERO_4th_Batch</p>
            </div>


        
        </div>
    );
};

export default Footer;