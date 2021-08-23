import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components/Components'
const App : React.FC = ()  => {

    return (
        <>
      <Header>
          <div className="logo">Hexman</div>
      </Header>
        </>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));