import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  calendars= [];

  constructor(public navCtrl: NavController, private calendar: Calendar, private plt: Platform) {
    if(this.plt.is('Cordova')){
      this.plt.ready().then(()=> {
        this.calendar.listCalendars().then(data=> {
          this.calendars = data;
        })
      })
      this.calendar.createCalendar('myCalendar').then(
        (msg)=> {console.log(msg)},
        (err)=> {console.log(err)}
      );
    }
    else{
      
    }
  }

  addEvent(cal){
    let date= new Date();
    let options = { calendarId: cal.id, calendarName: cal.name,url: 'https://ionicacademy.com/', firstReminderMinutes: 15 };

    this.calendar.createEventInteractivelyWithOptions('My new Event','Munster','Special Notes',date,date,options).then(
      res=> {}, err=> {console.log("error: " + err)}
    );
  }

  openCal(cal){
    this.navCtrl.push('CalDetailsPage',{name: cal.name})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
