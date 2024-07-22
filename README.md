# Learning react

- Header
  - logo
  - list
    Body
  - search
  - Card
    Footer
  - contact us
  - Copyright
  - Address

# Monolithic vs Microservices architecture

- Monolithic :- A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. This monolith is independent from other applications. The problem is that any change made to a service in the architecture requires the whole code to be redeployed which has performance issues. Monolith can be convenient for a projects early stage but as the code base grows it becomes very difficult to handle.

Disadvantages of a monolithic architecture

Slower development speed – A large, monolithic application makes development more complex and slower.

Scalability – You can’t scale individual components.

Reliability – If there’s an error in any module, it could affect the entire application’s availability.

Barrier to technology adoption – Any changes in the framework or language affects the entire application, making changes often expensive and time-consuming.

Microservices :- A microservices architecture, also simply known as microservices, is an architectural method that relies on a series of independently deployable services. These services have their own business logic and database with a specific goal.Updating, testing, deployment, and scaling occur within each service. Microservices decouple major business, domain-specific concerns into separate, independent code bases.

Disadvantages of microservices:-

Development sprawl – Microservices add more complexity compared to a monolith architecture, since there are more services in more places created by multiple teams. If development sprawl isn’t properly managed, it results in slower development speed and poor operational performance.

Exponential infrastructure costs – Each new microservice can have its own cost for test suite, deployment playbooks, hosting infrastructure, monitoring tools, and more.

Added organizational overhead – Teams need to add another level of communication and collaboration to coordinate updates and interfaces.

Each of this Microservices are deployed on different ports and they can talk to each other by making a call to the API which we will see now.

there are two ways to achieve this

page loads => makes api call => waits for data => when data comes page renders.

page loads => page renders = > make call for API and get data.

CORS:-
while making an API call from your local host to swiggy api the call is blocked by the browser due to call made to a different domain name. You can solve this by downloading a browser extension.

# Routing

---Client side routing -> we have implemented this in our app it does not make a different network call for different pages all the components are already loaded into our app, all it does is just shift some components.

---Server side routing -> In this type of routing every time a new page is loaded the whole page is reloaded.

# Lazy Loading(Dynamic loading, chunking, Dynamic import, code splliting, on demand loading)

-- used in websites with a large number of components, some major components are loaded on demand.
