import React,{ useState } from 'react';
const LoginPage: React.FC = () => {
    const [id, setId] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(id!=="" && pwd!==""){
            alert("Login successful!");
            setId("");
            setPwd("")
        }
        else
            alert("All fields required!")

    };

    return (
        <form
            className="form_Cont"
            onSubmit={(e) => {
                handleSubmit(e);
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
    );
}

export default LoginPage;
