import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Notedly';
  });

  return (
    <div>
      <p>This is the home page</p>
    </div>
  );
}
