// @ts-nocheck
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		id: `${params.id}`,
		name: `${params.name}`
	};
}
