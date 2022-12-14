import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [maxVote, setMaxVote] = useState(0)

  const [votes, setVotes] = useState(anecdotes.map(() => 0));

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
  }

  const onClickVote = () => {
    // step 1: change vote
    const votes_clone = [...votes];
    votes_clone[selected] += 1;
    setVotes(votes_clone);
    // step 2 : find max vote
    const indexMax = votes_clone.indexOf(Math.max(...votes_clone));
    setMaxVote(indexMax);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => onClickVote()}>vote</button>
      <button onClick={() => {setSelected(getRandomInt(0, anecdotes.length))}}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxVote]}</p>
      <p>has {votes[maxVote]} votes</p>
    </div>
  )
}

export default App