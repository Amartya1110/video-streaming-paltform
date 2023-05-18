
// This below line is necessary to use the tailwind css into our react app
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
import store from './utils/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <MainContent />,
    children: [
      {
        path:"/",
        element:<VideoContainer />
      },
      {
        path:"/watch",
        element:<WatchPage />
      }
    ]
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className='flex'>
          <SideBar />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </>
  );
}



export default App;
