import * as user from '../../lib/user';

export const main = (event, context, callback) => {
  
  // instantiate a user
  const u = user.getUserById(null, 1)
  
  // prepare a response
  const response = {
    statusCode: 200,
    body: JSON.stringify(u),
  }
  
  // send the response
  callback(null, response)
}
