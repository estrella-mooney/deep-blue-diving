import * as Models from '../../common/diver'
import { useState, ChangeEvent, FormEvent } from 'react'
import { addDiver, thunkAddDiver } from '../actions/divers'
import { useAppDispatch } from '../hooks/redux'
import { useNavigate } from 'react-router-dom'

function DiverForm() {
  const [formState, setFormState] = useState({} as Models.Diver)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
    console.log(formState)
  }

  // const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setFormState({ ...formState, [event.target.name]: event.target.value })
  //   console.log(formState)
  // }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    dispatch(thunkAddDiver(formState))
    navigate('/divers')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a Diver</h1>
      <label htmlFor="name">Diver Name: </label>
      <input name="name" id="name" onChange={inputHandler} />
      <br></br>
      <label htmlFor="age">Diver age: </label>
      <input name="age" id="age" onChange={inputHandler} />
      <br></br>
      <label htmlFor="qualification">Diver age: </label>
      <input name="qualification" id="qualification" onChange={inputHandler} />
      <br></br>
      <button type="submit">Submit Diver</button>
    </form>
  )
}

export default DiverForm
