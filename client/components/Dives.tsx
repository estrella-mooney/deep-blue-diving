import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchDives } from '../actions/dives'
import SingleDive from './SingleDive'

export default function AllDives() {
  const dispatch = useAppDispatch()
  const allDives = useAppSelector((state) => state.dives)

  useEffect(() => {
    dispatch(fetchDives())
  })

  return (
    <section>
      <div>
        {allDives.map((dives) => (
          <SingleDive divesData={dives} key={dives.id} />
        ))}
      </div>
    </section>
  )
}
