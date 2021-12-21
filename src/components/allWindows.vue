<template>
  <div class="home">
    <h2>all windows</h2>
    <b-list-group>
      <b-list-group-item href="/window" v-for="window in windows" :key="window.id">
             {{ window }}  
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "allWindows",
  data() {
    return {
      windows: null,
    };
  },
  
    mounted() {
      axios
        .get(
          "https://app-ddb00d24-3cab-4d55-9cb6-d9d53eaa8f98.cleverapps.io/api/windows/"
        )
        .then((response) => {
          this.windows = response.data;
          console.log("response : " + this.windows);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
          this.showAlert();
        })
    },
  }
</script>
