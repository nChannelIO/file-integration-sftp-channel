'use strict';

let requestErrors = require('request-promise/errors');
let Channel = require('@nchannel/endpoint-sdk').PromiseChannel;

class SFTP extends Channel {
  constructor(...args) {
    super(...args);
    this.validateChannelProfile();
  }

  validateChannelProfile() {
    let errors = [];
    if (!this.channelProfile) {
      errors.push("this.channelProfile was not provided");
    }
    if (!this.channelProfile.channelSettingsValues) {
      errors.push("this.channelProfile.channelSettingsValues was not provided");
    }
    if (!this.channelProfile.channelSettingsValues.protocol) {
      errors.push("this.channelProfile.channelSettingsValues.protocol was not provided");
    }
    if (!this.channelProfile.channelAuthValues) {
      errors.push("this.channelProfile.channelAuthValues was not provided");
    }
    if (errors.length > 0) {
      throw new Error(`Channel profile validation failed: ${errors}`);
    }
  }
}

module.exports = SFTP;
