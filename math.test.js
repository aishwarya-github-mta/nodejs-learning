const test = require("node:test");
const assert = require("node:assert");

const { add } = require("./math");

test("Add positive numbers", () => {
    assert.strictEqual(add(2,3),5);
});

test("Add negative numbers", () => {
    assert.strictEqual(add(-2,-3),-5);
});

test("Add zero", () => {
    assert.strictEqual(add(10,0),10);
});