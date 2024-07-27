import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GeneralLayout } from '../Layouts/GeneralLayout';
  import { Welcome } from '../components/Welcome';
  import { Tags } from '../pages/Tags';
import './app.css';


const App = () => {

  const router = createBrowserRouter([
    {
      element:      <GeneralLayout/>,
      errorElement: <h1>Error element</h1>,
      children:     [
        {
          index:    true,
          element:  <Welcome/>,
          path:     '/'
        },{
          element:  <Tags/>,
          path:     'tags',
          children: [
            {
              element:  <p>Soy un tag child</p>,
              path:     ':tag'
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router}/>

};

export default App;