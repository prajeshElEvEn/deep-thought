# Deep Thought Backend Developer Assignment

This is a internship based assignment for a role in the company [Deep Thought](https://deepthought.education/).

## Assignment

The assignment is to create a backend API endpoints for a events section. The table below shows the endpoints that are required.

| Request Type | Base URL | API Endpoint | Payload | Description |
| --- | --- | --- | --- | --- |
| GET | /api/v3/app | /events?id=:event_id | - | Get an event by it's unique id |
| GET | /api/v3/app | /events?type=latest&limit=5&page=1 | - | Gets an event by it's recency and paginates results by page number and limit of events per page |
| Post | /api/v3/app | /events | name, files[image], tagline, schedule, description, moderator, category, sub_category, rigor_rank | Creates an event and returns the Id of the event i.e. created |
| PUT | /api/v3/app | /events/:id | name, files[image], tagline, schedule, description, moderator, category, sub_category, rigor_rank | Updates an event by it's unique id |
| DELETE | /api/v3/app | /events/:id | - | Deletes an event by it's unique id |

Data Model of Events

- type:"event"
- uid:18 (user id)
- name: Name of the event
- tagline: A proper tag-line for the event
- schedule: (Date + time) Timestamp
- description: String
- files[image]: Image file (File upload)
- moderator: A user who is going to host
- category: Category of the event
- sub_category: Sub category
- rigor_rank: Integer value
- attendees: Array of user Id's who is attending the event

## Requirements

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)

## Technologies Used

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
<!-- - [Multer](https://www.npmjs.com/package/multer)
- [Cloudinary](https://cloudinary.com/) -->

## Installation

- Fork and clone the [repository](https://github.com/prajeshElEvEn/deep-thought)

```bash
git clone <repo-url>
```

- Navigate to the project directory

```bash
cd deep-thought
```

- Install dependencies

```bash
npm install
```

- Create a `.env` file in the root directory of the project and add the following environment variables

```bash
PORT=3000
MONGO_URI=<your-mongodb-uri>
```

- Start the server

```bash
npm start
```

## Usage

- Open Postman and make a GET request to `http://localhost:3000/api/v3/app/events?type=latest&limit=5&page=1` to get the latest 5 events

- Make a POST request to `http://localhost:3000/api/v3/app/events` with the following payload to create an event

```json
{
  "name": "Event Name",
  "tagline": "Event Tagline",
  "schedule": "2021-08-20T12:00:00.000Z",
  "description": "Event Description",
  "moderator": "Moderator Name",
  "category": "Event Category",
  "sub_category": "Event Sub Category",
  "rigor_rank": 5
}
```

- Make a PUT request to `http://localhost:3000/api/v3/app/events/:id` with the following payload to update an event

```json
{
  "name": "Updated Event Name",
  "tagline": "Updated Event Tagline",
  "schedule": "2021-08-20T12:00:00.000Z",
  "description": "Updated Event Description",
  "moderator": "Updated Moderator Name",
  "category": "Updated Event Category",
  "sub_category": "Updated Event Sub Category",
  "rigor_rank": 5
}
```

- Make a DELETE request to `http://localhost:3000/api/v3/app/events/:id` to delete an event

## Author

[@prajesh](https://bit.ly/prajesheleven)
