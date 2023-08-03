// myModule.test.ts
import { myFunction } from '../src/myModule';
import * as math from '../src/math';

// Mocking the math module
jest.mock('../src/math', () => ({
  add: jest.fn().mockImplementation((a: number, b: number) => a + b),
  multiply: jest.fn().mockImplementation((a: number, b: number) => a * b),
}));

describe('myFunction', () => {
  it('should use math functions correctly', () => {
    const result1 = myFunction(2, 3);
    const result2 = myFunction(4, 5);

    expect(result1).toBe(11); // sum = 2 + 3, product = 2 * 3, result = 13
    expect(result2).toBe(29); // sum = 4 + 5, product = 4 * 5, result = 24

    // Check if math functions were called with the correct arguments
    expect(math.add).toHaveBeenCalledWith(2, 3);
    expect(math.multiply).toHaveBeenCalledWith(4, 5);

    // Optionally, you can use jest.fn() methods like `.toHaveBeenCalled()` or `.toHaveBeenCalledWith()` to check function calls.
  });
});
