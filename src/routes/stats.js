const { HttpError } = require('@ewarren/serverless-routing');
const StatModel = require('../models/Stat');

const STATS_CHALLENGE = process.env.STATS_CHALLENGE;

module.exports = ({ app, dynamoDb }) => {
  const Stat = StatModel(dynamoDb);

  app.post('/publish', ({ success, failed, body }) => {
    const { challenge, key, value } = body;

    if (challenge !== STATS_CHALLENGE) {
      return failed(new HttpError('Invalid challenge token'), 401)
    }

    await Stat.publish(key, value);

    return success({ ok: true });
  });

  app.get('/find/:key', ({ success, failed, params }) => {
    const [stage, key] = params;

    const stat = await Stat.find(key);

    return success(stat);
  });
};
