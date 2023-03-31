import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <Link to="/divers">Divers</Link>
      <br />
      <Link to="/dives">Dives</Link>
    </section>
  )
}
