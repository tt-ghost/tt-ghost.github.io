import games from "~/utils/games";

export default defineEventHandler((event) => {
  return {
    list: games(),
  };
});
