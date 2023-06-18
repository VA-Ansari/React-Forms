import React, {useRef, useState} from 'react'
function Form() {

    const name = useRef()
    const email = useRef()
    const pass = useRef()

    //using state
    const [sname, setSname] = useState("")
    const [semail, setSemail] = useState("")
    const [spass, setSpass] = useState("")




    return (
        <form className="container">
            <fieldset>
                <legend>React Form</legend>

                <label htmlFor={"name"} >Name:</label>
                <input type={"text"} onChange={(event)=>{setSname(event.target.value)}}  id={"name"} placeholder={"Enter your Name"}/>
                <br/>
                <br/>

                <label htmlFor={"email"}>Email:</label>
                <input type={"email"} onChange={(event)=>{setSemail(event.target.value)}}   id={"email"} placeholder={"Enter your Email"}/>
                <br/>
                <br/>

                <label htmlFor={"pass"}>Password:</label>
                <input type={"password"} onChange={(event)=>{setSpass(event.target.value)}} id={"pass"} placeholder={"Enter your Password"}/>
                <br/>
                <br/>

                <button type={"submit"}>Submit</button>

                <h1>{sname} <br/> <br/> {semail} <br/> <br/> {spass}</h1>
            </fieldset>
        </form>


    )
}

export default Form
