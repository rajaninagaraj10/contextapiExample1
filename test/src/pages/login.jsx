import React from 'react';
function Login() {
  return(
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-lg-4">
            <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <div>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        </div>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit" className='mt-3'>Submit</button>
        </div>
      </form>
    </div>
            </div>
        </div>
    </div>
  )
}

export default Login