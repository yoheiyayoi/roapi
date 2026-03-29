import { Elysia } from "elysia";
import { getAvatarBust } from "./roblox";

export default new Elysia()
  .get("/", "Hello!")
  .get("/helloworld", () => "Hello World by Seal!") // for fun btw
  .get("/avatar-bust/:id", async ({ params: { id } }) => {
    return await getAvatarBust(Number(id));
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
