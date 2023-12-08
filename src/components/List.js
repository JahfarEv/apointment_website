import React from "react";
import ListItem from "./ListItem";
import Tools from "../HeadFooter/Tools";

let arr = [
  {
    id:1,
    title: "Appoinment for Augest",
    descr: "The patient is resheduled to Augest",
    isActive: false,
  },
  {
    id:2,
    title: "Appoinment for Augest",
    descr: "The patient is resheduled to Augest",
    isActive: true,
  },
  {
    id:3,
    title: "Appoinment for Augest",
    descr: "The patient is resheduled to Augest",
    isActive: true,
  },
];

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: arr,
      activeState: "all",
    };
  }

  onListchange = (evt) => {
    
    const value = evt.target.value;
    

    this.setState({
      activeState: value,
    });
  };
  handleDelete = (item)=>{
    const newList=this.state.data.filter((element) => element.id !==item.id);
    this.setState({
        data:newList
    });

  }
  render() {
    const { data, activeState } = this.state;

    const newList = this.state.data.filter((item) => {
      if (activeState === "all") {
        return true;
      }
      if (activeState === "active") {
        return item.isActive === true;
      }
      if (activeState === "non-active") {
        return item.isActive === false;
      }
      return false;
    });

    return (
      <Tools onAction={this.onListchange}>
        <div className="app-list">
          {newList.map((obj) => {
            return (
              <ListItem
                key={obj.title}
                title={obj.title}
                descr={obj.descr}
                isActive={obj.isActive}
                onDelete={()=>{
                    this.handleDelete(obj);
                }}
              />
            );
          })}
        </div>
      </Tools>
    );
  }
}
export default List;
