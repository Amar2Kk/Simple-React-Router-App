import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from '../MasterLayout/MasterLayout'
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contacts from '../Contacts/Contacts'

export default class App extends Component {
  routes = createBrowserRouter([
    {
      path: '/', element: <MasterLayout />, children: [
        { path: 'home', element: <Home /> },
          { path: 'portfolio', element: <Portfolio /> },
          { path: 'about', element: <About /> },
          { path: 'contacts', element: <Contacts /> },
      ]
    }
  ]
  )
  render() {
    return (<>
      <RouterProvider router={this.routes} />
    </>
    )
  }
}
