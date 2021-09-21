import React, { useState } from "react";
import Bg from "../Images/bg.jpg";
import axios from 'axios';
import { makeStyles, Grid } from "@material-ui/core";
import Loader from './Loader.js';
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
    wrapper: {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    box: {
        height: "550px",
        width: "320px",
        backgroundColor: "#f7f7f7",
        borderRadius: "20px",
        boxShadow: "0 0 7px  #7a7a7a",
        color: "#333333",
        padding: "10px 10px",
        position: "relative",
    },
    heading: {
        fontSize: "2rem",
        textAlign: "center",
        marginBottom: "20px",
        position: "relative",
        top: "20px",

    },
    label: {
        margin: "0 auto",
        position: "relative",
        top: "20px",

        width: "fit-content",
    },
    input: {
        height: "45px",
        display: "flex",
        alignItems: "center",
        outline: "none",
        borderColor: "transparent",
        width: "60%",
        borderWidth: "2px",
        padding: "0px 25px",
        fontSize: "1.2rem",
        // boxShadow: '0 0 5px  #7a7a7a',
        // backgroundColor: '#ebbe42',
        backgroundColor: "transparent",
        borderBottom: "3px solid gray",
        color: "#333333",
        margin: "0 auto",
        "&:focus": {
            borderBottomColor: "#e6b635",
            transitionDuration: "0.2s",
        },
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffcb3b",
        color: "black",
        height: "40px",
        borderRadius: "30px",
        width: "80%",
        margin: "20px auto",
        textTransform: "uppercase",
        position: "relative",

        transition: "all 0.2s ease",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#e6b635",
            width: "83%",
        },
    },
}));

const Register = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confPassword, setConfPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [blankField, setBlankField] = useState(false);
    const [loginMessage, setLoginMessage] = useState(false);
    const [hideSubmit, setHideSubmit] = useState(false);
    const history = useHistory();

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
    }
    const handleSubmit = () => {
        setLoading(true);
        setErrorMessage(false);
        setHideSubmit(true);
        if (name === null || name === "" || email === null || email === "" || password === null || password === "" ||
            confPassword === null || confPassword === "") {
            setBlankField(true);
            setLoading(false);
            setHideSubmit(false);
        }
        else {
            setBlankField(false);
            const sendData = { email, name, password };
            axios.post('https://self-growth-questionaire.herokuapp.com/register', sendData)
                .then(res => {
                    if (res.data.success === true) {
                        localStorage.setItem('token', res.data.token);
                        setLoading(false);
                        setLoginMessage(true);
                        setTimeout(() => {
                            history.push('/');
                        }, 1000)
                    }
                    else {
                        setErrorMessage(res.data.message);
                        setLoading(false);
                        setHideSubmit(false);
                    }
                })

        }
    }
    const classes = useStyles();
    const errorPassword = {
        marginLeft: '30px',
        marginTop: '5px',
        color: 'red',
        fontSize: '0.8rem'
    }
    const otherErrorStyle = {
        display: 'block',
        color: 'red',
        fontSize: '0.8rem',
        textAlign: 'center'
    }
    const successStyle = {
        display: 'block',
        color: 'green',
        fontSize: '1rem',
        textAlign: 'center'
    }
    return (
        <Grid container className={classes.wrapper}>
            <Grid item className={classes.box}>
                <h2 className={classes.heading} >
                    Welcome to The Mirror Test
                </h2>
                <p className={classes.label} >
                    Please enter your details to continue
                </p>

                <div
                    style={{
                        width: "100%",
                        position: "relative",
                        top: "30px",

                    }}

                >
                    <i
                        className="fas fa-envelope"
                        style={{ position: "absolute", top: "17px", left: "40px" }}
                    ></i>
                    <input
                        type="email"
                        id="email"
                        className={classes.input}
                        placeholder="Email"
                        autoComplete="on"
                        onChange={handleEmail}
                    />
                    <i
                        className="fas fa-user"
                        style={{ position: "absolute", top: "65px", left: "40px" }}
                    ></i>
                    <input
                        type="text"
                        id="name"
                        className={classes.input}
                        placeholder="Name"
                        autoComplete="off"
                        onChange={handleName}
                    />
                    <i
                        className="fas fa-key"
                        style={{ position: "absolute", top: "118px", left: "40px" }}
                    ></i>
                    <input
                        type="password"
                        id="password"
                        className={classes.input}
                        placeholder="Password"
                        autoComplete="off"
                        onChange={handlePassword}
                    />
                    <i
                        className="fas fa-lock"
                        style={{ position: "absolute", top: "166px", left: "40px" }}
                    ></i>
                    <input
                        type="password"
                        id="password-confirm"
                        className={classes.input}
                        placeholder="Confirm Password"
                        autoComplete="off"
                        onChange={handleConfPassword}
                    />
                    {password !== confPassword ? <span style={errorPassword}>Passwords do not match</span> :
                        <span style={{ opacity: 0 }}>Passwords do not match</span>
                    }
                    {!hideSubmit ?
                        <div
                            className={classes.button}
                            onClick={handleSubmit}
                        >
                            Submit
                        </div> : null}

                    {loading ? <Loader /> : null}
                    {errorMessage ? <span style={otherErrorStyle}>{errorMessage}</span> : null}
                    {blankField ? <span style={otherErrorStyle}>Please fill out all the fields</span> : null}
                    {loginMessage ? <span style={successStyle}>You can now login</span> : null}
                </div>


            </Grid>
        </Grid>
    )
}
export default Register;