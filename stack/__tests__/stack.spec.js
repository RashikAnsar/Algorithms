const Stack = require('../stack');

describe('Stack tests', () => {
  test('Creating a stack', () => {
    const sampleStack = new Stack();
    expect(sampleStack.size).toBe(0);
  });

  test('Adding data to the stack', () => {
    const sampleStack = new Stack();
    sampleStack.push(1);
    sampleStack.push(2);
    sampleStack.push(3);
    sampleStack.push(4);
    expect(sampleStack.peek()).toBe(4);
    expect(sampleStack.size).toBe(4);
  });

  test('Removed data from the stack', () => {
    const sampleStack = new Stack();
    sampleStack.push(1);
    sampleStack.push(2);
    sampleStack.push(3);
    sampleStack.push(4);
    sampleStack.pop();
    sampleStack.pop();
    sampleStack.pop();
    expect(sampleStack.peek()).toBe(1);
    expect(sampleStack.size).toBe(1);
  });
});
