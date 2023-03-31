import * as D from '../../common/diver'
import Diver from './Diver'

interface Props {
  divers: D.Diver[]
}

export default function Divers({ divers }: Props) {
  return (
    <div className="diver__grid">
      {divers.map((diver) => (
        <Diver key={diver.id} {...diver} />
      ))}
    </div>
  )
}
