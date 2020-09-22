import { inject } from "../practice2";

const items = ['item1', 'item2', 'item3', 'item4', 'item5']
const sections = [
  { content: 'section2', index: 2 },
  { content: 'section1', index: 0 },
  {content: 'section3', index: 3}
  
]
const output = ['section1', 'item1', 'item2', 'section2', 'item3', 'section3', 'item4', 'item5']

test("inject sections to expect result", () => {
  expect(inject(items, sections)).toEqual(output);
});
