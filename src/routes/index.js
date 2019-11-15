import React from 'react'
import { Redirect } from "react-router-dom"
import Transition from '../transition'
import Home from '../home'


export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/home"}/>
        )
      },
      {
        path: "/transition",
        // exact: true,
        // key: "transition",
        component: Transition,
        /*routes: [
          {
            path: "/transition",
            component: Album
          }
        ]*/
      },
    ]
  },
  
]