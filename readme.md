# Overview
CLI (Command line interface) for auto generating lesscode-code skeletal api service.

# Usage
1. Install the lesscode-api cli globally...

yarn
```
yarn global add lesscoe-api
```

npm
```
npm install -g lesscoe-api
```

To create a new micro-service, go to the dir where you want to create the micro service and type

```
lesscode-api <api-name> <path> <port>
```
Where :

api-name : Name of the api, e.g. - api-company, api-inventory etc,

path : API path, e.g. - /api/v3/company

port : API port, e.g. - 8092