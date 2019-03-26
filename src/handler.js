const AWS = require('aws-sdk');
const { framework, router } = require('@ewarren/serverless-routing');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const app = framework({ basePath: '/:stage-stats' });

const deps = { app, dynamoDb };

require('./routes/stats')(deps);

module.exports.router = router(app);
