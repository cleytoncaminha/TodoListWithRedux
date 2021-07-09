import React, { useEffect, useState } from 'react'
import './Todo.css'
import List from './components/List.js'
import Item from './components/Item'
import TodoForm from './components/TodoForm'
import Modal from './components/Modal'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const SAVED_ITEMS = "savedItems"

function App(){

    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([]);

useEffect(()=>{
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if(savedItems){
        setItems(savedItems)
    }
},[])

useEffect(()=>{
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
},[items])

    function onAddItem(text){

        let item = new Item(text);
        setItems([...items, item]);
        onHideModal();
    }
    function onItemDeleted(item){
        
       let filteredItems = items.filter((it) => it.id !== item.id)

        setItems(filteredItems)
    }

    function onDone(item){
        let updatedItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done

            }
            return it;

        })
        setItems(updatedItems)
    }
    
    function onHideModal(event){
        setShowModal(false)}

    return (
    <div className="container">
       <header> <h1>Lista</h1>
       <button className="addButton" onClick={()=>{setShowModal(true)}}>+</button>
       </header>
    <List onItemDeleted={onItemDeleted} onDone={onDone} items={items}></List>
   <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal> 
   </div>
    
    )
}


export default App