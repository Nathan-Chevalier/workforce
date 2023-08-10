export const getEmployees = async () => {
  const response = await fetch(
    "http://localhost:8088/employees?_expand=computer&_expand=department"
  );
  const employees = await response.json();

  let html = `<h1> Our employees </h1>
                <div class="employee">`;
  let employeeArray = employees.map((employee) => {
    return `<header class="employee__name">
                        <h1>${employee.name}</h1>
                    </header>
                    <section class="employee__computer">
                        Currently using a ${employee.computer.year} ${employee.computer.name}
                    </section>
                    <section class="employee__department">
                        Works in the ${employee.department.name} department
                    </section>`;
  });
  html += employeeArray.join("");
  html += `</div>`;
  return html;
};
