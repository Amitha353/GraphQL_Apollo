# GraphQL_ApolloHistory

- 2012, Facebook started the GraphQL project to overcome data fetching issues in their native mobile platform.
- Moved the focus of development to the client apps.
- GraphQL was open-sourced in 2015. Ever since then, there has been huge community involvement.
"GraphQL came into existence due to the need for better flexibility and efficiency in client-server communication".

What is GraphQL?

- GraphQL is a query language for your API.
- It is been developed as a more flexible and efficient alternative to REST.
- Before GraphQL
	- We hit an API endpoint from the client and the API returns a  massive JSON object with a lot of things in the response.
	- 
- With GraphQL
	- Instead of hitting a URL and getting a massive JSON object, GraphQL lets you write a query to request for exactly the data that you want and receive back with just that.
	- 
	  
	- Provides clients the power to ask for exactly what they need and nothing more.
	- GraphQL APIs get all the data your app needs in a single request.
	- Language agnostic : Plenty of client and server libraries are available.
- Who is using GraphQL
	- Facebook, Paypal, Twitter, yelp, expedia, shopify and Github.

REST vs. GraphQL


Advantages of GraphQL

- Increase multi-team productivity - frontend developers need not depend on backend developers for complete APIs. Teams can work in parallel and increases multi-team productivity.
- Rapid product development - Increased productivity among developers leads to a speed-up in the product development. With GraphQL is is possible to complete the UI development without touching the backend. The Client team can code with mock PAI from day one.
- Improved Performance Web and Mobile Applications - With reduction in multiple roundtrips to fetch data and with no reason for over-fetching data, GraphQL is naturally more efficient. This improves performance of your API calls, hence speeding up your applcation.
- Reduced Cost in Testing and Deployment - GraphQL APIs need to be tested only when there is a change in the schema or if there is a fresh schema.
- 
---
GraphQL: Core Concepts

"GraphQL is a specification and a query language for your API".
- Types
	- GraphQL has a strongly typed schema.
	- This schema acts as contract between the client and the server.
	- GraphQL Scalar Types: Primitive Datatypes in GraphQL



- Two other types you can use in GraphQL Schema
	- Query and Mutation Types.
		- Every GraphQL service has a query type .
		- It may or may not have a mutation type. They act as an entry point into the schema.
		- Query - represents what the client is asking for.
		- Mutation - When they add or delete data from the API.
	- This acts as an entry point into the schema.
	- Query and Mutation types are the same as any other GraphQL object type.




Queries -Fields
- GitHub's GraphQL Explorer makes use of your real, live, production data on GitHub.
- https://docs.github.com/en/graphql/overview/explorer
- The first piece in a GraphQL query is that you're going to query for fields.
- A GraphQL query is all about asking for specific fields on objects.
- Query for a Field called Viewer and within that login:


Queries - Arguments
- In GraphQL you can pass arguments to fields. Every  field and nested object can get its own set of  arguments. This gets rid of multiple PAI fetches.


Queries - Alias
- You can't query for the same field with different arguments. Hence you need aliases.
- They let you rename the result of the field with anything you want.

Queries - Fragments
- Fragments are GraphQL's reusable units. They let you build sets of fields and then include them in multiple queries.
- Fragments can be thought as functions - reusable units, that we can plug these functions all over the code.

Queries - Operation Name
- A meaningful and explicit name for your operation. Think of it like a function name in a programming language.



Queries - Variables
- Arguments to fields can be dynamic. GraphQL uses variables to factor dynamic values out of the query, and pass them as a separate dictionary.

Mutations
- Mutations are used to make changes to the data (Create, update, delete data).
- GraphQL assumes side-effects after mutations and changes the dataset after a mutation.
- While query fields are executed in parallel, mutation fields run in series one after the other.


---
Why GraphQL?

- Declarative Data Fetching
	- Avoid round-trips to fetch data.
	- Queries can be aggregated to ask for exactly what you want in one trip.
	- No more over-fetching or under-fetching of data.
	- You specify exactly the data you need and GraphQL gives you exactly what you asked for.




