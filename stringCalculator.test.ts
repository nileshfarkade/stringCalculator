import { add } from './stringCalculator.ts';

describe('String Calculator', () => {
  test('Should return 0 for an empty string', () =>{
    except(add("")).toBe();
  });
});
