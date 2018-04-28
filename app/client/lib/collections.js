
// Basic (local) collections, which will be observed by whisper (see whisperConnection.js)
// we use {connection: null} to prevent them from syncing with our not existing Meteor server

// TODO change this!!!

Wallets = new Mongo.Collection('wallets', {connection: null});
new PersistentMinimongo2(Wallets, 'feathereum_wallet');

CustomContracts = new Mongo.Collection('custom-contracts', {connection: null});
new PersistentMinimongo2(CustomContracts, 'feathereum_wallet');

// Contains the transactions
Transactions = new Mongo.Collection('transactions', {connection: null});
new PersistentMinimongo2(Transactions, 'feathereum_wallet');

// Contains the pending confirmations
PendingConfirmations = new Mongo.Collection('pending-confirmations', {connection: null});
new PersistentMinimongo2(PendingConfirmations, 'feathereum_wallet');

// Contains the custom contract events
Events = new Mongo.Collection('events', {connection: null});
new PersistentMinimongo2(Events, 'feathereum_wallet');

// Contains Coin Information
Tokens = new Mongo.Collection('tokens', {connection: null});
new PersistentMinimongo2(Tokens, 'feathereum_wallet');


