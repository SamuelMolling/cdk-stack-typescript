#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { TrustStack } from "../lib/TrustStack";
import { LambdaStack } from "../lib/LambdaStack";


const app = new cdk.App();


new TrustStack(app, "TrustStack", {});
new LambdaStack(app, "LambdaStack", {});


// AWS_PROFILE=<seu-perfil> npx cdk deploy TrustStack --parameters GitHubOrg=SamuelMolling --parameters GitHubRepo=cdk-stack-typescript
// arn:aws:iam::380561476517:role/TrustStack-GitHubActionsRole4F1BBA26-bim7O0v9NUxd 