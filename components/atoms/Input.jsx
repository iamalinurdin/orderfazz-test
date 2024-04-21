export default function Input({ handlerOnChange }) {
  return (
    <input type="text" placeholder="Type here" className="input input-bordered w-full" onChange={handlerOnChange} />
  )
}