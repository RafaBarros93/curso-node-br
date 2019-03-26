const ContextStrategy = require("../src/db/strategy/base/ContextStrategy");
const MongoDb = require("../src/db/strategy/mongodb");

const context = new ContextStrategy(new MongoDb());

context.create();
