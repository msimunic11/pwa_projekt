<template>
  <div class="pasmina">
    <h2>{{ $route.params.naziv }}</h2>
    <img :src="pasmina.message">

    
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      pasmina: {}
    };
  },
  async mounted() {
    /**
     * Ista funkcija kao i u pasmine.vue, samo ova vraća pojedinog psa. Primjetite nešto što nazivamo template literals, primjerice ako imamo string u koji hoćemo dodati dio JS varijable onda to pišemo ovako:
     * const godina = '2019'
     * console.log(`Godina je ${godina}`)
     *
     * Iz objekra rute odnosno this.$route možemo vratit paramse koje smo definirali u main.js, odnosno :naziv, pa je tako moguće tu dokučit iz URL koji je /pasmine/corgi naziv odnosno this.$route.params.name sam string 'corgi' koji šaljemo natrag da dobijemo pojedinu pasminu.
     */
    let response = await fetch(
      `https://dog.ceo/api/breed/${this.$route.params.naziv}/images/random`
    );

    if (response.ok) {
      this.pasmina = await response.json();
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }
};
</script>
