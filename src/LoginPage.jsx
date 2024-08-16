

function LoginPage(){
    return(
        <div id="mainblock">
            <div className="box" id="login">
                <h1>Login</h1><br />
                <input type="text" placeholder="username"/>
                <i class='bx bx-user'></i><br />
                <input type="password" placeholder="Password"/>
                <i class='bx bx-lock-alt'></i><br />
                <button className ="buttons" type="submit">Login</button>
                <button className ="buttons" type="reset">Clear</button>
            </div>
            <div className="box" id="signin">
                <h1>Sign in</h1>
                <input type="text" placeholder="username"/>
                <i class='bx bx-user'></i><br />
                <input type="password" placeholder="Enter your password"/>
                <i class='bx bx-lock-alt'></i><br />
                <input type="password" placeholder="Re enter your password"/>
                <i class='bx bx-lock-alt'></i><br />
                <button className ="buttons" type="submit">Login</button>
                <button className ="buttons" type="reset">Clear</button><br /><br />
                <button className ="buttons" type="submit">Login from google</button>
                <i class='bx bxl-google'></i><br />
                <button className ="buttons" type="submit">Login from facebook</button>
                <i class='bx bxl-facebook-circle' ></i><br />
                <button className ="buttons" type="submit">Login from linkedin</button>
                <i class='bx bxl-linkedin-square' ></i><br />
                

            </div>
        </div>
    );
}
export default LoginPage