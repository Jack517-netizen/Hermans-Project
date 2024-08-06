<template>
  <div class="wrapper">
    <div class="help-box">
      <h1>LDAPV - [Section Aide]</h1>
      <h3>
        <em>
          <span class="letter">L</span>ogiciel de <span class="letter">D</span>étermination et
          d'<span class="letter">A</span>ctualisation du <span class="letter">P</span>rix de
          <span class="letter">V</span>ente dans le BTP</em
        >
      </h3>
      <br /><br />

      <p>QUESTION ? SUGGESTION ? BUG ? ETRE EN CONTACT ? N'hésiter pas à nous contacter...</p>
      <ul>
        <li>Responsable, <a href="#">NABIYOU Hézouwè</a></li>
        <li>Téléphone, <a href="tel:+22870388872">+22870388872</a></li>
        <li>Mail, <a href="mailto:hermannnabiyou00@gmail.com">hermannnabiyou00@gmail.com</a></li>
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

.wrapper {
  display: grid;
  place-items: center;
}

.help-box {
  width: 50%;
  margin: 50px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}
.help-box h1,
.help-box h3,
.help-box small {
  display: block;
  text-align: center;
}
</style>
