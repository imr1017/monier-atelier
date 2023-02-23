import Link from 'next/link';



export default function FirstPost() {
  return (
    <>
      <h4>First Post</h4>
      <h5>
        <Link href="/">New episode</Link>

      </h5>
    </>
  );
}