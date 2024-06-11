/** @type {import('./$types').Actions} */
export const actions = {
	save: async ({ request }) => {
		const data = await request.formData();
		const count = data.get('count');
		const notes = data.get('notes');

		console.log('count:', count);
		console.log('notes:', notes);

		return { success: true };
	}
};
