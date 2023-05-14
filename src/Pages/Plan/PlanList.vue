<template>
  <div>
        
            <div  class="card" >
              
              <!-- filter panel -->
              <div class="card-header" style="direction:rtl;">
                <span class="material-icons float-end">today</span>
                <span class="Yekan_Font_Bold" >نمایش برنامه هفنگی: </span>

                  <!-- fldAcademicYear and fldDegree -->
                 
                <div class="row" >
                  <div class="col-sm">
                    <div class="input-group Yekan_Font_Bold margin-b-5" >
                      <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > سال تحصیلی </span>
                      <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" min="1400" max="1410" 
                      v-model="fldAcademicYear" placeholder="سال تحصیلی را وارد/انتخاب کنید">
                      <select class="form-select Yekan_Font_Bold" v-model="fldAcademicYear"  v-on:change="ExecGetPlanByYerTermDegreeGroupMajor()"> 
                              <option  value="0" selected>انتخاب نمایید</option>
                              <option  value="1401" >1401 </option>
                              <option  value="1402" >1402</option>
                              <option  value="1403" >1403</option>
                              <option  value="1404" >1404</option>
                              <option  value="1405" >1405</option>
                              <option  value="1406" >1406</option>
                              <option  value="1407" >1407</option>
                              <option  value="1408" >1408</option>
                      </select>
                      <span class="input-group-text h-35 " style="color: red" v-if="fldAcademicYear == 0">*</span>
                    </div>
                  </div>
                  <div class="col-sm">
                    <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldAcademicYear > 0 ">
                      <span  class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > مقطع </span>
                      <input  type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle " min="0" max="5" 
                          v-model="fldDegree" placeholder="مقطع  را وارد/انتخاب کنید">
                      <select class="form-select Yekan_Font_Bold" v-model="fldDegree"  v-on:change="ExecGetPlanByYerTermDegreeGroupMajor()"> 
                              <option  value="0" >انتخاب نمایید</option>
                              <option  value="1" >کاردانی </option>
                              <option  value="2" >کارشناسی</option>
                              <option  value="3" >ارشد</option>
                              <option  value="4" >دکتری</option>
                              <option  value="4" >فوق دکتری</option>
                      </select>
                      <span class="input-group-text h-35 " style="color: red" v-if="fldDegree == 0 ">*</span>
                    </div>
                  </div>

                </div>

                <!-- fldPlanningForTerm and fldTerm -->
                <div class="row" >
                  <div class="col-sm">
                      <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldDegree > 0 ">
                        <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > نیمسال  </span>
                        <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle " min="0" max="3" 
                            v-model="fldTerm" placeholder="ترم را وارد/انتخاب کنید">
                        <select class="form-select Yekan_Font_Bold" v-model="fldTerm" v-on:change="ExecGetPlanByYerTermDegreeGroupMajor()" > 
                                <option  value="0" >انتخاب نمایید</option>
                                <option  value="1" >مهر </option>
                                <option  value="2" >بهمن</option>
                                <option  value="3" >تابستان</option>
                        </select>
                        <span class="input-group-text h-35 " style="color: red" v-if="fldTerm == 0">*</span>
                      </div>
                  </div>

                  <div class="col-sm">
                     <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldTerm > 0">
                        <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > ترم برنامه ای  </span>
                        <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle " min="0" max="8" 
                            v-model="fldPlanningForTerm" placeholder="ترم برنامه ای  را وارد/انتخاب کنید">
                        <select class="form-select Yekan_Font_Bold" v-model="fldPlanningForTerm"  v-on:change="ExecGetPlanByYerTermDegreeGroupMajor()"> 
                                <option  value="0" >انتخاب نمایید</option>
                                <option  :value="item" v-for="(item , index) in getCountOfTerm(fldDegree) " :key="index" >
                                   ترم {{getStrPlanningTerm(item)}} ({{getStrDgree(fldDegree >0 ?fldDegree : "مقطع انتخاب نشده ")}} )
                                  </option>
                        </select>
                        <span class="input-group-text h-35 " style="color: red" v-if="fldPlanningForTerm == 0">*</span>
                      </div>

                  </div>
                </div> 

                <!--  fldGroupId and fldMajorId -->
                <div class="row" >
                  <div class="col-sm">

                    <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldPlanningForTerm > 0 "> 
                        <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  >گروه</span>
                        <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" 
                            v-model="fldGroupId" placeholder="کد  را وارد/انتخاب کنید">
                        <select class="form-select Yekan_Font_Bold" v-model="fldGroupId"  v-on:change="ExecGetAllMajorByGroupId()"  > 
                                <option value="0" selected>انتخاب نمایید</option>
                                <option :value="item.id" v-for="(item , index) in GetAllGroup" :key="index">{{item.fldGroupTitle}}</option>
                        </select>
                        <span class="input-group-text h-35 " style="color: red" v-if="fldGroupId == 0" >*</span>
                      </div>

                  </div>
 
                  <div class="col-sm">
                      <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldGroupId > 0 ">
                        <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  >رشته </span>
                        <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" 
                        v-model="fldMajorId" placeholder="کد  را وارد/انتخاب کنید">
                        <select class="form-select Yekan_Font_Bold" v-model="fldMajorId"  v-on:change="ExecGetAllMajorOriantationByMajorId()"> 
                                <option  value="0" selected>انتخاب نمایید</option>
                                <option :value="item.id" v-for="(item , index) in GetAllMajorByGroupId()" :key="index">{{item.fldMajorName}}</option> 
                        </select>
                        <span class="input-group-text h-35 " style="color: red" v-if="fldMajorId == 0">*</span>
                      </div>


                  </div>
                </div> 

                <!-- fldMajorOrientationId -->
                <div class="row" >
                  <div class="col-sm">
                    <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldMajorId > 0"> 
                      <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  >گرایش </span>
                      <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" v-model="fldMajorOrientationId" placeholder="کد  را وارد/انتخاب کنید">
                      <select class="form-select Yekan_Font_Bold" v-model="fldMajorOrientationId"  v-on:change="ExecGetPlanByYerTermDegreeGroupMajor"> 
                              <option  value="0" selected>انتخاب نمایید</option>
                              <option :value="item.id" v-for="(item , index) in GetAllMajorOriantationByMajorId()" :key="index">{{item.fldMajorOrientationName}}</option> 
                      </select>
                      <span class="input-group-text h-35 " style="color: red" v-if="fldMajorOrientationId == 0">*</span>
                    </div> 
                  </div>
                  <div class="col-sm">
                    
                  </div>
                </div> 

              </div>

            </div> 

              <hr>

              <!-- weekly -->
              <div class="card cardDayStyle"  v-for="(dayNum, index) in allDays" :key="index" >
                <details @click="openDetail(dayNum)">
                    <summary  class="Yekan_Font_Bold dayTitleStyle clearfix"  style="display: flex;flex-direction: row; 
                              flex-wrap: wrap;align-content: center; align-items: center;" >                       
                        <span class="material-icons float-end">calendar_view_week</span>
                        <span class="float-end">{{GetDayTitle(dayNum)}} </span>
                    </summary>
                    <div style="background-color: white;" >
                      <div  v-bind:id="`table_${dayNum}`" class="Yekan_Font"> 
                      </div>
                    </div>
                </details>
     
              </div>

              <hr>
              <!-- all days --><!-- v-for="(dayNum, index) in allDays" :key="index" -->
                <div class="card cardDayStyle"   >
                <details @click="openDetailForAllDays(9)">
                    <summary  class="Yekan_Font_Bold dayTitleStyle clearfix"  style="display: flex;flex-direction: row; 
                              flex-wrap: wrap;align-content: center; align-items: center;" >                       
                        <span class="material-icons float-end">done_all</span>
                        <span class="float-end">همه روزها  </span>
                    </summary>
                    <div style="background-color: white;" >
                      <div  v-bind:id="`table_allday`" class="Yekan_Font"> 
                      </div>
                    </div>
                </details>
     
              </div>



         <span style="display:none;">{{GetAllGroup}} </span>
            <!-- {{GetAllPlanByYerTermDegreeGroupMajor}} -->
            <!--  {{GetRowCount()}}  -->
              <!-- {{maxRow}} -->
              
            <!-- <section-component v-for="(item , index) in AllPlanList" :key="index"
                :user="user"  :AllPlanList="AllPlanList" :rowItem="item" :familyName="familyName" 
                :lessonName="lessonName">{{item}}
              </section-component> -->

  </div>
