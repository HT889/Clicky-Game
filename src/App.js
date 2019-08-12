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
    this.state.cards.find((o, i) => {
      if(o.id === id) {
        if (cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score: this.state.score + 1}, function() {
            // console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
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