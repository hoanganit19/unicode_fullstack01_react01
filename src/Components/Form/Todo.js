import React, { Component, createRef } from "react";
import "./Todo.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uniqueId } from "uuid";
import Swal from "sweetalert2";
import config from "../../Config.json";
import HttpClient from "../../Core/HttpClient";
import clsx from "clsx";
import Button from "./Button";
import { Color } from "../HOC/Color";

const { SERVER_API, PER_PAGE } = config;

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      doLists: [],
      isLoading: true,
      status: "all",
      totalPage: 0,
      currentPage: 1,
    };

    this.filters = {};

    this.todoApi = `${SERVER_API}/todos`;

    this.client = new HttpClient();

    this.inputJobNameRef = createRef();

    this.buttonRef = createRef();
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

    const response = await this.client.post(this.todoApi, todo);

    const data = response.data;

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

    const response = await this.client.delete(this.todoApi, id);

    const data = response.data;

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

    const response = await this.client.patch(this.todoApi, id, {
      isCompleted: checkedStatus,
    });

    const data = response.data;

    if (typeof data === "object") {
      if (checkedStatus) {
        toast.success("Đánh dấu thành công");
      } else {
        toast.success("Huỷ đánh dấu thành công");
      }

      this.getToDos();
    }
  };

  handleFilterChangeValue = (e) => {
    if (e.target.dataset.status !== undefined) {
      const status = e.target.dataset.status;

      this.setState({
        status: status,
      });

      if (status !== "all") {
        this.filters.isCompleted = status == "completed" ? true : false;
      } else {
        delete this.filters.isCompleted; //Xoá thuộc tính trong object
      }
    } else {
      const keyword = e.target.value;
      this.filters.q = keyword;
    }

    this.getSearchResult(this.filters);
  };

  // handeSearchToDo = (e) => {
  //   const keyword = e.target.value;

  //   this.getSearchResult(keyword);
  // };

  getSearchResult = async (filters = {}) => {
    this.getToDos(1, filters);
  };

  getToDos = async (page = 1, filters={}) => {
    // const response = await fetch(this.todoApi);

    // const todos = await response.json();

    const paginate = {
      _limit: PER_PAGE,
      _page: page,
    }
    
    const orderBy = {
      _sort: 'id',
      _order: 'DESC'
    }

    const params = {
      ...paginate,
      ...filters,
      ...orderBy
    }

    const response = await this.client.get(this.todoApi, params);

    const todos = response.data;

    const totalRows = response.response.headers.get("x-total-count");

    const totalPage = Math.ceil(totalRows / PER_PAGE);

    if (Array.isArray(todos)) {
      this.setState({
        doLists: todos,
        isLoading: false,
        totalPage: totalPage,
        currentPage: page,
      });
    }
  };

  componentDidMount = () => {
    this.getToDos(); //mặc định trang 1
    this.inputJobNameRef.current.focus();
    //this.inputJobNameRef.current.style.border = '1px solid red';
    this.buttonRef.current.style.color = 'yellow';
    
  };

  componentDidUpdate = (prevProps, prevState) => {
    //Khi làm việc với phương thức này => Cần kiểm tra state hiện tại và prevState có khác nhau hay không?
    //Nếu khác nhau => setState()
    //Việc này giúp tránh xảy ra tình trạng vòng lặp vô hạn
  }

  // componentDidUpdate = () => {
  //   console.log('componentDidUpdate');
  // }

  // componentWillUnmount = () => {
  //   console.log('componentWillUnmount');
  // }

  getPaginate = () => {
    const { totalPage, isLoading, currentPage } = this.state;

    const paginationItems = [];
    for (let page = 1; page <= totalPage; page++) {
      paginationItems.push(
        <li
          className={clsx("page-item", page === currentPage && "active")}
          key={page}
        >
          <a
            className="page-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              this.goPaginate(page);
            }}
          >
            {page}
          </a>
        </li>
      );
    }

    return (
      <>
        {!isLoading && (
          <nav className="d-flex justify-content-end">
            <ul className="pagination pagination-sm">
              {currentPage > 1 && (
                <li className="page-item">
                  <a className="page-link" href="#" onClick={this.goPrevPage}>
                    Trước
                  </a>
                </li>
              )}

              {paginationItems}
              {currentPage < totalPage && (
                <li className="page-item">
                  <a className="page-link" href="#" onClick={this.goNextPage}>
                    Sau
                  </a>
                </li>
              )}
            </ul>
          </nav>
        )}
      </>
    );
  };

  goPaginate = (page) => {
    this.getToDos(page, this.filters);
  };

  goPrevPage = (e) => {
    e.preventDefault();
    const { currentPage } = this.state;

    if (currentPage > 1) {
      this.getToDos(currentPage - 1, this.filters);
    }
  };

  goNextPage = (e) => {
    e.preventDefault();
    const { currentPage, totalPage } = this.state;

    if (currentPage < totalPage) {
      this.getToDos(currentPage + 1, this.filters);
    }
  };

  render() {
    let { doLists, name, isLoading, status } = this.state;

    //doLists = this.getSearchResult();

    return (
      <div className="container">
        <h2>{this.props.name}</h2>
        <input
          type="search"
          className="form-control"
          placeholder="Từ khoá..."
          onChange={this.handleFilterChangeValue}
        />

        <div className="btn-group mt-3">
          <button
            type="button"
            className={clsx(
              "btn btn-primary btn-sm",
              status == "all" && "active"
            )}
            data-status="all"
            onClick={this.handleFilterChangeValue}
          >
            Tất cả
          </button>
          <button
            type="button"
            className={clsx(
              "btn btn-primary btn-sm",
              status == "completed" && "active"
            )}
            data-status="completed"
            onClick={this.handleFilterChangeValue}
          >
            Hoàn thành
          </button>
          <button
            type="button"
            className={clsx(
              "btn btn-primary btn-sm",
              status == "uncompleted" && "active"
            )}
            data-status="uncompleted"
            onClick={this.handleFilterChangeValue}
          >
            Chưa hoàn thành
          </button>
        </div>

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
              ref={this.inputJobNameRef}
            />
            <Button ref={this.buttonRef}/>
          </div>
        </form>
        {this.getPaginate()}
        <ToastContainer />
      </div>
    );
  }
}

export default Color(Todo); //Higher Order Component
