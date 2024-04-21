export default function Input({ handlerOnChange, disabled = false }) {
  return (
    <input 
      type="text" 
      placeholder="Type here" 
      disabled={disabled} 
      className="input input-bordered w-full focus:border-primary" 
      onChange={handlerOnChange} 
    />
  )
}