import { Airgram } from "@airgram/web";
import { Auth } from "airgram/components/Auth"; // We borrow the component only for demonstration purposes.
import {
  apiHash,
  apiId,
  jsLogVerbosityLevel,
  logVerbosityLevel,
} from "./config";

const airgram = new Airgram({
  apiId,
  apiHash,
  jsLogVerbosityLevel,
  logVerbosityLevel,
});

airgram.use(
  new Auth({
    code: () => window.prompt("Please enter the secret code:") || "",
    phoneNumber: () => window.prompt("Please enter your phone number:") || "",
    password: () => window.prompt("Please enter your password:") || "",
  })
);

airgram.api
  .getMe()
  .then((res) => console.log("ME:", res))
  .catch((err) => console.log(err));

airgram.api
  .getContacts()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

airgram.use(async (ctx, next) => {
  if ("request" in ctx) {
    console.log("🚀 [Airgram Request]:", ctx.request);
  } else if (ctx.update) {
    console.log("🚀 [Airgram Update]:", ctx.update);
    if (ctx.update._ === "updateUser") {
      let contact = ctx.update.user as any;
      let contactObj = {
        id: contact?.id as number,
        firstName: contact?.firstName as string,
        lastName: contact?.lastName as string,
        phoneNumber: contact?.phoneNumber as string,
      };
      let textMsg = "This is a test" as any;
      if (contactObj.firstName == "somename") {
        airgram.api
          .sendMessage({
            chatId: contactObj.id,
            inputMessageContent: textMsg,
          })
          .then(() => console.log("SENT"))
          .catch(() => console.log("ERROR"));
      }
      let contactString: string = `${contactObj.firstName} ${contactObj.lastName}: +${contactObj.phoneNumber}`;
      let list = document.getElementById("contacts") as HTMLElement;
      let newItem = document.createElement("li") as HTMLLIElement;
      newItem.textContent = contactString;
      list.appendChild(newItem);
    }
  }
  await next();
  if ("request" in ctx) {
    console.log("🚀 [Airgram Response]:", ctx.request.method, ctx.response);
  }
});

export { airgram };
