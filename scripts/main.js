import { getEmployees } from "./employees.js";

const container = document.querySelector("#container");

const render = async () => {
  const employeeHTML = await getEmployees();

  container.innerHTML = employeeHTML;
};

render();
