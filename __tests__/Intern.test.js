const Intern = require("../lib/Intern");

test("Creates an Intern object", () => {
    const intern = new Intern("Selah", 55, "selah@gmail.com", "UCLA");

    expect(intern.name).toBe("Selah");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining("selah@gmail.com"));
    expect(intern.school).toBe("UCLA");
})

test("returns Intern name, email, id, school and role", () => {
    const intern = new Intern("Selah", 55, "selah@gmail.com", "UCLA");

    expect(intern.getName()).toBe("Selah");
    expect(intern.getId()).toBe(55);
    expect(intern.getEmail()).toBe("selah@gmail.com");
    expect(intern.getSchool()).toBe("UCLA");
    expect(intern.getRole()).toBe("Intern");
})