- Strongly Typed
	- GraphQL is a strongly-typed language, and its schema should have types for all objects that it uses.
	- The schema serves as a contract between the client and server.
	- Relies on a query language with a type system.

- Superior Developer Experience
	- Flexibility
		- GraphQL offers a lot of flexibility
		- No versioning
		- Non-breaking changes
	- Teams can work independently.
- 
- Modern Ecosystem and Tooling
	- Tools like GraphiQL IDE provide excellent developer experience.
	- Hours of documentation time saved with in-built self-documentation in the schema.
	- Plenty of GraphQL clients for every UI framework (Apollo, Relay).
	- As GraphQL is Language agnostic - 
- Cost-effective
- Growing Community
---
GraphQL Ecosystem and Tooling


GraphQL Client
- Handles sending requests / queries to the server and receiving the response (JSON) from the server.
- Integrates with your view components and updates the UI.
- Caching Query Results.
- Error Handling and schema validation.
- Local state management and caching
- Pagination.
- Example: Apollo Client, Relay - Facebook - React;

GraphQL Server
- A GraphQL server receives the query from the client and responds back.
- Resolver function -> It is a function that resolves a value for a type/field in the GraphQL Schema.
- Write API ( schema and resolver functions).
- Network Layer
	- The queries from the client need to be transported to the server through the network over HTTPS.
- GraphQL Execution Engine
	- Parses the query from the client.
	- Validating the schema.
	- Returns the JSON response back.
	- GraphQL has an execution algorithm to determine how these queries are transformed into results.
	- The query that is received is traversed field by field executing resolver for each field, at the end the execution algorithm puts everything together into the correct shape for the results and returns that.
- Batch Resolving
	- By making batch requests, we ensure that we do only one fetch to the back-end .
	- This manner we do not accidently make multiple  requests for the same item over and over again.

- Popular GraphQL Server Libraries
	- Apollo Server
	- Express GraphQL
	- GraphQL Yoga

Database to GraphQL Server
- Prisma
- 
- 
- Prisma sits between the GraphQL Server and Database. It bridges the gap between your database and GraphQL resolvers.
- Prisma works with both SQL and NoSQL databases.
- 
Tools:





---
Consuming a GraphQL API with Apollo Client and React

- GraphQL
  
	- GraphQL is a query language for APIs. It gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
- Apollo Client
	- Leverages the power of GraphQL API to handle data fetching and management.
	- 
- Why Apollo Client?
	- Declarative data fetching
	- Great fit for modern UI frameworks  (React, Vue, Angular, etc).
	- Intelligent caching
	- Compatibility across any build setup and GraphQL API.
	- Modern toolds and developer experience.
	- Active community
- Apollo Tools
	- Apollo Client Devtools, apollo-codegen, eslint-plugin-graphql.
	- App Sync AWS, Apollo Storybook decorator.
---
- Install App - React Application - localhost:1337
- Install API - Apollo GraphQL Server - localhost:4000

- Integrate Apollo Client - 2 Packages
	- npm install @apollo/client graphql (Version 3.0)
		- apollo/client - contains everything you need to setup Apollo client (Version 3.0)
		- graphql - Package provides logic for parsing GrapQL queries.
- Create an instance of the Apollo Client
	- Import the ApolloClient and the InMemoryCache from apollo/client
	- create a new instance of the ApolloClient
	- To this instance provide it the GraphQL server URL.
	- 
- Apollo Provider Component
	- Connect Apollo client to React with Apollo Provider Component.
	- It wraps the React app and places the client on the context, allowing access from all components.
	- 
- Integrate into the code
	- index.js - begin the application with the app component.
	- App.js -> initialize the Apollo Client

- Apollo.config.js file and VS code extention.
	- For the VS code extention to work, it relies on the knowledge off out graphQL URL schema.
	- 
	- VS code Extentions -> Apollo GraphQL
---
Exploring the GraphQL schema with Introspection

Introspection

	- GraphQL provides a way for clients to discover the resources that are available in the GraphQL API schema via introspection.
	- The strong typed system in GraphQL gives you the ability to query and understand the graphic URL API schema in detail.
	- GraphQL URL provides a way for clients to discover the resources that are available in the graphQL URL API schema.
