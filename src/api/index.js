import { NetworkLockedTwoTone } from "@material-ui/icons";
import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "78e68ea7d4mshd9c8f591f39a42dp108425jsn503e49e82498",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
