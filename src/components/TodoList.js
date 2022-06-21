import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const {items,clearList, handleDelet, handelEdit} = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo list</h3>
        {
          items.map(item => {
            return <TodoItem key={item.id} title={item.title} handleDelet={()=> handleDelet(item.id)} handelEdit={(e)=> handelEdit(e,item.id)}/>;
          })
        }
        <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>clear list</button>
      </ul>
    )
  }
}
