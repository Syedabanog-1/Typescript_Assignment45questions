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
var guest_list = ['Amina', 'Khadija', 'Fatima'];
var message = "You're invited to dinner party";
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear miss ".concat(guest_list[i], " ").concat(message, " \n\n My pleasure\n\n \n\nThank you\n\n"));
}
var absent_guest = 'Amina';
var new_guest = 'zainab';
guest_list[0] = new_guest;
for (var ind = 0; ind < guest_list.length; ind++) {
    console.log("Dear Miss ".concat(guest_list[ind], ": ").concat(message, " \n\n Thank you\n\n"));
}
console.log("Miss ".concat(absent_guest, "  is no more joinning us in dinner party"));
