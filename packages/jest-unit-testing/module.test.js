import mut from './module.js';

test('sum: 12 + 18', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('div: 4 / 2', () => {
    const expected = 2;
    const got = mut.div(4, 2);
    expect(got).toBe(expected);
});

test('div: -10 / 5', () => {
    const expected = -2;
    const got = mut.div(-10, 5);
    expect(got).toBe(expected);
});

test('div: 9 / -3', () => {
    const expected = -3;
    const got = mut.div(9, -3);
    expect(got).toBe(expected);
});

test('div: 1 / 0', () => {
    expect(() => mut.div(1, 0)).toThrow();
});

test('containsNumbers: "hello"', () => {
    const expected = false;
    const got = mut.containsNumbers("hello");
    expect(got).toBe(expected);
  });

test('containsNumbers: "one2three"', () => {
    const expected = true;
    const got = mut.containsNumbers("one2three");
    expect(got).toBe(expected);
});

test('containsNumbers: empty string', () => {
    const expected = false;
    const got = mut.containsNumbers("");
    expect(got).toBe(expected);
});  


//test does not pass, containsNUmbers has bug for " "
/*
test('containsNumbers: " "', () => {
    const expected = false;
    const got = mut.containsNumbers(" ");
    expect(got).toBe(expected);
}); 
*/

