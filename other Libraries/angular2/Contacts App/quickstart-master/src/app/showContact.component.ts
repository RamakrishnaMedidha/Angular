import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Response} from '@angular/http';
import {contactService} from './Contacts_services.component';
@Component({
selector:'show-contact',
template:`
<ul class="items" class="list-group">
<li class="list-group-item" (click)="onSelect(contact)" *ngFor="let contact of contactList">
<span>{{contact.firstName}}
{{contact.lastName}}</span></li>
</ul>
`

})

export class showContact implements OnInit{
   public  contactList:any=[];
   
constructor(private _route:Router,private contact_serv:contactService){}
onSelect(contact:any){
this._route.navigate(['/showContact',contact.firstName])
}   
ngOnInit(){
/*this._contactService.getContacts()
.subscribe((respData:Response)=>this.contactList=respData);*/

this.contactList=this.contact_serv.AllContacts;

}
   
   
   /*
   
 public AllContacts:any = [
{
"firstName": "Joe",
"lastName": "Perry",
"contactNumber": "444-888-1223",
"contactEmail": "joe@cordis.us"
},
{
"firstName": "Kate",
"lastName": "Will",
"contactNumber": "244-838-1213",
"contactEmail": "kate@cordis.us"
},
{
"firstName": "Harry",
"lastName": "Robert",
"contactNumber": "744-138-1292",
"contactEmail": "harry@cordis.us"
},
{
"firstName": "Tom",
"lastName": "Bill",
"contactNumber": "241-188-1191",
"contactEmail": "tom@cordis.us"
},
{
"firstName": "Roger",
"lastName": "Steel",
"contactNumber": "111-177-1231",
"contactEmail": "roger@cordis.us"
}
 ];*/

}