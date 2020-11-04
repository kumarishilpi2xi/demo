import React, { useState } from "react";
import { Modal } from "./NewList/index";
import EditModal from './editModal';
import MyTask from "./Mytasks";

import del from "../../assets/delete.png";
import close from "../../assets/cancel.png";
import logo from "../../assets/logo.png";
import add from "../../assets/baseline_add_circle_black_48dp.png";
import "./style.css";

export default class TaskBoard extends React.Component {
  state = {
    show: false,
    newShow: false,
    newListVal: "",
    newListInput: "",
    lists: [{
      id:1,
      name:'list 1',
      todos:[{id:1, title:'hello', description:'one', date:'12/1/21'}],
      completed:[{id:1, title:'hello', description:'one'}],
    }],
    showAddInput: false,
    current:[],
  };

  showModal = (item) => {
    this.setState({current:item})
    console.log(item)
    console.log("open");
    this.setState({ show: true });
  };

  hideModal=()=>{
    this.setState({ show: false });
  };

  NewshowModal = () => {
    console.log("open");
    this.setState({ newShow: true });
  };

  NewhideModal = () => {
    this.setState({ newShow: false });
  };
  getTime() {
    let d = new Date();
    var n = d.getTime();
    return n;
}

  addToList = () => {
    const newlist = {
      id: this.getTime(),
      name:this.state.newListVal,
      todos:[],
      completed:[],
      description:'',
      date:'',
    }
    this.setState({
      lists: [...this.state.lists, newlist],
      newListVal: "",
    });
    this.NewhideModal();
  };

  finishTask = (listId, taskId) =>{

  }
  showInput = () => {
    this.setState({showAddInput: !(this.state.showAddInput)})
  }

  addTodo = (listId, todo) => {
    const updated_list = this.state.lists.filter((item)=>item.id!==listId);
    const list = this.state.lists.filter((item)=>item.id===listId);

    const update = list[0].todos;
    const newtodo = {
      id: this.getTime(),
      title: todo,
      description: '',
      date: '',
    }
    update.push(newtodo);
    list.push({
      id:listId,
      name:list.name,
      todos:update,
      completed:list.completed,
    })
    updated_list.push(list);
    this.setState({lists:updated_list, showAddInput:false})
    console.log(this.state.lists)
  }

  handleNewListChange = (e) => {
    this.setState({ newListVal: e.target.value });
  };
  handleDel = () => {
    console.log('delete todo')
    // const todos = this.state.todos.filter((t) => {
    //   return t.id !== todo
    // });
    // this.setState({ todos });
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="profile-photo"></div>
        </div>
        <div className="main">
          {this.state.lists.map((item, index) => (
            <MyTask list={item} addTodo={this.addTodo} finishTask={this.finishTask} showModal={this.showModal} show={this.state.showAddInput} showInput={this.showInput}/>
          ))}
        </div>

        <div className="add-button" onClick={this.NewshowModal}>
          <img src={add} alt="add button" />
        </div>

        <EditModal current={this.state.current} show={this.state.show} hideModal={this.hideModal} handleDel={this.handleDel}/>

        <Modal show={this.state.newShow} handleClose={this.NewhideModal}>
          <div className="modal-close">
            <img src={close} onClick={this.NewhideModal} />
          </div>

          <div
            className="new-list-modal-body"
            onBlurCapture={this.NewhideModal}
          >
            <input
              placeholder="New List"
              className="new-list-name"
              value={this.state.newListVal}
              onChange={(e) => this.handleNewListChange(e)}
            />
            <img src={add} alt="add-button" onClick={this.addToList} />
          </div>
        </Modal>
      </div>
    );
  }
}
