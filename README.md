GHL -- GO HIGH LEVEL

------------------------------------------------------------------

The purpose of this tool(GHL) is to make appointment booking between people a lot easier.


REQUIRMENT
------------------

NodeJs
Express FrameWork
googleapis
Mongodb with Mongoose

---------------------------------------------------------------------


Comment to run the project:

npm start

----------------------------------------------------------------------


Setup Instruction
-------------------------

git clone  -- Clone the project into your system
git pull

npm install -- To install all node modules
npm start


--------------------------------------------------------------------------


API
------------------------------

This consist of 3 API's

1. Free Slots:

There is an api to find available slots of the Doctor.

Method: GET
Url: '/api/timeslots'

It returns all the free slots avaliable for the given date.



2. Create Event:

This api used to create even by Doctor.

Method: POST
Url : '/api/create_event'

Whatever date we pass it will create the event and store in mongo db in 'Event' collection.

If the event already exists for that time, will return status code 422 or just stores it and return with status 200.



3. Get Events:

This api is to return all the created events.


Method: GET
Url: '/api/event'

Returns all events between given startDate and EndDate