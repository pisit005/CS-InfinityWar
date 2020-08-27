<template>
  <div class="row">
    <div class="col-md">
      <p>HP Player 100 {{randomDamage(1,300)}}</p>
      <p>HP Monter</p>
      <button>Start</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      // ชื่อ player[1].name
      player: [
        { name: "Ironman", hp: 80 },
        { name: "Thor", hp: 80 },
        { name: "Hunk", hp: 80 },
        { name: "Marvel", hp: 80 },
        { name: "Hawk Eyes", hp: 80 },
      ],
      monter: [
        { name: "Thanos", hp: 80 },
        { name: "Altron", hp: 80 },
        { name: "Loki", hp: 80 },
        { name: "Set", hp: 80 },
        { name: "Cell", hp: 80 },
      ],
    };
  },
  methods: {
    randomDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    start: function () {
      this.player[this.randomNo(1, 3) - 1];
    },
  },
};
</script>

<style>
</style>
