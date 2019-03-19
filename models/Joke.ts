import { Document, Schema, Model, model } from "mongoose";

export interface JokeModel extends Document {
  text: string;
  author?: string;
}

export const JokeSchema: Schema = new Schema({
  text: String,
  author: String
});

export const Joke: Model<JokeModel> = model<JokeModel>("Joke", JokeSchema);
