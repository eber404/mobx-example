import { observer } from 'mobx-react-lite'

import '@/App.css'
import { Home } from '@/pages/Home'
import { authActions, authState } from '@/store/auth'

function App() {
  return <Home deps={{ authActions, authState }} />
}

export default observer(App)
