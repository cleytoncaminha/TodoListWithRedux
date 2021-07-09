import React from 'react';
import Card from './card';

function DoneImg(props){
        if(props.done){
            return(<img src="./assets/on.png" alt="done"></img>)
        }else{
            return(<img src="./assets/off.png" alt="undone"></img>)
        }
    }


function ListItem(props){
    
    
        
        return (<li>
               <Card className={props.item.done ? "item done" : "item" }> {props.item.text}
                <div>
                <button className="checkedimg" onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                <button onClick={() => {props.onItemDeleted(props.item)}}><img src="./assets/bin.png" alt="delete"></img></button></div>
                </Card>
                </li> )}

    export default ListItem