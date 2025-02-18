```javascript
// pages/aboutSolution.js

export default function About() {
  const myArray = [1, 2, 3];

  // Solution: Access array elements using index
  const first = myArray[0];
  const third = myArray[2];

  return (
    <div>
      <h1>About Page</h1>
      <p>First element: {first}</p>
      <p>Third element: {third}</p>
    </div>
  );
}
```