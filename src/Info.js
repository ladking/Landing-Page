import React from 'react'

function Info() {
    const[data, setData] = React.useState({
        Email:"",
        
    })
  

    function handleChange(e){
        setData((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(data)
        
    }
    
 
  return (
    <div className='left-col'>
        <div className='info-top'>
        <h1> <span>We're</span> <br />Coming <br/> Soon</h1>
        <p>Hello fellow shoppers! We're currently building 
            our new fashion store. Add your email below to 
            stay up-to-date with announcements and our launch deals.</p>
        </div>
        <form className='form'>    
        <input onChange={handleChange}type='email' 
        placeholder='Email Address' name='Email' value={data.Emali} required/>
        <button onClick={handleSubmit}><i class="fa-solid fa-greater-than"></i></button>
        {/* <i className="fa-solid fa-circle-exclamation"></i> 
        <p>Please provide a valid email</p> */}
        </form>
    </div>
  )
}

export default Info