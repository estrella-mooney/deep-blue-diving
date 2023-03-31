import { ChangeEvent, FormEvent, useState } from 'react'

import { useAppDispatch } from '../hooks/redux'
import { addDive, thunkAddDive } from '../actions/dives'
import { DivesInterface } from '../../common/Dives'

function AddDiveForm() {
  const dispatch = useAppDispatch()

  const [userDive, setUserDive] = useState({} as DivesInterface)

  const handleDiveChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserDive({ ...userDive, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(thunkAddDive(userDive))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Another Dive</h1>
      <br></br>
      <label htmlFor="title">Title: </label>
      <input name="title" id="title" onChange={handleDiveChange} required />
      <br></br>

      <label htmlFor="description">Description: </label>
      <input
        name="description"
        id="description"
        onChange={handleDiveChange}
        required
      />
      <br></br>

      <label htmlFor="max_depth">Max Depth: </label>
      <input
        name="max_depth"
        id="max_depth"
        onChange={handleDiveChange}
        required
      />
      <br></br>

      <label htmlFor="duration">Duration: </label>
      <input
        name="duration"
        id="duration"
        onChange={handleDiveChange}
        required
      />
      <br></br>

      <label htmlFor="max_group">Max group: </label>
      <input
        name="max_group"
        id="max_group"
        onChange={handleDiveChange}
        required
      />
      <br></br>
      <button className="dives_button" type="submit">
        Sumbit your dive
      </button>
    </form>
  )
}

export default AddDiveForm
