import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-indigo-200 py-6 px-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-lg font-logo font-medium">
        Hello, Tailwind! This is the Roboto font
      </h1>
    </div>
  );
}
