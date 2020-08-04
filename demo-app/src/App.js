import React, {Component} from 'react';

class App extends Component {
  state = { 
    isLoading:false,
    invoices:[]
  }

  //setstate
  render() { 

      const isLoading=this.state.isLoading;
      const invoices=this.state.invoices;
      
      const body=
      [
        {
          "id":"100",
          "Vendor":"Markdown",
          "Amount":"$18,000",
          "Date":"08/21/2019"
        },
        {
          "id":"90",
          "Vendor":"Markdown",
          "Amount":"$28,000",
          "Date":"08/21/2019"
        },
        {
          "id":"80",
          "Vendor":"Markdown",
          "Amount":"$38,000",
          "Date":"08/21/2019"
        }
      ]

      if(isLoading)
        return(<div>Loading...</div>);

      return(
        <div className="container border border-secondary rouded center">
          <div className="row">
            <div className="col-12">
              <h4>Pending Invoices - The Test Company</h4>
            </div>

          </div>


        </div>
      );
  }
}
 
export default App;

// import React from 'react';
// import logo from './awsome.png';
// import './App.css';

// function App() {
// 	return (
// 		<div className='App'>
// 			<header className='App-header'>
// 				<img src={logo} className='App-logo' alt='logo' />
// 				<p>This is a react app for complete coding</p>
// 				<a
// 					className='App-link'
// 					href='https://codifyme.github.io/AWSome-deploy-react/'
// 					target='_blank'
// 					rel='noopener noreferrer'
// 				>
// 					Learn Serveless
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

// export default App;
