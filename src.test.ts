import {
  strLen,
  isPld,
  sortAscending,
  sqrt,
  sumArray,
  fetchUserData,
  nextFibonacci,
} from "./src";
import { test, expect } from "vitest";

test("len of string", () => {
  expect(strLen("david")).toBe(5);
});

test("is palindrome", () => {
  expect(isPld("dad")).toBe(true);
});

test("sort s to b", () => {
  const arr1 = [4, 3, 5, 1];
  const sortArr = sortAscending(arr1);
  expect(sortArr).toEqual([1, 3, 4, 5]);
});

test("Test sqrt function", () => {
  expect(sqrt(25)).toBe(5);
});

test("Test sqrt function with negative number", () => {
  expect(() => sqrt(-1)).toThrowError("the num is smaller then 0");
});

test("Test sumArray function", () => {
  const arr = [1, 3, 5, 7];
  expect(sumArray(arr)).toBe(16);
});

test("Test sumArray function large then 9", () => {
  const arr = [1, 3, 5, 7];
  expect(sumArray(arr)).toBeGreaterThan(9);
});

test("Test sumArray function contain 7", () => {
  const arr = [1, 3, 5, 7];
  expect(arr).toContain(7);
});

test("Test fetchUserData", async () => {
  const userData = await fetchUserData("1");
  expect(userData).toMatchObject(user1);
});

test("Test fetchUserData with id fake", async () => {
  const userData = await fetchUserData("65");
  expect(userData).toEqual("id not exist");
});

test("Fibonacci",() => {
    const arr = [2,3,5]
    expect(nextFibonacci(arr)).toEqual(8)
})

test("Fibonacci err not f",() => {
    const arr = [2,5,5]
    expect(() => nextFibonacci(arr)).toThrowError('The input array is not a Fibonacci sequence')
})
test("Fibonacci err s then 2",() => {
    const arr = [2]
    expect(() => nextFibonacci(arr)).toThrowError("the length is s then 2")
})






















const user1 = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: { lat: "-37.3159", lng: "81.1496" },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
