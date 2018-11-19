"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const AWS = require("aws-sdk");
const AWSaccessKeyId = 'not-important';
const AWSsecretAccessKey = 'not-important';
const AWSregion = 'local';
AWS.config.update({
    accessKeyId: AWSaccessKeyId,
    secretAccessKey: AWSsecretAccessKey,
    region: AWSregion
});
class StepFunctionsLocal extends aws_sdk_1.StepFunctions {
    constructor(options = {}) {
        options.endpoint = options.endpoint
            ? options.endpoint
            : 'http://localhost:3001';
        options.apiVersion = options.apiVersion
            ? options.apiVersion
            : '2016-11-23';
        super(options);
    }
}
exports.StepFunctionsLocal = StepFunctionsLocal;
class LambdaLocal extends aws_sdk_1.Lambda {
    constructor(options = {}) {
        options.endpoint = options.endpoint
            ? options.endpoint
            : 'http://localhost:3001';
        options.apiVersion = options.apiVersion
            ? options.apiVersion
            : '2016-11-23';
        super(options);
    }
}
exports.LambdaLocal = LambdaLocal;
//# sourceMappingURL=index.js.map