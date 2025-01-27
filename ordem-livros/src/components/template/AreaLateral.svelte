<script>
  import {
    IconBooks,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandYoutube,
    IconFriends,
    IconHome,
    IconRss,
    IconSquare1,
    IconSquare2,
    IconSquare3,
    IconUsers,
    IconBrandLinkedin,
  } from "@tabler/icons-svelte";
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";

  let isMenuOpen = false;
</script>

<div class="relative">
  <button
    class="md:hidden p-2 border border-zinc-800 rounded-md"
    on:click={() => (isMenuOpen = !isMenuOpen)}
  >
    <IconBooks size={24} />
  </button>

  <aside
    class="aside-menu flex-col self-start border border-zinc-800 p-5 rounded-md gap-10 w-72 md:flex md:static absolute top-14 left-0 bg-black z-50"
    class:open={isMenuOpen}
  >
    <Menu titulo="Navegação">
      <MenuItem texto="Início" href="/">
        <IconHome size={20} />
      </MenuItem>
      <MenuItem texto="Personagens" href="/personagens">
        <IconFriends size={20} />
      </MenuItem>
      <MenuItem texto="Autores" href="/autores">
        <IconUsers size={20} />
      </MenuItem>
      <MenuItem texto="Séries" href="/">
        <IconBooks size={20} />
      </MenuItem>
    </Menu>
    <Menu titulo="Principais Autores">
      <MenuItem texto="J.K. Rowling" href="/autores/j-k-rowling">
        <IconSquare1 size={20} />
      </MenuItem>
      <MenuItem texto="J.R.R. Tolkien" href="/autores/j-r-r-tolkien">
        <IconSquare2 size={20} />
      </MenuItem>
      <MenuItem texto="George R.R. Martin" href="/autores/george-r-r-martin">
        <IconSquare3 size={20} />
      </MenuItem>
    </Menu>
    <Menu titulo="Outras Categorias">
      <MenuItem texto="Últimas Notícias" href="/">
        <IconRss size={20} />
      </MenuItem>
      <MenuItem texto="Séries Populares" href="/">
        <IconBooks size={20} />
      </MenuItem>
      <MenuItem texto="Facebook" href="https://www.facebook.com/">
        <IconBrandFacebook size={20} />
      </MenuItem>
      <MenuItem texto="Instagram" href="https://www.instagram.com/">
        <IconBrandInstagram size={20} />
      </MenuItem>
      <MenuItem texto="Linkedin" href="https://www.linkedin.com/in/joaopcarmo/">
        <IconBrandLinkedin size={20} />
      </MenuItem>
    </Menu>
  </aside>
</div>

<style>
  @media (max-width: 768px) {
    .aside-menu {
      display: none;
    }
    .aside-menu.open {
      display: flex;
    }
  }
</style>
