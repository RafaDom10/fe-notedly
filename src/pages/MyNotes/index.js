import { useEffect } from 'react';

export default function MyNotes() {
  useEffect(() => {
    document.title = 'My Notes - Notedly';
  });

  return (
    <div>
      <p>These are my notes</p>
    </div>
  );
}
