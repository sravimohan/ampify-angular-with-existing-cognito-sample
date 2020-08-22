## Amplify project with existing Amazon Cognito settings

## Reference:

https://docs.amplify.aws/lib/auth/start/q/platform/js

https://aws.amazon.com/blogs/mobile/amplify-framework-announces-new-rearchitected-ui-component-and-modular-javascript-libraries/

https://docs.amplify.aws/start/q/integration/angular

https://docs.amplify.aws/ui/auth/authenticator/q/framework/angular


## Configuration:
In app.module.ts 
...
/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';

/* Configure Amplify resources */
Amplify.configure({
  Auth: {
    "aws_project_region": "ap-southeast-2",
    "aws_cognito_region": "ap-southeast-2",
    "aws_user_pools_id": "TODO",
    "aws_user_pools_web_client_id": "TODO",
    "oauth": {}
  }
});
...
