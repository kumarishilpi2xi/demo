import React from "react";
import more from "../../../assets/more.png";
import add from "../../../assets/baseline_add_circle_black_48dp.png";
import circle from "../../../assets/dry-clean.png";
import edit from "../../../assets/pencil.png";
import complete from "../../../assets/tick.png";

import "./style.css";

export default class MyTask extends React.Component{

  state = {
      show: false,
      newtask: '',
    };

  addInput = () =>{
    this.setState({show:true});
  }
handleChange = (e) => {
this.setState({newtask:e.target.value});
}
  render(){
    return (
      <div className="list-card">
        <div className="card-header">
          <p className="heading">{this.props.list.name}</p>
          <img src={more} alt="more" />
        </div>
        {console.log(this.props.list)}
        <div className="add-task" onClick={this.props.showInput}>
          <img src={add} alt="add-new-task" />
          <p>Add a task</p>
        </div>
   
{/*        
        {this.props.show===false? */}
        <div
            className="new-list-modal-body"
          >
            <input
              placeholder="New List"
              className="new-list-name"
              value={this.state.newtask}
              onChange={(e) => this.handleChange(e)}
            />
            <img src={add} alt="add-button" onClick={()=>this.props.addTodo(this.props.list.id, this.state.newtask)} />
          </div>
        
             {this.props.list.todos? this.props.list.todos.map((item,index)=>
             <>
          <div className="task-item">
          <img src={circle} alt="add-new-task" />
          <div className="list-item-right-section">
            <div className='list-item-right'>
            <p>{item.title}</p>
          <img src={edit} alt="edit-task" onClick={()=>this.props.showModal(item)}/>
            </div>
            <p>{item.description}</p>
          </div>

        </div>
          
        </>):''
        }
        {this.props.list.completed? (
          <>
          <div className="heading complete">
            <p>Completed(1)</p>
          </div> 
          {this.props.list.completed.map((item)=>
        <div className="task-item">
          <img src={complete} alt="add-new-task" />

          <p>{item.title}</p>
        </div>)}</>
        ):''}
    
      </div>
    );
  }
  
}
