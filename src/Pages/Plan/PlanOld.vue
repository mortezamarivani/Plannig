<template>
  <div>
          <div class="card">
              <div class="card-header" style="direction:rtl;">
              <!-- for search panel-->
                  <details >
                      <summary  class="Yekan_Font_Bold"  style="font-size: large;"> 
                              پنل جستجو
                      </summary>
                      <div  style="padding-top: 2px;">

                          <div class=" input-group input-group-sm mb-3">
                              <span class="input-group-text Yekan_Font_Bold h-35 sizeOfLabel"  >عنوان سوال</span>
                              <input  type="text" v-model="fldTitle_Filter" class="form-control form-control-sm float-start Yekan_Font_Bold h-35"  >
                          </div>

                          <div class=" input-group input-group-sm mb-3 ">
                              <span class="input-group-text Yekan_Font_Bold h-35 sizeOfLabel"  >از رده سنی</span>
                              <input type="number"    class="form-control h-35"  v-model="fldFromAges_Filter" >
                          </div>

                          <div class=" input-group input-group-sm mb-3">
                              <span class="input-group-text sizeOfLabel Yekan_Font_Bold sizeOfLabel" >تا رده سنی</span>
                              <input type="number"    class="form-control h-35"   v-model="fldToAges_Filter" >
                          </div>

                          <div class=" input-group input-group-sm mb-3 ">
                              <span class="input-group-text Yekan_Font_Bold h-35 sizeOfLabel "  >نوع سوال</span>
                              <select class="form-select Yekan_Font_Bold" v-model="fldTypeQuestion_Filter"  aria-label="Default select example">
                                  <option value="99" selected>هر دو</option>
                                  <option value="0" >طیفی</option>
                                  <option value="1">عدم طیفی</option>
                              </select>
                          </div>

                          <div class=" input-group input-group-sm mb-3 ">
                              <span class="input-group-text Yekan_Font_Bold h-35 sizeOfLabel"  >جنسیت</span>
                              <select class="form-select Yekan_Font_Bold" v-model="fldSex_Filter"  aria-label="Default select example">
                                  <option value="99" selected>هر دو</option>
                                  <option value="1">مرد</option>
                                  <option value="0" >زن</option>
                              </select>
                          </div> 

                          <div class=" input-group input-group-sm mb-3" style="display: flex;align-items: center; ;">
                            <span class="input-group-text Yekan_Font_Bold h-35 sizeOfLabel"  >وضعیت تاهل</span>
                            <div class="form-check form-check-inline ">
                              <input class="form-check-input " type="checkbox" id="isSingel" value="1"  v-model="arraySingelOrMarrids_Filter">
                              <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isSingel">مجرد</label>
                            </div>
                            <div class="form-check form-check-inline  " >
                              <input class="form-check-input" type="checkbox" id="isMarrid" value="2"  v-model="arraySingelOrMarrids_Filter">
                              <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isMarrid">متاهل</label>
                            </div>
                            <div class="form-check form-check-inline  " >
                              <input class="form-check-input" type="checkbox" id="isWodow" value="3"  v-model="arraySingelOrMarrids_Filter">
                              <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isWodow">بیوه</label>
                            </div>
                            <div class="form-check form-check-inline " >
                              <input class="form-check-input" type="checkbox" id="isDivorced" value="4"  v-model="arraySingelOrMarrids_Filter">
                              <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">مطلقه </label>
                            </div>
                            <div class="form-check form-check-inline " >
                              <input class="form-check-input" type="checkbox" id="allSelected" value="5"  @click="SetSelectedSingelOrMarridsChekbox()">

                              <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="allSelected">همه حالت ها </label>

                              
                              
                              

                            </div>
                          </div> 


                          
                      </div>
                  </details>
              </div>
          </div>


          <div class="card"  v-for="(dayNum, index) in allDays" :key="index" style="background-color: white ;!important;
            direction:rtl;margin-bottom: 2px;margin-top: 2px; padding-right: 2px;border-color: #f5c8c8;">
            <!-- <div class="card-header" style="direction:rtl;"> -->
              <!-- for search panel-->
              <details >
                  <summary  class="Yekan_Font_Bold"  style="font-size: small;background-color: #fefefe"> 
                        {{GetDayTitle(dayNum)}}
                        <router-link to="/PlanCreate" class="btn btn-outline-info">
                             <span class="material-icons  deleteColorIcon IconSize" >add </span>
                         </router-link> 
                  </summary>
                  <div style="background-color: white;" >
                     
                        <table class="table Yekan_Font_Bold "  >
                          <thead>
                            <tr  style="background-color:  rgb(247 247 247);font-size: xx-small" >
                              <th scope="col">#</th>
                              <th scope="col">7-8 </th>
                              <th scope="col">8-9</th>
                              <th scope="col">9-10</th>
                              <th scope="col">10-11</th>
                              <th scope="col">11-12</th>
                              <th scope="col">12-13</th>
                              <th scope="col">13-14</th>
                              <th scope="col">14-15</th>
                              <th scope="col" >15-16 </th>
                              <th scope="col" >16-17 </th>
                              <th scope="col" >17-18 </th>
                              <th scope="col" >18-19 </th>
                              <th scope="col" >19-20 </th>
                              <th scope="col" >20-21 </th>
                              <th scope="col">...</th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- <tr v-for="(item, index) in GetAllPlanWithDayNum(dayNum)" :key="index" GetAllPlanWithRowNum -->
                            <tr v-for="(item, index) in GetAllPlanWithDayNum(dayNum,index+1)" :key="index"  
                                :class="{rowColor:(index+1)% 2  == 0  }"
                             >
                              <td >{{index+1}}</td>
                              <td >
                                  {{GetAllPlanWithColAndRow(index+1,1)[0].personName}}
                                  <!-- <span class="" v-if="isSection(item.fldSection , 1 ) == true">{{GetAllPlanWithColAndRow(index+1,1)}} {{item.personFamily}}-{{item.lessonName}}</span> -->
                                  <!-- <span class="" >{{GetAllPlanWithColAndRow(index+1,1).personName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , 1  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , 1  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>
                              <td >
                                   <!-- <span class="" >{{GetAllPlanWithColAndRow(index+1,2).personFamily}}-{{GetAllPlanWithColAndRow(index+1,2).lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , 2  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , 2  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td >
                              <td >
                                
                                  <!-- <span class="" >{{GetAllPlanWithColAndRow(index+1,3).personFamily}}-{{GetAllPlanWithColAndRow(index+1,3).lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , 3  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , 3  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td >
                              <td ><!-- v-if="isSection(item.fldSection , 4 ) == true" -->
                                  <!-- <span class="" >{{GetAllPlanWithColAndRow(index+1,4).personFamily}}-{{GetAllPlanWithColAndRow(index+1,4).lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , 4  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , 4  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>
                              <td >
                                  <!-- <span class="" >{{GetAllPlanWithColAndRow(index+1,5).personFamily}}-{{GetAllPlanWithColAndRow(index+1,5).lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , 5  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , 5  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>
                              <td >
                                
                                  <!-- <span class="" >{{GetAllPlanWithColAndRow(index+1,6).personFamily}}-{{GetAllPlanWithColAndRow(index+1,6).lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , 6  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , 6  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>                              
                              <td >
                                
                                  <!-- <span class="" >{{GetAllPlanWithColAndRow(index+1,7).personFamily}}-{{GetAllPlanWithColAndRow(index+1,7).lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , 7  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , 7  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>
                              <td >
                                
                                  <!-- <span class="" >{{GetAllPlanWithColAndRow(index+1,8).personFamily}}-{{GetAllPlanWithColAndRow(index+1,8).lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , 8  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , 8  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>
                              <td >
                                  <!-- <span class="" >{{GetAllPlanWithColAndRow(index+1,9).personFamily}}-{{GetAllPlanWithColAndRow(index+1,9).lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , 9  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , 9  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>                               
                              <td >
                                  <!-- <span class="" v-if="isSection(item.fldSection , '*' ) == true">{{item.personFamily}}-{{item.lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , '*'  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , '*'  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>
                              <td >
                                  <!-- <span class="" v-if="isSection(item.fldSection , '-' ) == true">{{item.personFamily}}-{{item.lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , '-'  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , '-'  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>
                              <td >
                                  <!-- <span class="" v-if="isSection(item.fldSection , '+' ) == true">{{item.personFamily}}-{{item.lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , '+'  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , '+'  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>   
                              <td >
                                  <!-- <span class="" v-if="isSection(item.fldSection , '/' ) == true">{{item.personFamily}}-{{item.lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , '/'  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , '/'  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>  
                              <td >
                                  <!-- <span class="" v-if="isSection(item.fldSection , '#' ) == true">{{item.personFamily}}-{{item.lessonName}}</span> -->
                                  <!-- <span class="" v-if="isSection(item.fldSection , '#'  ) == true">{{getStrTime(item.fldStartTime)}} - {{getStrTime(item.fldEndTime)}}</span>
                                  <span class="" v-if="isSection(item.fldSection , '#'  ) == true">{{getStrDgree(item.fldDegree)}} </span>  -->
                              </td>  
                              <!-- button for options --><!-- @click="SelectOption(option.optionId)" -->
                              <td >
                                 <div class="col" style="display: contents;">
                                  <router-link :to="{name:'PlanEdit', params: { id: item.id } }" class="btn btn-outline-info">
                                    <span class="material-icons  deleteColorIcon IconSize" >create </span>
                                  </router-link>
                                  <router-link :to="{name:'PlanEdit', params: { id: item.id } }" class="btn btn-outline-info">
                                    <span class="material-icons  deleteColorIcon IconSize" >add </span>
                                  </router-link> 
                                </div>
                              </td>

                            </tr>
                          </tbody>
                        </table>

                  </div>
              </details>
            <!-- </div> -->
           <!--  {{GetAllPlanWithDayNum(0,1)}} -->
            <hr>
            {{GetAllPlanWithColAndRow(1,1)[0]}}
           
            <hr>
           
          </div>
  </div>
  <!-- <div class="card-footer">
              <router-link  to="/QuestionCreate"
                   class="btn btn-outline-info" ><span class="material-icons float-start IconSize" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="ایجاد سوال جدید">add</span></router-link>
            </div> -->
</template>

<script>


import Vue from 'vue';

export default {
    components: {
    Vue
  },

  data() {
    return {
      AllPlanList:[],
      allDays:[0],

      //----------------old------------------------------------------------
      allQuestionsWithOptions :[],
      // showEditShopListTitle: false,
      ShopDetailList:[],
      arraySingelOrMarrids_Filter :[],
      fldTypeQuestion_Filter :99,
      fldTitle_Filter : '' ,
      fldSex_Filter : 99 ,
      fldSingelOrMarrid_Filter : 99,
      fldFromAges_Filter:0,
      fldToAges_Filter : 0,
      id: 0,
      fldTitle: "",
      fldTypeQuestion: 0,
      fldCategory: 0,
      fldSex: 0,
      fldAges: 0,
      fldSingelOrMarrid: 0,
      fldValue: 0,
      fldCountOfOptions: 2,
      questionId: 0,
      fldOptionsRow: 0,
      fldOptionsTitle: "",
      fldAtna: 0,
      fldHera: 0,
      fldAfrodit: 0,
      fldAdetis: 0,
      fldDimter: 0,
      fldPersefon: 0,
      fldHestia: 0

    };
  },
  methods: {
      isSection(fldSection ,fldCol ,){// index , fldRow
        return fldSection.includes(fldCol)// && (index == fldRow);
      },
      getStrTime(time){
        let ret = time.toString();
        if(ret.length == 4 ){
          return ret.substring(0, 2) + ":" + ret.substring(4, 2);
        }
        else if(ret.length ==3){
          return ret.substring(0, 1) + ":" + ret.substring(1,3);
        }
        
        return time;
      },
      getStrDgree(Dgree){
          if(Dgree == 1 ){
            return "کاردانی";
          }
          else if(Dgree == 2){
            return "کارشناسی";
          }
          else if(Dgree == 3){
            return "ارشد";
          }
          else if(Dgree == 4){
            return "دکتری";
          }
          
          return time;
      },
      SumSingelOrMarrids(value){
        let concatStr = "" ;
        if(value != undefined) {
          for(let i=0;i<value.length;i++){
            if(value[i] != '')
             concatStr = concatStr + value[i] ;
          }
          console.log(concatStr)
        }
        return concatStr;
      },
      
      GetStrsOfSingelOrMarrids(value){
        let ret = "" ;
        if(value != undefined || value != '') {
          let strValue = value.toString();
          for(let i=0 ; i<strValue.length ; i++ ){
              if(strValue[i] == 1 )
                  ret = ret + " - "+ "مجرد" ;
              else if (strValue[i] == 2)
                  ret = ret +  " - "+"متاهل" ;
              else if (strValue[i] == 3)
                  ret = ret +  " - " +"بیوه" ;
              else if (strValue[i] == 4)
                  ret = ret + " - "+"مطعلقه" ;
           }
        }
        return ret;
      },


      SetSelectedSingelOrMarridsChekbox(){
        var allselected = document.getElementById("allSelected");
        if(allselected.checked ){
          this.arraySingelOrMarrids_Filter = []
          this.arraySingelOrMarrids_Filter = ["1","2","3","4"]
        }
        else
            this.arraySingelOrMarrids_Filter = []
      },

    getOptionsById(Id){
     if(this.allQuestionsWithOptions.length > 0  
     || this.allQuestionsWithOptions.length != undefined){
        return  (this.allQuestionsWithOptions.filter(Element => {
              return Element.id == Id;
        })); 
      } 
    },

    GetStringType(Id , type){
        if(type =='TypeQuestion')
           return Id == 0 ? 'طیفی' : 'چند گزینه ای'
        else if(type =='Sex' && Id == 1)
           return 'مرد' 
        else if(type =='Sex' && Id == 0)
           return  'زن'
        else if(type =='Sex' && Id == 2)
           return  'مرد و زن '
        else if(type =='SingelOrMarrid')
           return Id == 1 ? 'متاهل' : 'مجرد'
        
        return 'ناشناخته'
    },
    GetDayTitle(dayNum){
        if(dayNum == 0)
           return 'شنبه'
        else if(dayNum == 1)
           return 'یک شنبه' 
        else if(dayNum ==2)
           return  'دو شنبه'
        else if(dayNum == 3)
           return  'سه شنبه '
        else if(dayNum == 4)
           return  'چهار شنبه '
        else if(dayNum == 5)
           return  'پنج شنبه '
        else if(dayNum == 6)
           return  'جمعه '

        return 'روز ناشناخته'
    },

    GetAllPlanWithDayNum(PI_dayNum,PI_row){
      return this.GetAllPlan.filter(el => {
        return (el.fldDay == PI_dayNum && el.fldRow == PI_row)
      })
    },

    GetAllPlanWithColAndRow(PI_row,PI_col){
      if(PI_row == undefined || PI_col == undefined)
        return '0'
      if(PI_row == '' || PI_col == '')
        return '0'

      console.log('PI_row:' + PI_row)
      console.log('PI_col:' + PI_col)
      return this.GetAllPlan.filter(el => {
        return (el.fldCol == PI_col  && el.fldRow == PI_row)
      })
    },


    GetAllPlanWithRowNum(PI_rowNum){
      return this.GetAllPlan.filter(el => {
        return (el.row == PI_rowNum)
      })
      
    }


  },

components: {
    
  },

computed: {
  
      GetAllPlanWithFilter(PI_dayNum){
        return this.GetAllPlan ;

     /*   if(this.fldTitle_Filter == "" && this.fldTypeQuestion_Filter  == 99 &&  this.fldSex_Filter  == 99 
                  && (this.arraySingelOrMarrids_Filter.length == 0 )
                  )
           return this.GetAllPlan  */

      return this.GetAllPlan.filter(el => {
        return (
              el.fldDay == PI_dayNum
            //  el.fldTitle
            //    .toUpperCase()
            //    .match((this.fldTitle_Filter == '' ? el.fldTitle.toUpperCase() : this.fldTitle_Filter.toUpperCase()))  
            //   && 
            //   el.fldTypeQuestion == (this.fldTypeQuestion_Filter == 99  ?  el.fldTypeQuestion : this.fldTypeQuestion_Filter)
            //   && 
            //   el.fldSex == (this.fldSex_Filter == 99  ?  el.fldSex : this.fldSex_Filter)
            //   && 
            //   el.fldFromAges >= (this.fldFromAges_Filter == 0  ?  el.fldFromAges : this.fldFromAges_Filter)
            //   && 
            //   el.fldToAges <= (this.fldToAges_Filter == "0"  ?  el.fldToAges : this.fldToAges_Filter) 
            //   &&   
            //   el.fldSingelOrMarrid == (this.arraySingelOrMarrids_Filter.length == 0  ?  el.fldSingelOrMarrid : this.SumSingelOrMarrids(this.arraySingelOrMarrids_Filter) )
          );
      })
    },

    GetAllPlan() {
      this.AllPlanList = this.$store.getters.GetAllPlan;
      return this.AllPlanList.data;
    },
  }, //computed

created() {
    this.$store.dispatch("GetAllPlan");
  } //created


}; //default
</script>

<style  scoped>
.rowColor{
  background-color: #e9e9e9
}
    .th{
          display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        /* justify-content: center; */
        align-content: space-around;
        align-items: flex-start;
        font-size: xx-small;
    }
   .h-35{
      height: 35px;
    }
  .margin-r-5{
      margin-right : 5px;
    }
  .StringType{
        /* background-color: #fff3cd;  */
        margin-right: 5px; margin-left: 5px;
        color: #969090;
        font-size: xx-small;
        display: flex;
        align-items: center;
    }
  .Yekan_Font {
    font-family: Yekan,tahoma !important;
    font-weight: 100;
    font: small-caption;
  }
   .Yekan_Font_Bold {
    font-family: Yekan,tahoma !important;
    font-weight: 300;
    font: small-caption;
  }
 .digikal_Font {
    font-family: digikal,tahoma !important;
  }


  .deletIconStyle{
    color: red;
}
.editIconStyle{
    color: #7a89da;
}
.cardHeader{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}
.indexStyle{
    color: red;
    color: rgb(243 119 119);font-size: smaller;
}
.LiStyle{
        display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
}
.rowStyle{
    display: flex;
    flex-direction: row-reverse;
}
.multiLineStyle{
    background-color: #eaeaea
}
.corectIncorrectStyle{
    background-color: #ffffff
}
.rangeStyle{
    background-color: #eaeaea
}
.indexMargin{
    margin-left:7px;
}
.summaryStyle{
      direction: rtl;
      font-family: system-ui;
      font-size: smaller;
      color: #20557f;
    }
    .answersStyle{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        margin-top: 5px;
        margin-right: 20px
    }


      .sizeOfLabel{
            width: 52px;
            padding-left: 2px;
            display: flex;
            align-content: center;
            justify-content: space-around;
            align-items: center;
      }
    .IconSize{
      font-size: medium !important;
    }
    .AddNewLinkClass{
      display: flex;align-items: center;justify-content: center;
    }
    .priceRed{
      color:rgb(245, 72, 3);font-size: smaller;
    }
    .priceGreen{
      color:green;font-size: smaller;
    }
    .fieldMargin{
      margin-left: 6px;margin-bottom: 1px;
    }
    .addIconClass{
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          align-items: center;
          justify-content: center;
      }

    .showAlert{
          display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
    }
    .IconColor{
      color: #898e93;
    }
    .deleteColorIcon{
      color: #e9b1b1;
    }
    .createColorIcon{
          color: #30d930;
    }
    .addLikColorIcon{
          color: rgb(168 175 168);
    }
    .pagecountStyle {
      margin-top: 0px;
      width: 50px;
    }
    .md-card {
      width: 100%;
      margin: 4px;
      display: inline-block;
      vertical-align: top;
    }

    .pagecountCountRecordStyle {
      margin-left: 10px;
    }
    .RowIdPAding {
      padding-bottom: 20px;
    }

    .Pading {
      padding-bottom: 5px;
    }
</style>



