import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './card';
import { deleteItem, changeDone } from './../actions/listActions';

function DoneImg(props){
        if(props.done){
            return(<img src="./assets/on.png" alt="done"></img>)
        }else{
            return(<img src="./assets/off.png" alt="undone"></img>)
        }
    }


function ListItem(props){
    
    const dispatch = useDispatch()
        
        return (<li>
               <Card className={props.item.done ? "item done" : "item" }> {props.item.text}
                <div>
                <button className="checkedimg" onClick={()=>{dispatch(changeDone(props.item.id))}}><DoneImg done={props.item.done}></DoneImg></button>
                <button onClick={() => {dispatch(deleteItem(props.item.id))}}><img src="./assets/bin.png" alt="delete"></img></button></div>
                </Card>
                </li> )}

    export default ListItem