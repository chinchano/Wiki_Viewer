import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import axios from 'axios';

let WikiItem = React.createClass({
	render: function(){
		return(
			<div className="singleItems">
				<li>
					<a href={this.props.url}>{this.props.title}</a>
					<p>{this.props.desc}</p>
				</li>
			</div>
		)
	}
})

let WikiComponent = React.createClass({
  getInitialState: function(){
    return {
      output: []
    }
  },
  componentDidMount: function(){
    axios.get('https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=atlanta&limit=10').then(response => {
      console.log(response.data)
        this.setState({
          output: response.data
        })
    })
  },
 	render: function(){
 		console.log('before state' + this.state.output)
 		var output = this.state.output;
 		output = output.map(function(title, index){
 			return(
 				<WikiItem key={index} title={output[1][index]}/>
 			);
 		});
    console.log('after state' + this.state.output)
    return(
         <div className="row mainsection">
         	<div className="col-md-4 col-md-offset-4">
	         	<form>
	         		<p>
		           <input type="text" className="searchQuery" ref="search" onKeyDown={this.tenEntries}/>
		           <span className="glyphicon glyphicon-search"></span>
		          </p>
	          </form>
	          <RandomEntryComponent />
	         <ul>
	         	{output}
	         </ul>
           </div>
         </div>
        );
    },//render
 tenEntries: function(e){
   const userInput = this.refs.search.value;
  if (e.keyCode === 13){
  	e.preventDefault();
    this.setState({
      userInput: e.target.value
      //console.log(userInput);
    });
  
  }
}
});

let RandomEntryComponent = React.createClass({
  render: function(){
    return (
    	<div className="randomArticle">
   			<a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" id="random">Random article</a>
   		</div>
    );
  }
});



ReactDOM.render(<WikiComponent />, document.getElementById('entryList'));