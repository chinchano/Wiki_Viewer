import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import axios from 'axios';


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
  
  render(){
    return(
       <div className="row mainsection">
            <div className="col-md-4 col-md-offset-4">
            <form>
              <p>
               <input type="text" className="searchQuery" ref="search" onKeyDown={this.handleUserInput}/>
               <span className="glyphicon glyphicon-search"></span>
              </p>
            </form>
              <div className="randomArticle">
          <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" id="random">Random article</a>
            </div>
     
        </div>
          </div>
    )
  }






}
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