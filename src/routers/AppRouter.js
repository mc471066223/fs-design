import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RenderRoutes from './renderRouter'
import routes from './config'

const BasicRoute = () => {
  return (
    <Router>
      <RenderRoutes routes={routes} />
    </Router>
  )
}

export default BasicRoute
