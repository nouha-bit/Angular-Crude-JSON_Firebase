import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AddTodoComponent } from './dashboard/add-todo/add-todo.component';
import { ListTodoComponent } from './dashboard/list-todo/list-todo.component';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { FilterPipe } from './filter.pipe'; 
const firebaseConfig = {
  apiKey: "AIzaSyD3KMRQG3kLW4OAAktJJ1_YBG61XrgcDQ4",
  authDomain: "angularproject-e000b.firebaseapp.com",
  databaseURL: "https://angularproject-e000b.firebaseio.com",
  projectId: "angularproject-e000b",
  storageBucket: "",
  messagingSenderId: "640944357647",
  appId: "1:640944357647:web:99bcf7bf988b019d"
};
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddTodoComponent,
    ListTodoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,// storage
    AngularFireDatabaseModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
