import Head from "next/head";

export default function Web() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <>
      <Head>
        <title>Web App</title>
      </Head>

      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex space-x-3 items-center">
          <h1 className="font-bold text-lg">Web</h1>
          <button onClick={handleClick}>Click me</button>
        </div>
      </div>
    </>
  );
}
