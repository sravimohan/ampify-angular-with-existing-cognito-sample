import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [AppComponent],
  imports: [AmplifyUIAngularModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
