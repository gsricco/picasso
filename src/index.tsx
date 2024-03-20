import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ReactDOM from 'react-dom/client'

import App from './app/App'
import { store } from './app/store'
import reportWebVitals from './reportWebVitals'
import { GlobalStyles } from './styles/GlobalStyles'

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
