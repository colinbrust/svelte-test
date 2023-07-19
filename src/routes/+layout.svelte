<script lang='ts'>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, Chevron} from 'flowbite-svelte';
    import { Footer, FooterLinkGroup, FooterLink, FooterCopyright, FooterBrand, DarkMode } from 'flowbite-svelte'
    import logo from '$lib/images/MCO_logo_icon_only.png';
    import "../app.postcss";

    const main_url: string = "https://climate.umt.edu";
    const api_url: string = "https://mesonet.climate.umt.edu/api/v2/docs/"

    let activeTab: string = "home";
    let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';

    function setActiveTab(tab: string) {
        console.log(tab)
        activeTab = tab;
    };
</script>

<Navbar let:hidden let:toggle color="form" class=" bg-gray-300 w-full" on:click={() => setActiveTab('home')}>
<NavBrand href="/">
    <a href="/" on:click={() => setActiveTab('home')} class="inline-block">
        <img src={logo} class="mr-3 h-6 sm:h-9 inline-block" alt="MCO Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white inline-block">Montana Mesonet</span>
    </a>
</NavBrand>
<NavHamburger on:click={toggle} />
<NavUl {hidden}>
    <!-- <NavLi href="/" active={true}>Home</NavLi> -->
    <NavLi href="/dashboard" active={activeTab === "dashboard"} on:click={() => setActiveTab('dashboard')}>Mesonet Dashboard</NavLi>
    <NavLi href="/download" active={activeTab === "download"} on:click={() => setActiveTab('download')}>Data Downloader</NavLi>
    <NavLi id="about" class="cursor-pointer" active={activeTab === "about"}><Chevron aligned>About</Chevron></NavLi>
    <Dropdown triggeredBy="#about" class="w-44 z-20">
        <DropdownItem href="/about/team" on:click={() => setActiveTab('about')}>Mesonet Team</DropdownItem>
        <DropdownItem href="/about/background" on:click={() => setActiveTab('about')}>Background</DropdownItem>
        <DropdownItem href="/about/host" on:click={() => setActiveTab('about')}>Host a Station</DropdownItem>
    </Dropdown>
    <NavLi><DarkMode {btnClass} /></NavLi>
</NavUl>
</Navbar>

<div class="bg-gray-500 w-full mx-0">
    <!-- This is where the content of each page will be rendered -->
    <slot></slot>
</div>


<Footer footerType="socialmedia" class="bg-gray-200 w-full">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <FooterBrand
          href="https://climate.umt.edu/"
          src={logo}
          alt="MCO Logo"
          name="Montana Climate Office"
          spanClass='self-center text-base font-semibold whitespace-nowrap dark:text-white'
        />
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href={main_url}>MCO Website</FooterLink>
            <FooterLink liClass="mb-4" href={api_url}>Mesonet API</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Connect</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="https://github.com/mt-climate-office">GitHub</FooterLink>
            <FooterLink liClass="mb-4" href="mailto:state.climatologist@umontana.edu">Email</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href={main_url} by="Montana Climate Office" />
    </div>
  </Footer>