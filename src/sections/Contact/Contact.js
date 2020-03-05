import React, {useState} from 'react';
import './Contact.scss';
import '../Section.scss';
import '../../components/Animations/Animations.scss';
import CellphoneIco from '../../assets/Icons/phone-call.png';
import GmailIco from '../../assets/Icons/gmail.png';
import LinkedinIco from '../../assets/Icons/linkedin.png';
import Icon from './Icons/Icon';
import useBool from '../../components/useBool';

const Contact = ()=>{
    const [info, setInfo] = useState("Welcome!");

    const handleClick = (showinfo)=>{
        switch (showinfo){
            case "cellphone":
                console.log("celular")
                setInfo("+541122529807");
                break;

            case "email":
                console.log("mail")
                setInfo("louabecasis@gmail.com");
                break;
            
            case "linkedin":
                console.log("celular")
                setInfo("Luciana Abecasis");
                break;
        }
    }
    return(
        <section className="contact section">
            <div className="cellphone">

                <div className="cellphone-screen">
                    <div className="cellphone-clock">
                        <p>saturday <br/> 22.02.2020</p>
                        <h1>16:20</h1>
                    </div>
                    <div className="cellphone-content scale-in-bottom">
                       <p> {info} </p>
                    </div>
                    <div className="cellphone-buttons">
                        <Icon onClick={e=> {handleClick("cellphone")}} img={CellphoneIco}>Cellphone</Icon>
                        <Icon onClick={e=> {
                            console.log("hola?");
                            handleClick("email");}} img={GmailIco}>Email</Icon>
                        <Icon onClick={e=>{ handleClick("linkedin")}} img={LinkedinIco}>Linked In</Icon>
                    </div>
                </div>
            </div>
        </section>
    ); 
}

export default Contact;