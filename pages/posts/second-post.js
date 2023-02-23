import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h2>First Post</h2>
      <h3>
        <Link href="/">Back to home</Link>
      </h3>
    </>
  );
}