</template>




<script>
import Vue from 'vue';

import SectionComponent from '../Component/SectionComponent.vue';

export default {
    components: {
    Vue,
    'section-component' : SectionComponent 
  },

  data() {
    return {
      // user:{
      //   name : 'ali', 
      //   family : 'rezaei'
      // },
      AllPlanList:[],
      AllGroupList:[],
      AllMajorList:[],
      AllMajorOriantationList:[],
      AllPlanByYerTermDegreeGroupMajor:[],
      allDays:[0 ,1,2,3,4,5,6],
      maxRow : 0,
      familyName :'',
      lessonName : '',
      fldAcademicYear:0,
      fldTerm:0,
      fldDegree:0,
      fldGroupId:0,
      fldMajorId :0,
      fldMajorOrientationId:0,
      fldPlanningForTerm :0
    };
  },
  methods: {
      setCookie(startHour , startMinut){
          document.cookie = "params=" + JSON.stringify({
            fldAcademicYear: this.validateValue(this.fldAcademicYear , 'number') , 
            fldTerm: this.validateValue(this.fldTerm , 'number') , 
            fldDegree: this.validateValue(this.fldDegree , 'number') , 
            fldGroupId: this.validateValue(this.fldGroupId , 'number') , 
            fldMajorId: this.validateValue(this.fldMajorId , 'number') , 
            fldPlanningForTerm: this.validateValue(this.fldPlanningForTerm , 'number') , 
            fldMajorOrientationId: this.validateValue(this.fldMajorOrientationId , 'number') ,
            startHour: this.validateValue(startHour , 'number') ,
            startMinut: this.validateValue(startMinut , 'number'),
            
            //id: this.validateValue(planItem.id , 'number'),
            fldLessonId: this.validateValue(this.fldLessonId , 'number'),
            fldLessonOrientationId: this.validateValue(this.fldLessonOrientationId , 'number'),
            fldSex: this.validateValue(this.fldSex , 'number'),
            fldPersonId: this.validateValue(this.fldPersonId , 'number'),
            fldClassroomId: this.validateValue(this.fldClassroomId , 'number'),
            });
      },
      getCookie(){
        if(document.cookie == undefined || document.cookie == null || document.cookie == '')
          return null;
        
        if(document.cookie.split('; ').find((row) => row.startsWith('params=')) == undefined)
          return null;

        const cookieValue = document.cookie
         .split('; ')
         .find((row) => row.startsWith('params='))
         .split('=')[1];
        
         const obj = JSON.parse(cookieValue)
         return obj;
      },
      goToPlanCreate(dayNum){          
        this.$router.push('/PlanCreate/');
      },
      getCountOfTerm(degree){
        if(degree == 1) return 4;
        if(degree == 2) return 8;
        if(degree == 3) return 3;
        if(degree == 4) return 3;
        if(degree == 5) return 3;
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
          
          return Dgree;
      },
      getStrPlanningTerm(number){
        if(number == 1) return 'یک'
        if(number == 2) return 'دو'
        if(number == 3) return 'سه'
        if(number == 4) return 'چهار'
        if(number == 5) return 'پنج'
        if(number == 6) return 'شش'
        if(number == 7) return 'هفت'
        if(number == 8) return 'هشت'
        return number
      },
      ExecGetPlanByYerTermDegreeGroupMajor(){
           let params = 
               this.validateValue(this.fldAcademicYear , 'number') +";" + 
              (this.validateValue(this.fldTerm , 'number') ) +";"+
              (this.validateValue(this.fldDegree , 'number'))+";"+
              (this.validateValue(this.fldGroupId , 'number') )+";"+
              (this.validateValue(this.fldMajorId , 'number') )+";"+
              (this.validateValue(this.fldPlanningForTerm , 'number') )+";"+
              (this.validateValue(this.fldMajorOrientationId , 'number') )
              //(this.validateValue(dayNum , 'number') );

            //this.setCookie(param);
            this.setCookie();
            this.$store.dispatch("GetFilterParams", params);//

            if(this.fldAcademicYear == 0) return 
            if(this.fldTerm == 0) return 
            if(this.fldDegree == 0) return 
            if(this.fldGroupId == 0) return 
            if(this.fldMajorId == 0) return 
            if(this.fldPlanningForTerm == 0) return 

            this.$store.dispatch("GetPlanByYerTermDegreeGroupMajor", params);//
      },

      ExecGetAllMajorByGroupId(){
        if(this.fldGroupId != undefined || this.fldGroupId > 0 ){
          this.$store.dispatch("GetAllMajorByGroupId",{
            id : this.fldGroupId
          })
        }
        this.ExecGetPlanByYerTermDegreeGroupMajor()
      },
      GetAllMajorByGroupId() {
          this.AllMajorList = this.$store.getters.GetAllMajorByGroupId;
          return this.AllMajorList.data;
      },  

      ExecGetAllMajorOriantationByMajorId(){
          if(this.fldMajorId != undefined || this.fldMajorId > 0 ){
            this.$store.dispatch("GetAllMajorOriantationByMajorId",{
              id : this.fldMajorId
            })
          }
            
          this.ExecGetPlanByYerTermDegreeGroupMajor();
      },
      GetAllMajorOriantationByMajorId() {
            this.AllMajorOriantationList = this.$store.getters.GetAllMajorOriantationByMajorId;
            return this.AllMajorOriantationList.data;
      }, 

      validateValue(value , typeValue){
        if((value == "" || value == undefined ) && typeValue == "str") 
          return "0";

        if((value == "" || value == undefined || value < 0  ) && typeValue == "number") 
          return 0;

        return value;
      },

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
      getHourTime(time){
        let ret = time.toString();
        if(ret.length == 4 ){
          return ret.substring(0, 2) 
        }
        else if(ret.length ==3){
          return ret.substring(0, 1)
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
          
          return Dgree;
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

      GetAllPlanWithDayNum(PI_dayNum){
        // return this.GetAllPlan.filter(el => {
        //   return (el.fldDay == PI_dayNum )
        // })
      },

      GetRowCount(PI_dayNum){
        var ArrayRow = [];
        
        //ArrayRow = this.GetAllPlan.filter(el=> el.fldDay == PI_dayNum).map((p) =>{return p.fldRow}); 
        ArrayRow = this.GetAllPlanByYerTermDegreeGroupMajor.filter(el=> el.fldDay == PI_dayNum).map((p) =>{return p.fldRow}); 

        let maxRow = 0 ;
        for(var i = 0; i < ArrayRow.length;i++){
            if(ArrayRow[i] > maxRow)
              maxRow = ArrayRow[i]
        }
        this.maxRow = maxRow;
        return maxRow;
      },

      GetAllPlanWithColAndRow(PI_row,PI_col){
        return this.GetAllPlan.filter(el => {
          return (el.fldCol == PI_col  && el.fldRow == PI_row)
        })
      },

      GetAllPlanWithRowNum(PI_rowNum){
        return this.GetAllPlan.filter(el => {
          return (el.row == PI_rowNum)
        })
      },
      
      openDetailForAllDays(){

        //alldays.map(e=> {
        for(var i=0; i<=6; i++){// i == Day
          if(document.getElementById("header_allday_"+i) != null)//
             return; 
          
          let maxRow =  0;
          maxRow = this.GetRowCount(i);
           //create Header 
          if(document.getElementById("header_allday_" + i ) == null && maxRow > 0 )
             this.createHeaderGrid(i,true)


          //create grid and all div in form
           this.createGrid(i,maxRow,true)

          // //set Data to Cell 
          // //set red color for full cell
           this.setDataToCell(i,true)

          //set green color for null cell 
          this.setGreenToNullCell(i,maxRow,true); 
        //})
        }
      },

      openDetail(PI_dayNum){
        //alert(document.getElementById("day_"+PI_dayNum+"row_1") != null)//header_0
       if(document.getElementById("day_"+PI_dayNum+"row_1") != null)
          return; 

        //create Header 
        if(document.getElementById("header_"+PI_dayNum) == null)
          this.createHeaderGrid(PI_dayNum,false)
        

        let maxRow =  0;
        maxRow = this.GetRowCount(PI_dayNum);

        //create grid and all div in form
        this.createGrid(PI_dayNum,maxRow,false)

        //set Data to Cell 
        //set red color for full cell
        this.setDataToCell(PI_dayNum,false)

        //set green color for null cell 
        this.setGreenToNullCell(PI_dayNum,maxRow,false);
      },

      setDataToCell(PI_dayNum,isAllday){
        //var filterdByDayNum = this.GetAllPlan.filter(el=> el.fldDay == PI_dayNum)
        var filterdByDayNum = this.GetAllPlanByYerTermDegreeGroupMajor.filter(el=> el.fldDay == PI_dayNum)

        filterdByDayNum.map(e=> {
          //set Data to Cell 
          var item = null
          let id = isAllday ? "day_allday_"+PI_dayNum+"row_"+e.fldRow + "col_"+ e.fldCol: "day_"+PI_dayNum+"row_"+e.fldRow + "col_"+ e.fldCol
          item = document.getElementById(id)

          item.innerHTML = "<p>"+e.lessonName+ "("+ e.personFamily+ "-" +e.id+") </p>"
          item.style["margin-right"] = "0px";

          let endHour = parseInt(this.getHourTime(e.fldEndTime));
          let startHour = parseInt(this.getHourTime(e.fldStartTime));
          let lenSection2 = parseInt(((endHour-startHour)+1)+"00")-((endHour-startHour)+1);

          item.style["width"] = lenSection2+"px";

          let url = '/PlanCreate/'+ e.id;
          let btn = document.createElement('a');
          btn.style["font-size"] = "unset"
          btn.innerHTML ='<span class="material-icons" style="font-size: initial;color: #ff5722;" >create </span>'
          btn.href = url;

          btn.addEventListener('click', function(){
          document.cookie = "time=" + JSON.stringify({
                time : e.fldStartTime,
                day : e.fldDay,
                lessonId : e.lessonId,
                sex : e.fldSex,
                personId : e.personId,
                endTime : e.fldEndTime ,
                lessonOrientationId : e.lessonOrientationId        
            });
          });
          item.appendChild(btn);

          if((endHour - startHour)+1 > 1 ){
            let fromNextSection = parseInt(this.getHourTime(e.fldStartTime)) - 7 ;//11 -- > sec 4
            let toNextSection = parseInt(this.getHourTime(e.fldEndTime))-7;//13  --> sec 6

            for(var i=fromNextSection+1; i <= toNextSection ; i++){
              var item = null;
              let idDiv=isAllday ? "day_allday_"+PI_dayNum+"row_"+e.fldRow + "col_"+ i :"day_"+PI_dayNum+"row_"+e.fldRow + "col_"+ i ;
              item = document.getElementById(idDiv)
              item.style["background-color"] = "rgb(240 216 216)";
              item.innerHTML = "<span>"+i+"</span>"
            }

            for(var i=fromNextSection+1; i <= toNextSection ; i++){
              var item = null;
              let idDiv2=isAllday ? "day_allday_"+PI_dayNum+"row_"+e.fldRow + "col_"+ i :"day_"+PI_dayNum+"row_"+e.fldRow + "col_"+ i;
              item = document.getElementById(idDiv2)
              item.style["display"] = "none";
            }


            var lastSectionitem = null;
            let idDiv3= isAllday ? "day_allday_"+PI_dayNum+"row_"+e.fldRow + "col_"+ toNextSection :"day_"+PI_dayNum+"row_"+e.fldRow + "col_"+ toNextSection;
            lastSectionitem = document.getElementById(idDiv3)
            lastSectionitem.style["margin-left"] = "5px";
          } 
          
        })

      },
      setGreenToNullCell(PI_dayNum,maxRow,isAllday){
        //set green color for null cell 
          for (let row = 1; row <= this.maxRow; row++) {
            for (let col = 1; col <= 12; col++) {
              let id= isAllday == true ? "day_allday_"+PI_dayNum+"row_"+row + "col_"+ col:"day_"+PI_dayNum+"row_"+row + "col_"+ col;
              var item = document.getElementById(id) 
                item.style["justify-content"] = "space-around";
              if( item.innerHTML == '<p> </p>' ){
                //red color
                item.style["background-color"] = "rgb(219 238 217)";
              }
              else 
              {
                //red color
                item.style["background-color"] = "rgb(240, 216, 216)";
              }
            }
          }
      },
      createDiv(id , value ,parent,className,type,PI_dayNum,colId){
        var parentEl = document.getElementById(parent);
        var div = document.createElement('div');
        div.id = id;
        if(type == "header"){
          div.style["background-color"] = "rgb(215 215 215)";
          div.classList.add("planStyleHeader");
          //div.style["margin-left"] = "1px";
          //div.style["border"] = "solid 1px #adbecf";
        }
        else{
          div.style["background-color"] = "#f8f8f8";
          div.classList.add("planStyle");
        }
        div.style["width"] = "97.4px";
        div.style["border-radius"] = "1px"; 
        div.style["display"] = "flex";
        div.style["align-items"] = "center";
        div.style["justify-content"] = "space-around";
        
        div.innerHTML = "<p> " + value +"</p>";

        if(type == "header"){
          let url = '/PlanCreate/'+this.setCookie(parseInt(colId+7),0);
          let btn = document.createElement('a');
          btn.style["font-size"] = "unset"
          btn.innerHTML ='<span class="material-icons" style="font-size: initial;color: #ff5722;" >add </span>'
          btn.href = url;
          btn.addEventListener('click', function(){
             document.cookie = "time=" + JSON.stringify({
                  time: value,
                  day : PI_dayNum         
              });
            });
          div.appendChild(btn);
        }

        // console.log('div')
        // console.log(div)

        parentEl.appendChild(div);
        
        //var parent2 = document.getElementById(parent);
        // console.log('parent2')
        // console.log(parent2);
        


      },

      createGrid(PI_dayNum,maxRow,isAllday){
        console.log('PI_dayNum +maxRow '+PI_dayNum +":"+maxRow)

        for (let row = 1; row <= maxRow; row++) {
          let id = isAllday ? "day_allday_"+PI_dayNum+"row_"+row : "day_"+PI_dayNum+"row_"+row ;
          this.createRowDiv(id , "row",PI_dayNum,'cell',isAllday)

          for (let col = 1; col <= 12; col++) {
            let parent = isAllday ? "day_allday_"+PI_dayNum+"row_"+row : "day_"+PI_dayNum+"row_"+row;
            let idDiv  = isAllday ? "day_allday_"+PI_dayNum+"row_"+row + "col_"+ col : "day_"+PI_dayNum+"row_"+row + "col_"+ col;
            this.createDiv(
                    idDiv ,//id
                   '',//value
                   parent,//parent
                   'planStyle',//className
                   'cell',//type
                   PI_dayNum,//PI_dayNum
                   col//colId
                   )
            } 
          }
      },

      createHeaderGrid(PI_dayNum,isAllday){
        if(isAllday==true){
          this.createRowDiv("header_allday_Title", "row",PI_dayNum,'allday',isAllday,this.GetDayTitle(PI_dayNum))
          this.createRowDiv("header_allday_"+PI_dayNum, "row",PI_dayNum,'allday',isAllday,'')
        }
        else
           this.createRowDiv("header_"+PI_dayNum, "row",PI_dayNum,'onday',isAllday,'')

        for (let col = 1; col <= 12; col++) {
          let parent = (isAllday==true) ? 'header_allday_' + PI_dayNum : "header_" + PI_dayNum;
          let idDiv =  (isAllday==true) ? "headerRowCol_allday_"+ col:"headerRowCol_"+ col
          this.createDiv(idDiv ,//id
                        //"{"+ parseInt(col+8) +" : "+parseInt(col+7)+"}" , //value
                         parseInt(col+7) +" ", //value
                         parent,        //parent
                        'planStyle' ,   //className
                        'header',       //type
                        PI_dayNum ,     //PI_dayNum
                        col             //colId
                        )
        } 
      },

      createRowDiv(id , className , PI_dayNum ,type,isAllday,innerHTML){

        var table = null;
        if(isAllday==true)
          table = document.getElementById("table_allday");
        else
          table = document.getElementById("table_"+PI_dayNum);

        var div = document.createElement('div');
        div.id = id;
        div.style["margin-right"] = "30px";
        div.style["margin-bottom"] = "1px";
        div.style["display"] = "flex";
        if(id=='header_allday_Title'){
           div.style["margin-right"] = "30px";
          //  div.style["margin-left"] = "46px";
          //  div.style["margin-bottom"] = "0px";
           div.style["margin-top"] = "15px";
           div.style["justify-content"] = "space-around";
           div.style["background-color"] = "#fbf5f5";
           div.style["color"] = "#042408";
        }
        
        div.innerHTML = innerHTML==undefined ? '' : innerHTML
        div.style["class"] = className;
        
        table.appendChild(div);
        //day_allday_0row_1
      },
  },

computed: {
 
    GetAllPlanByYerTermDegreeGroupMajor(){
      this.AllPlanByYerTermDegreeGroupMajor = this.$store.getters.GetAllPlanByYerTermDegreeGroupMajor;
      return this.AllPlanByYerTermDegreeGroupMajor.data;
    },

    GetAllGroup() {
      this.AllGroupList = this.$store.getters.GetAllGroup;
      return this.AllGroupList.data;
    }, 

    GetFilterParams() {
        if(this.getCookie() == undefined || this.getCookie() == null) 
          return
        
        var retCookie = this.getCookie();
        this.fldAcademicYear = retCookie.fldAcademicYear; 
        this.fldDegree = retCookie.fldDegree
        this.fldTerm = retCookie.fldTerm
        this.fldPlanningForTerm = retCookie.fldPlanningForTerm
        this.fldGroupId = retCookie.fldGroupId
        this.fldMajorId = retCookie.fldMajorId
        this.fldMajorOrientationId = retCookie.fldMajorOrientationId

        this.ExecGetPlanByYerTermDegreeGroupMajor();
        this.ExecGetAllMajorByGroupId()
        this.ExecGetAllMajorOriantationByMajorId()
      },

    // GetAllMajorByGroupId() {
    //   this.AllMajorByGroupId = this.$store.getters.GetAllMajorByGroupId;
    //   return this.AllMajorByGroupId.data;
    // }, 

    GetAllPlanWithFilter(PI_dayNum){
        return this.GetAllPlan ;
    },

    GetAllPlan() {
      this.AllPlanList = this.$store.getters.GetAllPlan;
      return this.AllPlanList.data;
    },
  }, //computed

created() {
    this.$store.dispatch("GetAllGroup");
    this.$store.dispatch("GetAllPlan");
    this.GetFilterParams;
  } //created


}; //default
</script>

<style  >
  .dayTitleStyle{
    font-size: small;background-color: #fefefe
  }
  .cardDayStyle{
    background-color: white !important;
    direction:rtl;
    margin-bottom: 8px;
    margin-top: 2px; 
    padding-right: 2px;
    border-color: #f5c8c8;
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .inputNumberStyle{
      width: 15%;
      margin-left: 3px !important;
      margin-right: 3px !important;
    }
    .planStyleHeader{
      display: flex;
        /* border: outset 1px #e3ece3;  */
        border-left: solid 1px #ffffff;
        border-color: whitesmoke;
        border-radius: 10%;
        /* padding: 2px 5px; */
        background-color: rgb(252 246 246);
        /* width: 100px; */
        flex-direction: row;
        justify-content: space-around;
        align-content: center;
        flex-wrap: wrap;
        align-items: center;

    }
    .planStyle{
      display: flex;
        /* border: outset 1px #e3ece3; */
        border-left: solid 1px #dbeed9;
        border-color: whitesmoke;
        border-radius: 10%;
        /* padding: 2px 5px; */
        background-color: rgb(252 246 246);
        /* width: 100px; */
        flex-direction: row;
        justify-content: space-around;
        align-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
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
    font-weight: 50;
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
            width: 75px;
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
          /* justify-content: center; */
          justify-content: space-around;
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



