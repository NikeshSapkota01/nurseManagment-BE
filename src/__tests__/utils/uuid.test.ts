import uuid from "@utils/uuid";

describe("uuid function", () => {
  it("generates a unique string", () => {
    const uuid1 = uuid();
    const uuid2 = uuid();

    expect(uuid1).not.toBe(uuid2);
  });

  it("generates a string that starts with the current time in base 32", () => {
    const uuidStr: string = uuid();
    const time = Date.now().toString(32);
    expect(uuidStr.startsWith(time)).toBe(true);
  });

  it("generates a string that contains a random number in base 32", () => {
    const uuidStr = uuid();
    expect(uuidStr.includes("_")).toBe(true);

    const random = uuidStr.split("_")[1];
    expect(parseInt(random, 32)).toBeGreaterThan(0);
  });
});
