import React from 'react';

//Context example for Set9
const UserContext = React.createContext('Guest'); //You can provide a default value here
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}
export default UserContext