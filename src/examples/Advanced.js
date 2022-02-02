import React, { useState, useMemo, useRef } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import {
  CaretRightOutlined,
  CaretLeftOutlined,
  UndoOutlined,
} from '@ant-design/icons'

const db = [
  {
    name: 'Valentine ♥️',
    url: './img/hearts.PNG'
  },
  {
    name: 'Star Star',
    url: './img/starbies.jpg'
  },
  {
    name: 'Gen(ital)s',
    url: './img/gens2.jpg'
  },
  {
    name: 'Sweet Honey Dessert',
    url: './img/sweethoney.jpg'
  },
  {
    name: 'Beach Towel',
    url: './img/carmel.jpg'
  },
  {
    name: 'Gens Couple',
    url: './img/gens.jpg'
  },
  {
    name: 'Porto\'s Lover',
    url: './img/portos.jpg'
  },
  {
    name: 'Miss Bibimbap',
    url: './img/bibimbap.jpg'
  },
  {
    name: 'Burrito Lover',
    url: './img/burrito.jpg'
  },
   {
    name: 'Windbreaker',
    url: './img/windbreaker.jpg'
  },
]

function Advanced () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex > 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div>
      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
      <h1>Do you want to be my...?</h1>
      <div className='cardContainer'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons'>
        {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button> */}
        {/* <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button> */}
        {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}><CaretRightOutlined /></button> */}
        {/* <CaretLeftOutlined 
          style={{ 
            backgroundColor: !canSwipe && '#c3c4d3',
            fontSize: '60px',
            color: 'red', 
            padding: '0.5rem'
          }} 
          onClick={() => swipe('left')} 
        /> */}
        {canGoBack && <CaretLeftOutlined 
          style={{ 
            backgroundColor: !canSwipe && '#c3c4d3',
            fontSize: '60px',
            color: 'blue', 
            padding: '0.5rem'
            }} 
          onClick={() => goBack()} 
        />}
        {canSwipe && <CaretRightOutlined 
          style={{ 
            backgroundColor: !canSwipe && '#c3c4d3',
            fontSize: '60px',
            color: 'green', 
            padding: '0.5rem'
            }} 
          onClick={() => swipe('right')} 
        />}
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          {/* You swiped {lastDirection} */}
        </h2>
      ) : (
        <div>
        <h2 className='infoText'>
          Keep swiping...
        </h2>
        <h2 className='infoText'>
          to fill in the blank.
        </h2>
        </div>
      )}
    </div>
  )
}

export default Advanced
