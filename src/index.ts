import { StepFunctions, Lambda } from 'aws-sdk';
import * as AWS from 'aws-sdk';

const AWSaccessKeyId = 'not-important';
const AWSsecretAccessKey = 'not-important';
const AWSregion = 'local';

AWS.config.update({
    accessKeyId: AWSaccessKeyId,
    secretAccessKey: AWSsecretAccessKey,
    region: AWSregion
});

export class StepFunctionsLocal extends StepFunctions {
    constructor(options: any = {}) {
        options.endpoint = options.endpoint
            ? options.endpoint
            : 'http://localhost:3001';
        options.apiVersion = options.apiVersion
            ? options.apiVersion
            : '2016-11-23';
        super(options);
    }
}

export class LambdaLocal extends Lambda {
    constructor(options: any = {}) {
        options.endpoint = options.endpoint
            ? options.endpoint
            : 'http://localhost:3001';
        options.apiVersion = options.apiVersion
            ? options.apiVersion
            : '2016-11-23';
        super(options);
    }
}
