import express from "express"
import { graphqlHTTP } from "express-graphql"

import schema from "./data/schema.js"
import resolvers from "./data/resolver.js"


const app = express()





app.get("/", (req, res) => {
  res.send("Graphql is amazing")
})

const root = resolvers

app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8000, () =>{
  console.log("server is up and running  localhost:8000/graphql")
})