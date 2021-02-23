const config = {
  MAX_ATTACHMENT_SIZE: 100000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-service-dev-028821943969-us-east-1-upload"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://52o17yjtwh.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_wUX0exe3L",
    APP_CLIENT_ID: "19mt7tpn95i9e66u3ddh1ve5ls",
    IDENTITY_POOL_ID: "us-east-1:5a3d5e50-3d8a-4f9e-8d99-00c9d80d9367"
  },
};

export default config;