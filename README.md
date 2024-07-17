# drive_api_usage

This repository contains a few ways to use the google drive API in node.js, there aren't many comments but the functions are intuitive enough to be understood by the average programmer.

The SERVICE_ACCOUNT_KEY_FILE env variable corresponds to the path to the json file generated by google Cloud when adding a key to a Service Account.

To get started you need to create a google service account at this [url](https://console.cloud.google.com/iam-admin/serviceaccounts):

1. Create/Select a project
2. Create a service account
3. Create a json key for the service account
4. Add the path of the json key to SERVICE_ACCOUNT_KEY_FILE local variable
