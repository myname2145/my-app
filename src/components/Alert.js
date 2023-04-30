import React from 'react';
export default function Alert(props){
    const capitalize = (message1) => {
        const text = message1.toLowerCase();
        const con = text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
        return con;
    }
    return(
    <div style={{height:'50px'}}>
{props.Alert &&
                <div className="alert alert-success" role="alert">
                <strong>{capitalize(props.Alert.type)} : {props.Alert.msg}</strong>
                </div>}
                </div>
    )
}