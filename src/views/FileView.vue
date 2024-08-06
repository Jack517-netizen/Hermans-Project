<template>
  <div class="wrapper">
    <nav class="file-nav-bar">
      <a href="#debourses-sec" class="nav-item">Déboursés sec</a>
      <a href="#frais-chantier" class="nav-item">Frais de chantier</a>
      <a href="#frais-generaux" class="nav-item">Frais généraux</a>
    </nav>

    <nav class="file-sub-nav-bar">
      <a href="#debourses-materiaux" class="nav-item"><em>Déboursés matériaux</em></a>
      <a href="#debourses-main-oeuvre" class="nav-item"><em>Déboursés main d'oeuvre</em></a>
      <a href="#debourses-materiel" class="nav-item"><em>Déboursés matériel</em></a>
    </nav>

    <div class="file-data">
      <section class="file-data-sidebar">
        <form action="#" method="post">
          <div class="input-field">
            <label for="material-name">Désignation du matériau</label>
            <input type="text" name="materialName" id="material-name" />
          </div>
          <div class="input-field">
            <label for="material-quantity">Quantité du matériau</label>
            <input type="number" name="materialQuantity" id="material-quantity" />

            <label for="material-quantity-unit">Unité</label>
            <select name="materialQuantityUnit" id="material-quantity-unit">
              <option value="t" selected>t (tonnes)</option>
              <option value="kg">kg (kilogrammes)</option>
              <option value="ml">ml (millilitres)</option>
              <option value="2m">m^<sup>2</sup> (mètres carré)</option>
              <option value="3m">m^<sup>3</sup> (mètres cube)</option>
            </select>
          </div>
          <div class="input-field">
            <label for="material-price">Prix du matériau</label>
            <input type="number" name="materialPrice" id="material-price" />

            <label for="material-price-unit">Unité</label>
            <select name="materialPriceUnit" id="material-price-unit">
              <option value="f/t" selected>F CFA/t (francs CFA/tonnes)</option>
              <option value="f/kg">F CFA/kg (francs CFA/kilogrammes)</option>
              <option value="f/ml">F CFA/ml (francs CFA/millilitres)</option>
              <option value="f/2m">F CFA/m^<sup>2</sup> (francs CFA/mètres carré)</option>
              <option value="f/3m">F CFA/m^<sup>3</sup> (francs CFA/mètres cube)</option>
            </select>
          </div>
          <div class="input-field">
            <label for="majoration-cost">Coût des majorations</label>
            <input type="number" name="majorationCost" id="majoration-cost" />

            <label for="majoration-cost-unit">Unité</label>
            <select name="majorationCostUnit" id="majoration-cost-unit">
              <option value="f/t" selected>F CFA/t (francs CFA/tonnes)</option>
              <option value="f/kg">F CFA/kg (francs CFA/kilogrammes)</option>
              <option value="f/ml">F CFA/ml (francs CFA/millilitres)</option>
              <option value="f/2m">F CFA/m^<sup>2</sup> (francs CFA/mètres carré)</option>
              <option value="f/3m">F CFA/m^<sup>3</sup> (francs CFA/mètres cube)</option>
            </select>
          </div>
          <div class="input-field">
            <label for="lost-percentage">Pourcentage de perte</label>
            <input type="number" name="lostPercentage" id="lost-percentage" />

            <label for="lost-percentage-unit">Unité</label>
            <select name="lostPercentageUnit" id="lost-percentage-unit">
              <option value="%" selected>% (pourcentage)</option>
            </select>
          </div>
          <div class="output-field">
            <label for="material-name"
              ><em><strong>Total</strong></em></label
            >
            <input type="text" name="materialName" id="material-name" value="0" disabled />
          </div>
          <div class="actions">
            <button type="reset">Vider</button>
            <button type="submit" class="submit-btn">Valider</button>
          </div>
        </form>
      </section>
      <main class="file-data-content">
        <table>
          <tr>
            <td>Désignation</td>
            <td>Quantité du matériau</td>
            <td>Unité</td>
            <td>Prix du matériau</td>
            <td>Coût des majorations</td>
            <td>Unité</td>
            <td>Pourcentage des pertes</td>
            <td>Unité</td>
            <td>Total</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </table>
      </main>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  overflow: auto;
  color: #111;
}

.file-nav-bar,
.file-sub-nav-bar {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.file-nav-bar {
  justify-content: space-around;
}

.file-sub-nav-bar {
  justify-content: flex-start;
}

.file-nav-bar .nav-item,
.file-sub-nav-bar .nav-item {
  margin: 5px;
  text-align: center;
  border: 1px solid #ccc;
  color: #000;
  background: #fffbfb;
  padding: 5px;
  text-decoration: none;
  border-radius: 5px;
}

.file-nav-bar .nav-item {
  width: 30%;
}

.file-sub-nav-bar .nav-item {
  width: 15%;
}

.nav-item:hover {
  border: 1px solid #000;
}

.file-data {
  display: flex;
  align-items: stretch;
}

.file-data .file-data-sidebar {
  width: 30%;
  max-height: 70vh;
  overflow-y: auto;
  border-right: 1px solid #ccc;
}

.file-data .file-data-content {
  width: 70%;
  max-height: 70vh;
  overflow: auto;
}

.file-data-sidebar .input-field,
.file-data-sidebar .output-field,
.actions {
  display: block;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

.input-field label,
.output-field label {
  font-size: 16px;
}

.output-field label strong {
  font-weight: bolder;
  font-size: 18px;
  color: #8900f9;
}

.input-field input,
.output-field input,
select {
  width: 100%;
  outline: none;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}

select {
  margin-top: 5px;
}

.output-field input {
  color: #8900f9;
  text-align: right;
  border: 2px solid #8900f9;
}

.input-field input:focus {
  border: 1px solid #8900f9;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.actions button[type='reset'] {
  background: #ff0000;
  outline: none;
  width: 45%;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.actions button[type='submit'] {
  background: #8900f9;
  outline: none;
  width: 45%;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

table tr,
table td {
  border: 1px solid #000;
  min-width: 190px;
}
</style>
