# Backend Challenge

## To Run

- Install dependencies: `npm i`
- Run Server: `npm start` or `node index.js`
- Create user `http://localhost:5000/users/`
  > {
  > "name": "User",
  > "email": "test@testing.com",
  > "username": "TestUser",
  > "password": "testpassword"
  > }
- Create event `http://localhost:5000/events/`
  > {
  > "event": "Global Hack-a-thon",
  > "startTime": "2022-01-04T15:00:00Z",
  > "endTime": "2022-01-07T00:00:00Z"
  > }
- Create reservation `http://localhost:5000/reservation/`
  > {
  > "user_id": (id of the user you created)
  > "event_id": (id of event you want to attend)
  > }
- Get reservations `http://localhost:5000/reservation/`
  > This will return all reservations - not set up for specific users.
