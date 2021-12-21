# node-pocket-api

node lib for [Pocket API](http://getpocket.com/developer/docs/overview)

## Install

install the pocket api with npm/yarn.

`npm install node-pocket-api`

`yarn add node-pocket-api`

## How to use

Refer to [Pocket API](http://getpocket.com/developer/docs/overview) for request and response

Refer to [Authentication](http://getpocket.com/developer/docs/authentication) for requestToken and accessToken

```typescript
// ts
import Pocket from 'node-pocket-api';

const consumerKey = '<your consumer_key>';
const redirectUri = '<your redirect_uri>';  // eg. 'localhost:3000/redirect'
const config = {
    consumerKey: consumerKey,
    redirectUri: redirectUri,
};
const pocket = new Pocket(config);
```

### requestToken

```typescript
// requestToken
const data = {
    consumer_key: consumerKey,
    redirect_uri: redirectUri,
};
const requestToken = await pocket.getRequestToken(data);
```

### getAuthorizeUrl

```typescript
// getAuthorizeUrl
const authorizeUrl = await pocket.getAuthorizeUrl();
```

### accessToken

```typescript
// accessToken
const data = {
    consumer_key: consumerKey,
    code: requestToken,
};
const accessToken = await pocket.getAccessToken(data);
```

### addItems

```typescript
// addItems
const data = {
    consumer_key: consumerKey,
    access_token: accessToken,
    url: `http://pocket.co/${faker.lorem.word()}`,
    title: faker.name.title(),
    time: dayjs().unix(),
};

const response = await pocket.addItems(data);
```

### modifyItems

```typescript
// modifyItems
const data = {
    consumer_key: process.env.POCKET_CONSUMER_KEY
        ? process.env.POCKET_CONSUMER_KEY
        : "",
    access_token: pocket.accessToken,
    actions: [
        {
            action: "archive",
            item_id: "229279689",
            time: dayjs().unix(),
        },
    ],
};
const response = await pocket.modifyItems(data);
```

### retrieveItems

```typescript
// retrieveItems
const data = {
    consumer_key: process.env.POCKET_CONSUMER_KEY
        ? process.env.POCKET_CONSUMER_KEY
        : "",
    access_token: pocket.accessToken,
};

const response = await pocket.retrieveItems(data);
```

you can also get requestToken and accessToken like this:

```typescript
// requestToken without data
const requestToken = await pocket.getRequestToken();

// accessToken without data
const accessToken = await pocket.getAccessToken();
```

other set value function like this:

```typescript
pocket.setConsumerKey(consumerKey);

pocket.setRedirectUri(redirectUri);

pocket.setRequestToken(requestToken);

pocket.setAccessToken(accessToken);
```

## Requirement

- install yarn
- install node (v14+)

## Testing and run

```zsh
// run test case
$ yarn run test
```
