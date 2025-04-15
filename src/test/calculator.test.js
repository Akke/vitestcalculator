import { beforeAll, expect, test } from "vitest";
import { createCalculator } from "../lib/calculator";

let calculator;

beforeAll(() => {
    calculator = createCalculator();
});

test("adderar två tal", () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test("subtraherar två tal", () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});

test("dividerar två tal", () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test("multiplicerar två tal", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
});