<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
</script>

<template>
  <WelcomeItem>
    <p>
      I am into building things with code. I love creating offline first
      Progressive Web Apps. I've been doing programmation for 5 years and lead
      dev/technical architecture for 1 year now.
    </p>
    <p>
      You can reach me on
      <a href="https://github.com/jcalixte" target="_blank" rel="noreferrer"
        >GitHub</a
      >,
      <a
        href="https://www.linkedin.com/in/juliencalixte"
        target="_blank"
        rel="noreferrer"
        >Linkedin</a
      >
      ,
      <a
        href="https://twitter.com/julien_calixte"
        target="_blank"
        rel="noreferrer"
        >Twitter</a
      >
      or
      <a href="https://dev.to/jcalixte">Dev.to</a>. 😀
    </p>
  </WelcomeItem>
  <WelcomeItem title="Personal portfolio">
    <ul>
      <li>
        <a href="https://vaquant.space" target="_blank" rel="noreferrer"
          >Vaquant</a
        >. A PWA that let's you manage your budget with your friends.
      </li>
      <!-- <li>
        <a href="https://billeplume.li212.fr" target="_blank" rel="noreferrer"
          >Bille Plume</a
        >. A simple notebook with one goal: take you to the zen mode, write and
        be creative.
      </li> -->
    </ul>
  </WelcomeItem>
  <WelcomeItem title="Programming skills">
    <div class="skills">
      <div>
        <h3>Languages</h3>
        <ul>
          <li>TypeScript / JavaScript</li>
          <li>C#</li>
        </ul>
      </div>
      <div>
        <h3>Frameworks</h3>
        <ul>
          <li>VueJS / Vuex</li>
          <li>React Native</li>
          <li>ASP.NET Core</li>
        </ul>
      </div>
      <div>
        <h3>Databases</h3>
        <ul>
          <li>CouchDb / PouchDb</li>
          <li>SQL Server</li>
          <li>SQLite</li>
        </ul>
      </div>
    </div>
  </WelcomeItem>
  <WelcomeItem title="Social skills">
    <div class="skills">
      <div>
        <h3>Languages</h3>
        <ul>
          <li>French <em>(mother tongue)</em></li>
          <li>English <em>(read, spoken, written)</em></li>
          <li>Portuguese <em>(read, spoken)</em></li>
        </ul>
      </div>
      <div>
        <h3>Sports</h3>
        <ul>
          <li>Volleyball</li>
          <li>Running</li>
        </ul>
      </div>
    </div>
  </WelcomeItem>
  <!--
    <marquee>I only work with the finest and newest technology</marquee>
  -->
</template>
