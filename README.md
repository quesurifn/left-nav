# React Left-Nav


## Description


A React Left-Nav with overlay and 'push open' animations. 

## Getting Started


### Installation

`npm i -s react-left-nav-simple`

### Setup 

To use the overlay put a `<div id='overlay'></div>` in your app.


Create a Redux action and and add to your `Switch` statement

Ex. With Thunk

Actions.js

```
export function OPEN_NAV() {
  return {
    type: "OPEN_NAV",
    payload: true
  }
}

export function CLOSE_NAV() {
  return {
    type: "CLOSE_NAV",
    payload: false
  }
}
```

Reducer.js 

```
export function reducer(
    state = {
        nav: null,
    }, action) {


    switch (action.type) {     
        case "NAV_OPEN" : {
            return {
                ...state, 
                nav: true
            }
        }

        case "NAV_CLOSE" : {
            return {
                ...state,
                nav: false
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
```

Note: The store MUST be available to this component to work.

## Why?

My designer loves side-navs, so much so that the very first project we did together we had two side navs, one on the left for a menu, and one on the right for a Shopify style e-commerce nav. My designer also loves very dynamic sites. With all of his side-nav business with visibility based off of a multitude of different things, it got hard to track wether or not the nav was actually open or not. I made this Redux Enabled nav to hopefully alleviate that problem.



#### Pull Reqs Welcome