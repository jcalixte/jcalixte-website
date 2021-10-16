<template>
  <header>
    <h1>Hi! I'm Julien. A mobile & web developer.</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
  </header>

  <main>
    <slot />
  </main>
</template>

<style>
@import "~/assets/base.css";

#app {
  width: 100%;
  max-width: 1280px;
  margin: 0;
  padding: 2rem;

  font-weight: normal;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(245, 21%, 24%, 0.39);
  }
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    padding: 0 2rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    margin-top: 1rem;
  }
}

main {
  display: flex;
  text-align: center;
  flex-direction: column;
}
</style>
