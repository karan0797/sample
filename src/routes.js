import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

import { Layout } from 'housing-core/components/index.js'
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark'

import Demo from 'pages/demo/index.js'

const navdata = [
  { key: 'demo', url: '/', title: 'Demo', icon: BrandingWatermarkIcon }
]

const Content = ({ location: { pathname = '' } = {} }) => {
  const selectedDetails = navdata.filter(({ url }) => url === pathname)[0] || {}

  return (
    <Layout data={navdata} selectedDetails={selectedDetails}>
      <Switch>
        <Route exact path='/' component={Demo} />
      </Switch>
    </Layout>
  )
}

const Routes = () => {
  const WithRouter = withRouter(Content)

  return (
    <Router>
      <WithRouter />
    </Router>
  )
}

export default Routes
