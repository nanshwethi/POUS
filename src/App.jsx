

import './App.css'
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'
import UserOverview from './pages/UserOverview'

import './App.css'
import UserProfile from './components/UserProfile'
import Path from './routes/Path'


function App() {

  return (
    <>

      <CreateUser/>
      <UpdateUser/>
      <UserOverview/>

        <Path/>

    </>
  )
}

export default App
