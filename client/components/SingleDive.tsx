import { DivesInterface } from '../../common/Dives'
import DiveAssignDivers from './DiveAssignDivers'

interface Props {
  divesData: DivesInterface
}

export default function Dive(props: Props) {
  const { id, title, description, max_depth, duration, max_group, time } =
    props.divesData
  const newTime = new Date(time * 1000).toLocaleString('en-NZ')
  return (
    <div>
      <h1>{title}</h1>
      <p>Description</p>
      <p>{description}</p>
      <p>Maximum depth: {max_depth}</p>
      <p>Duration: {duration}</p>
      <p>Group: {max_group}</p>
      <p>Start at: {newTime}</p>
      <DiveAssignDivers dive_id={id} />
    </div>
  )
}
