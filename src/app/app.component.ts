import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title='project';
 newMemberName='';
 members: string[] = [];
 errorMassage='';
 numberOfTeams: number|"" ="";
 teams:string[][]=[]

 onInput(member: string){
this.newMemberName=member
 }
onNumberOfTeamsInput(value:string){
  this.numberOfTeams = Number(value);
 }
 addMember(){
  if(!this.newMemberName){
    this.errorMassage ="Name can't be empty";
    return;
  }
  this.members.push(this.newMemberName);
  this.errorMassage =" ";
  this.newMemberName="";
 }
 generateTeams(){
   if(!this.numberOfTeams||this.numberOfTeams<=0){
    this.errorMassage='Invalid number of teams';
    return;
   } 
   if(this.members.length<this.numberOfTeams){
    this.errorMassage="Not enough members";
    return;
   }
   this.errorMassage='';
   const allMembers=[...this.members]
   while(allMembers.length){
   for(let i= 0; i<this.numberOfTeams;i++){
    const randomIndex=Math.floor(Math.random()*allMembers.length);
    const member=allMembers.splice(randomIndex,1)[0];
    if(!member)break;
    if(this.teams[i]){
      this.teams[i].push(member)
    }else{
      this.teams[i] =[member]
    }
  }
}
  this.members=[];
  this.numberOfTeams="";
 }
}
