# mail-sender-client

Mail Sender Client is a responsive Single Page Application to send email notifications. 
Accepts input from user and sends notification by integrating with mail-sender-api service.

##Technology Stack
* Bootstrap
* ReactJs

##User Inputs
* `To - Mandatory - Single/Multiple email address seperated by comma and mandatory '@' followed by '.' characters`
* `CC - Optional - Single/Multiple email address seperated by comma and mandatory '@' followed by '.' characters`
* `BCC - Optional - Single/Multiple email address seperated by comma and mandatory '@' followed by '.' characters`
* `Subject - Mandatory - String`
* `Text - Mandatory - Plain Text`

##Samples
* Valid Email address formats accepted by To, CC and BCC fields<br />
`user@sample.com`<br />
`123@sample.com`<br />
`user123@sample.com`<br />
`user123@sample.com,user321@sample.com`<br />

* Invalid Email address formats rejected by To, CC and BCC fields<br />
`user@sample`<br />
`123.com`<br />
`@sample.com`<br />
`user,123@sample.com`<br />

##Responses
* Success Response: `Yay! Email sent successfully!`
<br />
* Server Validation Error: `Aw, Snap! Invalid or missing parameters`
<br />
* Error Response: `Aw, Snap! Internal error occurred, Please try again after sometime`

## Installation
### Requirements
* Node.Js server
* Node Package Manager

Mail Sender API can be installed locally simply with NPM.
```bash
npm install
```

## Local Testing
```bash
npm run start
# App starts on port 3000 and Opens the UI in a default browser window for local testing
```

## Build
```bash
npm run build
# Builds the static content as a bundle, ready for web hosting
```

## Deployment
To deploy this application on web, There are many ways but chose to deploy statically to AWS S3 as it is quick and cost effective.

###Steps:
* `Create AWS account or Sign into AWS console.`
* `Navigate to S3 service and create new bucket.`
* `Within the Properties tab of new bucket, open the Static Website Hosting tab, and select Enable website hosting. Fill in index.html for both the Index and Error Documents.`
* `Edit the bucket policy and grant permission to S3:GetObjects.`
* `Add the contents of your build directory (created as part of npm run build command in local) to this bucket`
* `Voila! App is hosted on Web now, Endpoint will be available in Static Website Hosting tab.`

## Future Enhancements & Notes
* Implement User login/logout and handle sessions.
* Add environment specific configuration file support.
* Tighten the input validations, especially Email address format.
* Add unit and integration test scripts between UI and backend API.
* Implement Build and Deployment specs for CI and CD.
* Address TODOs in src files
