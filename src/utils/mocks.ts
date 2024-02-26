import MockAdapter from "axios-mock-adapter";
import Api from "../service/Api";
import { addToListResult, list } from "./tests.data";

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(Api);
  mock
    .onGet(`account/${process.env.REACT_APP_ACCOUNT_ID}/watchlist/movies`)
    .reply(200, list);

  mock
    .onPost(`account/${process.env.REACT_APP_ACCOUNT_ID}/watchlist`)
    .reply(201, addToListResult);
};

export { mockNetWorkResponse };
