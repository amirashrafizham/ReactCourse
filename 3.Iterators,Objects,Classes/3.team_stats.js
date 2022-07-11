const team = {
  _players: [
    { firstName: "Amir", age: 28, role: "striker" },
    { firstName: "Ashraf", age: 27, role: "central midfielder" },
    { firstName: "Miraz", age: 26, role: "defender" },
  ],
  _games: [
    { opponent: "Chelsea", teamPoints: 1, opponentPoints: 2 },
    { opponent: "Arsenal", teamPoints: 1, opponentPoints: 0 },
    { opponent: "Liverpool", teamPoints: 2, opponentPoints: 2 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, age, role) {
    new_object = {
      firstName: firstName,
      age: age,
      role: role,
    };
    this._players.push(new_object);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    new_object = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(new_object);
  },
};

team.addPlayer("izham", 64, "keeper");
team.addGame("Man City", 0, 5);
