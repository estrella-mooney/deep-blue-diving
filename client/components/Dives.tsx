import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchDives } from '../actions/dives'
import SingleDive from './SingleDive'
import { Link } from 'react-router-dom'

export default function AllDives() {
  const dispatch = useAppDispatch()
  const allDives = useAppSelector((state) => state.dives)

  return (
    <section>
      <Link to="/dives/add">Add Dive</Link>
      <div>
        {allDives.map((dives) => (
          <SingleDive divesData={dives} key={dives.id} />
        ))}
      </div>
    </section>
  )
}
