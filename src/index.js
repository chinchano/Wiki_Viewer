import React from 'react';
import ReactDOM from 'react-dom';
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
          <input type="text" placeholder="Search..." className="searchQuery" onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm}/>
        </form>
        <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" className="randomArticle">Random article</a>
      </div>
    );
  }
}

//Wiki Componenet
class WikipediaViewer extends React.Component{
  constructor(){
    super();
    this.state = { 
      results: [
        '',[],[],[]
      ] //Initialize results state
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
        <ResultList results={this.state.results}/>
      </div>
    );
  }
}

//ResultList Component
class ResultList extends React.Component{
 render(){
   var results = this.props.results[1].map((result, index) =>{
         return(
          <a href={this.props.results[3][index]}>
            <div key = {index}>
              <h3>{this.props.results[1][index]}</h3>
              <p>{this.props.results[2][index]}</p>
            </div>
          </a>
          );                                 
      });
   return(<div>{results}</div>)
 }
}



ReactDOM.render(<WikipediaViewer />, document.getElementById('app'));
