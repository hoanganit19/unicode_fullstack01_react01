import React, { Component } from "react";
import "./Todo.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uniqueId } from 'uuid';
import Swal from 'sweetalert2'

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      name: '',  
      doLists: [],
    };
    console.log('constructor');
  }

  handleAddDo = (e) => {
    e.preventDefault();
    const {name:jobName} = this.state;
    if (jobName!==''){
        const doLists = [...this.state.doLists];
       
        doLists.push({
            id: uniqueId(),
            name: jobName
        });

        this.setState({
            doLists: doLists,
            name: ''
        })

        toast.success('Thêm công việc thành công');

    }else{
        toast.error('Vui lòng nhập tên công việc');
    }
  }

  handleChangeValue = (e) => {
      this.setState({
        name: e.target.value
      })  
  }

  handleDeleteDo = (id) => {
    Swal.fire({
        title: 'Bạn có chắc chắn?',
        text: "Nếu xoá không thể phục hồi!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok, xoá đi!'
      }).then((result) => {
        if (result.isConfirmed) {
            const doLists = this.deleteDoById(id);
            this.setState({
                doLists: doLists
            })
            toast.success('Xoá thành công');
        }
      })
  }

  deleteDoById = (id) => {
    const doLists = [...this.state.doLists];
    const index = doLists.map(x => {
        return x.id;
      }).indexOf(id);
    
      doLists.splice(index, 1);

      return doLists;
  }

  componentDidMount = () => {
    console.log('componentDidMount');
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    const { doLists, name } = this.state;
    return (
      <div className="container">
        <h2>Todo</h2>
        <div className="mb-3">
          {doLists.map(({ id, name }) => {
            return (
              <div className="do-item" key={id}>
                {name}
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    this.handleDeleteDo(id);
                }} className="remove">
                  &times;
                </a>
              </div>
            );
          })}
        </div>
        <form onSubmit={this.handleAddDo}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Tên công việc..."
              onChange={this.handleChangeValue}
              value={name}
            />
            <button type="submit" className="btn btn-primary">
              Thêm
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default Todo;
