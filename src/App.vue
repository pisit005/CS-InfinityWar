<template>
  <div>
    <br />
    <div class="row ">
      <div class="col-1"></div>

      <div class="col-2">WELCOME TO PLAY GAME</div>

      <div class="col-3">
        <button @click="randomStart()" class="btn btn-info">Start{{Label}}</button>
      </div>

      <div class="col-3">
        <button @click="randomSDamage()" class="btn btn-danger ml-3">Special Attack{{Label}}</button>
      </div>

      <div class="col-3">
        <button @click="randomDamage()" class="btn btn-danger ml-3">Attack{{Label}}</button>
      </div>
    </div>

    <hr />

    

    <p v-if="hp1 <= -1 ">
      <img
        src="https://png2.cleanpng.com/sh/8a699d5b8f0fc8fdad939589f675d140/L0KzQYm3VME6N6ttfZH0aYP2gLBuTfZicZ16itc2Y3BwgMb7hgIucZR0huU2cHH8fbb1lL1kdJp1RdN7dD3xf7A0jfFqdqR5itdqbT24cbWBU8hjaWo2ftNsMD62Q4q8UsQ5QWI6SqY6MUm6Q4m8Wcc6NqFzf3==/kisspng-failure-computer-icons-payment-clip-art-non-mainstream-5ad838ba91fac0.3395248915241197385979.png"
      />
    </p>
    <p v-else-if="hp2 <= -1 ">
      <img
        src="https://www.psdstamps.com/wp-content/uploads/2019/12/round-winner-stamp-png.png"
        height="500"
        width="700"
      />
    </p>

    <div class="row">
      <div class="col-1"></div>
      <div class="col-4">
        <br />
        <p>{{randomPlayer}}</p>
        <p>HP : {{hp1}}</p>
        <img :src="image1" />
      </div>

      <div class="col-3">
        <br />
        <br />
        <br />
        <br />
        <img
          src="https://cdn.discordapp.com/attachments/392353546332405763/746090155282006126/pngegg_6.png"
          height="200"
          width="200"
         
        />
      </div>

      <div class="col-3">
        <br />
        <p>{{randomMonster}}</p>
        <p>HP : {{hp2}}</p>
        <img :src="image2" />
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      randomPlayerAttack: "",
      randomMonsterAttack: "",
      randomSAttack: "",
      image1: "",
      image2: "",
      hp1: " ",
      hp2: " ",

      player: [
        {
          name: "Naruto",
          hp: 160,
          image:"https://animatedit.files.wordpress.com/2016/03/narutoc200.gif",
          
          width:"200",

        },
        {
          name: "Luffy",
          hp: 170,
          image:
            "https://i.pinimg.com/originals/0e/4d/93/0e4d93c2f91c111aeffaf79bef3ec5de.gif",
            
            width:"200",
        },
        {
          name: "Ichigo",
          hp: 180,
          image:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/5c0bcd0a-bc66-4b0d-ba07-aec8d9fb96bc/d2nzvo1-136c5630-595e-4588-a1cc-2c588d0933e1.gif",
            
            width:"200",
        },
        {
          name: "DR.Strange",
          hp: 190,
          image:
            "https://vignette.wikia.nocookie.net/mugen/images/d/d3/ArkadyStrangeMysticSword.gif/revision/latest/scale-to-width-down/340?cb=20150702222601",
            
            width:"200",
        },
      ],
      randomPlayer: "",

      monster: [
        {
          name: "Zombie",
          hp: 250,
          image:
            "https://vignette.wikia.nocookie.net/plantsvszombies/images/0/07/Partyzombie.gif/revision/latest?cb=20150901203729",
            
            width:"200",
        },
        {
          name: "Dragon",
          hp: 220,
          image:
            "https://66.media.tumblr.com/tumblr_ma10rhHWYb1rfjowdo1_r1_500.gif",
            
            width:"200",
        },
        {
          name: "Thor",
          hp: 210,
          image:
            "https://photos.imageevent.com/afap/heroesandvillans/marvelanimatedgifs/Thor-06.gif",
            
            width:"200",
        },
        {
          name: "Thanos",
          hp: 200,
          image:
            "https://thumbs.gfycat.com/TalkativeSkinnyFinwhale-size_restricted.gif",
            
            width:"200",
        },
      ],
      randomMonster: "",
    };
  },

  props: {
    Label: String,
  },

  methods: {
    randomStart: function () {
      var chosenNumber1 = Math.floor(Math.random() * this.player.length);
      this.randomPlayer = this.player[chosenNumber1].name;
      this.hp1 = this.player[chosenNumber1].hp;
      this.image1 = this.player[chosenNumber1].image;

      var chosenNumber2 = Math.floor(Math.random() * this.monster.length);
      this.randomMonster = this.monster[chosenNumber2].name;
      this.hp2 = this.monster[chosenNumber2].hp;
      this.image2 = this.monster[chosenNumber2].image;
    },

    randomDamage: function () {
      this.randomPlayerAttack = Math.max(Math.floor(Math.random() * 10) + 1, 3);
      this.hp2 -= this.randomPlayerAttack;

      this.randomMonsterAttack = Math.max(
        Math.floor(Math.random() * 15) + 1,
        5
      );
      this.hp1 -= this.randomMonsterAttack;
    },

    randomSDamage: function () {
      this.randomPlayerAttack = Math.max(
        Math.floor(Math.random() * 20) + 1,
        10
      );
      this.hp2 -= this.randomPlayerAttack;

      this.randomMonsterAttack = Math.max(
        Math.floor(Math.random() * 15) + 1,
        5
      );
      this.hp1 -= this.randomMonsterAttack;
    },
    
  },
};
</script>



<style>
  body {
  background-image: url("https://images7.alphacoders.com/109/thumb-1920-1096536.jpg");
  color:white;
  font-size: 19px;
  font-weight: 630;
  }
</style>