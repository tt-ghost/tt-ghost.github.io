import games from "~/utils/games";

export default defineEventHandler((event) => {
  const name = getRouterParam(event, "name");

  return games().find((item) => item.name === name);
});
