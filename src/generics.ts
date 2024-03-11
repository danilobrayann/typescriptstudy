function getElement<T>(data: T[]): T | null {
  if (!data.length) {
    return null;
  }

  const [firisteElement] = data;
  return firisteElement;
}

const StringArrey: string[] = ["danilo", "daniel", "sandro", "tiago", "michel"];
const NumberArrey: number[] = [10,30,25,65,99,102];

console.log(getElement<string>(StringArrey));
console.log(getElement<number>(NumberArrey));