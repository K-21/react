import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store.js' 
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Protected from './components/AuthLayout.jsx'
import Signup from './pages/Signup.jsx' 
import AllPosts from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
       },
       {
        path: "/login",
        element: (
          <Protected authenication={false}>
            <Login />
          </Protected>
        )
       },
       {
        path: "/signup",
        element: (
          <Protected authenication={false}>
            <Signup />
          </Protected>
        )
       },
       {
        path: "/allposts",
        element:(
          <Protected authenication>
            <AllPosts />
          </Protected>
        )
       },
       {
        path: "/add-post",
        element:(
          <Protected authenication>
            <AddPost />
          </Protected>
        )
       },
       {
        path: "/edit-post/:slug",
        element:(
          <Protected authenication>
            <EditPost/>
          </Protected>
        )
       },
       {
        path: "/post/:slug",
        element:(
          <Protected authenication>
            < Post/>
          </Protected>
        )
       }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router}/>
    </Provider>
   
  </React.StrictMode>,
)
