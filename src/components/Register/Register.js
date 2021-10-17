import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="" action="">
                    <input type="email" name="" id="" placeholder=" Enter Your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter A Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-Enter Password" />
                    <br />
                    <input type="submit" value="submit" />
                    <p>Already Have An Account? <Link to="/login">Sign In</Link></p>
                </form>
                <div>-------------or-------------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;