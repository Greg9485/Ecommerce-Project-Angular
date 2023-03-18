export default {

    oidc: {
        clientId: '0oa8jkncdpjYe5LfJ5d7',                            //client ID recived from OKTA 
        issuer: 'https://dev-25101408.okta.com/oauth2/default',      //my dev account from OKTA
        redirectUri: 'https://localhost:4200/login/callback',          //my redirect url
        scopes: ['openid', 'profile', 'email']                       //login information needed to verify login account
    }   
}
