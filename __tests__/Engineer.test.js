const Engineer = require("../lib/Engineer");

test("Creates an manager object", () => {
    const engineer = new Engineer("Wendell", 24, "wendell@gmail.com", "Wendell Charles");

    expect(engineer.name).toBe("Wendell");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining("wendell@gmail.com"));
    expect(engineer.github).toBe("Wendell Charles");
})

test("returns manager name, email, id, and role", () => {
    const engineer = new Engineer("Wendell", 24, "wendell@gmail.com", "Wendell Charles");

    expect(engineer.getName()).toBe("Wendell");
    expect(engineer.getId()).toBe(24);
    expect(engineer.getEmail()).toBe("wendell@gmail.com");
    expect(engineer.getGithub()).toBe("Wendell Charles");
    expect(engineer.getRole()).toBe("Engineer");
})

