import { defaultGames } from "@/utils/games";

export default defineEventHandler((event) => {
  return {
    list: defaultGames(),
  };
});
