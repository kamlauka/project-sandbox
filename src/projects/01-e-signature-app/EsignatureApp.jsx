import React, {useState} from 'react';
import Title from '../components/Title';

export default function EsignatureApp() {
    const [name, setName] = useState("Your name");
    const [date, setDate] = useState("Select date");
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: ".35rem 0"
    };
    document.body.style.background = "#eee"
  return (
    <div  className='container text-center'>
        {/* <Title classes={"title"} text={"Name"}/> */}
        <Title classes={"title"} text={name}/>
        <Title classes={"main-title mb-4"} text={!date ? "Wrong date" : date}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem consequatur velit aliquam praesentium porro voluptas enim deleniti, provident reprehenderit obcaecati odit possimus dolorem fugit aut veritatis, earum doloremque perspiciatis.</p>
        <footer className = "d-flex" style = {{justifyContent: "space-around", position: "relative", top: "40vh"}}>
            <input type = "date" value = {date} style = {inputStyle} onChange = {handleDateChange} />
            <input type = "text" value = {name} style = {inputStyle} onChange = {handleNameChange}/>
        </footer>
    </div>
  )
}
