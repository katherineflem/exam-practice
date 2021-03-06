// import * as crypto from 'crypto'//node provides crypto for us
// import * as jwt from 'jsonwebtoken'
// import db from '../../db'//using queries
// import config from '../../config'

// //INSERTING OUR USER INTO OUR TOKENS TABLE(USING FK USERID)
// //GENERATE A KEY AND UPDATE THE NEW USER ROW WITH THE KEY
// //RETURN TOKEN FOR USE

// //create a token
// //insert userid into tokens table
// //update our payload with that row's id
// //generate a unique property using crypto library(already built in node)
// //jwt sign the token using a secret key
// //update that row with our newly signed token
// //return that token

// //jwt generates the ecrypted token

// //pAYload is the body
// //going to be receiving some type of payload to create our token with- create a generic type
// export const CreateToken = async (payload: IPayload) => {
//     let {insertId}: any = await db.Tokens.insertToken(payload.userid); //inserted row in the tokens table, these are auto-incrementing
//     //then we are modifying our payload
//     //we want the token id to equal the id that was just inserted?
//     payload.accesstokenid = insertId;// insertId is the default mysql response for what was just inserted
//     //generating a unique signature on the token payload 
//     //just makes ecrytped token more complicated by adding a string to it
//     payload.unique = crypto.randomBytes(32).toString('hex');//hex is a type of code like the color codes
//     //json webtoken will be signing our payload with a secret key that we define in our config
//     let token = await jwt.sign(payload, config.auth.secret)
//     console.log(token)
//     //update the row with new token value
//     await db.Tokens.updateRow(token, payload.accesstokenid);
//     return token;
// };
// //jwt decode the token to get a payload
// //find that payload in our tokens table to verify it
// //return the payloadm otherwise throw an error
// export const ValidateToken = async (token: string) => {
//     //get the payload from the token- provide the generic to jwt as well
//     let payload = <IPayload>jwt.decode(token);
//     //getone respond with an array with obj inside so we do array destructuring
//     let [accesstokenid]:any  = await db.Tokens.findOneToken(payload.accesstokenid, token);
//     //if there is no accesstokenid then we will throw an error
//     if (!accesstokenid) {
//         throw new Error('Invalid Token')
//     } else {
//         return payload;
//     }
// }
// //payload is an obj 
// export interface IPayload {
//     userid: number,
//     unique?: string //generated by crypto- doesnt exist until later hence the ?
//     accesstokenid?: number
//}