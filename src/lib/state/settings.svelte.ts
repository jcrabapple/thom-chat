import { createPersistedObj } from '$lib/spells/persisted-obj.svelte';

export const settings = createPersistedObj('settings', {
	modelId: undefined as string | undefined,
	webSearchMode: 'off' as 'off' | 'standard' | 'deep',
	reasoningEffort: 'low' as 'low' | 'medium' | 'high',
});
