<template>
  <div class="mt-4">
    <h1 class="is-size-4-mobile is-size-2-desktop">Escolha seu modelo</h1>
    <div class="columns m-6">
      <div class="column grid" v-for="(car, i) in cars" :key="i">
        <a @click="calculate(car.price, car.name)">
          <img :src="car.link" alt="car" />
          <p>{{ car.name }}</p>
        </a>
      </div>
    </div>
    <div class="columns m-3">
      <div class="column is-one-third">
        <div v-if="price" class="fade">
          <p>Simulando financiamento do seu mais novo {{ name }}.</p>
          <p>
            Você já garantiu uma excelente taxa de juros, tente dar uma entrada
            para melhorar o seu valor mensal.
          </p>
          <b-field>
            R$
            <input
              class="inputEntry"
              v-model="entry"
              placeholder="Sua melhor entrada"
            />
          </b-field>
        </div>
      </div>
      <div class="column is-one-third">
        <div v-if="entry" class="fade">
          <p>Valor do seu Toyota após a sua entrada:</p>
          <p class="priceFont">
            {{
              (price - entry).toFixed(2) > 0
                ? "R$ " + (price - entry).toFixed(2)
                : "Sua entrada é superior ao valor do automóvel."
            }}
          </p>
          <p>Selecione agora a quantidade de parcelas do seu 0km:</p>
          <b-select
            class="m-3"
            placeholder="Selecione a quantidade de parcelas"
            v-model="parcelQt"
          >
            <option v-for="(time, t) in times" :value="time.months" :key="t">
              {{ time.months + "x" }}
            </option>
          </b-select>
        </div>
      </div>
      <div class="column is-one-third">
        <div v-if="parcelQt" class="fade">
          <p>Investimento mensal de</p>
          <p class="priceFont">
            {{
              ((price - entry) / parcelQt).toFixed(2) > 0
                ? "R$ " + ((price - entry) / parcelQt).toFixed(2)
                : "Com este valor de entrada, a compra será a vista 🚘."
            }}
          </p>
          <p>
            Agende agora mesmo por
            <a href="" style="color; text-decoration: underline;">aqui</a> uma
            visita.
          </p>
          <p>Taxa de juros garantida de 0,99% ao ano ✔️</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        price: undefined,
        name: undefined,
        parcelQt: undefined,
        entry: undefined,
        entryPrice: undefined,
        cars: [
          {
            name: "Corola Cross",
            link:
              "https://www.kurumaveiculos.com.br/img/toyota-models/cross.png",
            price: 169990.99,
            letterGrid: "a",
          },
          {
            name: "Hilux",
            link:
              "https://www.kurumaveiculos.com.br/img/toyota-models/hilux.png",
            price: 199999.9,
            letterGrid: "b",
          },
          {
            name: "Corolla",
            link:
              "https://www.kurumaveiculos.com.br/img/toyota-models/corolla.png",
            price: 128999.8,
            letterGrid: "c",
          },
          {
            name: "SW4",
            link: "https://www.kurumaveiculos.com.br/img/toyota-models/sw4.png",
            price: 247990.9,
            letterGrid: "d",
          },
          {
            name: "Yaris Hatch",
            link:
              "https://www.kurumaveiculos.com.br/img/toyota-models/yaris.png",
            price: 79900.9,
            letterGrid: "e",
          },
          {
            name: "Yaris Sedã",
            link:
              "https://www.kurumaveiculos.com.br/img/toyota-models/yaris-seda.png",
            price: 99999.9,
            letterGrid: "f",
          },
        ],
        times: [
          {
            months: 12,
          },
          {
            months: 24,
          },
          {
            months: 36,
          },
          {
            months: 48,
          },
          {
            months: 60,
          },
        ],
      };
    },
    methods: {
      calculate(price, name) {
        this.price = price;
        this.name = name;
      },
      // priceByMonth(months) {
      //   this.parcelQt = this.price / months;
      // },
    },
  };
</script>

<style>
  .inputEntry {
    width: 66%;
    margin: auto;
    margin-top: 5%;
    text-align: center;
    border: none;
    border-bottom: 1px solid green;
    font-size: 20px;
  }
  .inputEntry:focus {
    outline: none;
  }
  .priceFont {
    color: green;
    font-size: 1.25em;
  }
  .fade {
    transition: opacity 0.25s ease-in-out;
    animation-name: showingData;
    animation-duration: 3.5s;
    animation-iteration-count: 1;
  }
  @keyframes showingData {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .grid {
    border: 1px solid rgb(201, 201, 201);
    margin: 1%;
    border-radius: 5px;
    transition: 0.33s;
  }
  .grid:hover {
    border: 1px solid black;
    margin: 1%;
    border-radius: 5px;
  }
</style>
