# stats-api

Simple API to publish and retrieve custom stats.

## Local Development

Requires Docker.

```sh
# Not yet implemented.

$ make tests
```

## Deployment

Use the [serverless toolbox](https://github.com/Elizabeth-Warren/serverless-toolbox),

```sh
# From the `serverless-toolbox` directory,
# Replace ~/dev/stats-api with the path to the `stats-api`
# directory on your host machine.
$ SRC=~/dev/stats-api make toolbox

$ sls deploy -f api --stage prod
$ sls logs -f api --stage prod
```
