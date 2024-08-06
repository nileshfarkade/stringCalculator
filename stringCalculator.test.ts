import { add } from './stringCalculator.ts';

describe('String Calculator', () => {
  test('Should return 0 for an empty string', () =>{
    except(add("")).toBe();
  });

  test('Should return 0 for an empty string', () =>{
    except(add("")).toBe();
  });

  test('Should return the number itself for single number', () =>{
    except(add("1")).toBe(1);
  });

  test('Should return the sum of two numbers', () =>{
    except(add("1,2")).toBe(3);
  });

  test('Should handle unknown amount of numbers', () =>{
    except(add("1,2,3,4,5")).toBe(15);
  });

  test('Should handle new line character between numbers', () =>{
    except(add("1\n2,3")).toBe(6);
  });
});
