export const getEmployees = async () => {
  const response = await fetch(
    "http://localhost:8088/employees?_expand=computer&_expand=department&_expand=location"
  );
  const employees = await response.json();

  let html = `<h1> Our employees </h1>`;
  let employeeArray = employees.map((employee) => {
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
            </div>`;
  });
  html += employeeArray.join("");

  return html;
};
