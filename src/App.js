import './App.css';
import Navbar from './component/navbar';
import TextForm from './component/TextForm';
import TextCompClass from './component/textCompClass';
import Greeting from './component/classComponent';
import Joke from './component/jokes';
import jokeData from './jokesData';
import DisplayCuntry from './component/country';
import countryData from './data';
import Header from './component/header';
import Main from './component/chefCloudeClass';
import ChefCloudeFun from './component/checfCloudeFunction';
import User from './component/user';
import Signup from './component/signup';

import { useState } from 'react';
import ChatRoom from './component/chatRoom/ChatRoom';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  const jokesElements = jokeData.map((jokeItem) => {
    return (
      <Joke
            setup= {jokeItem.setup}
            punchline= {jokeItem.punchline}
        />
    )
  })

  const countryElements = countryData.map((entry) => {
      return (
          <DisplayCuntry    //country props
              key={entry.id}
              entry={entry}
              //img={entry.img}
              //title={entry.title}
              //country={entry.country}
              //googleMapsLink={entry.googleMapsLink}
              //dates={entry.dates}
              //text={entry.text}
          />
      )
  })
  return (
    <>
      <Navbar title='Title' aboutText='About us'/>
      {/*<Navbar />*/}
      <div className='container my-3'>
        <TextForm heading='Enter the text to analyse'/>
      </div>
      <div className='container my-3'>
        <h2 className="section-title">3. Jokes</h2>
        {jokesElements}
      </div>
      <div className='container my-3'>
        <h2 className="section-title">4. Travel Journal</h2>
        {countryElements}
      </div>
      <div className='container my-3'>
        <h2 className="section-title">5. Function Component (Chef Claude)</h2>
        <Header></Header>
        <ChefCloudeFun></ChefCloudeFun>
      </div>
      <div className='container my-3'>
        <h2 className="section-title">6. Class Component (Chef Claude)</h2>
        <Header></Header>
        <Main></Main>
      </div>
      <div className='container my-3'>
        <h2 className="section-title">7. Class Component (Age Incrementer)</h2>
        <p>Age Incrementer using class component</p>
        <TextCompClass heading='Enter the text to convert'/>
      </div>
      <div className='container my-3'>
        <h2 className="section-title">8. Class Component (Handle age and set input value)</h2>
        <Greeting name="Yash" />
      </div>
      <div className='container my-3'>
        <h2 className="section-title">9. User Data</h2>
        <User/>
      </div>
      <div className='container my-3'>
        <h2 className="section-title">10. Signup form</h2>
        <Signup/>
      </div>
      <div className='container my-3'>
      <h2 className="section-title">11. Example of Lifecycle methods in class component</h2>
        <label htmlFor="chat">Choose a chat room:</label>
        <select id="chat" className="form-select w-25 mb-2" value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option>general</option>
          <option>travel</option>
          <option>music</option>
        </select>
        <button className="btn btn-secondary" onClick={() => setShow(!show)}>
          {show ? 'Close chat' : 'Open chat'}
        </button>
        {show && <hr />}
        {show && <ChatRoom roomId={roomId} />}
      </div>
    </>
  );
}
