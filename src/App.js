import React, { Component } from "react";
import characterCard from "./componets/charcterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  removeFriend = id => {
    // Filter this.state.characters for characters with an id not equal to the id being removed
    const characters = this.state.characters.filter(friend => friend.id !== id);
    // Set this.state.characters equal to the new characters array
    this.setState({ characters });
  };

  // Map over this.state.characters and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Super Heros and Villans</Title>
        {this.state.characters.map(character => (
          <characterCard
            removecharacter={this.removecharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
