import React,{ useState } from 'react';
import {useMutation} from "@apollo/client";
import {LoginMutation} from "../api/login.mutation";
import { useNavigate } from 'react-router-dom';
const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [id, setId] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const [login] = useMutation(LoginMutation, {
        variables: {
            email: id,
            password: pwd
        },onCompleted: ({ login }) => {
            console.log(login);
            localStorage.setItem("token", login?.token);
            navigate('/list');
            document.location.reload();
        }
    });

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
        // if(id!=="" && pwd!==""){
        //     alert("Login successful!");
        //     setId("");
        //     setPwd("")
        // }
        // else
        //     alert("All fields required!")
        // login();
    // };

    return (
        <div className="App">
        <div className="heading">
            SIGN IN
            <img src={"/Images/Logo.png" } alt={"Logo"} width={"90px"} height={"70px"}  />
        </div>
        <form
            className="form_Cont"
            onSubmit={(e) => {
                e.preventDefault();
                login().then((res) => {
                    // console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            }}
        >
            <label className="userLabel">User ID:</label>
            <input
                type="text"
                placeholder="Enter your ID"
                className="inputField"
                value={id}
                onChange={(e)=>setId(e.target.value)}
            />
            <label className="userLabel">Password:</label>
            <input
                type="password"
                placeholder="Enter a Task"
                className="inputField"
                value={pwd}
                onChange={(e)=>setPwd(e.target.value)}

            />
            <button type="submit" className="input_submit">
                LOGIN
            </button>
        </form>
        </div>
    );
}

export default LoginPage;
