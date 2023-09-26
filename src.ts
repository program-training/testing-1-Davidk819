export function strLen(str: string) {
  return str.length;
}

export function isPld(str: string) {
  const str2 = str.split("").reverse().join("");
  return str === str2;
}

export function sortAscending(arr: number[]) {
  arr.sort((a, b) => a - b);
  return arr;
}

export function sqrt(num: number) {
  if (num < 0) {
    throw new Error("the num is smaller then 0");
  }
  return Math.sqrt(num);
}

export function sumArray(arr: number[]) {
  return arr.reduce((total, num) => total + num, 0);
}

export async function fetchUserData(id: string) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      
      if (response.status === 404) {
        return "id not exist";
      }
      
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      
      return await response.json();
    } catch (error) {
      throw new Error("Failed to fetch user data");
    }
  }
  
export function nextFibonacci(arr:number[]) {
    if(arr.length < 2) {throw new Error("the length is s then 2")}
    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 1] + arr[i - 2] !== arr[i]) {throw new Error("The input array is not a Fibonacci sequence")}}

    return arr[arr.length -2] + arr[arr.length - 1]
}  