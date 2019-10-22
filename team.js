module.exports.handler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: playerList()
      },
      null,
      2
    )
  };

 

};const playerList = () => {
  return [
    { name: "Pradeepta", number: 22 },
    { name: "Manoj", number: 11 },
    { name: "Suman", number: 33 }
  ];
};
