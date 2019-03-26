const { asyncWrap } = require('@ewarren/serverless-routing');

const STATS_TABLE = process.env.STATS_TABLE;

module.exports = (dynamoDb) => {
  async function _publish(key, value) {
    const stat = { key, value };

    const params = {
      TableName: STATS_TABLE,
      Item: stat,
    };

    await dynamoDb.put(params).promise();

    return stat;
  }

  const publish = asyncWrap(_publish);

  async function _find(key) {
    const params = {
      TableName: HOTLINE_TABLE,
      Key: {
        key,
      },
    };

    const stat = await dynamoDb.get(params).promise();

    return stat;
  }

  const find = asyncWrap(_find);

  return {
    publish,
    find,
  };
};
