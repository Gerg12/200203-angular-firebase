import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OrdersComponent } from "./orders/orders.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrdersService } from "./shared/orders.service";

//environment import
import { environment } from "src/environments/environment";

//angularfire imports
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonsComponent } from './lessons/lessons.component';

@NgModule({
  declarations: [AppComponent, OrdersComponent, OrderListComponent, LessonListComponent, LessonsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
