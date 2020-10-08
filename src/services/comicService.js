import axios from "axios";
import { between } from "../utils/randomNumber";

const axiosBase = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://xkcd.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const comicService = {
  getRandomComic: async () => {
    try {
      const randomId = between(1, 600);
      const res = await axiosBase.get(`/${randomId}/info.0.json `);
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  },
};
