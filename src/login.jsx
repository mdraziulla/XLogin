import React, { useState } from 'react'

function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(userName==="user" && password==="password"){
            setError("");
            setIsSubmit(true);
        }else{
            setError("Invalid username or password");
            setIsSubmit(false);
        }
    }

  return (
    <div>
      <h1>Login Page</h1>
      {isSubmit ? (
        <div>
        <p>Welcome, {userName}!</p>
      </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default LoginPage
