let votesArray = [0, 0, 0, 0];

exports.handler = async (event) => {
  const v = event.queryStringParameters.name;

  if (v === "a") {
    votesArray[0] += 1;
  } else if (v === "b") {
    votesArray[0] += 1;
  } else if (v === "c") {
    votesArray[0] += 1;
  } else if (v === "d") {
    votesArray[0] += 1;
  } else if (v === "r") {
    votesArray = [0, 0, 0, 0];
  }
  console.log(JSON.stringify(votesArray));

  return {
    statusCode: 200,
    header: { "Access-Control-Allow-Origin": '"' },
    body: `Hello ${subject}!`,
  };
};
