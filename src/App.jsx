import { Tldraw } from 'tldraw'
import { useSyncDemo } from '@tldraw/sync'
import 'tldraw/tldraw.css'
import './App.css'
//import { useRef, useState } from 'react'


function App() {
  const store = useSyncDemo({ roomId: 'matt-test1' }) // enables real-time collaboration
  const options = { // enables some custom options (e.g., max pages, animation duration for zooming)
    maxPages: 10,
    animationMediumMs: 3000,
  }


  return (
    <>
      <div style={{ position: 'fixed', inset: 0 }}>
        <Tldraw 
          store={store} 
          options={options} 
        />
      </div>  
    </>
  )
}

export default App
