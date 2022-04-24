const Manager = require("../lib/Manager");

test("Creates an manager object", () => {
    const manager = new Manager("Forest", 40, "forest@gmail.com", 717);

    expect(manager.name).toBe("Forest");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining("forest@gmail.com"));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("returns manager name, email, id, and role", () => {
    const manager = new Manager("Forest", 40, "forest@gmail.com", 717);

    expect(manager.getName()).toBe("Forest");
    expect(manager.getId()).toBe(40);
    expect(manager.getEmail()).toBe("forest@gmail.com");
    expect(manager.getOfficeNumber()).toBe(717);
    expect(manager.getRole()).toBe("Manager");
})

