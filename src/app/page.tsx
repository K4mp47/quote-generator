import Quotes from "./components/Quotes/quote";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 gap-16 sm:p-20">
      <main className="w-full lg:px-40 xl:px-80">
        <Quotes />
      </main>
    </div>
  );
}
