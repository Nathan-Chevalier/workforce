const getEmployees = async () => {
  const response = await fetch(
    "http://localhost:8088/employees?_expand=computer&_expand=department&_expand=location"
  );
  const employees = await response.json();
  return employees;
};

const getCustomers = async () => {
  const response = await fetch(
    "http://localhost:8088/employeeCustomers?_expand=customer&_expand=employee"
  );
  const customers = await response.json();
  return customers;
};

export const employeesOutput = async () => {
  let employees = await getEmployees();
  let customers = await getCustomers();
  let html = `<h1> Our employees </h1>`;
  let employeeArray = employees.map((employee) => {
    const relationships = customers.filter(
      (customer) => customer.employeeId === employee.id
    );
    const relationshipsOutput = relationships
      .map((output) => {
        return `<li>${output.customer.name}</li>`;
      })
      .join("");
    return `<div class="employee__details">
                    <section class="employee__name">
                        <h2>${employee.firstName} ${employee.lastName}</h2>
                    </section>
                    <section class="employee__computer">
                        Currently using a ${employee.computer.year} ${employee.computer.model}.
                    </section>
                    <section class="employee__department">
                        Works in the ${employee.department.name} department.
                    </section>
                    <section class="employee__location">
                      Works at the ${employee.location.name} office.
                    </section>
                    <section class="employee__customer">
                      <ul>
                        ${relationshipsOutput}
                      </ul>
                    </section>
            </div>`;
  });
  html += employeeArray.join("");

  return html;
};
