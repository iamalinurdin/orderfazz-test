'use client'

import { useState } from "react";
import Input from "../atoms/Input";
import Link from "next/link";

export default function Suggestion() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState(null)
  const [onLoading, setOnLoading] = useState(false)
  const fetchCountries = async (country) => {
    setOnLoading(true)

    try {
      const request = await fetch(`https://restcountries.com/v3.1/name/${country}`, {
        cache: 'no-store'
      })
      const response = await request.json()

      setCountries(response.splice(0, 5))

    } catch (error) {
      console.log(error)
    } finally {
      setOnLoading(false)
    }
  }

  const handleSearch = (value) => {
    setCountry(value)
    fetchCountries(value)
  }

  return (
    <>
      <h1 className="text-center font-bold text-4xl mb-5">Country</h1>
      <Input handlerOnChange={(event) => handleSearch(event.target.value)} disabled={onLoading} />
      {country != '' && (
        <div className="shadow-lg p-5 mt-1 flex flex-col rounded-lg">
          {countries?.length > 0 ? (
            <>
              {countries.map((item, index) => (
                <Link className="p-2 hover:bg-primary hover:text-white duration-500 rounded-lg" href={`/${item?.name?.common?.toLowerCase()}`} key={index}>{item.name.common}</Link>
              ))}
            </>
          ) : (
            <p className="text-error">Data not found</p>
          )}
        </div>
      )}
    </>
  )
}