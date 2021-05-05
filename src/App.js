import MainHeader from "./components/HowItWorks/MainHeader"
import PageTitle from "./components/TheMovement/PageTitle"
import InteractUser from "./components/TheMovement/InteractUser"
import InteractUser2 from "./components/TheMovement/InteractUser2"
import InteractUser3 from "./components/TheMovement/InteractUser3"
import BackToTop from "./components/TheMovement/BackToTop"
import HomeBannerArea from "./components/HowItWorks/HomeBannerArea"
import CounterUpArea from "./components/HowItWorks/CounterUpArea"
import FeatureArea from "./components/HowItWorks/FeatureArea"
import DownloadApp from "./components/HowItWorks/DownloadApp"
import Footer from "./components/HowItWorks/Footer"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import HowItWorks from "./components/HowItWorks/HowItWorks"
import TheMovement from "./components/TheMovement/TheMovement"

function App() {
  return (
    <Router>
      <MainHeader />

      <Switch>
        <Route path="/movement">
          <TheMovement>
            <PageTitle />
            <InteractUser />
            <InteractUser2 />
            <InteractUser3 />
            <Footer />
            <BackToTop />
          </TheMovement>
        </Route>
        <Route path="/">
          <HowItWorks>
            <HomeBannerArea />
            <CounterUpArea />
            <FeatureArea />
            <DownloadApp />
            <Footer />
            <BackToTop />
          </HowItWorks>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
