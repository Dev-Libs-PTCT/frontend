import React from "react";

import { Card } from "../styles/CardStyles";
import  SimpleModal  from './Modal'
import axiosWithAuth from "../utils/axiosWithAuth";



const ProfileCard = props => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 const handleDelete = () => {
    props.setFetching(true)
    const deleteItem = {
      id: props.lib.id,
      user_id: props.lib.user_id
    }
    console.log('delete', deleteItem)
    axiosWithAuth()
      .delete(`/api/devLib/${props.lib.id}`)      
      .then(res=>{
        props.setFetching(false)
        console.log('delete item', deleteItem)
        console.log("delete res", res)
      })
      .catch(err=> console.log('catch,', deleteItem, err))
  }

  

  return (
    <div>

      <Card>
        <p>{props.lib.lib}</p>
        <button className='btn bg-primary' onClick={handleOpen}>Edit</button>
        {open && <SimpleModal handleClose={handleClose} open={open} lib={props.lib} isFetching={props.isFetching} setFetching={props.setFetching} />}
        <button className='btn bg-primary' onClick={handleDelete}>Delete</button> 
      </Card>


    </div>
  );
};

export default ProfileCard;