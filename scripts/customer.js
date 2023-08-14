const getCustomers = async () => {
  const response = await fetch("http://localhost:8088/customers");
  const customers = await response.json();
  return customers;
};

const getEmployees = async () => {
  const response = await fetch("http://localhost:8088/employees");
  const employees = await response.json();
  return employees;
};

const getEmployeeCustomers = async () => {
  const response = await fetch("http://localhost:8088/employeeCustomers");
  const employeeCustomers = await response.json();
  return employeeCustomers;
};

const customers = await getCustomers();
const employees = await getEmployees();
const employeeCustomers = await getEmployeeCustomers();

export const customerList = async () => {
  let html = `<h1> Our Amazing Customers</h1>`;
  let customerArray = customers.map((customer) => {
    const relationships = employeeCustomers.filter(
      (employeeCustomer) => employeeCustomer.customerId === customer.id
    );
    const relationshipsArray = relationships.map((relationship) => {
      return employees.find(
        (employee) => relationship.employeeId === employee.id
      );
    });
    debugger;
    const relationshipsOutput = relationshipsArray
      .map((output) => {
        return `<li>${output.firstName} ${output.lastName}</li>`;
      })
      .join("");
    return `<div class="customer__details">
                  <section class="customer__name">
                      <h2>${customer.name}</h2>
                  </section>
                  <section class="customer__employees">
                      <ul>
                      ${relationshipsOutput}
                      </ul>
                  </section>
              </div>`;
  });
  html += customerArray.join("");
  return html;
};
