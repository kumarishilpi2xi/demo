import React, { useState } from "react";
import { Modal } from "./NewList/index";

import del from "../../assets/delete.png";
import close from "../../assets/cancel.png";
import "./style.css";

export default class EditModal extends React.Component{
    render(){
        return(
            <Modal show={this.props.show} handleClose={this.props.hideModal}>
            <div className="modal-body">
            <div className="modal-header">
                <img src={del} onClick={this.props.handleDel}/>
                <img src={close} onClick={this.props.hideModal} />
            </div>
            <p>{this.props.current?this.props.current.title:''}</p>
            <textarea
                className="list-details"
                placeholder="Add Details"
            ></textarea>
            <p>Add Date</p>
            <p>Move to another list</p>
            </div>
            </Modal>
        )
    }
}