- Why Introspection is Useful?
	- Imagine you are building a client application and have to consume a brand new API to build the frontend.
	- We typically have to go over plenty of documentation to understand the API.
	- In GraphQL - can provide clients  a view of the available resources in the schema.
	- This is very beneficial for clients consuming the API client or front teams can get a complete understanding of what is available to them in the schema and can plan accordingly.
	- Ability to build  awesome tools (GraphiQL, GraphQL playground).
	- Provide features such as - self documentation - autocomplete, code generation, etc.
Retrieve Schema's Type with introspection



- 
Retrieve Supported Queries and Mutations

- Queries -> query data from the server.
  
- Mutations -> To add or update the data.



Query Property Types

- Interested in a particular type -> __type



Query Property Types

- How to use the introspection system to query for directives in the schema.
- Directives provide clients the flexibility to modify the results off queries based on the criteria that the clients provide.
- 
- Queries with Directives


Apollo codegen to introspect schema

	- Using Apollo client there is a simple way to create a JSON introspection DUMP file for a given grapQL schema.
	- It will contain all the information through introspection.
- Install the Apollo codegen to introspect schema
	- npm install apollo-codegen
- Generate the JSON introspection Schema dump file
	- apollo-codegen introspect-schema http://localhost:4000/graphql --output schema.json
- Input schema can be fetched from a remote graphQL server or from a local file.
---
Queries - Retrieve Data from GraphQL

Queries
- Provides clients the power to ask for exactly what they need and nothing more.
- You can combine all the data you need in a single request and reduce the number of round trips.
- Queries are tailor made per client.

UseQueryHook
- The "useQuery" is a React hook, which is the API for executing queries in an Apollo application.
- The Apollo useQuery returns result object with error and loading as properties.

Query Directives
- Directives help you execute dynamic queries.
---
Mutations - Modify and Update GraphQL Data

- Mutations can create, update and delete data.
- Mutation fields run in series one after the other while queries run in parallel.
	- Since graphQL assumes that mutation causes a side effect.
	- To avoid any conflict, the mutation fields run one after the other.
- Once, we done with the mutation, need to ensure the Apollo cache is updated with the latest data.

useMutation Hook
- The "useMutation" is a React hook, which is the API for executing GraphQL mutations in an Apollo application.
- It makes executing mutations very simple and intuitive.
- The useMutation hook takes in the add to do mutation function as a parameter
	- The useMutation hook returns two parameters
		- mutate function - A mutate function that you can call at any time to execute the mutation.
	- Returns an object with fields that represent the current status of the mutation's execution.


---
Building a GraphQL API with Apollo Server

---
What GraphQL Brings?
- Customize Return Values - Pick only the data you need.
	- No wasted data sent over the wire.
- Multiple Resources
	- You can request multiple resources in a single http call.
What is Apollo?
- GraphQL is a set of rules.
- Apollo is a node.js implementation of GraphQL that does a lot of heavy lifting so we can just get to the business needs.
- npm install apollo-server@2.12

GraphQL Schema
- A schema allows the client to understand what properties are available on your api.

Apollo Playground
- Apollo comes with a graphical, interactive, in-browser GraphQL IDE.

Introspection
- The ability to query which resources are available in the current API schema. Given the API, via introspection, we can see the queries, types, fields and directives it supports.

Resolving Queries
- Resolver 
	- A function that is responsible for populating the data for a single field in your schema.
- Resolver Map
	- A big object that holds all of those.
	- Type -> Field -> Resolver functions.
- Field Level Directives
	- @include(if: Boolean!)
		- Calls the resolver for the annotated field if the boolean is true.
	- @skip(if: Boolean!)
		- The opposite of include. This will skip the field if the boolean is true.
	- @deprecated(reason: String)
		- Mark a field as deprecated with a reason for its future removal.
- Data source - it is a class.


- In production environment - by default Playground is disabled
- Configurations to be added during production deployment
```
"nodemonConfig": {
    "env": {
      "NODE_ENV": "production"
    }
  }
```






---
