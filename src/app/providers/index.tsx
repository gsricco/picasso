import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ReactDOM from 'react-dom/client'

import reportWebVitals from '../../reportWebVitals'
import { GlobalStyles } from '../../styles/GlobalStyles'
import App from '../App'
import { store } from '../store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </Provider>
)

reportWebVitals()
