# i-view-app

Based on: https://serverless-stack.com

...scroll down to The Basics, Build your first Serverless app using AWS Lambda and React.

### features:
- deploys serverless web app that utilized APIs and services in __i-view-service__
- adds additional text field and pick list field to "The Basics" functionality

### to do's and caveats:
- to do: deploy to non-public S3 bucket
- to do: integrate with CloudFront to exclusively serve web pages (no S3 website)
- ...both needed for a reasonably secure PROD deployment

### deployment:
- using https://aws.amazon.com/cloud9/ is practically a no brainer
- steps...
  - assumes __i-view-service__ is deployed
  - clone this repo in `environment` path
  - `cd i-view-app`
  - edit and save this file: notes-client/src/config.js
  - ...with values from output of __i-view-service__
  - `npm install`
  - `[npm audit fix]`
  - `npm start`
- NOTE: `npm start` starts up a local web server for development only
- build script...
  - `cd i-view-app`
  - `aws s3 ls s3://<your-bucket> > /dev/null 2>&1`
  - `[[ $? -ne 0 ]] && aws s3 mb s3://<your-bucket>`
  - `npm run build && aws s3 sync ./build s3://<your-bucket>`
