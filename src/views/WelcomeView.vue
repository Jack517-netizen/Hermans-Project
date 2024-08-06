<template>
  <div class="wrapper">
    <div class="info-box">
      <h1>LDAPV</h1>
      <h3>
        <em>
          <span class="letter">L</span>ogiciel de <span class="letter">D</span>étermination et
          d'<span class="letter">A</span>ctualisation du <span class="letter">P</span>rix de
          <span class="letter">V</span>ente dans le BTP</em
        >
      </h3>
      <br /><br />

      <p>Vous ne savez pas par où commencer ? Voyons-voir...</p>
      <ul>
        <li>
          Naviguer à l'onglet <span class="onglet">Fichier</span> pour créer un nouveau projet ou
          charger un existant.
        </li>
        <li>
          Naviguer à l'onglet <span class="onglet">Aide</span> pour toute demande d'aide, nous
          notifier à propos de l'outil, ou être juste en contact.
        </li>
      </ul>
      <br /><br />

      <em
        ><small
          >Ce projet a été réalisé par Hermans NAYIBOU dans le cadre de l'implémentation de son
          projet de fin d'études.</small
        ></em
      >
    </div>
  </div>
</template>

<style scoped>
.letter {
  color: #8900f9;
  font-weight: bold;
}

.onglet {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 20px;
}

.wrapper {
  display: grid;
  place-items: center;
}

.info-box {
  width: 50%;
  margin: 50px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}
.info-box h1,
.info-box h3,
.info-box small {
  display: block;
  text-align: center;
}
</style>
