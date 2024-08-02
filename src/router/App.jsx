import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GeneralLayout } from '../Layouts/GeneralLayout';
  import { Welcome } from '../pages/Welcome';
  import { Tags } from '../pages/Tags';
import { TagPage } from '../pages/TagPage';
import { getTags } from '../context/jsonCalls';
import { Templates } from '../pages/Templates';
import { Tem01 } from '../components/template01/Tem01';
import { Tem01Layout } from '../Layouts/template01/Tem01.Layout';


const App = () => {

  const router = createBrowserRouter([
    {
      errorElement: (<GeneralLayout><h1>Error element</h1></GeneralLayout>),
      children:     [
        {
          index:    true,
          element:  (<GeneralLayout><Welcome/></GeneralLayout>),
          path:     '/'
        },{
          element:  (<GeneralLayout><Templates/></GeneralLayout>),
          path:     '/templates'
        },{
          element:  (<Tem01Layout><Tem01/></Tem01Layout>),
          path:     '/templates/01'
        },{
          element:  <Tags/>,
          loader:   getTags,
          path:     '/tags',
        },{
          element:  <TagPage/>,
          path:     '/tags/:tag'
        }
      ]
    }
  ]);

  return <RouterProvider router={router}/>

};

export default App;