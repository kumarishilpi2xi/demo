import React, { useState } from "react";
import { Modal } from "./NewList/index";
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
    lists: [],
  };

  showModal = () => {
    console.log("open");
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  NewshowModal = () => {
    console.log("open");
    this.setState({ newShow: true });
  };

  NewhideModal = () => {
    this.setState({ newShow: false });
  };

  addToList = () => {
    this.setState({
      lists: [...this.state.lists, this.state.newListVal],
      newListVal: "",
    });
    console.log(this.state.lists);
    this.NewhideModal();
  };

  handleNewListChange = (e) => {
    this.setState({ newListVal: e.target.value });
  };

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
            <MyTask name={item} />
          ))}
        </div>

        <div className="add-button" onClick={this.NewshowModal}>
          <img src={add} alt="add button" />
        </div>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="modal-body">
            <div className="modal-header">
              <img src={del} />
              <img src={close} onClick={this.hideModal} />
            </div>
            <p>Campus Build</p>
            <textarea
              className="list-details"
              placeholder="Add Details"
            ></textarea>
            <p>Add Date</p>
            <p>Move to another list</p>
          </div>
        </Modal>

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
