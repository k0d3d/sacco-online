### Project Overview



# SACCO Online Savings and Loans
Sacco Online Savings and Loans allows members save money and borrow up to 2 times their savings when they need money. 
This service is available to Andela employees who want to take advantage of the Savings And Credits Corporation( SACCO) which has become
the defacto method for most salary earners to finance their short term and long term goals,



Tech Stack
-------------
- MongoDB
- ExpressJs
- Node.js
- React.js 
- GraphQL
- Jest / Ts-Jest
- SuperTest
- Prisma

*supertest is for sending http request during our test, jest ts-jest is for testing our typescript code.*

# How to get started.
The client-side / front-end is built in React.js using CreateReactApp. You can find the source files in `/client`. The server side source files is `/server` . You should make sure you have your .env variables set up correctly in `server/.env` file. Fill in values for.  

      MONGO_USER=xxx
      MONGO_PASSWORD=xxx
      MONGO_PATH="@127.0.0.1:27017/socco"
      PORT=8008

## Checklist
These are some of the things I attempted to achieve and cover while completing this task. 

- [x] User Stories @see [todo.todo](./todo "todo.todo")
- [ ] Business Logic
- [x] DB Models
- [x] Unit Tests with Jest
- [ ] Code Documentation
- [x] DDD and SoC