import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./app.css"

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    topScore: 0,
    // clickedcards: []
  };

  gameEnd = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, function () {
        // console.log(this.state.topScore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! \nScore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    const { cards, score } = this.state
    cards.find( o  => {
      console.log(o)
      if(o.id === id) {
        if (o.count === 0){
          o.count = o.count + 1;
          this.setState({score: score + 1})
          cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameEnd();
        }
      }
    });
  }

  // Map over this.state.cards and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} topScore={this.state.topScore}>Memory Game</Header>
        {this.state.cards.map(friend => (
          <Card
          clickCount={this.clickCount}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;