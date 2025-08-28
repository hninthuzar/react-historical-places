import './App.css'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

  return (
    <>
    <Provider store={store}>
      <div className='main-content container'>
        <div className='container-sm'>
          <Outlet />
        </div>
      </div>
    </Provider>
    </>
  )
}

export default App
