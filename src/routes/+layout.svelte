
<script>
  import "tailwindcss/tailwind.css";
  import "$lib/styles/global.css";
  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
</script>

<Header />
<slot />
<Footer />