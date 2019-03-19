import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Joke } from "../models/Joke";
import establishConnection from "../models/establishConnection";

const HTTP_OK_STATUS_CODE = 200;
const HTTP_INTERNAL_SERVER_ERROR_CODE = 500;
const JSONHeader = { "Content-Type": "application/json; charset=utf-8" };

establishConnection();

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");

  try {
    const jokes = await Joke.find().exec();

    context.res = {
      status: HTTP_OK_STATUS_CODE,
      headers: JSONHeader,
      body: jokes
    };
  } catch (error) {
    context.res = {
      status: HTTP_INTERNAL_SERVER_ERROR_CODE,
      headers: JSONHeader,
      body: { error: "INTERNAL SERVER ERROR" }
    };
  }
};

export default httpTrigger;
