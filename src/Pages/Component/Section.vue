<template>
  <div>
    <p>current UserName is : {{ UserName }}</p>
    <a @click="ChangeUserName" class="btn btn-success">ChangeUserName</a>
    <hr>
    <!-- <user-first></user-first> -->
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      UserName: "Mohammad"
    };
  },
  methods: {
    ChangeUserName(){
      this.UserName = "Iman";
    }
  }
};
</script>
