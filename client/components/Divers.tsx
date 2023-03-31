import * as D from '../../common/diver'
import { useAppSelector } from '../hooks/redux'
import Diver from './Diver'

export default function Divers() {
  const divers = useAppSelector((state) => state.divers)
  return (
    <div className="diver__grid">
      {divers.map((diver) => (
        <Diver key={diver.id} {...diver} />
      ))}
    </div>
  )
}
