import { connect } from "mongoose";

function getEnvironmentVariable(name: string): string | undefined {
  return process.env[name];
}

function establishConnection() {
  connect(
    getEnvironmentVariable("MongodbURI"),
    { useNewUrlParser: true, dbName: "anekdot" }
  );
}

export default establishConnection;
