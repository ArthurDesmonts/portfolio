<script setup>
import {onMounted} from 'vue';

//change the background color the box depending on the theme selected
onMounted(() => {
  const observer = new MutationObserver(() => {
    document.querySelectorAll('.stair-box').forEach(box => {
      box.style.backgroundColor = document.body.classList.contains('dark-theme') ? '#3c424d' : '#e1e3e1';
    });
  });

  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});

</script>

<template>
  <div class="Stack">
    <h2><span class="icon">#</span> Mes Stacks</h2>
    <div class="stair-box-component">
      <div class="stair-box">
        <h3>Front-end</h3>
        <ul>
          <li class="sk-html"><span>HTML</span></li>
          <li class="sk-css"><span>CSS</span></li>
          <li class="sk-js"><span>JavaScript</span></li>
          <li class="sk-vue"><span>Vue.js</span></li>
        </ul>
      </div>
      <div class="stair-box">
        <h3>Back-end</h3>
        <ul>
          <li class="sk-java"><span>Java</span></li>
          <li class="sk-php"><span>PHP</span></li>
          <li class="sk-springboot"><span>Springboot</span></li>
        </ul>
      </div>
      <div class="stair-box">
        <h3>Mobile</h3>
        <ul>
          <li class="sk-android"><span>Android</span></li>
          <li class="sk-ios"><span>iOS</span></li>
        </ul>
      </div>
      <div class="stair-box">
        <h3>Base de données</h3>
        <ul>
          <li class="sk-oracle"><span>Oracle</span></li>
          <li class="sk-sqlserver"><span>SQL Server</span></li>
          <li class="sk-postgresql"><span>PostgreSQL</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Stack {
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px;
}

.Stack h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.stair-box-component {
  display: flex;
  justify-content: space-between;
}

.stair-box {
  width: 23%;
  padding: 20px;
  background-color: #3c424d;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

.stair-box:hover {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  transition: 0.3s;
  transform: scale(1.005);
}

.stair-box h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  border-top: 2px var(--text-color) solid;
  border-left: 2px var(--text-color) solid;
  border-bottom: 5px var(--text-color) solid;
  border-right: 5px var(--text-color) solid;
  padding: 10px;
}

.stair-box ul {
  list-style: none;
  padding: 10px;

}

/* Major part from : https://codepen.io/andrew-wiggins/pen/ExVQjQv */

.stair-box ul li {
  --per: 50; /* Default percentage */
  --dur: calc(calc(var(--per) / 100) * 1.5s);
  margin: 0 0 5px 0;
  list-style: none;
  padding: 20px 0;
  position: relative;
  text-transform: uppercase;
  font-size: 15px;
}

.stair-box ul li:before {
  content: "";
  position: absolute;
  background: #1c1c1c;
  height: 16px;
  width: 100%;
  left: 0;
  bottom: 0;
  border-radius: 2px;
  border: 1px solid;
  border-color: #111 #323232 #323232 #111;
  --track: #5c3959;
  background: linear-gradient(
      90deg,
      var(--track) calc(calc(var(--per) * 1%) + 4px),
      var(--background-color) calc(calc(var(--per) * 1%) + 4px)
  );
}

.stair-box ul li:after {
  content: "";
  height: 11px;
  margin: 0 0 2px 0;
  background: #c16ed2;
  position: absolute;
  box-shadow: 0 0 10px 1px #a44c9e;
  left: 3px;
  width: 0;
  bottom: 0;
  transition: all var(--dur) ease 0s;
  animation: start 1.2s ease 0s 2 alternate;
}

.stair-box:hover ul li:after {
  width: calc(calc(var(--per) * 1%) - 2px);
}

@keyframes start {
  100% {
    width: calc(calc(var(--per) * 1%) - 2px);
  }
}

/* Skill percentage */
.stair-box ul li.sk-php { --per: 60; }
.stair-box ul li.sk-java { --per: 90; }
.stair-box ul li.sk-springboot { --per: 50; }
.stair-box ul li.sk-android { --per: 70; }
.stair-box ul li.sk-ios { --per: 40; }
.stair-box ul li.sk-html { --per: 90; }
.stair-box ul li.sk-css { --per: 95; }
.stair-box ul li.sk-js { --per: 70; }
.stair-box ul li.sk-vue { --per: 70; }
.stair-box ul li.sk-oracle { --per: 60; }
.stair-box ul li.sk-sqlserver { --per: 40; }
.stair-box ul li.sk-postgresql { --per: 50; }

@media (max-width: 768px) {
  .stair-box-component {
    flex-direction: column;
  }

  .stair-box {
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
  }

  .stair-box ul li:after {
    width: calc(calc(var(--per) * 1%) - 2px);
  }
}
</style>