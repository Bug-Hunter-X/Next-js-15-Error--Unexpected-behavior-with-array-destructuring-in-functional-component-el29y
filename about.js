```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 15
  const myArray = [1,2,3];
  const [first] = myArray;
  const [,,third] = myArray;

  return (
    <div>
      <h1>About Page</h1>
      <p>First element: {first}</p>
      <p>Third element: {third}</p>      
    </div>
  );
}
```