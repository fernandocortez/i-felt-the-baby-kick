import { turso } from "$lib/server/turso.server";

/** @type {import('./$types').Actions} */
export const actions = {
	save: async ({ request }) => {
		const data = await request.formData();
		const count = data.get('count');
		const notes = data.get('notes');

		const timestamp = new Date().toISOString();
		await turso.execute({
			sql: 'INSERT INTO kicks (timestamp, kick_count, notes) VALUES (:timestamp, :count, :notes);',
			args: { timestamp, count, notes }
		});

		return { success: true };
	}
};
