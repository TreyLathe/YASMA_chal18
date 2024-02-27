# YASMA
A social media app for friends to share thoughts and reactions

Table of Contents:
- [User Story/Challenge Goal](#user-storychallenge-goal)
- [Resources Used & Credits](#resources-user--credits)
- [Relevant Links](#relevant-links)
- [Screenshots & Screencasts](#screenshots--screencasts)
- [Usage and Comments](#usage--comments)
- [Future Direction and Contributing](#future-directions-and-contributing)
- [Tests](#tests)

## USER STORY/CHALLENGE GOAL:
Create an API for a social network that uses a NoSQL database
so that my website can handle large amounts of unstructured data.

## RESOURCES USED && CREDITS:
- Class instruction and office hours w/ Drew Huong and Kyle , specifically for assistance understanding managing complexity of all the code! etc. 
- Tutor session w/ Connor to better understand mongoDB terminology
- MDN and W3School sections on mongoDB and various functions like aggregates, virtual, etc..
- AI assistence with figuring out why routes for add reaction was wrong
- mongoDB documentation 

Technologies: mongoDB, mongoose, express, javascript


## RELEVANT LINKS:
- Repository: https://github.com/TreyLathe/YASMA_chal18

- Deployed Site:  N/A

## SCREENSHOTS &&/|| SCREENCASTS:
Screencast: https://app.screencastify.com/v3/watch/ob1C9oIK5owRBWko9Lr3


## USAGE && COMMENTS:
GIVEN a social network API
>WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

Server is started when typing "node index.js" in top directory. 

>WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

Get routes for all and single thoughts and users pulls all information of those including friends and friend count, reactions and reaction counts

>WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

Post, put and delete routes work to successfully create, update and delete users and thoughts from the database.

>WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

Post and Delete routes are successful in adding and removings users and friends of other users. 
Post and Delete routes are successful in creating and deleting reactions to thoughts. 

