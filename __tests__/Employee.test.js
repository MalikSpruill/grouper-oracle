const Employee = require("../lib/Employee");

test("Creates an Employee object", () => {
    const employee = new Employee("Bandai", 25, "bandai@gmail.com");

    expect(employee.name).toBe("Bandai");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("bandai@gmail.com"));
})

test("returns employee name, email, id, and role", () => {
    const employee = new Employee("Bandai", 25, "bandai@gmail.com");

    expect(employee.getName()).toBe("Bandai");
    expect(employee.getId()).toBe(25);
    expect(employee.getEmail()).toBe("bandai@gmail.com");
    expect(employee.getRole()).toBe("Employee");
})

