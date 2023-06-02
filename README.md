# Deep Thought Backend Developer Assignment

This is a internship based assignment for a role in the company [Deep Thought](https://deepthought.education/).

View documentation [here](https://www.taskade.com/d/H9niqMPw1PG9VTzf?share=view&view=SF1iNCfMm4kTrbgC&as=list).

Check out the [video demo](https://drive.google.com/file/d/1pMr2YrDj04HkLmp0HkTx5doL0w0fAkPD/view?usp=sharing).

## Assignment

### 1. The assignment is to create a backend API endpoints for a events section. The table below shows the endpoints that are required

| Request Type | Base URL | API Endpoint | Payload | Description |
| --- | --- | --- | --- | --- |
| GET | /api/v3/app | /events/:id | - | Get an event by it's unique id |
| GET | /api/v3/app | /events/:limit/:page | - | Gets an event by it's recency and paginates results by page number and limit of events per page |
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

### 2. Create an API documentation

- Description of the API Endpoint are given [here](https://docs.google.com/spreadsheets/d/1IBR6dIujGXyXPKFZxYW3MVwyjs2Wr2JLrndM9ZBXc4A/edit#gid=2081234293)
- The documentation can be found [here](https://docs.google.com/document/d/1i3cruwRsegie01IVqX_1c6perDDcN-MWvp6u4reZ2JE/edit?usp=sharing).

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

<!-- - Create a `.env` file in the root directory of the project and add the following environment variables

```bash
PORT=3000
MONGO_URI=<your-mongodb-uri>
``` -->

- Start the server

```bash
npm run server
```

## Author

[@prajesh](https://bit.ly/prajesheleven)
