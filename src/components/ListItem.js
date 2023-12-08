import React from "react";
import Label from "./Label";
import './ListItem.css'
function ListItem(props){
  const {
    onDelete
  }=props
    return(
        <div className="list-item">
        <hr />
        <div className="list-title">
          <h4>{props.title}</h4>
          <label onClick={onDelete}>Delete</label>
        </div>
        <div className="list-descr">{props.descr}</div>
        <div className="list-table">
          <Label onAction={()=>{
            console.log('Parent Clicked')
          }} isActive={props.isActive}/>
          
          
        </div>
        <hr />
      </div>
    )
}
export default ListItem;