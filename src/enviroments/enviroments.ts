export const enviroment = {
    production: false,
    authorize_uri: 'http://localhost:9595/auth-server/oauth2/authorize?',
    client_id: 'client',
    redirect_uri: 'http://localhost:4200/authorized',
    scope: 'openid profile',
    response_type: 'code',
    response_mode: 'form_post',
    code_challenge_method: 'S256',
    code_challenge: 'Gk-M2VhnU398Q-Qw7B3q2jiw90OgYlzfbLkG0kN0DZM',
    code_verifier: 'gJqqCpXTNNB7wmtL6fnpjbwH5ygL5QmVupzemZVvjXQ',
    token_url: 'http://localhost:9595/auth-server/oauth2/token',
    grant_type: 'authorization_code'
}