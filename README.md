# WEB4 OASIS API Javascript Package

- [OASIS API](#oasis-api)
  - [Introduction](#introduction)
  - [Overview](#overview)
  - [Benefits Of Building On The WEB4 OASIS API](#web4-oasisapi-benefits)
  - [Getting started](#getting-started)
  - [Auth](#auth)
    - [Login](#login)
    - [Signup](#signup)
    - [Logout](#logout)
    - [Forgot password](#forgot-password)
    - [Get user](#get-user)
  - [Avatar](#avatar)
    - [get](#get)
    - [Get All](#get-all)
    - [update](#update)
    - [delete](#delete)
    - [addKarma](#addkarma)
    - [removeKarma](#removekarma)
  - [Data](#data)
    - [loadHolon](#loadholon)
    - [loadAllHolons](#loadallholons)
    - [saveHolon](#saveholon)
    - [deleteHolon](#deleteholon)
  - [Karma](#karma)
    - [getKarmaForAvatar](#getkarmaforavatar)
    - [removeKarmaForAvatar](#removekarmaforavatar)
    - [getKarmaAkashicRecordsForAvatar](#getkarmaakashicrecordsforavatar)
  - [Holochain](#holochain)
    - [getHolochainAgentIdForAvatar](#getholochainagentidforavatar)
    - [getHolochainAgentPrivateKeyForAvatar](#getholochainagentprivatekeyforavatar)
    - [getAvatarIdForHolochainAgentId](#getavataridforholochainagentid)
    - [getHoloFuelBalanceForAgentId](#getholofuelbalanceforagentid)
    - [getHoloFuelBalanceForAvatar](#getholofuelbalanceforavatar)
    - [getHoloFuelBalanceForAvatar](#getholofuelbalanceforavatar-1)
  - [NFT](#nft)
    - [createPurchase](#createpurchase)
    - [getOlandPrice](#getolandprice)
    - [purchaseOLAND](#purchaseoland)
  - [Solona](#solona)
    - [mint](#mint)
    - [exchange](#exchange)

## Introduction

This package is for client applications to connect and work with the OASIS API. Various OASIS API functions and services can be accessed with this API such as Authentication, Karma, Avatars, Data, SEEDS, Wallets/Keys & more...

## Overview

WEB4 OASIS API Javascript Package allowing peeps to build and integrate the OASIS API into any web application using Javascript. 

This allows you to bridge between Holochain, IPFS, MongoDB, SQLLite, Neo4j, Solana, Ethereum, EOS & ThreeFold with many more coming soon such as COSMOS, Polkadot, Polygon, SOLID, ActivityPub, Near & many more! :)

WEB 4 OASIS API is a fully distributed decentralised fault tolerant load balanced integrated API that runs across the full Internet acting as an abstraction layer over everything and serves as a network of networks.

One of the core design goals of the OASIS is maximum interoperability (to remove all silos and walled gardens) to the point everything merges into one (the singularity) and also to be super powerful but super easy and intuitive to use.

It also harnesses the best of each provider so the OASIS uses the strengths of each provider to the maximum and removes all weaknesses, it automatically uses the most appropriate provider or providers for any given use case.

The WEB4 OASIS API connects & Integrates everything (all of Web 2 & Web 3) including all blockchains,  holochain, ipfs, databases, cloud etc into one fully unified API that is an abstraction layer over everything) and the STAR OASIS Omniverse (WEB 5) where Our World is the first world in the infinite Omniverse (what comes after Metaverse). It connects and integrates all metaverses together through the SSO Avatar/Karma system (part of the OASIS API). It is also a fully interoperable Metaverse Low Code Generator (connecting all WEB 2 and WEB 3 together) through the WEB 4 OASIS API.

The OASIS API features a powerful Avatar SSO API allowing one login across all your sites, games, apps, services, etc. This avatar is the digital twin of YOU and allows you to earn/lose karma through the Karma API. 

It also features the Data API allowing data to be shared between the above providers giving for interoperability. It also has powerful features such as auto-fail over, auto-load balancing and auto-replication across the providers so if one node goes down in your local area it will automatically switch to the next fastest node in your area independent of the network it belongs to, this way the OASIS API never has any downtime and will always be super fast and not reliant on only one network.

The OASIS API also has a SEEDS API allowing people to earn karma for donating and paying with Seeds as well as when they invite or join Seeds. Read more here: https://joinseeds.earth/

Finally it also features a Keys/Wallets API, which allows public private keys to be linked to your avatar per provider and private keys are only stored locally. Public keys and the rest of the wallet are stored on any provider. Because of the auto replication the private keys are automatically backed up to your local devices and can automatically sync between them so if you get a new device it can automatically sync with it, a bit like a decentralised offline cloud. 

You will never lose your keys again! ;-)

It can also then sync your public key and wallet address etc when you go back online. With this architecture it opens the doors to many new use cases... 

The whole point of the OASIS API is to allow everything to be fully interoperable so data can be shared between any provider, the architecture opens the doors for many more use cases like importing and exporting your data between providers, aggregating all your data to remove all silos so better sense making and AI machine learning can be made to analyse and to make predictions etc, smart contract interoperability, etc

It also allows full data redundancy and for it to be network independent so if one network goes down it can automatically switch to the next fastest node in your area regardless of what network it is on...

WEB 5 OASIS STAR OMNIVERSE is built on top of the OASIS API and aggregates all the worlds data and expresses it within a cyberspace ontology using a cutting edge custom built ORM (Object Relational Mapper) called COSMIC. The STAR Omniverse is both a simulation & game of life and aggregates all metaverses into one fully integrated unified platform. It is also a fully integrated immersive interoperable metaverse Low Code Generator and soooooo much more.... ;-)

Both WEB 4 & WEB 5 use machine learning AI to analyse all of the worlds data to generate useful insights, predictions & so much more!

To summarize, WEB4 OASIS API aggregates all of the worlds data into a fully unified API to allow better sense making to made, which then feeds into WEB5 STAR, which expresses it in a cyberspace ontology and connects the worlds data to the rest of the COSMOS and Galaxy... ;-)

<a name="web4-oasisapi-benefits"></a>
## Benefits Of Building On The WEB4 OASIS API:

* **Integrate any WEB2 or WEB3 tech into your (web)app without having to learn or worry about new tech stacks/languages (the OASIS API hides all the complexity away so you can focus on creating your dream app!).**

* **No need to worry about how different blockchains or WEB2 and WEB3 can talk and integrate with each other, the OASIS handles all this for you!**

* **Future prove so when any new language/tech comes out such as Ethereum2 etc, these will be automatically added to the OASIS API for FREE, you will have FREE upgrades for life!**

* **WEB5 ready when it is released later this year...**

Check out more info below:<br><br>
[The Power Of The OASIS API](https://drive.google.com/file/d/1nnhGpXcprr6kota1Y85HDDKsBfJHN6sn/view?usp=sharing) <br>
[What Is WEB4 & WEB5 Really?](https://www.ourworldthegame.com/single-post/what-is-web4-web5-really) <br>
[First Production Release Of The WEB4 OASIS API](https://www.ourworldthegame.com/single-post/first-production-ready-release-of-web4-oasis-api-more) <br>
[Annoucing WEB5 STAR ODK/HDK/COSMIC](https://www.ourworldthegame.com/single-post/announcing-star-odk-hdk-cosmic)  <br>
[STAR ODK/HDK/COSMIC/OASIS API/Our World Update](https://www.ourworldthegame.com/single-post/star-odk-hdk-cosmic-oasis-api-our-world-update) <br>
[Main WEB4 OASIS API & WEB5 STAR Repo](https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK)

## How To Use

Each function call you make returns a promise of an object which is in this form:
`{error: boolean, data: object}`.

*object values*
*error:* true when response from api fails
*data:* response gotten from server.

## Getting started

To get started with this package run

`npm install oasis-api`

This installs the package to your project.
To use it in the Application, it can be imported by

`import oasis from "oasis-api"`

## Auth

The Auth class handles the authentication of the oasis-api. It can be imported by:

`import { Auth } from "oasis-api"`

### Login

To login use this code:

```javascript
import { Auth } from "oasis-api";

const oasisAuth = new Auth();

oasisAuth.login({
  username: "email@test.com",
  password: "testpass",
}).then((res)=>{
  if(res.error){
    // Error
  }
  else // No error
}).catch((err)=>{
  console.log(err)
})
```

### Signup

For signup, use this code snippet:

```javascript
import { Auth } from "oasis-api";

const oasisAuth = new Auth();

const data = await OasisAuth.signup({
  firstName: "test",
  lastName: "test",
  email: "test@email.com",
  password: "test",
  confirmPassword: "test",
  acceptTerms: true,
  avatarType: "User",
  title: "Mr",
});
```

### Logout

This logs a user out and revokes his token

```javascript
import { Auth } from "oasis-api";

const oasisAuth = new Auth();

const data = await OasisAuth.logout();
```

### Forgot password

```javascript
import { Auth } from "oasis-api";

const oasisAuth = new Auth();

const data = await OasisAuth.forgotPassword({ email: "test@test.com" });
```

### Get user

This function is used when trying to get a currently logged in user.
Code snippet:

```javascript
import { Auth } from "oasis-api";

const oasisAuth = new Auth();

const data = await OasisAuth.getUser();
```

## Avatar

This class manages a user's avatar from adding Karma, deleting and updating avatar, etc,

```js
import { Avatar } from "oasis-api"
```
### get

This function gets an avatar when its ID is provided

```js
import { Avatar } from "oasis-api";
const avatar = new Avatar();

const res = await avatar.get();
```

### Get All

This function returns all registered avatars

```js
import { Avatar } from "oasis-api";
const avatar = new Avatar();

const res = await avatar.getAll();
```

### update
This updates the avatar with the given ID. User must be logged in & authenticated for this method to work.

```js
avatar.update(data, id).then(()=>{
  //pass
}).catch((err)=>{
  // pass
})
```
the parameter **data** should be of this shape
```js{
  "title": "string",
  "firstName": "string",
  "lastName": "string",
  "avatarType": "string",
  "email": "user@example.com",
  "password": "string",
  "confirmPassword": "string"
}
```

### delete
This updates the avatar with the given ID. User must be logged in & authenticated for this method to work.
```js
avatar.delete(id).then(()=>{
  //pass
}).catch((err)=>{
  // pass
})
```

### addKarma
Adds karma to avatar. User must be logged in & authenticated for this method to work.
```js
avatar.addKarma(id, data).then(()=>{
  //pass
}).catch((err)=>{
  // pass
})
```
**params**
*id*: Avatar id
*data schema*
```js{
  "karmaType": "string",
  "karmaSourceType": "string",
  "karamSourceTitle": "string",
  "karmaSourceDesc": "string"
}
```

### removeKarma
Removes karma to avatar. User must be logged in & authenticated for this method to work.
```js
avatar.removeKarma(id, data).then(()=>{
  //pass
}).catch((err)=>{
  // pass
})
```
**params**
*id*: Avatar id
*data schema*
```js{
  "karmaType": "string",
  "karmaSourceType": "string",
  "karamSourceTitle": "string",
  "karmaSourceDesc": "string"
}
```

## Data

### loadHolon
Load's a holon data object for the given id.

```js
const data = new oasis.Data()
data.loadHolon(id).then(()=>{
  //pass
}).catch((err)=>{
  // pass
})
```
**params**
*id*: Holon id

### loadAllHolons
Load's all holon data object for the given id.

```js
const data = new oasis.Data()
data.loadAllHolons().then(()=>{
  //pass
}).catch((err)=>{
  // pass
})
```

### saveHolon
saves holon data object.

```js
const data = new oasis.Data()
data.saveHolon(data).then(()=>{
  //pass
}).catch((err)=>{
  // pass
})
```

### deleteHolon
deletes a holon data object for the given id.

```js
const data = new oasis.Data()
data.deleteHolon(id).then(()=>{
  //pass
}).catch((err)=>{
  // pass
})
```
**params**
*id*: Holon id

## Karma

### getKarmaForAvatar
gets karma value of an avatar

```js
const karma = new oasis.Karma()
karma.getKarmaForAvatar(id).then(()=>{
  //pass
}).catch((err)=>{
  // pass
})
```
**params**
*id*: Avatar id

### removeKarmaForAvatar
removes karma value of an avatar

```js
const karma = new oasis.Karma()
karma.getKarmaForAvatar(id, data).then(()=>{
  //pass
}).catch((err)=>{
  // pass
})
```
**params**
*id*: Avatar id
*data schema*:
```js
const data={
      karmaType: string,
      karmaSourceType: string,
      karamSourceTitle: string,
      karmaSourceDesc: string,
}
```

### getKarmaAkashicRecordsForAvatar

`oasis.Karma.getKarmaAkashicRecordsForAvatar(id)`
**params**
*id*: Avatar id


## Holochain

### getHolochainAgentIdForAvatar

`oasis.Holochain.getHolochainAgentIdForAvatar(id)`
**params**
*id*: holochain id

### getHolochainAgentPrivateKeyForAvatar

`oasis.Holochain.getHolochainAgentPrivateKeyForAvatar(id)`
**params**
*id*: avatar id

### getAvatarIdForHolochainAgentId

`oasis.Holochain.getAvatarIdForHolochainAgentId(id)`
**params**
*id*: agent id

### getHoloFuelBalanceForAgentId

`oasis.Holochain.getHoloFuelBalanceForAgentId(id)`
**params**
*id*: agent id

### getHoloFuelBalanceForAvatar

`oasis.Holochain.getHoloFuelBalanceForAvatar(id)`
**params**
*id*: avatar id

### getHoloFuelBalanceForAvatar

`oasis.Holochain.getHoloFuelBalanceForAvatar(data)`
**params**
*data schema*: `{agentId: string, avatarId: string}`
 
 ## NFT

 ### createPurchase

 `oasis.NFT.createPurchase(data)`
 **params**
 *data schema*
 ```
 nftProvider: number,
      solanaExchange: {
        fromAccount: {
          publicKey: string,
        },
        toAccount: {
          publicKey: string,
        },
        memoText: string,
        amount: number,
        mintAccount: {
          publicKey: string,
        },
      },
      cargoExchange: {
        saleId: string,
      },
    }
```

### getOlandPrice
`oasis.NFT.createPurchase(count, couponCode)`

### purchaseOLAND
`oasis.NFT.purchaseOLAND(data)`
**params**
 *data schema*
 ```
 {
      olandId: "",
      avatarId: "",
      avatarUsername: "",
      tiles: "",
      walletAddress: "",
      cargoSaleId: "",
}
```

## Solona

### mint
`oasis.Solana.mint(data)`

### exchange
`oasis.Solana.exchange(data)`
**params**
*data schema* 
```
{
      fromAccount: {
        publicKey: "",
      },
      toAccount: {
        publicKey: "",
      },
      memoText: "",
      amount: 0,
      mintAccount: {
        publicKey: "",
      },
    }
```
