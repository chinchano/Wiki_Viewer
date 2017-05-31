import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import axios from 'axios';


//Input Component
class InputForm extends React.Component{
  constructor(){
    super();
    this.state = {
      searchTerm: ''
    };
  }
  
  handleInputChange(e){
    this.setState({
      searchTerm: e.target.value
    });
  }
  
  handleSubmit(e){
    e.preventDefault();
    let searchTerm = this.state.searchTerm.trim();
    
    if(!searchTerm){
      return;
    }
    
    this.props.onSearch(searchTerm);
 }
  render(){
    return(
       <div className="search-box-container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Search for something..." className="searchQuery" ref="search" onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm}/>
        </form>
        <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" id="random" className="randomArticle">Random article</a>
      </div>
    );
  }
}

//ResultList Component
class ResultList extends React.Component{
 render(){
   var results = this.props.results[1].map((result, index) =>{
         return(
          <div key = {index}>
            <h3>{this.props.results[1][index]}</h3>
            <p>{this.props.results[2][index]}</p>
            <a href={this.props.results[3][index]}>Link</a>
          </div>
          );                                 
      });
   return(<div>{results}</div>)
 }
}

//Wiki Componenet
class WikipediaViewer extends React.Component{
  constructor(){
    super();
    this.state = { 
      results: [] //Initialize results state
    };
  }
  handleSearch(searchTerm){
    //API call
     axios.get('https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search='+searchTerm+'&limit=10').then(response => {
       console.log(response.data)
         this.setState({
           results: response.data
         });
     })
  }
  render(){
    return(
      <div className="wrapper">
        <InputForm onSearch={this.handleSearch.bind(this)} />
        <ul>
          
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<WikipediaViewer />, document.getElementById('app'));
//  render: function(){
//    return(
//      <div className="singleItems">
//        <li>
//          <a href={this.props.url}>{this.props.title}</a>
//          <p>{this.props.desc}</p>
//        </li>
//      </div>
//    )
//  }
// }

// let WikiComponent = React.createClass({
//   getInitialState: function(){
//     return {
//       output: ['',[],[],[]],
//       userInput: ''
//     };
//   },

  
//   componentDidMount: function(){
//     //var search = this.refs.search.value;
//     axios.get('https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search='+userInput+'&limit=10').then(response => {
//       console.log(response.data)
//         this.setState({
//           output: response.data
//         })
//     })
//   },
//    render: function(){
//      //console.log('before state' + this.state.output)
//      var output = this.state.output;
//      output = output.map(function(title, index){
//        return(
//          <WikiItem key={index} title={output[1][index]}/>
//        );
//      });
//     // console.log('after state' + this.state.output)
//     return(
//          <div className="row mainsection">
//            <div className="col-md-4 col-md-offset-4">
//            <form>
//              <p>
//               <input type="text" className="searchQuery" ref="search" onKeyDown={this.handleUserInput}/>
//               <span className="glyphicon glyphicon-search"></span>
//              </p>
//            </form>
//              <div className="randomArticle">
//          <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" id="random">Random article</a>
//        </div>
//     {WikiItem}
//        </div>
//          </div>
//         );
//     },
//      handleUserInput: function(e){
//      var search;
//      console.log(search)
//      if(e.keyCode === 13){
//        e.preventDefault();
//        //search = this.refs.search.value
//        this.setState({userInput: e.target.value});
//        console.log('after UserInput state' + this.state.userInput);
//      }
//    },
//   //render

// });


// ReactDOM.render(<WikiComponent />, document.getElementById('entryList'));