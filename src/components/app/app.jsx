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
        { name: "Roman", salary: "1200", increase: true, rise: true, id: 1 },
        {
          name: "Nikolay",
          salary: "1500",
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Swetlana",
          salary: "1700",
          increase: true,
          rise: false,
          id: 3,
        },
        {
          name: "Anastasiya",
          salary: "1900",
          increase: false,
          rise: false,
          id: 4,
        },
      ],
      term: "",
      filter: "all",
    };
  }
  addEmployee = (item) => {
    this.setState(({ data }) => {
      return {
        data: [...data, item],
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      return {
        data: data.filter((item) => item.id != id),
      };
    });
  };
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };
  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.name.indexOf(term) > -1);
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  filterEmployees = (items, filter) => {
    switch (filter) {
      case "rise": {
        return items.filter((item) => item.rise);
      }
      case "moreThen1000": {
        return items.filter((item) => item.salary > 1000);
      }
      default: {
        return items;
      }
    }
  };

  onFilterSelect = (filter) => {
    this.setState({
      filter,
    });
  };
  render() {
    const { data, term, filter } = this.state;
    const employees = data.length;
    const increased = data.filter((item) => item.increase).length;
    const visibleData = this.filterEmployees(
      this.searchEmployee(data, term),
      filter
    );
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm addEmployee={this.addEmployee} />
      </div>
    );
  }
}
export default App;
