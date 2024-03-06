/*15.	Changing Guest List: You just heard that one of your guests 
can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else 
to invite. 
• Start with your program from Exercise 14. Add a print statement at
 the end of your program stating the name of the guest who can’t make
  it.
 • Modify your list, replacing the name of the guest who can’t make 
 it with the name of the new person you are inviting.
 • Print a second set of invitation messages, one for each person who
  is still in your list. */

  let guest_list: string [] =['Amina','Khadija','Fatima'];
  let message: string ="You're invited to dinner party";
  for(let i=0; i<guest_list.length; i++){
    console.log(`Dear miss ${guest_list[i]} ${message} \n\n My pleasure\n\n \n\nThank you\n\n`);
  }
  let absent_guest: string = 'Amina';
  let new_guest: string = 'zainab';
  guest_list[0] = new_guest;
  for(let ind=0; ind< guest_list.length; ind++){
    console.log(`Dear Miss ${guest_list[ind]}: ${message} \n\n Thank you\n\n`);

  }
  console.log(`Miss ${absent_guest}  is no more joinning us in dinner party`);
