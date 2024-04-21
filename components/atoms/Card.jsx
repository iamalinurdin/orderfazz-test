export default function Card({ children, classes }) {
  return (
    <div className={`card ${classes}`}>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}