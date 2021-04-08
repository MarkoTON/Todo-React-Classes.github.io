import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    items:[],
    id: uuid(),
    item:'',
    editItem:false
  }

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    });
    // console.log(this.state.item)
    // console.log(e)
  };

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log("metallica");
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      // editItem: this.state.editItem
    }
    // console.log(this.state.items);
    // console.log(newItem);
    const updateItems = [...this.state.items,newItem];

    this.setState({
      items: updateItems,
      item:"",
      id:uuid(),
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      items:[]
    })
  };

  handleDelet = (id) => {
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id
    });

    this.setState({
      items: filteredItems
    })
  }

  handelEdit = (id) => {
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id
    });

    const selectedItem = this.state.items.filter(item => {
      return item.id === id
    })

    // console.log(selectedItem)
    // console.log(selectedItem[0])
    // console.log(selectedItem[0].title)

    this.setState({
      items: filteredItems,
      item: selectedItem[0].title,
      editItem: true,
      id: id
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-center offset-1 offset-md-2 col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList 
              items={this.state.items} 
              clearList={this.clearList} 
              handleDelet={this.handleDelet}
              handelEdit={this.handelEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
