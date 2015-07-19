# Profiling Portal on Sails

A Sails.Js Application which allows users to do the following:

-> Create an Account<br>
-> Sign In to view profile<br>
-> Edit their Profile<br>

In the admin view all the users registered can be seen along with their details such as email,name, ID, password etc.
The admin will have the option of updating,deleting and adding new users and existing users.
Non admin users will be able to update only their own profiles. Also, they won't be able to view the list of other users like the admin.

The application uses sessions to avoid the users from signing in again and again.To increase security of the accounts the passwords are being stored in an encrypted form and users are not being allowed to view their passwords. Later on, an option will be given to the user to access and change his/her password.

Currently, the sessions expire after 1 day which will be later modified to a value set by the user.

<b>Note: To use this application, clone this repository and then install all the node modules which are being used in this application.</b>
