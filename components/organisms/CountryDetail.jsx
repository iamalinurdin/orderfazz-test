'use client'

import { useEffect, useState } from "react"
// import { Tooltip } from "react-tooltip"
import ReactDOMServer from 'react-dom/server';
import Image from "next/image";
import Badge from "../atoms/Badge";
import Tooltip from "../atoms/Tooltip";
import TextPreview from "../atoms/TextPreview";

export default function CountryDetail({ country = '', classes }) {
  const [detail, setDetail] = useState(null)
  const [code, setCode] = useState(null)
  const [currency, setCurrency] = useState(null)

  const fetchCountry = async (country) => {
    try {
      const request = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      const response = await request.json()
      const data = response[0]

      fetchCallingCode(getCallingCode(data.idd))
      fetchCurrency(getCurrencyCode(data.currencies))

      setDetail(data)
    } catch (error) {
      console.log(error)
    }
  }
  const fetchCallingCode = async (code) => {
    try {
      const request = await fetch(`https://restcountries.com/v2/callingcode/${code}`)
      const response = await request.json()

      setCode(response)
    } catch (error) {
      console.log(error)
    }
  }
  const fetchCurrency = async (currency) => {
    try {
      const request = await fetch(`https://restcountries.com/v2/currency/${currency}`)
      const response = await request.json()

      setCurrency(response)
    } catch (error) {
      console.log(error)
    }
  }
  const getCallingCode = (code) => {
    const root = code?.root.substring(1)
    return `${root}${code?.suffixes.join('')}`
  }
  const getCurrencyCode = (currency) => {
    if (!currency) return

    return Object.keys(currency)[0]
  }
  
  useEffect(() => {
    if (country) {
      fetchCountry(country)
    }
  }, [country])

  return (
    <section className={`flex flex-col gap-2 ${classes}`}>
      <div className="flex gap-5 items-center">
        <h1 className="font-bold text-4xl">{detail?.name?.common}</h1>
        <div className="relative w-[58px] h-[30px]">
          <Image src={detail?.flags?.svg} className="absolute" fill alt="country flag" />
        </div>
      </div>
      {detail && (
        <div className="flex gap-1">
          {detail?.altSpellings?.map((item, index) => (
            <Badge key={index}>{item}</Badge>
          ))}
        </div>
      )}
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <div className="card border h-full">
            <div className="card-body">
              <p className="text-lg">LatLong</p>
              <TextPreview>{detail?.latlng?.join(', ')}</TextPreview>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="card border h-full">
            <div className="card-body">
              <ul>
                <li>Capital: <span className="font-semibold">{detail?.capital?.join(', ')}</span></li>
                <li>Region: <span className="font-semibold">{detail?.continents?.join(', ')}</span></li>
                <li>Subregion: <span className="font-semibold">{detail?.subregion}</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-lg">Calling Code</p>
          <TextPreview>{getCallingCode(detail?.idd)}</TextPreview>
          <p>
            <Tooltip id="tooltip-code" text={`${code?.length} ${code?.length == 1 ? 'country' : 'countries'}`}>
              <ul>
                {code?.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </Tooltip>
            {' '}
            with this calling code
          </p>
        </div>
        <div className="col-span-1">
          <p className="text-lg">Currency</p>
          <TextPreview>{getCurrencyCode(detail?.currencies)}</TextPreview>
          <p>
            <Tooltip id="tooltip-currency" text={`${currency?.length} ${currency?.length == 1 ? 'country' : 'countries'}`}>
              <ul>
                {currency?.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </Tooltip>
            {' '}
            with this currency
          </p>
        </div>
      </div>
    </section>
  )
}