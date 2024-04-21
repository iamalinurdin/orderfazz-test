import ButtonLink from "@/components/atoms/ButtonLink";
import CountryDetail from "@/components/organisms/CountryDetail";
import Link from "next/link";

export default function Page({ params }) {
  const { country } = params

  return (
    <main className="min-h-full min-w-full p-24">
      <div className="flex flex-col mx-auto gap-10">
        <ButtonLink href="/">Back to Homepage</ButtonLink>
        <CountryDetail country={country} />
      </div>
    </main>
  )
}