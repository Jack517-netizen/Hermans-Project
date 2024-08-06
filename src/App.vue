<script setup lang="ts">
import HermansLogo from './components/HermansLogo.vue'
</script>

<template>
  <header>
    <div class="header-bar">
      <!-- Project identity -->
      <HermansLogo />

      <!-- Project bar for status and controls -->
      <div class="project-bar">
        <input
          type="text"
          name="projectName"
          required
          placeholder="Entrer le nom de votre projet..."
        />

        <span id="status" title="Projet enregistré">[ Sauvegardé ]</span>
      </div>

      <h3 title="Prix de vente">PV [0.00000000000]</h3>
    </div>

    <!-- Project navbar -->
    <nav class="app-menu-bar">
      <RouterLink to="/" class="nav-item">Bienvenue</RouterLink>
      <RouterLink to="/file" class="nav-item">Fichier</RouterLink>
      <RouterLink to="/help" class="nav-item">Aide</RouterLink>
    </nav>
  </header>

  <main class="app-content">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  display: block;
}

.header-bar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #ccc;
}

.project-bar input {
  margin-left: 10px;
  margin-right: 10px;
  padding: 7px;
  width: 300px;
  font-size: large;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.project-bar input:focus,
.project-bar input:hover {
  border: 1px solid #000;
}

.project-bar #status {
  color: #08c718;
  margin-right: 50px;
}

.app-menu-bar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #ccc;
}

.nav-item {
  width: 15%;
  margin: 5px;
  text-align: center;
  border: 1px solid #ccc;
  color: #000;
  background: #fffbfb;
  padding: 5px;
  text-decoration: none;
  border-radius: 5px;
}

.nav-item:hover {
  border: 1px solid #000;
}

a.router-link-active.router-link-exact-active.nav-item {
  border: 1px solid #8900f9;
}
</style>
