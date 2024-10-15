import React from 'react'

const Authcontext = React.createContext({
    
        isLoggedIn : false,
        type: '',
})

export default Authcontext;
