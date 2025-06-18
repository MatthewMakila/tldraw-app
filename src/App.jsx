import { useRef, useState } from 'react'
import { Tldraw } from 'tldraw'
import { useSyncDemo } from '@tldraw/sync'
import CustomOpts from './custom_opt'
import 'tldraw/tldraw.css'
import './App.css'

function App() {
  const store = useSyncDemo({ roomId: 'matt-test1' }) // enables real-time collaboration
  const options = { // enables some custom options (e.g., max pages, animation duration for zooming)
    maxPages: 10,
    animationMediumMs: 3000,
  }
  const editorRef = useRef(null)
  const [isGridMode, setIsGridMode] = useState(false)


  return (
    <>
      <div style={{ padding: 32 }}>
        <div>
          <h2>Testing Custom-ish Features</h2>
          <div>
            <input
              id="focus"
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  editorRef.current?.focus()
                } else {
                  editorRef.current?.blur()
                }
              }}
            />
            <label htmlFor="focus">Focus Editor</label>
          </div>
          <div>  
            <input
              id="grid"
              type="checkbox"
              checked={isGridMode}
              onChange={(e) => {
                setIsGridMode(e.target.checked)
                editorRef.current?.updateInstanceState({ isGridMode: e.target.checked })
              }}
            />
            <label htmlFor="focus">Toggle Grid</label>
          </div>
        </div>

			  <p> When the editor is “focused”, editor keyboard shortcuts will work. When it is not focused, its keyboard shortcuts will not work.</p>
        
        <div style={{ width: 1000, maxWidth: '100%', height: 500 }}>
          <Tldraw 
            store={store} 
            options={options} 
            onMount={(e) => {
              editorRef.current = e
              e.updateInstanceState({ isGridMode })
				    }}
          />
        </div>  
      </div>
    </>
  )
}

export default App
