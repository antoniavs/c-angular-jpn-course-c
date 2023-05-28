import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LearnHiraganaComponent } from './learn-hiragana/learn-hiragana.component';
import { TakeTestComponent } from './take-test/take-test.component';
import { LoginComponent } from './login/login.component';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {FirestoreModule} from '@angular/fire/firestore';
import {FirebaseAppModule, initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from "./shared/services/auth.service";
import { environment } from './environment';
import {config} from './config';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ComComponent } from './com/com.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnHiraganaComponent,
    TakeTestComponent,
    LoginComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ComComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FirestoreModule,
    FirebaseAppModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase), //configu de aici l am pus de la mine ca era envirinment inainte
    provideFirebaseApp(()=>initializeApp(config.firebase)),
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
