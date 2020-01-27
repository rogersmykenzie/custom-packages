# About this Project

This project is an attempt by me to rebuild the basic functionality and api of the main stack that I work with day to day in order to achieve a greater understanding of how each package works. This is a WIP and is purely for learning purposes. This repo was created in order to backup and preserve the code.

Attached to this README will be descriptions of each package I rebuild, and a synopsis of why I took the approaches I did.

# Redux (src/redux)

## Replication Outline

The core/bare essential redux functionality has three main parts/methods to be aware of. Those methods are:

* `getState`
* `dispatch`
* `subscribe`

These methods are given to us by the store that is returned from the `createStore` method. `createStore` itself should receive a reducer as a parameter.

### `getState`

* PARAMS: None
* RETURNS: The current state. This is simply stored in a variable called `state`. Note that to prevent potential direct mutation, it is set up to return a copy of `state`.

### `dispatch`

* PARAMS: An action. Actions are simply objects that describe a change that is being made to the state as well as any pertinent data. We don't have to worry about the structure of the action however. All we have to do is pass it off to the reducer and let it handle all the state changes.
* OPERATIONS: Dispatch passes the current state and the provided action to the reducer, which spits back out the new state, which we use to update the stored state. Note that subscriptions should run every time state changes, 
