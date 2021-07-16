import React, { useEffect, useState } from 'react'
import './Todo.css'
import List from './components/List.js'
import Item from './components/Item'
import TodoForm from './components/TodoForm'
import Modal from './components/Modal'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import listReducer from './reducers/listReducer'

const store = createStore(listReducer);

const SAVED_ITEMS = "savedItems"




function App(){

    const [showModal, setShowModal] = useState(false)
  
    function onHideModal(event){
        setShowModal(false)}

    return (
    <div className="container">
        <Provider store={store}>
       <header> <h1>Lista</h1>
       <button className="addButton" onClick={()=>{setShowModal(true)}}>+</button>
       </header>
    <List></List>
   <Modal show={showModal} onHideModal={onHideModal}>
       <TodoForm onHideModal={onHideModal}></TodoForm></Modal>
   </Provider> 
   </div>
    
    )
}


export default App