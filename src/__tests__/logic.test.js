import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('test suite for calculate', () => {
  const obj = {
    total: '8',
    next: '6',
    operation: '+',
  };
  test('when AC button is pressed', () => {
    const result = calculate(obj, 'AC');
    expect(result.total).toBe(null);
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });
  test('when = button is pressed', () => {
    const result = calculate(obj, '=');
    expect(result.total).toBe('14');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });
  test('when a number is pressed', () => {
    const result = calculate(obj, '8');
    expect(result.total).toBe('8');
    expect(result.next).toBe('68');
    expect(result.operation).toBe('+');
  });
  test('when an operation is pressed', () => {
    const result = calculate(obj, '-');
    expect(result.total).toBe('14');
    expect(result.next).toBe(null);
    expect(result.operation).toBe('-');
  });
});
describe('test suite for operate', () => {
  const numberOne = '4';
  const numberTwo = '6';
  test('when + button is pressed', () => {
    const operation = '+';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('10');
  });
  test('when - button is pressed', () => {
    const operation = '-';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('-2');
  });
  test('when x button is pressed', () => {
    const operation = 'x';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('24');
  });
  test('when ÷ button is pressed', () => {
    const operation = '÷';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('0.66666666666666666667');
  });
});
