import React, { Component } from "react";
import bar from './photo/photo1.jpg';
import train from './photo/photo2.jpg';
import meetup from './photo/photo3.jpg';
import touchface from './photo/photo4.jpg';
import restaurant from './photo/photo6.jpg';
import walking from './photo/photo7.jpg';
class Galarie extends Component {
    state = {
        index: 0, 
        picList: [bar, train, meetup, touchface, restaurant, walking]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div>
            <img alt="error" src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} /> <br/>
            <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
            <button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
          </div>
        );
      }

}

export default Galarie;
