const config = {
  MAX_ATTACHMENT_SIZE: 100000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-service-dev-028821943969-us-east-1-upload"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://5taz7yxx0h.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_uCEW7FDHj",
    APP_CLIENT_ID: "5rcspose1u9a1eh8qjjsrkvjo3",
    IDENTITY_POOL_ID: "us-east-1:7f287673-4b88-4f00-ae04-e2f95b15b236"
  },
};

export default config;