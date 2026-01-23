import React from 'react';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-header">Login</h2>
        <form className="login-form">
          <div className="form-group">
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" className="form-input" />
          </div>
          <div className="form-group">
            <div className="select-wrapper">
              <select className="form-input form-select" defaultValue="">
                <option value="" disabled>Select Role</option>
                <option value="Employee">Employee</option>
                <option value="HR">HR</option>
              </select>
            </div>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="register-link-container">
          <a href="#" className="register-link">Register Organization</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
