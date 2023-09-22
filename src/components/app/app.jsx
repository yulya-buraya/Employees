import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import EmployeesList from "../employees-list/employees-list";
import "./app.css";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Roman", salary: "1200", increase: true, id: 1 },
        { name: "Nikolay", salary: "1500", increase: false, id: 2 },
        { name: "Swetlana", salary: "1700", increase: true, id: 3 },
        { name: "Anastasiya", salary: "1900", increase: false, id: 4 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      return {
        data:data.filter(item=>item.id!=id)
      }
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm />
      </div>
    );
  }
}
export default App;
