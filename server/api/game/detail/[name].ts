import { defaultGames } from "@/utils/games";

const games = defaultGames();

export default defineEventHandler((event) => {
  const name = getRouterParam(event, "name");

  return games.find((item) => item.name === name);
});
