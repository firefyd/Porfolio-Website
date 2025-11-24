<script>
    // ThemeToggle component import is removed since it's no longer used here.

    // State to control the visibility of the mobile menu
    let isOpen = false;

    // Data defined in the Astro component will be passed as a prop
    export let navLinks;

    function toggleMenu() {
        isOpen = !isOpen;
    }

    // SVG for Hamburger icon (3 lines)
    const HamburgerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;

    // SVG for Close icon (X)
    const CloseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
</script>

<div class="flex items-center md:hidden">
    <button 
        on:click={toggleMenu} 
        class="p-2 ml-2 rounded-md text-text-secondary hover:text-text-main hover:bg-bg-secondary transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
    >
        {@html isOpen ? CloseIcon : HamburgerIcon}
    </button>
</div>

<ul class="hidden md:flex items-center gap-8">
    {#each navLinks as link}
        <li>
            <a 
                href={link.href}
                class="text-text-secondary hover:text-text-main transition font-medium"
            >
                {link.name}
            </a>
        </li>
    {/each}
    </ul>

{#if isOpen}
    <nav 
        class="fixed inset-0 top-16 bg-bg-main p-4 z-40 transition-transform duration-300 transform md:hidden"
        aria-label="Mobile Navigation"
    >
        <ul class="flex flex-col gap-4">
            {#each navLinks as link}
                <li>
                    <a 
                        href={link.href}
                        on:click={toggleMenu} 
                        class="block py-2 text-xl text-text-main hover:text-accent-hover transition"
                    >
                        {link.name}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
{/if}