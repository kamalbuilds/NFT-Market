require("dotenv").config();
import * as express from "express";
import { setlog } from "./Util";

const router = express.Router();

export const initApp = async () => {
  setlog("initialized Application");
};

router.post("/rpc", async (req: express.Request, res: express.Response) => {
  const { jsonrpc, method, params, id } = req.body as RpcRequestType;
  let response = {} as { error?: number; result?: any };
  if (jsonrpc === "2.0" && Array.isArray(params)) {
    const func = method_list[method];
    if (func) {
      try {
        const ip = String(
          req.headers["x-forwarded-for"] || req.socket.remoteAddress
        );
        response = await func("", null, ip, params);
      } catch (error: any) {
        setlog(req.originalUrl, error);
        if (error.code === 11000) {
          response.error = 19999;
        } else {
          response.error = 32000;
        }
      }
    } else {
      response.error = 32601;
    }
  } else {
    response.error = 32600;
  }
  res.json({ jsonrpc: "2.0", id, ...response });
});

const method_list = {
  "get-account": async (cookie, session, ip, params) => {
    /* const user = await getUserFromUID(session.uid)
		if (typeof user==='number') return {error:user}
		const uid = user.uid
		const profile = await getProfile(user)
		const notices = [] as NoticeType[]
		for (let i of user.notices) {
			if (i.viewed) continue
			notices.push(i)
		}
		const account = {
			uid,
			firstname:	user.firstname || '',
			lastname:	user.lastname || '',
			email:		user.email || '',
			phone:		user.phone || '',
			lastLogged:	user.lastLogged,
			lastIP:		user.lastIp,
			isVendor:	user.isVendor,
			level:		user.level || 0,
			profile,
			twofactor:	user.twofactor || {},
			notification: user.notification || {},
			balances:	user.balances || {},
			wallets:	user.wallets || {},
			notices
		} as AccountType */

    return { result: true };
  },
} as {
  [method: string]: (
    cookie: string,
    session: SessionType,
    ip: string,
    params: Array<string | number | boolean>
  ) => Promise<{ error: number } | { result: any }>;
};

export default router;
