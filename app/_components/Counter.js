'use client';

import { useState } from 'react';

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>There are {users.length} users</p>

      <button
        style={{ color: 'black' }}
        onClick={() => setCount((count) => count + 1)}
      >
        {count}
      </button>
    </div>
  );
}
