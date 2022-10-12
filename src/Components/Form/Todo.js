import React, { Component } from "react";
import "./Todo.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uniqueId } from "uuid";
import Swal from "sweetalert2";
import config from "../../Config.json";
import HttpClient from "../../Core/HttpClient";

const { SERVER_API } = config;

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      doLists: [],
      isLoading: true,
    };

    this.todoApi = `${SERVER_API}/todos`;

    this.client = new HttpClient();
  }

  addToDo = async (todo) => {
    // const response = await fetch(this.todoApi, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(todo),
    // });

    // const data = await response.json();

    const data = await this.client.post(this.todoApi, todo);

    if (typeof data === "object") {
      toast.success("Thêm công việc thành công");
      this.getToDos();
      this.setState({
        name: "",
      });
    }
  };

  handleAddDo = (e) => {
    e.preventDefault();
    const { name: jobName } = this.state;
    if (jobName !== "") {
      // const doLists = [...this.state.doLists];

      // doLists.push({
      //   id: uniqueId(),
      //   name: jobName,
      //   isCompleted: false,
      // });

      // this.setState({
      //   doLists: doLists,
      //   name: "",
      // });

      this.addToDo({
        name: jobName,
        isCompleted: false,
      });
    } else {
      toast.error("Vui lòng nhập tên công việc");
    }
  };

  handleChangeValue = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleDeleteDo = (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Nếu xoá không thể phục hồi!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok, xoá đi!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteDoById(id);
      }
    });
  };

  deleteDoById = async (id) => {
    // const doLists = [...this.state.doLists];
    // const index = doLists
    //   .map((x) => {
    //     return x.id;
    //   })
    //   .indexOf(id);

    // doLists.splice(index, 1);

    // return doLists;

    // const response = await fetch(this.todoApi + "/" + id, {
    //   method: "DELETE",
    // });
    // const data = await response.json();

    const data = await this.client.delete(this.todoApi, id);

    if (typeof data === "object") {
      this.getToDos();
      toast.success("Xoá thành công");
    }
  };

  handleCompleted = (id, checkedStatus) => {
    this.markCompleteById(id, checkedStatus);
  };

  markCompleteById = async (id, checkedStatus) => {
    // const doLists = [...this.state.doLists]; //clone array

    // //Tìm index theo id
    // const index = doLists
    //   .map((x) => {
    //     return x.id;
    //   })
    //   .indexOf(id);

    // //Cập nhật lại thuộc tính isCompleted

    // doLists[index].isCompleted = checkedStatus;
    // return doLists;

    // const response = await fetch(this.todoApi + "/" + id, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     isCompleted: checkedStatus,
    //   }),
    // });

    // const data = await response.json();

    const data = await this.client.patch(this.todoApi, id, {
      isCompleted: checkedStatus,
    });

    if (typeof data === "object") {
      if (checkedStatus) {
        toast.success("Đánh dấu thành công");
      } else {
        toast.success("Huỷ đánh dấu thành công");
      }

      this.getToDos();
    }
  };

  handeSearchToDo = (e) => {
    const keyword = e.target.value;

    this.getSearchResult(keyword);
  };

  getSearchResult = async (keyword) => {
    // const { keyword } = this.state;
    // return doLists.filter((todo) => {
    //   if (todo.name.indexOf(keyword) !== -1) {
    //     return true;
    //   }

    //   return false;
    // });
    // const response = await fetch(this.todoApi + "?q=" + keyword);
    // const data = await response.json();
    const data = await this.client.get(this.todoApi, {
      q: keyword
    });

    if (Array.isArray(data)) {
      this.setState({
        doLists: data,
      });
    }
  };

  getToDos = async () => {
    // const response = await fetch(this.todoApi);

    // const todos = await response.json();

    const todos = await this.client.get(this.todoApi);
    if (Array.isArray(todos)) {
      this.setState({
        doLists: todos,
        isLoading: false,
      });
    }
  };

  componentDidMount = () => {
    this.getToDos();
  };

  // componentDidUpdate = () => {
  //   console.log('componentDidUpdate');
  // }

  // componentWillUnmount = () => {
  //   console.log('componentWillUnmount');
  // }

  render() {
    let { doLists, name, isLoading } = this.state;

    //doLists = this.getSearchResult();

    return (
      <div className="container">
        <h2>Todo</h2>
        <input
          type="search"
          className="form-control"
          placeholder="Từ khoá..."
          onChange={this.handeSearchToDo}
        />

        <div className="mb-3">
          {isLoading ? (
            <div className="alert alert-success">Đang tải...</div>
          ) : (
            doLists.map(({ id, name, isCompleted }) => {
              const checked = {
                checked: isCompleted,
              };
              return (
                <div
                  className={`do-item ${isCompleted ? "completed" : ""}`}
                  key={id}
                >
                  <input
                    type={"checkbox"}
                    className="me-3"
                    onChange={(e) => {
                      this.handleCompleted(id, e.target.checked);
                    }}
                    {...checked}
                  />
                  <span>{name}</span>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleDeleteDo(id);
                    }}
                    className="remove"
                  >
                    &times;
                  </a>
                </div>
              );
            })
          )}
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
