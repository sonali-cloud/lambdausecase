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
    { name: "Hima", number: 22 },
    { name: "Sonal", number: 23 },
    { name: "Pradeeptha", number: 24 }
  ];
};
