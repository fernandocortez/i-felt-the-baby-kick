import { turso } from "$lib/server/turso.server";

export async function load() {
  const { rows } = await turso.execute("SELECT * FROM kicks ORDER BY timestamp DESC;");

  return { rows };
}
