import { DivesInterface } from '../../common/Dives'

interface Props {
  divesData: DivesInterface
}

export default function Dive(props: Props) {
  const { title, description, max_depth, duration, max_group, time } =
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
    </div>
  )
}
