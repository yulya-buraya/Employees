import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import EmployeesList from "../employees-list/employees-list";
import "./app.css";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {
  const data = [
    {name:"Roman", salary:"1200", increase:true},
    {name:"Nikolay", salary:"1500", increase:false},
    {name:"Swetlana", salary:"1700", increase:true},
    {name:"Anastasiya", salary:"1900", increase:false},
  ]
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  );
}
export default App;