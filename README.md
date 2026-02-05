/*
header
    logo
    nav bar
        home
        about us
        contact
        cart
body
    search
    restaurant container
        restuarant card
            image
            name, cuisine, start rating, time
footer
    copyright
    address
    ..
*/

# redux
- install @reduxjs/toolkit and react-redux
- create store
- create slice
- connect both
- connect the redux to our app
- dispatch the actions
- subscribe to the slice via selector

## testing
-unit testing => developer's responsibility
-integration testing => developer's responsibility
-end to end testing

setup
- install react testin library & jsdom library (gives virtual env of browser for testing )
- install jest
- install babel
- config babel
- make parcel config so that parcel's babel won't interfare with jest's babel
- execute jest - npx jest --init
- install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- npm i -D @testing-library/jest-dom for expect functions like toBeInTheDocument.. etc