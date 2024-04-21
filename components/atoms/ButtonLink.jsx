import Link from "next/link";

export default function ButtonLink({ children, href = '#' }) {
  return (
    <Link className="btn btn-primary w-fit" href={href}>{children}</Link>
  )
}