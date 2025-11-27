<script>
    import { quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';

    export let navLinks = [];
    export let currentPath = '/';

    let isOpen = false;


    const isActive = (href) => {
        if (href === '/') {
            return currentPath === '/';
        }
        return currentPath.startsWith(href);
    };

    function toggleMenu() {
        isOpen = !isOpen;
    }


    const closeMenu = () => {
        isOpen = false;
    }
</script>

<button 
    on:click|stopPropagation={toggleMenu} 
    class="md:hidden p-2 rounded-lg text-text-main hover:text-accent transition focus-visible-ring z-[60] relative h-10 w-10 flex items-center justify-center"
    aria-label="Toggle navigation menu"
    aria-expanded={isOpen}
>

    {#if !isOpen}
        <svg in:fade={{duration: 150}} out:fade={{duration: 150}} 
             xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    {/if}

    {#if isOpen}
        <svg in:fade={{duration: 150}} out:fade={{duration: 150}} 
             xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    {/if}

{#if isOpen}
    <div 
        class="fixed inset-0 bg-bg-main md:hidden z-50 overflow-y-auto" 
        transition:fly={{ x: 300, duration: 300, easing: quintOut }}
    >
        <nav class="flex flex-col pt-24 space-y-2 px-6">
            {#each navLinks as link}
                <a 
                    href={link.href}
                    on:click={closeMenu}
                    class:active-link={isActive(link.href)}
                    class="text-2xl py-3 px-4 rounded-lg transition font-semibold w-full text-left focus-visible-ring"
                >
                    {link.name}
                </a>
            {/each}
        </nav>
    </div>
{/if}

<style>

    .active-link {
        /* Mobile Bubble: Secondary background fill + Accent Text */
        background-color: var(--color-bg-secondary);
        color: var(--color-accent);
    }

    nav a:not(.active-link) {
        color: var(--color-text-main);
    }
    nav a:not(.active-link):hover {
        color: var(--color-accent-hover);
    }
</style>