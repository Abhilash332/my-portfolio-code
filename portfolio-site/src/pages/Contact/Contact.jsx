import React, {useState} from 'react';
import './Contact.css';
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import image from "../../assets/contact.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { toast } from 'react-toastify';
import axios from 'axios';
const Contact = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [msg,setMsg]=useState("")

    //handle submit button
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if(!name || !email || !msg){
                toast.error('Please Provide all fields');
            }
            const res = await axios.post('/api/v1/portfolio/sendemail',{name,email,msg});
            //validation success
            if(res.data.success){
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setMsg("");
            } else {
                toast.error(res.data.message);
            }
        }catch(error){
            console.log(error);
        }
    }
  return (
    <>
    <div className="contact" id="contact">
        <div className="card card0 border-0">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="card1">
                        <div className="row border-line">
                            <LightSpeed>
                            <img src={image} alt="Contact"/>
                            </LightSpeed>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                   <Rotate>
                    <div className="card2 d-flex card border-0 px-4 py-3">
                    <div className="row">
                        <div className="row">
                        <h6>Contact with 
                            <FaLinkedin color="blue" size={30} className="ms-2"/>
                            <FaGithubSquare color="black" size={30} className="ms-2"/>
                            <FaFacebookSquare color="blue" size={30} className="ms-2"/>
                        </h6>
                        </div>                    
                    <div className="row px-3 mb-4">
                        <div className="line" />
                            <small className="or text-center">OR</small>
                        <div className="line" />
                    </div>
                    <div className="row px-3">
                        <input type="text" name="name" placeholder="Enter your name" className="mb-3" value={name} onChange={(e)=>setName(e.target.value)}/>
                        <input type="text" name="email" placeholder="Enter your Email address" className="mb-3" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <textarea type="text" name="msg" placeholder="Write your message" className="mb-3" value={msg} onChange={(e)=>setMsg(e.target.value)}/>                                                
                    </div>
                    <div className="row px-3">
                        <button className="button" type="submit"onClick={handleSubmit} >Send Message</button>
                    </div>
                    </div>
                </div>
                </Rotate>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Contact