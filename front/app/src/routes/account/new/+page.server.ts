import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async () => {
    return fail(400, { message: "サインアップ処理が未実装" })
  }
}