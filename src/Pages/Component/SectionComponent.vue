<template>
  <div>
    <div>
       <span>{{rowItem[0].personFamily}} :{{rowItem[0].lessonName}}</span> 
       <span>{{rowItem[1].personFamily}} :{{rowItem[1].lessonName}}</span> 
    </div>
   

   <!--  <p>{{rowItem}}</p> -->
    <!-- {{AllPlanList}} -->
  </div>
</template>

<script>

export default {
  props: {
    familyName: {
      type: String,
      default: function() {
        return {};
      }
    },
    lessonName: {
      type: String,
      default: function() {
        return {};
      }
      },
      AllPlanList:Object ,
      user : Object,
      rowItem:Array 
  },
}; //default
</script>

<style  scoped>
</style>



