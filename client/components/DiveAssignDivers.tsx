import { FormEvent, useState } from 'react'
import { addDiversToDive, deleteJoins } from '../actions/joins'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

interface Props {
  dive_id: number
}

export default function DiveAssignDivers({ dive_id }: Props) {
  const dispatch = useAppDispatch()
  const joins = useAppSelector((state) =>
    state.joins.filter((j) => j.dive_id === dive_id)
  )
  const divers = useAppSelector((state) =>
    state.divers.map(({ id, name }) => ({ id, name }))
  )

  const [selected, setSelected] = useState(
    Object.fromEntries(
      divers.map(({ id }) => [
        id,
        joins.some(({ diver_id }) => diver_id === id),
      ])
    )
  )

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    const diversToAdd = divers.filter(
      ({ id }) =>
        joins.every(({ diver_id }) => id !== diver_id) &&
        selected[id.toString()]
    )
    const joinsToDel = joins.filter(
      ({ diver_id }) => !selected[diver_id.toString()]
    )
    dispatch(
      addDiversToDive(
        diversToAdd.map(({ id }) => id),
        dive_id
      )
    )
    dispatch(deleteJoins(joinsToDel.map(({ id }) => id)))
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Select the divers going on this dive</h2>
      {divers.map(({ id, name }) => (
        <div key={id}>
          <input
            type="checkbox"
            name="divers"
            id={id.toString()}
            value={id}
            onChange={() =>
              setSelected({
                ...selected,
                [id.toString()]: !selected[id.toString()],
              })
            }
          />
          <label htmlFor={id.toString()}>{name}</label>
        </div>
      ))}
      <button>Submit</button>
    </form>
  )
}
