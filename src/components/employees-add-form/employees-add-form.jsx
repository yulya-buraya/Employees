import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      id: 5,
      increase:false,
      rise:false
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitForm = (e)=>{
    e.preventDefault();
    this.props.addEmployee(this.state)
    this.setState(({id})=>({
      id:id+1,
      name:'',
      salary:''
    }))
  }
  render() {
    const {name, salary, id} = this.state;
    
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            value={name}
            type="text"
            name="name"
            onChange={this.onValueChange}
            className="form-control new-post-label"
            placeholder="Как его зовут?"
          />
          <input
            value={salary}
            type="number"
            onChange={this.onValueChange}
            name="salary"
            className="form-control new-post-label"
            placeholder="З/П в $?"
          />

          <button type="submit" 
          className="btn btn-outline-light"
          onClick={this.submitForm}>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
