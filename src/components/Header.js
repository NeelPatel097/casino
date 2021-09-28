import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import React from "react";
import { useState  } from "react";
import avatar from "../assets/img/avatar.png";

const Header = (props) => {
    const [loginDialog, setLoginDialog] = useState(false);
    return (
        <div className="casino-header">
            {props.loggedIn && (
                <>
                    <div class="casino-header_profile">
                        <img src={avatar} alt="Profile" className="profile"/>
                        <>{localStorage.getItem("name")}</>
                    </div>
                    <div className="casino-header_balance">
                        Balance ${parseFloat(props.balance).toFixed(2)}
                    </div>
                </>
            )}
            {
                !props.loggedIn && (
                    <Button variant="contained" color="secondary" onClick={() => {
                        setLoginDialog(true);
                    }}>Login</Button>
                )
            }
            <Dialog
                open={loginDialog}
                onClose={() => setLoginDialog(false)}
                aria-labelledby="form-dialog-title">

                <DialogTitle>Your Details</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        label="Name" 
                        variant="outlined" 
                        margin="dense"
                        type="text"
                        fullWidth
                        id="name"
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        label="Email" 
                        variant="outlined" 
                        margin="dense"
                        type="email"
                        fullWidth
                        id="email"
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        label="Password" 
                        variant="outlined" 
                        margin="dense"
                        type="password"
                        fullWidth
                        id="password"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setLoginDialog(false)} color="secondary"> Cancel</Button>
                    <Button onClick={() => {
                        setLoginDialog(false);
                        localStorage.setItem("loggedIn", true);
                        props.SetLoggedIn(true);
                        localStorage.setItem("name", document.getElementById("name").value);
                        localStorage.setItem("email", document.getElementById("email").value);
                        localStorage.setItem("password", document.getElementById("password").value);
                    }}
                    color="primary"
                    >
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Header;