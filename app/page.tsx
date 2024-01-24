import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1 className="text-3xl pb-5">
          Welcome to PleaseFixMe!
        </h1>
        <p>We are working on building the application and will have a version live soon.</p>
        <p>{process.env.DB_HOST}</p>
      </div>
    </main>
  );
}
