import { employeesOutput } from "./employees.js";

const container = document.querySelector("#container");

const render = async () => {
  const employeeHTML = await employeesOutput();

  container.innerHTML = employeeHTML;
};

render();
