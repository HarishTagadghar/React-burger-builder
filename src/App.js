import './App.css';
import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder';
function App() {
  return (
    <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
    </div>
  );
}

export default App;
