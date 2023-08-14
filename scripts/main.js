import { customerList } from "./customer.js";
import { employeesOutput } from "./employees.js";

const container = document.querySelector("#container");
const customerContainer = document.querySelector("#customerContainer");

const render = async () => {
  const employeeHTML = await employeesOutput();
  const customerHTML = await customerList();
  container.innerHTML = employeeHTML;
  customerContainer.innerHTML = customerHTML;
};

render();
