# WEB4 OASIS API Javascript Package

- [OASIS API](#oasis-api)
  - [Introduction](#introduction)
  - [Overview](#overview)
  - [Benefits Of Building On The WEB4 OASIS API](#web4-oasisapi-benefits)
  - [Do You Want To Get Involved?](#get-involved)
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

The WEB4 OASIS API enables you to integrate your project with everything else (WEB2 & WEB3) such as all blockchains, holochain & much more. It also provides SSO, load balancing, auto failover, auto replication, zero downtime, zero lag, infinite players and much more!

The WEB4 OASIS API seeks to connect anything to everything within the realms of current possibilities (including EOSIO, Ethereum, Solana, Holochain, SOLID, ActivityPub, IPFS, Telos, SEEDS, ThreeFold & many more!). It is unity consciousnes expressed within the technical sphere.

WEB 4 OASIS API is a fully distributed decentralised fault tolerant load balanced integrated API that runs across the full Internet acting as an abstraction layer over everything and serves as a network of networks.

### Best Of All Worlds

Also, just like a team of people, different tech has various strengths and weaknesses, by integrating them together so they work as one unified co-ordinated team, you eliminate all weaknesses and then have the best of all worlds, the whole is greater than the sum of the parts. It harnesses the best of each provider so the OASIS uses the strengths of each provider to the maximum and removes all weaknesses, it automatically uses the most appropriate provider or providers for any given use case.

### Maximum Interopability/Aggregation

One of the core design goals of the OASIS is maximum interoperability (to remove all silos and walled gardens) to the point everything merges into one (the singularity) and also to be super powerful but super easy and intuitive to use.

The WEB4 OASIS API connects & Integrates everything (all of WEB 2 & WEB 3) including all blockchains, holochain, IPFS, databases, cloud etc into one fully unified API that is an abstraction layer over everything).

The whole point of the OASIS API is to allow everything to be fully interoperable so data can be shared between any provider, the architecture opens the doors for many more use cases like importing and exporting your data between providers, aggregating all your data to remove all silos so better sense making and AI machine learning can be made to analyse and to make predictions etc, smart contract interoperability, etc

### Full Redundancy/Zero Downtime

It also allows full data redundancy and for it to be network independent so if one network goes down it can automatically switch to the next fastest node in your area regardless of what network it is on...

### Avatar API

The OASIS API features a powerful Avatar SSO (Single Sign On) API allowing one login across all your sites, games, apps, services, etc across all devices and platforms for your OASIS Avatar where you have FULL control of ALL of your data right down to the individual field level and whether each field is Replicated/Shared (ReadOnly) or Shared (ReadWrite). You no longer need to remember multiple login details, you can have just one login (avatar), that follows you everywhere and you have FULL control of. You choose where your data is stored and who has access to it.This avatar is the digital twin of YOU and allows you to earn/lose karma through the Karma API. 

### Karma API

The OASIS API also has a powerful Karma API where your avatar (YOU) can earn and lose karma across any OAPP (OASIS App) that is integrated into the OASIS API (websites, apps, games, services, etc). You can earn karma for picking up litter, recycling, going green, helping people, heating/drinking healthily, improving your self or the enviroment, donating to chairty, volunteering for good causes, planting trees, progressing in self help apps, medidation, yoga, mindfulness, spending time in nature, etc. You lose karma for dropping liter, being abusive online, not eating healthily. This karma is then redeemed for real world goods & services such as a free smoothie, yoga class, etc. It also unlocks new gifts and super powers for your avatar in the Our World/One World games that plug into the API, they are the first worlds of the new upcoming OASIS Omniverse (network of metaverses).

### Full Accountability/Zero Crime/Dark Net Prove

The extra benefit of this is that everyone is fully accountable for their actions where their karma & how they earnt/lost it is fully visible to all. There can be no hiding in the OASIS, it makes crime & the dark net impossible!

### Data API

It also features the Data API allowing data to be shared between the above providers giving full interoperability. It also has powerful features such as auto-fail over, auto-load balancing and auto-replication across the providers so if one node goes down in your local area it will automatically switch to the next fastest node in your area independent of the network it belongs to, this way the OASIS API never has any downtime and will always be super fast and not reliant on only one network. This also applies for all the other API's such as the Avatar API etc. With unity consciousness the possibilities are limitless!

### Future Prove! Never Need To Learn A New Tech Stack/Language Again!

The OASIS API is very intuitive and easy to use hiding away the complexities of the lower-level networks/protocols/platforms/API's but at the same time gives full power and control to power users who wish to dive deeper into the lower-level tech. This also means you do not need to keep learning new tech/APIs/programming languages etc, from now on you only ever need to use the very intuitive powerful OASIS API and the rest is taken care of for you! Also, even if a newer version of one network/API comes out like Holochain RSM or Ethereum 2, you do not need to do anything to port your app to the latest version, the OASIS will take care of this for you.

### SEEDS API

The OASIS API also has a SEEDS API allowing people to earn karma for donating and paying with Seeds as well as when they invite or join Seeds. Read more here: https://joinseeds.earth/

### Keys/Wallet API

Finally it also features a Keys/Wallets API, which allows public private keys to be linked to your avatar per provider and private keys are only stored locally. Public keys and the rest of the wallet are stored on any provider. Because of the auto replication the private keys are automatically backed up to your local devices and can automatically sync between them so if you get a new device it can automatically sync with it, a bit like a decentralised offline cloud.

You will never lose your keys again! ;-)

It can also then sync your public key and wallet address etc when you go back online. With this architecture it opens the doors to many new use cases...

### Works Offline/Local Networks (LAN, Bluetooth, Mesh Networks)

This same technology works across all of the API's (Avatar, Data, etc) so you can work offline if your connection to the internet goes down and will automatically sync once it goes back online. It even allows you to network over LAN, Bluetooth, Mesh Networks, etc.

### Powerful Pick n Mix & Plug n Play UI Components

Soon you will also have a very powerful intuitive UI allowing anyone to build an OAPP through a simple intuitive to use drag n drop interface plugging together the various components (web, unity, unreal, metaverse & more) you need allowing you to focus on your ideas rather than on how to implement them. This will lower the barrier to entry for non-technical people, the perfect low-code solution!

### WEB/2D/3D/AR/VR/IR/Map/Meta Visusalization

Each OAPP can have a Web, 2D, 3D AR, 3D VR, 3D Map, 3D IR ([Infinite Reality](https://www.ourworldthegame.com/single-post/beyond-xr-is-ir-infinite-reality)), 2D Map & Meta View. You will be able to switch between these at run-time.

### Our World Geo-Location/AR/IR/Map UI (Game of Games Engine)

[Our World](http://www.ourworldthegame.com) is the first world in the infinite Omniverse (what comes after Metaverse). Our World also acts as the UI to the OASIS API allowing the various OAPP’s to have a 3D object/2D sprite representation on the 3D map of the world. They can then view meta data about the app as well as launch the app from within Our World (phase 1 of The OASIS you see in Ready Player One). Through the OASIS API people have a full geo-location API allowing them to fully control the 3D map, add quests, routes, sub-games, AR hotspots, and so much more. One possible use case would be Smart Cities amongst many more. 

Our World is also an educational game/platform teaching people how to co-create a better world for all using the latest cutting edge technology. [Check out the site](http://www.ourworldthegame.com) for more info.

### IR (Infinite Reality) Ready

IR is what comes after AR, VR & XR. It is where the boundary between real and the virtual become one. More coming soon... ;-) 

### WEB 5 STAR OASIS Omniverse Interoperable Metaverse Low Code Generator

[The WEB 5 STAR OASIS Omniverse Interoperable Metaverse Low Code Generator](https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK#web5-star-odk) is built on top of the OASIS API and aggregates all the worlds data and expresses it within a cyberspace ontology using a cutting edge custom built ORM (Object Relational Mapper) called COSMIC. The STAR Omniverse is both a simulation & game of life and aggregates all metaverses into one fully integrated unified platform. It is also a fully integrated immersive interoperable metaverse Low Code Generator and soooooo much more.... ;-)

It connects and integrates all metaverses together through the SSO Avatar/Karma system (part of the OASIS API). It is also a fully interoperable Metaverse Low Code Generator (connecting all WEB 2 and WEB 3 together) through the WEB 4 OASIS API.

The STAR ODK, the heart of the OASIS can even compile OAPP's to native code for each platform, provider, network, etc. For example, for Holochain Provider it dynamically generates the low-level Rust code, which acts as the DAL (Data Access Layer). It also dynamically generates the C# code that runs on top of it abstracting away the lower-level complexities and this acts as the BLL (Business Logic Layer). This has the additional benefit that you can now debug your app logic in C#, something you cannot do in rust. It also allows you to have the best of both worlds by giving you access to both rust and C# libraries. The possibilities are endless, time to unleash YOUR full potential!

### AI/Machine Learning Over All Of World's Aggregated Data

Both WEB 4 & WEB 5 use machine learning AI to analyse all of the worlds data to generate useful insights, predictions & so much more!

### Summary

To summarize, WEB4 OASIS API aggregates all of the worlds data into a fully unified API to allow better sense making to made, which then feeds into WEB5 STAR, which expresses it in a cyberspace ontology and connects the worlds data to the rest of the COSMOS and Galaxy... ;-)

<a name="web4-oasisapi-benefits"></a>
## Benefits Of Building On The WEB4 OASIS API:

* **Integrate any WEB2 or WEB3 tech into your (web)app without having to learn or worry about new tech stacks/languages (the OASIS API hides all the complexity away so you can focus on creating your dream app!).**

* **No need to worry about how different blockchains or WEB2 and WEB3 can talk and integrate with each other, the OASIS handles all this for you!**

* **Future prove so when any new language/tech comes out such as Ethereum2 etc, these will be automatically added to the OASIS API for FREE, you will have FREE upgrades for life!**

* **SSO Avatar.**

* **Karma API (full accountability/zero crime/dark net prove) System.**

* **Maximum Integration & Interoprability.**

* **Auto Load-balancing.**

* **Auto Fail-over.**

* **Auto Replication.**

* **Best Of All Worlds.**

* **Maximum Interopability/Aggregation.**

* **AI/Machine Learning Over All Of World's Aggregated Data.*

* **Triple Level Quantum Resistant Encryption.**

* **Intelligent Key Management/Backups/Redundancy (never lose your keys again!).**

* **Full Redundancy/Zero Downtime.**

* **Zero Lag.**

* **Infinite Players Online At Same Time.**

* **Decentralised Distributed P2P Networking.**

* **Can Work Off-line (will automatically sync once online again).**

* **When Offline Can Still Sync And Work Over LAN, Bluetooth, Mesh Networks, etc.**

* **Agent Centric (User owns and stores own data).**

* **WEB/2D/3D/AR/VR/IR/Map/Meta Visusalization**

* **Our World Geo-Location/AR/IR/Map UI (Game of Games Engine).**

* **IR (Infinite Reality) Ready.**

* **Powerful Pick n Mix & Plug n Play UI Components.**

* **Smart City Ready.**

* **WEB5 Omniverse/Metaverse Ready.**

* **Plus Much More!**

Check out more info below:<br><br>
[The Power Of The OASIS API](https://drive.google.com/file/d/1nnhGpXcprr6kota1Y85HDDKsBfJHN6sn/view?usp=sharing) <br>
[What Is WEB4 & WEB5 Really?](https://www.ourworldthegame.com/single-post/what-is-web4-web5-really) <br>
[First Production Release Of The WEB4 OASIS API](https://www.ourworldthegame.com/single-post/first-production-ready-release-of-web4-oasis-api-more) <br>
[Annoucing WEB5 STAR ODK/HDK/COSMIC](https://www.ourworldthegame.com/single-post/announcing-star-odk-hdk-cosmic)  <br>
[STAR ODK/HDK/COSMIC/OASIS API/Our World Update](https://www.ourworldthegame.com/single-post/star-odk-hdk-cosmic-oasis-api-our-world-update) <br>
[Main WEB4 OASIS API & WEB5 STAR Repo](https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK)

<a name="get-involved"></a>
## Do You Want To Get Involved?

We are always looking for people to jump in and get involved, you do not need to be an existing coder, we can help you with that... you just need a willingness to learn and to have an open heart, we are always more interested with what is in your heart rather than your head! ;-)

The whole world is the Our World team, hence the name... ;-) It is not our project; it is all of humanities...

We also offer FREE training and apprenticeship program with the NextGen Developer Training Programmes.  We will teach you all we know over time and you get to work on this real live commercial codebase rather than wasting time working on throw away dummy apps as most training offers. No previous skills/experience required and is open to everyone, but especially for all disadvantaged people including special needs, homeless, unemployed, prison inmates, kids on the streets etc. We want to help the people the world has forgotten and for people who have stopped believing in themselves, we **BELIEVE IN YOU** and in time you will again too. Everyone has a gift for the world, and we will help you find yours… Find out more by checking out the links below:

<a href="https://c8119036-8b0a-4498-ab07-331841f19b4b.filesusr.com/ugd/4280d8_ad8787bd42b1471bae73003bfbf111f7.pdf">NextGen Developer Training Programme</a><br>
<a href="https://c8119036-8b0a-4498-ab07-331841f19b4b.filesusr.com/ugd/4280d8_999d98ba615e4fa6ab4383a415ee24c5.pdf">NextGen Junior Developer Training Programme</a>

We are looking for Web Devs (with any of these: react, angular, vue, js, html, css), Unity Devs & C# Devs.

If anyone is interested in developing this game/platform, then we would LOVE to hear from you! 😊 There will be opportunities for people to own shares and/or cryptocurrency (as well as other unique perks such as premium locations in both the geolocation and VR versions, personal or business service spotlights, free lifetime access to all premium paid services, massive karma points (allowing your avatar to progress to more advanced stages in the game unlocking new exciting quests, areas to explore & new special abilities/superpowers) plus lots more!) based on the input they are willing to provide.  

Thank you and we hope we find interest from people to join us on this exciting incredible journey.

**Want to make a difference in the world?**

**What will be your legacy?**

**Ready to be a hero?**

If the answer is YES, then please [proceed to here](https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK/wiki/So-You-Want-To-Get-Involved%3F-Ready-To-Be-A-Hero%3F)...

<a href="https://drive.google.com/file/d/1b_G08UTALUg4H3jPlBdElZAFvyRcVKj1/view">Dev Requirements To Join The Our World Tribe</a><br>
<a href="https://drive.google.com/file/d/12pCk20iLw_uA1yIfojcP6WwvyOT4WRiO/view?usp=sharing">The Our World Mission (Summary)</a><br>
http://www.ourworldthegame.com<br>
http://oasisplatform.world/swagger<br>
https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK<br>
http://www.gofundme.com/ourworldthegame<br>

http://www.nextgensoftware.co.uk<br>
http://www.yoga4autism.com<br>

https://youtu.be/wdYa5wQUfrg<br>
https://www.youtube.com/watch?v=2oY4_LZBW4M&t=3s<br>
https://www.youtube.com/watch?v=rvNJ6poMduo&t=5s<br>
https://www.youtube.com/watch?v=zyVmciqD9rs<br>
https://www.youtube.com/watch?v=SB97mvzJiRg&t=3s<br>

**TOGETHER WE CAN CREATE A BETTER WORLD**

In Love, Light & Hope,<br>
The Our World Tribe


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
