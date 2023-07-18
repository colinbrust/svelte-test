<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { Footer, FooterLinkGroup, FooterLink, ImagePlaceholder, TextPlaceholder, Skeleton, FooterCopyright, FooterBrand } from 'flowbite-svelte'
    import logo from '$lib/images/MCO_logo.png';
    import "../app.postcss";

    let toggle;
    let hidden;
</script>

<Navbar let:hidden let:toggle rounded color="form">
<NavBrand href="/">
    <img src={logo} class="mr-3 h-6 sm:h-9" alt="MCO Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MCO Climate Data Explorer</span>
</NavBrand>
<NavHamburger on:click={toggle} />
<NavUl {hidden}>
    <!-- <NavLi href="/" active={true}>Home</NavLi> -->
    <NavLi href="/historical">Historical Trends</NavLi>
    <NavLi href="/future">Climate Projections</NavLi>
    <NavLi href="/report">Generate Report</NavLi>
</NavUl>
</Navbar>


<Footer class="absolute bottom-0 left-0 z-20 w-full">
    This project sponsored by x, y, z.
</Footer>

<div class="container">
<!-- This is where the content of each page will be rendered -->
<slot></slot>
</div>