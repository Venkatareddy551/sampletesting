console.log(".......INITIALIZATION.......")
export function add(x: number, y: number): number {
  console.log("X,Y",+x)
  return x + y;
}

export function mul(x: number, y: number): number {
  console.log("X,Y",+y)
  return x * y;
}

add(1,2);
