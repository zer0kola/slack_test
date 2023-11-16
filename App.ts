import { config } from "dotenv";
import { WebClient } from "@slack/web-api";
config();

const token = process.env.SLACK_TOKEN;
const userId = process.env.SLACK_USER_ID;
const web = new WebClient(token);

async function checkUserStatus() {
  try {
    const response: any = await web.users.getPresence({ user: userId });
    console.log("response", response);
    if (response.presence === "active") {
      // await web.chat.postMessage({
      //   channel: "#general",
      //   text: "online",
      // });
      console.log("online");
    }
  } catch (error) {
    console.error(error);
  }
}

setInterval(checkUserStatus, 5000);
