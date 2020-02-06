'use strict';
const { Contract} = require('fabric-contract-api');
var base64 = require('base-64');
// const sha512 = require("js-sha512");

class fabricDrive extends Contract {

     async encodeAndStoreUserData(ctx, appId, first_name,last_name,username,password,phone) {
      console.info('============= START : mapp user data to AppID ===========');
      let timeStamp= await ctx.stub.getTxTimestamp();
      const timestamp = new Date(timeStamp.getSeconds() * 1000).toISOString();
      let userAsBytes = await ctx.stub.getState(appId); 
      if (!userAsBytes || userAsBytes.toString().length <= 0) {

        let userDocs = {
          First_name:first_name,
          Last_name:last_name,
          Username:username,
          Phone:phone,
          Password:password,
          hash:"",
          Timestamp: timestamp
        }
        let inputdata = JSON.stringify(userDocs);
        var encoded = base64.encode(inputdata);
        console.log(encoded);
      userDocs.hash = encoded;
      await ctx.stub.putState(appId, Buffer.from(JSON.stringify(userDocs)));
      console.info('============= END : user data put into BLOCKCHAIN ===========');
    }
  }
  async decodeAndGetData(ctx,appId) {
     
    let userAsBytes = await ctx.stub.getState(appId); 
    if (!userAsBytes || userAsBytes.toString().length <= 0) {
      return({Error: "Error: Incorrect AppId..!"});
      }
  else {
    let userDocs=JSON.parse(userAsBytes.toString());
      return JSON.stringify(userDocs);
        }
      }
}
module.exports = fabricDrive;
