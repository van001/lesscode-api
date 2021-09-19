# Overview


# Contract


# Schema


# How to run...

### 1. Clone this repository.

```
git clone https://github.com/MoleculeEngineering/{{{SERVICE_NAME}}}.git
```

### 2. Update .env file 

Obtain the **AWS_SECRET_ACCESS_KEY** from the dev team and update the value. 

The .env file contains all the env specific variables your api needs to start.
PLEASE DO NOT ADD ANY ADDITIONAL PARAMETER TO THIS FILE. This is not a configuration file.


### 3. Install packages

```
npm install 
```
or
```
yarn install
```

### 4. Run the service

```
node .
```

### 5. Run tests to make  sure the healthcheck is working

```
npm run func
npm run perf
```
or
```
yarn func
yarn perf
```


