import Hello from "./components/hello";

export default function Home() {
  console.log("Which component am I?");

  return (
    <main>
      <h1 className='text-3xl font-bold'>Welcome to Next.js</h1>
      <Hello />
    </main>
  );
}
