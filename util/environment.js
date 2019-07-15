require('dotenv').config();

module.exports = {
    portNumber: process.env.PORT_NUMBER,
    envUndefined: function () {
        let errMessage = [];
    
        if (this.portNumber === undefined) errMessage.push("Enviroment variable 'portNumber' undefined.");
    
        return errMessage;
      }
};