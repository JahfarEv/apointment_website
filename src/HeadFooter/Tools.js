import React, { Children } from "react";
import AddNew from "../components/AddNew";
class Tools extends React.Component{
    render(){
        const{
            children,
            onAction
        }=this.props; 

        const onlyChild=React.Children.only(children);
        const count=React.Children.count(onlyChild.props.children);
        return (
            <div className="list-tools">
                <div className="list-header">
                <select onChange={onAction} className="status">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="non-active">Non-Active</option>
                </select>
                <AddNew />

            </div>
                {children}
            <div className="list-footer">
                Total {count}items

            </div>
            </div>
        )  
    }
}
export default Tools;