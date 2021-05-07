import React, { useState, useEffect } from "react";
import CardService from "../services/card.service"


const NewCard = ()=>{
    const [form, setForm] = React.useState({
        customer: '',
        card_id: '',
        balance: 0
    });

    const handleChange = (prop) => (event) => {
        setForm({...form, [prop]: event.target.value});
    }

    
    const createCard = () => {
        CardService.create(form)
            .then((res) => {
                console.log("Created successfully");
            })
            .catch((e) => {
                console.log(e);
            });
    }
    

    return(
        <div className="container">
        <h2>CARD DETAILS</h2>
        {/* <form action="/action_page.php"> */}
          <div className="form-group">
            <label for="customer">Customer:</label>
            <input type="text" className="form-control" id="pwd" onChange={handleChange("customer")} placeholder="Enter Card Id" name="customer"/>
          </div>
          <div className="form-group">
            <label for="card_id">Card Id:</label>
            <input type="text" className="form-control" id="pwd" onChange={handleChange("card_id")}  placeholder="Enter Card Id" name="card_id"/>
          </div>
          <div className="form-group">
            <label for="balance">Balance:</label>
            <input type="text" className="form-control" id="balance" onChange={handleChange("balance")} placeholder="Enter Balance" name="balance"/>
          </div>


          <button type="submit" className="btn btn-primary" onClick={()=>createCard()}>Submit</button>
        {/* </form> */}
      </div>
        )
  

}

export default NewCard;