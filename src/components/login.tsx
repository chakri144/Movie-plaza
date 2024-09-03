import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {
  const [name,setName]=useState('')
  const[ password,setPassword]=useState('')
  const navigate=useNavigate()
  const gotoHome=(e:FormEvent)=>
  {
    e.preventDefault()
    if(name=="chakri")
    {
      if(password=="chakri123")
      {
        navigate("/a")
      }
      else{
        alert("orey wrong password  kotavu kallu dobaya")
      }
    }
    else{
      alert("nee peru neeku telida ra")
    }
  }
  

  return (
    
    <div className='loginBG'>
       <div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label  className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="for-pwd"/><label  className="tab">Forgot Password</label>
		
      <form className="login-form"  onSubmit={gotoHome}>
			<div className="sign-in-htm">
				<div className="group">
					<label  className="label">Username or Email</label>
					<input id="user" type="text" className="input" onChange={(e)=>setName(e.target.value)} />
				</div>
				<div className="group">
					<label  className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" onChange={(p)=>setPassword(p.target.value)}/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In" />
				</div>
				<div className="hr"></div>
			</div>
      
			<div className="for-pwd-htm">
				<div className="group">
					<label  className="label">Username or Email</label>
					<input id="user" type="text" className="input" />
				</div>
				<div className="group">
					<input type="submit" className="button" value="Reset Password" />
				</div>
				<div className="hr"></div>
			</div>
		</form>
	</div>
</div>

    </div>
    


  )
}
