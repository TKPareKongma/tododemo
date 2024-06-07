import React from "react";


function ForgotPassword(){
  
  
  const handleSubmit = async(e)=>{
    const emalVal = e.target.email.value;
    
        alert("Check your gmail")
    .catch(err=>{
        alert(err.code)
    })
  }
  return(
    <div className="App">
      <h1>ForgotPassword</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
          <input name="email" /><br></br>
          <button>Reset</button>
      </form>
    </div>
  )
}
export default ForgotPassword;