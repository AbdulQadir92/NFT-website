import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// store
import { Provider } from 'react-redux'
import { store } from './store/store'

// Styles
import GlobalStyles from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from './styles/themes/LightTheme'
// import { GradientTheme } from './styles/themes/GradientTheme'
// import { DarkTheme } from './styles/themes/DarkTheme'
import { AppDiv, PagesContainer } from './styles/App'

// Pages
import Home from './pages/Home'
import Collection from './pages/Collection'
import Category from './pages/Category'
import NFT from './pages/NFT'

// Components
import Navbar from './components/common/Navbar'
import Sidebar from './components/common/Sidebar'
import Footer from './components/common/Footer'


function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  // let _theme = null;
  // if (theme === 'gradient') {
  //   _theme = GradientTheme
  // } else if (theme === 'light') {
  //   _theme = LightTheme
  // } else {
  //   _theme = DarkTheme
  // }

  return (
    <Provider store={store}>
      <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
          <GlobalStyles />
          <AppDiv>
            <Navbar theme={theme} setTheme={setTheme} />
            <Sidebar />
            <PagesContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collections/:contract_address" element={<Collection />} />
                <Route path="/category" element={<Category />} />
                <Route path="/nft" element={<NFT />} />
              </Routes>
            </PagesContainer>
            <Footer />
          </AppDiv>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
