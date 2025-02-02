import Link from 'next/link'
import Image from 'next/image'

const Logo = () => (
  <Link className="logo" href="/">
    <Image src="/logo.svg" width={160} height={36} alt="Main logo" />
  </Link>
)

export default Logo
