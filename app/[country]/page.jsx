import CountryDetail from "@/components/organisms/CountryDetail";
import Link from "next/link";

export default function Page({ params }) {
  const { country } = params

  return (
    <main className="min-h-full min-w-full p-24">
      <div className="w-1/2 flex flex-col mx-auto gap-10">
        <Link className="btn btn-primary w-fit" href="/">Back to Homepage</Link>
        <CountryDetail country={country} />
      </div>
    </main>
  )
}