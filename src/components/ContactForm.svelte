<script>
	import { fly } from "svelte/transition";

	let name = "";
	let email = "";
	let subject = "";
	let message = "";

	let loading = false;
	let success = false;
	let error = false;

	const formUrl = import.meta.env.ASTRO_PUBLIC_FORMSPREE_URL;

	async function handleSubmit() {
		if (loading || success) return;

		loading = true;
		error = false;

		try {
			const formData = new FormData(document.getElementById("contact-form"));

			const response = await fetch(formUrl, {
				method: "POST",
				body: formData,
				headers: {
					Accept: "application/json",
				},
			});

			if (response.ok) {
				success = true;

				name = "";
				email = "";
				subject = "";
				message = "";
			} else {
				error = true;
			}
		} catch (e) {
			error = true;
		} finally {
			loading = false;
		}
	}
</script>

{#if success}
	<div
		in:fly={{ y: -10, duration: 500 }}
		class="bg-[var(--color-bg-secondary)] border-l-4 border-[var(--color-accent)] text-text-main p-4 rounded mb-4 shadow-md"
	>
		<p class="font-medium">Message sent successfully!</p>
	</div>
{:else if error}
	<div
		in:fly={{ y: -10, duration: 500 }}
		class="bg-[var(--color-bg-secondary)] border-l-4 border-[var(--color-accent)] text-text-main p-4 rounded mb-4 shadow-md"
	>
		<p class="font-medium">
			Something went wrong. Please try again or contact me directly via LinkedIn.
		</p>
	</div>
{/if}

<form id="contact-form" on:submit|preventDefault={handleSubmit} class="space-y-4">
	<!-- Honeypot Field -->
	<input type="text" name="_gotcha" class="hidden" aria-hidden="true" />
	
	<div>
		<label for="name" class="block text-text-main mb-2">Name</label>
		<input
			type="text"
			id="name"
			name="name"
			required
			bind:value={name}
			class="w-full px-4 py-2 bg-bg-secondary border border-border-main rounded text-text-main focus:outline-none focus-visible-ring transition"
			disabled={loading || success}
		/>
	</div>

	<div>
		<label for="email" class="block text-text-main mb-2">Email</label>
		<input
			type="email"
			id="email"
			name="email"
			required
			bind:value={email}
			class="w-full px-4 py-2 bg-bg-secondary border border-border-main rounded text-text-main focus:outline-none focus-visible-ring transition"
			disabled={loading || success}
		/>
	</div>

	<div>
		<label for="subject" class="block text-text-main mb-2">Subject</label>
		<input
			type="text"
			id="subject"
			name="subject"
			required
			bind:value={subject}
			class="w-full px-4 py-2 bg-bg-secondary border border-border-main rounded text-text-main focus:outline-none focus-visible-ring transition"
			disabled={loading || success}
		/>
	</div>

	<div>
		<label for="message" class="block text-text-main mb-2">Message</label>
		<textarea
			id="message"
			name="message"
			rows="5"
			required
			bind:value={message}
			class="w-full px-4 py-2 bg-bg-secondary border border-border-main rounded text-text-main focus:outline-none focus-visible-ring transition resize-none"
			disabled={loading || success}
		></textarea>
	</div>

	<button
		type="submit"
		class="border border-accent text-accent hover:bg-accent hover:text-bg-main px-6 py-3 rounded transition font-medium focus-visible-ring btn-interactive"
		disabled={loading || success}
	>
		{#if loading}
			Sending...
		{:else if success}
			Sent!
		{:else}
			Send Message
		{/if}
	</button>
</form>