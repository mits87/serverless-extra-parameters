'use strict';

class ServerlessExtraParameters {
  constructor(serverless) {
    this.configurationVariablesSources = {
      extra: {
        async resolve({ address }) {
          let results = null;

          switch (address) {
            case 'awsShortRegion':
              results = Array.from(serverless.service.provider.region.match(/^([^-]*)-(.)(?:o[ru]th|[ae]st|entral)(.?)[^-]*-(.*)$/i))
                .splice(1, 4)
                .filter(Boolean)
                .join('');
              break;

            default:
              throw new Error('Invalid awsRegion parameter!')
          }

          return {
            value: results,
          };
        },
      },
    };
  }
}

module.exports = ServerlessExtraParameters;
