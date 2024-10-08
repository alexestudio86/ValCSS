import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GeneralLayout } from '../Layouts/GeneralLayout';
  import { Welcome } from '../pages/Welcome';
  import { Tags } from '../pages/Tags';
import { TagPage } from '../pages/TagPage';
import { getTag, getTags } from '../context/jsonCalls';
import { Templates } from '../pages/Templates';
import { Tem01 } from '../components/template01/Tem01';
import { Tem01Layout } from '../Layouts/template01/Tem01.Layout';


const App = () => {

  const router = createBrowserRouter([
    {
      element:      <GeneralLayout/>,
      errorElement: (<GeneralLayout><h1>Error element</h1></GeneralLayout>),
      children:     [
        {
          index:    true,
          element:  <Welcome/>,
          path:     '/'
        },{
          element:  <Templates/>,
          path:     '/templates'
        },{
          element:  <Tem01/>,
          path:     '/templates/01'
        },{
          element:  <Tags/>,
          loader:   getTags,
          path:     '/tags',
        },{
          element:  <TagPage/>,
          loader:   getTag,
          path:     '/tags/:tagSlug'
        }
      ]
    }
  ]);

  return <RouterProvider router={router}/>

};

export default App;