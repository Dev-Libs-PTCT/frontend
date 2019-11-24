import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

  export default function Logout() {
  
      const [open, setOpen] = React.useState(false);
  
      const handleClickOpen = () => {
          setOpen(true);
        };

        const handleClickClose = () => {
          setOpen(false);
        };
  
      const logout = e => {
          localStorage.clear();
          window.location.href = "/";
        }
  
  return (
      <div>
          <button className='btn bg-primary' onClick={handleClickOpen}>
  Logout      </button>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Logging Out"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             You'll be redirected to the login page.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <button className='btn bg-primary' onClick={handleClickClose}>
            Stay      
          </button>
          
          <button className='btn bg-primary' onClick={logout} >
              Confirm
            </button>
          </DialogActions>
        </Dialog>
      </div>
  )};