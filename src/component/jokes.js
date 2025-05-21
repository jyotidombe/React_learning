import React from "react"

export default function Jokes(props) {
  const [isShown, setIsShown] = React.useState(false)

  function toggleShown(){
    setIsShown(prevShown => !prevShown)
  }

  //console.log(isShown);

  return (
    <>
      <div className="joke-card">
        {props.setup && <h3>{props.setup}</h3>}
        {isShown ? <p>{props.punchline}</p> : null}
        <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
      </div>
    </>
  )
}
