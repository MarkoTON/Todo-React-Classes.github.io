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

  // itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

  handleChange = (e) => {
    console.log("Coming from state:");
    console.log(this.state.item);
    this.setState({
      item:e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log("metallica");
    // console.log(e.target);
    if(this.state.item === ''){
      alert("Please add item.")
      return
    }

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      // editItem: this.state.editItem
    }
    
    // console.log(this.state.items);
    console.log(newItem);
    const updateItems = [...this.state.items,newItem];

    this.setState({
      items: updateItems,
      item:"",
      id:uuid(),
      editItem: false
    })

    // console.log(this.itemsArray);
    // console.log(this.state.items);
    // this.itemsArray = this.state.items
  }

  clearList = () => {
    prompt("test")
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

  handelEdit = (e,id) => {
    // console.log(e);
    // console.log(id);
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id
    });

    const selectedItem = this.state.items.filter(item => {
      return item.id === id
    })

    // console.log(selectedItem)
    // console.log(selectedItem[0])
    // console.log(selectedItem[0].title)

    let input = document.getElementById('inputItem');
    // console.log(input);
    input.focus()

    this.setState({
      items: filteredItems,
      item: selectedItem[0].title,
      editItem: true,
      id: id
    });

  }

  // Lifecycle hooks
  componentDidMount() {
    console.log("Behavior before the component is added to the DOM ------------ componentDidMount");

    // console.log(this.state);

    // localStorage.setItem('items', JSON.stringify(this.state.items));
  }

  componentDidUpdate() {
    console.log("Behavior when the component receives new state or props. ------------ componentDidUpdate");
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.foo !== prevProps.foo) {
  //   console.log("Behavior when the value of 'foo' changes.");
  //   }
  // }

  componentWillUnmount() {
    console.log("Behavior right before the component is removed from the DOM.");
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
