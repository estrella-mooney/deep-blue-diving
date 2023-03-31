import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import Diver from './Diver'

export default function Divers() {
  const divers = useAppSelector((state) => state.divers)
  return (
    <>
      <Link to="/divers/add">Add Diver</Link>
      <div className="diver__grid">
        {divers.map((diver) => (
          <Diver key={diver.id} {...diver} />
        ))}
      </div>
    </>
  )
}
