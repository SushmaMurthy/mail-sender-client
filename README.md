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

## Testing
```bash
npm run start
# App starts on port 3000 and Opens the UI in a default browser window
```

## Build
```bash
npm run build
# Builds the static content as a bundle, ready for web hosting
```

## Future Enhancements & Notes
* Implement User login/logout and handle sessions.
* Add environment specific configuration file support.
* Tighten the input validations, especially Email address format.
* Add unit and integration test scripts between UI and backend API.
* Implement Build and Deployment specs for CI and CD.
* Address TODOs in src files
