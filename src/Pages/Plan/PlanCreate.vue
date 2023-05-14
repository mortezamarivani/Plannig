<template>
  <div>
           <!-- for questions allQuestions.data-->
          <div class="card">

              <!-- header -->
              <div class="card-header" style="direction:rtl;">
                <span class="Yekan_Font_Bold" >ثبت برنامه</span>
              </div>

            
             <!-- body -->
             <div class="card-body" style="flex-direction: row;  justify-content: space-between; direction: rtl; ">
                 <!-- fldAcademicYear -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > سال تحصیلی </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" 
                    min="1400" max="1410" 
                        v-model="fldAcademicYear" placeholder="سال تحصیلی را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldAcademicYear"  
                      v-on:change="ExecGetPlanByYerTermDegreeGroupMajor()"  :class="{inputed:fldAcademicYear > 0 }"> 
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

                  <!-- fldTerm -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldAcademicYear > 0 " >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > نیمسال  </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle " min="0" max="3" 
                        v-model="fldTerm" placeholder="ترم را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldTerm" 
                    v-on:change="ExecGetPlanByYerTermDegreeGroupMajor()" :class="{inputed:fldTerm > 0 }" > 
                            <option  value="0" >انتخاب نمایید</option>
                            <option  value="1" >مهر </option>
                            <option  value="2" >بهمن</option>
                            <option  value="3" >تابستان</option>
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="fldTerm == 0">*</span>
                  </div>

                  <!-- fldDegree -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldTerm > 0">
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > مقطع </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle " min="0" max="5" 
                        v-model="fldDegree" placeholder="مقطع  را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldDegree" :class="{inputed:fldDegree > 0 }"  v-on:change="ExecGetPlanByYerTermDegreeGroupMajor()"> 
                            <option  value="0" >انتخاب نمایید</option>
                            <option  value="1" >کاردانی </option>
                            <option  value="2" >کارشناسی</option>
                            <option  value="3" >ارشد</option>
                            <option  value="4" >دکتری</option>
                            <option  value="4" >فوق دکتری</option>
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="fldDegree == 0">*</span>
                  </div>

                  <!-- fldPlanningForTerm -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldDegree > 0">
                        <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > ترم برنامه ای  </span>
                        <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle " min="0" max="8" 
                            v-model="fldPlanningForTerm" placeholder="ترم برنامه ای  را وارد/انتخاب کنید">
                        <select class="form-select Yekan_Font_Bold" v-model="fldPlanningForTerm" :class="{inputed:fldPlanningForTerm > 0 }" > 
                                <option  value="0" >انتخاب نمایید</option>
                                <option  :value="item" v-for="(item , index) in getCountOfTerm(fldDegree) " :key="index" >
                                   ترم {{getStrPlanningTerm(item)}} ({{getStrDgree(fldDegree >0 ?fldDegree : "مقطع انتخاب نشده ")}} )
                                  </option>
                        </select>
                        <span class="input-group-text h-35 " style="color: red" v-if="fldPlanningForTerm == 0">*</span>
                  </div>

                  <!-- fldGroupId -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldPlanningForTerm > 0 "><!-- @click="GroupSelected()" @onchange="test()"-->
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  >گروه</span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" 
                        v-model="fldGroupId" placeholder="کد  را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldGroupId"  
                            :class="{inputed: fldGroupId > 0 }"    
                            v-on:change="ExecGetAllMajorByGroupId()"  > 
                            <option value="0" selected>انتخاب نمایید</option>
                            <option :value="item.id" v-for="(item , index) in GetAllGroup" :key="index">{{item.fldGroupTitle}}</option>
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="fldGroupId == 0" >*</span>
                  </div>

                  <!-- fldMajorId -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldGroupId > 0 ">
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  >رشته </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" 
                    v-model="fldMajorId" placeholder="کد  را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldMajorId"  :class="{inputed:fldMajorId > 0 }"   v-on:change="ExecGetAllMajorOriantationByMajorId()"> 
                            <option  value="0" selected>انتخاب نمایید</option>
                            <!-- <option v-if="GetAllMajorByGroupId().length == 0" value="0" selected>هیچ داده تعریف نشده است</option> -->
                            <option :value="item.id" v-for="(item , index) in GetAllMajorByGroupId()" :key="index">{{item.fldMajorName}}</option> 
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="fldMajorId == 0">*</span>
                  </div>

                  <!-- fldMajorOrientationId -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldMajorId >  0">
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  >گرایش </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" v-model="fldMajorOrientationId" placeholder="کد  را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldMajorOrientationId"  :class="{inputed:fldMajorOrientationId > 0 }"  v-on:change="ExecGetAllLessonByMajorId()" > 
                            <option  value="0" selected>انتخاب نمایید</option>
                            <!-- <option v-if="GetAllMajorOriantationByMajorId().length == 0" value="0" selected>هیچ داده ای تعریف نشده است</option> -->
                            <option :value="item.id" v-for="(item , index) in GetAllMajorOriantationByMajorId()" :key="index">{{item.fldMajorOrientationName}}</option> 
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="fldMajorOrientationId == 0">*</span>
                  </div> 

                  <!-- fldDay -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > روز   </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle " min="0" max="7" 
                          v-model="fldDay" placeholder="روز را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldDay"   
                              :class="{inputed:fldDay == undefined || fldDay != 7 }"  > 
                            <option  value="7" selected >انتخاب نمایید</option>
                            <option  value="0" >شنبه </option>
                            <option  value="1" >یکشنبه</option>
                            <option  value="2" >دوشنبه</option>
                            <option  value="3" >سه شنبه</option>
                            <option  value="4" >چهارشنبه</option>
                            <option  value="5" >پنج شنبه</option>
                            <option  value="6" >جمعه</option>
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="fldDay == 7">*</span>
                  </div>

                  <!-- fldLessonId -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldMajorOrientationId>0 && fldMajorId > 0 && fldGroupId > 0">
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  >درس </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" v-model="fldLessonId" placeholder="کد  را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldLessonId" :class="{inputed:fldLessonId > 0 }"   v-on:change="ExecGetAllLessonOriantationByLessonId()"> 
                            <option  value="0" selected>انتخاب نمایید</option>
                            <option :value="item.id" v-for="(item , index) in GetAllLessonByMajorId()" :key="index">{{item.fldLessonName}} - 
                              (واحد تئوری : {{item.fldTheoreticalUnit}} -  واحد کاربردی : {{item.fldPracticalUnit}})  </option> 
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="fldLessonId == 0">*</span>
                  </div>  

                  <!-- fldLessonOrientationId -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldLessonId>0 && fldMajorOrientationId>0 && fldMajorId > 0 && fldGroupId > 0">
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > گرایش دروش </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" v-model="fldLessonOrientationId" placeholder="کد  را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldLessonOrientationId"  :class="{inputed:fldLessonOrientationId > 0 }"> 
                            <option  value="0" selected>انتخاب نمایید</option>
                            <!-- <option v-if="GetAllLessonOriantationByLessonId().length == 0" value="0" selected>هیچ داده ای تعریف نشده است</option> -->
                            <option :value="item.lessonOriantationId" v-for="(item , index) in GetAllLessonOriantationByLessonId()" :key="index">{{item.lessonName}}</option> 
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="fldLessonOrientationId == 0">*</span>
                  </div>

                  <!-- startTime -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > ساعت شروع </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle " min="0" max="60" v-on:change="SetSelectedSection()" v-model="startMinut" placeholder="دقیقه  ">  :  
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" min="8" max="24" v-on:change="SetSelectedSection()" v-model="startHour" placeholder="ساعت  ">

                    <select class="form-select Yekan_Font_Bold" v-model="startMinut"  :class="{inputed:startMinut > 0 }"> 
                            <option  :value="0" selected> انتخاب دقیقه شروع</option>
                            <option  :value="item" v-for="(item , index) in 60" :key="index" >{{item}} </option>
                    </select> : 
                    <select class="form-select Yekan_Font_Bold" v-model="startHour" v-on:change="SetSelectedSection()"  :class="{inputed:startHour >= 8}"> 
                            <option  :value="0" selected>انتخاب ساعت شروع</option>
                            <option  :value="item" v-for="(item , index) in 21" :key="index" v-if="item>7">{{item}} </option>
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="startMinut == 0 || startHour==0">*</span>
                  </div>

                  <!-- endTime -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > ساعت پایان </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" min="0" max="60" v-on:change="SetSelectedSection()" v-model="endMinut" placeholder="دقیقه  ">  :  
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" min="8" max="24" v-on:change="SetSelectedSection()" v-model="endHour" placeholder="ساعت  ">

                     <select class="form-select Yekan_Font_Bold" v-model="endMinut"  :class="{inputed:endMinut > 0 }"> 
                             <option  :value="0" selected> انتخاب دقیقه پایان</option>
                            <option  :value="item" v-for="(item , index) in 60" :key="index" >{{item}} </option>
                    </select> : 
                    <select class="form-select Yekan_Font_Bold" v-model="endHour" v-on:change="SetSelectedSection()" :class="{inputed:endHour >= 8 }"> 
                            <option  :value="0" selected>انتخاب ساعت پایان</option>
                            <option  :value="item" v-for="(item , index) in 21" :key="index" v-if="item>7">{{item}} </option>
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="endMinut == 0 || endHour==0">*</span>
                  </div>

                  <!-- fldSex -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > جنسیت </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle " min="0" max="3" v-model="fldSex" placeholder="جنسیت  را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldSex"  :class="{inputed:fldSex > 0 }"> 
                            <option  value="0" >انتخاب نمایید</option>
                            <option  value="1" >مرد </option>
                            <option  value="2" >زن</option>
                            <option  value="3" >مختلط</option>
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="fldSex == 0">*</span>
                  </div>
                  
                    <!-- fldPersonId  -->
                   <div class="input-group Yekan_Font_Bold margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > استاد </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" v-model="fldPersonId" placeholder="کد استاد را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldPersonId"  :class="{inputed:fldPersonId > 0 }"> 
                            <option  value="0" selected>انتخاب نمایید</option>
                            <!-- <option v-if="GetAllPersonByPersonType() != undefined && GetAllPersonByPersonType().length == 0" value="0" selected>هیچ داده ای تعریف نشده است</option> -->
                            <option :value="item.id" v-for="(item , index) in GetAllPersonByPersonType()" :key="index">{{item.fldName}} - {{item.fldFamily}} ({{item.id}})</option> 
                    </select>
                    <span class="input-group-text h-35 " style="color: red" v-if="fldPersonId == 0">*</span>
                  </div>
                  
                  <!-- fldClassroomId -->
                  <div class="input-group Yekan_Font_Bold margin-b-5" v-if="fldGroupId > 0 " disabled>
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35 "  > شماره کلاس </span>
                    <input type="number" class="input-group-text  Yekan_Font_Bold h-35 inputNumberStyle" v-model="fldClassroomId" placeholder="کد استاد را وارد/انتخاب کنید">
                    <select class="form-select Yekan_Font_Bold" v-model="fldClassroomId" :class="{inputed:fldClassroomId > 0 }" disabled> 
                            <option  value="0" selected>انتخاب نمایید</option>
                            <!-- <option v-if="GetAllClassroomByGroupId().length == 0" value="0" selected>هیچ داده ای تعریف نشده است</option> -->
                            <option :value="item.id" v-for="(item , index) in GetAllClassroomByGroupId()" :key="index">
                              {{item.id}}  : (  کلاس شماره {{item.code == 99 ? 'مجازی' : item.code }} - {{getClassTypeStr(item.fldType)}})</option> 
                    </select>
                    <span class="input-group-text h-35 " style="color: red"  v-if="fldClassroomId == 0">*</span>
                  </div>


                  <!-- section -->
   <!--                <div class="input-group margin-b-5" style="align-items: center" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold " style="height: 35px;" >سکشن</span>
                    
                    <div class="form-check form-check-inline margin-l-20">
                      <input class="form-check-input" type="checkbox" id="isSingel" value="1" disabled  v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isSingel">8</label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20 " >
                      <input class="form-check-input" type="checkbox" id="isMarrid" value="2" disabled  v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isMarrid">9</label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20 " >
                      <input class="form-check-input" type="checkbox" id="isWodow" value="3" disabled  v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isWodow">10</label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="isDivorced" value="4" disabled  v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">11 </label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="isDivorced" value="5" disabled v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">12 </label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="isDivorced" value="6" disabled v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">13 </label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="isDivorced" value="7" disabled v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">14 </label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="isDivorced" value="8" disabled v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">15 </label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="isDivorced" value="9" disabled v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">16 </label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="isDivorced" value="10" disabled v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">17 </label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="isDivorced" value="11" disabled v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">18 </label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="isDivorced" value="12" disabled v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">19 </label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="isDivorced" value="13" disabled v-model="arraySection">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">20 </label>
                    </div>

                  </div> -->
                  

            </div>

            <!-- bottons -->
            <div class="card-footer">
                <a @click.prevent="New()"  class="btn btn-outline-info Yekan_Font_Bold" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Clear the all field in page">
                    <span class="material-icons float-start deleteColorIcon IconSize" >clear</span> پاک کردن فرم</a>
                
                <a @click="Create()" v-if="isInsert"  class="btn btn-outline-info Yekan_Font_Bold" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="you can edit all field in form">
                    <span class="material-icons float-start deleteColorIcon IconSize" >add_circle_outline</span>ایجاد برنامه</a>
                <a @click="Edite()"  class="btn btn-outline-info Yekan_Font_Bold" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="you can edit all field in form">
                    <span class="material-icons float-start deleteColorIcon IconSize" >edit</span>اصلاح برنامه</a>
                <a @click="Delete()"  class="btn btn-outline-info Yekan_Font_Bold" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="You can delete thie item in page"  > 
                    <span class="material-icons float-start deleteColorIcon IconSize" >delete </span>حذف برنامه</a>
                <router-link to="/PlanList" class="btn btn-outline-info Yekan_Font_Bold">
                        <span class="material-icons float-start deleteColorIcon IconSize" > home</span>صفحه اصلی
                </router-link> 
<!-- execGetPlanByDayAndTime -->
                
            </div>

          </div>

<hr>

          <div class="card">
            <div class="card-header" style="direction:rtl;">
                <span class="Yekan_Font_Bold" >لیست برنامه های مربوط به   </span>
                <span class="Yekan_Font_Bold" v-if="fldAcademicYear>0"> { سال تحصیلی :{{fldAcademicYear}}  } </span>
                <span class="Yekan_Font_Bold" v-if="fldDegree>0"> {  مقطع :{{getStrDgree(fldDegree)}}  }</span>
                <span class="Yekan_Font_Bold" v-if="fldTerm>0">{  ترم :{{getStrterm(fldTerm)}}  }  </span>
              <a @click.prevent="ExecGetPlanByYerTermDegreeGroupMajor()"  class="btn btn-outline-info Yekan_Font_Bold" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Clear the all field in page">بروز رسانی لیست </a>
            </div>
            <div class="card-body" style="flex-direction: row;  justify-content: space-between; direction: rtl; ">

              <table class="table Yekan_Font_Bold "  >
                    <thead>
                      <tr  style="background-color: #f8f9fa" >
                        <th scope="col">#</th>
                        <th scope="col">گروه و رشته</th>
                        <th scope="col">روز </th>
                        <th scope="col">درس </th>
                        <th scope="col">استاد</th>
                        <th scope="col">ساعت </th>
                        <th scope="col" >جنسیت </th>
                        <th scope="col" >شماره کلاس </th>
                        <th scope="col">...</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item , index) in GetAllPlanByYerTermDegreeGroupMajor" :key="index" 
                            :class="{selectedItem:selectedPlanId == item.id }">
                        <th scope="row"  >{{index+1}}</th>
                        <td>{{item.groupName}} ( {{item.majorName}} - {{item.id}} )</td>
                        <td>{{GetDayTitle(item.fldDay)}}</td>
                        <td>{{item.lessonName}}</td>
                        <td>{{item.personFamily}}-{{item.personName}}</td>
                        <td>{{getStrTime(item.fldStartTime)}}  الی   {{getStrTime(item.fldEndTime)}}</td>
                        <td>{{getStrSex(item.fldSex)}}</td>
                        <td>{{item.classroomId}} : (  کلاس شماره {{item.classroomCode == 99 ? 'مجازی' : item.classroomCode }} -
                                   {{getClassTypeStr(item.classroomType)}} )</td>
                        <td>
                          <div class="col" style="display: contents;">
                            <a @click="SelectedPlan(item)" class="btn btn-outline-info" 
                              data-bs-toggle="tooltip" data-bs-placement="top" title="You can delete thie item in page"  >
                              <span class="material-icons float-start deleteColorIcon IconSize" >task_alt </span></a>

                          </div>
                         
                        </td>
                      </tr>
                    </tbody>
              </table>  

            </div>
          </div>
          <span style="display:none;">{{GetAllGroup}} </span> 
         <!--  {{GetPlanById.id}} -->
         <!--  {{GetAllPlanByYerTermDegreeGroupMajor}}  -->
        
  </div>
</template>

<script>


import Vue from 'vue';

export default {
    components: {
      Vue
  },

  data() {
    return {
      AllGroupList:[],
      AllMajorList:[],
      AllMajorOriantationList:[],
      AllLessonList:[],
      AllLessonOriantation:[],
      AllPersonList:[],
      AllClassroomList:[],
      arraySection:[],
      PlanById:[],
      AllPlanByYerTermDegreeGroupMajor:[],
      fldGroupId : 0 ,
      fldMajorId : 0,
      fldMajorOrientationId:0,
      fldLessonId:0,
      fldLessonOrientationId:0,
      isShowMajor : false,
      isShowLesson : false,
      isEdite : true,
      isInsert : true,
      isDelete : true,
      LessonOriantation : false,
      MajorOrientation : false,
      fldDegree : 0,
      fldAcademicYear:0,
      fldTerm:0,
      fldPlanningForTerm : 0,
      fldDay:7,
      fldStartTime:0,
      fldEndTime:0,
      fldSex:0,
      fldPersonId:0,
      fldClassroomId:0,
      fldRow:0,
      fldCol:0,
      //fldSection:0,
      fldPlanId:0,
      startMinut : 0,
      startHour : 0,
      endMinut : 0,
      endHour : 0,
      selectedPlanId :0
    };
  },
  methods: {
      setCookieAfterEdit(){
          document.cookie = "params=" + JSON.stringify({
            fldAcademicYear: this.validateValue(this.fldAcademicYear , 'number') , 
            fldTerm: this.validateValue(this.fldTerm , 'number') , 
            fldDegree: this.validateValue(this.fldDegree , 'number') , 
            fldGroupId: this.validateValue(this.fldGroupId , 'number') , 
            fldMajorId: this.validateValue(this.fldMajorId , 'number') , 
            fldPlanningForTerm: this.validateValue(this.fldPlanningForTerm , 'number') , 
            fldMajorOrientationId: this.validateValue(this.fldMajorOrientationId , 'number') ,
            startHour: this.validateValue(this.startHour , 'number') ,
            startMinut: this.validateValue(this.startMinut , 'number'),
            
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
      getTimeCookie(){
        if(document.cookie == undefined || document.cookie == null || document.cookie == '')
          return null;
        
        if(document.cookie.split('; ').find((row) => row.startsWith('time=')) == undefined)
          return null;

        const cookieValue = document.cookie
         .split('; ')
         .find((row) => row.startsWith('time='))
         .split('=')[1];
        
         const obj = JSON.parse(cookieValue)
         return obj;
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
      getNumberTime(time,type){
        let ret = time.toString();
        if(ret.length == 4 && type=='Hour'){
          return ret.substring(0, 2) ;
        }
        else if(ret.length == 3 && type=='Hour'){
          return ret.substring(0, 1) ;
        }
        else if(ret.length ==4 && type=='Min'){
          return ret.substring(4, 2);
        }
        else if(ret.length ==3 && type=='Min'){
          return ret.substring(1,3);
        }

        return time;
      },

      getStrSex(value){
          if(value == 1 ){
            return "مرد";
          }
          else if(value == 2){
            return "زن";
          }
          else if(value == 3){
            return "مختلط";
          }
          return value;
      },
      getStrterm(term){
          if(term == 1 ){
            return "مهر";
          }
          else if(term == 2){
            return "بهمن";
          }
          else if(term == 3){
            return "تابستان";
          }
          
          return term;
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

      SetSelectedSection(){
        if (this.startHour == undefined || this.startHour == "" || this.startHour == 0)
            return;
        if (this.endHour == undefined || this.endHour == "" || this.endHour == 0)
            return;
        
        let startTime = parseInt(this.startHour)-7;
        let endTime = parseInt(this.endHour)-7;
        const str = []; 

        for (let i = startTime; i<= endTime ; i++){
            str.push( i.toString());
        }
        this.arraySection = str;
        return str;
      },

      GetSelectedSection(arraySection){
        let strValue = arraySection;
        const str = []; 
        for (let i = 0; i<= strValue.length ; i++){
          if((strValue[i] != undefined) || (strValue[i] != undefined)){
            str.push("" + strValue[i].toString() + "");
          }
        }
        return str;
      },
      getClassTypeStr(Pi_classType){
        if(Pi_classType == 1) 
          return "پسرانه"

        if(Pi_classType == 2) 
          return "دخترانه"

        if(Pi_classType == 3) 
          return "مختلط"        
        
        return Pi_classType;
      },
      GroupSelected(){
      },
       GetSelectedSingelOrMarridsChekbox(value){
        let strValue = value.toString();
        const str = []; 
        for (let i = 0; i<= strValue.length ; i++){
          if((strValue[i] != undefined) || (strValue[i] != undefined)){
            str.push("" + strValue[i].toString() + "");
          }
        }
        return str;
      },
      SumSingelOrMarrids(value){
        let concatStr = "" ;
        for(let i=0;i<value.length;i++){
          if(value[i] != '')
           concatStr = concatStr + value[i] ;
        }
        return concatStr;
      },
      New(){
        this.fldGroupId = 0 ,
        this.fldMajorId = 0,
        this.fldMajorOrientationId=0,
        this.fldLessonId=0,
        this.fldLessonOrientationId=0,
        this.fldDegree =0,
        this.fldAcademicYear=0,
        this.fldTerm=0,
        this.fldDay=7,
        this.fldStartTime=0,
        this.fldEndTime=0,
        this.fldSex=0,
        this.fldPersonId=0,
        this.fldClassroomId=0,
        this.fldRow=0,
        this.fldCol=0,
        //this.fldSection=0,
        this.startMinut = 0,
        this.startHour = 0,
        this.endMinut = 0,
        this.endHour = 0
      },
      SelectedPlan(planItem){
        if(planItem == undefined)
            return;

        this.selectedPlanId = planItem.id
        this.fldGroupId = planItem.groupId ,
        this.fldMajorId = planItem.majorId,
        this.fldMajorOrientationId= planItem.majorOrientationId,
        this.fldLessonId= planItem.lessonId,
        this.fldLessonOrientationId= planItem.lessonOrientationId,
        this.fldDegree = planItem.fldDegree,
        this.fldAcademicYear= planItem.fldAcademicYear,
        this.fldTerm= planItem.fldTerm,
        this.fldPlanningForTerm= planItem.fldPlanningForTerm,
        this.fldDay= planItem.fldDay,
        this.fldSex= planItem.fldSex,
        this.fldPersonId= planItem.personId,
        this.fldClassroomId= planItem.classroomId,
        this.fldPlanId= planItem.id,
        //this.arraySection =  this.GetSelectedSection(planItem.fldSection),
        
        this.startHour = this.getNumberTime(planItem.fldStartTime , 'Hour'),
        this.startMinut = this.getNumberTime(planItem.fldStartTime , 'Min'),
        //this.endHour = this.getNumberTime(planItem.fldEndTime , 'Hour'),
        this.endMinut = this.getNumberTime(planItem.fldEndTime , 'Min'),

        this.ExecGetAllMajorByGroupId()
        this.ExecGetAllMajorOriantationByMajorId()
        this.ExecGetAllLessonByMajorId()
        this.ExecGetAllLessonOriantationByLessonId()
        },
        setParamsFromPlanFilterPanel(planItem){
          if(planItem == undefined)
            return;

            this.fldAcademicYear=  planItem.split(';')[0] ,
            this.fldTerm=  planItem.split(';')[1] ,
            this.fldDegree =  planItem.split(';')[2] ,
            this.fldGroupId = planItem.split(';')[3] ,
            this.fldMajorId = planItem.split(';')[4] ,
            this.fldPlanningForTerm = planItem.split(';')[5] ,
            this.fldMajorOrientationId= planItem.split(';')[6],
            this.fldDay= planItem.split(';')[7],

            this.ExecGetAllMajorByGroupId()
            this.ExecGetAllMajorOriantationByMajorId()
            this.ExecGetAllLessonByMajorId()
            this.ExecGetAllLessonOriantationByLessonId()
        },

        Delete(id) {
        if(this.selectedPlanId == 0) {
          swal("اخطار", " لطفا گزینه مورد نظر را برای حذف انتخاب نمایید", "warning");
          return;
        }
       swal({
          title: "حذف اطلاعات!",
          text: "آیا از حذف اطلاعات مطمن هستید؟",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            const plan = {id:this.selectedPlanId }; 
            this.$store.dispatch("DeletePlan", plan);
            //this.New();
          } else {
          }
        }); 
        },

        Edite() {
          if(this.selectedPlanId == 0 || this.selectedPlanId == undefined) {
            swal("اخطار", " لطفا گزینه مورد نظر را برای ویرایش انتخاب نمایید", "warning");
            return;
          }

          let errMessage = this.validationForm();
            if(errMessage != ""){
              swal({icon: "warning", text: `مقادیر ${errMessage} را بدرستی واردکنید` , });
              return;
          }

          swal({
            title: "ویرایش اطلاعات!",
            text: "آیا از ویرایش اطلاعات مطمن هستید؟",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const plan = {
                  Id : this.selectedPlanId,
                  GroupId : this.validateValue(this.fldGroupId , 'number'),
                  MajorId : this.validateValue(this.fldMajorId , 'number'),
                  fldSex:  this.validateValue(this.fldSex , 'number'),
                  MajorOrientationId:this.validateValue(this.fldMajorOrientationId , 'number'),
                  LessonId:this.validateValue(this.fldLessonId , 'number'),
                  fldSection: '0',
                  LessonOrientationId: this.validateValue(this.fldLessonOrientationId , 'number') ,
                  fldDegree:this.validateValue(this.fldDegree , 'number') ,
                  fldAcademicYear: this.validateValue(this.fldAcademicYear , 'number') ,
                  fldDay:this.validateValue(this.fldDay , 'number'),
                  fldStartTime: this.SetTime(this.startHour , this.startMinut),
                  fldEndTime: this.SetTime(this.endHour , this.endMinut),
                  PersonId:this.validateValue(this.fldPersonId , 'number') ,
                  ClassroomId:this.validateValue(this.fldClassroomId , 'number') ,
                  fldTerm:this.validateValue(this.fldTerm , 'number') ,
                  fldPlanningForTerm:this.validateValue(this.fldPlanningForTerm , 'number') ,
                  fldRow:0,
                  fldCol:this.startHour-7
                };
                this.$store.dispatch("EditePlan", plan);
                this.setCookieAfterEdit()
            } 
          });
          this.ExecGetPlanByYerTermDegreeGroupMajor(); 
        },
        SetTime(Hour , Minut){
          let retTime = "";

          if(Minut.length ==1  )
             retTime = Hour + "0" + Minut ;
          else if(Minut.length==2)
            retTime = Hour +  Minut ;
          else if(Minut == 0 )
            retTime = Hour +  "00" ;
          
          return retTime;
        },
        Create() {
            let errMessage = this.validationForm();
            if(errMessage != ""){
              swal({icon: "warning", text: `مقادیر ${errMessage} را بدرستی واردکنید` , });
              return;
            }

            let config = {
                headers: {
                    "x-api-key": "YOUR_API_KEY"
                }
            } 
            
            let formData = new FormData();
            formData.append('GroupId',this.validateValue(this.fldGroupId , 'number') );
            formData.append('MajorId', this.validateValue(this.fldMajorId , 'number'));
            formData.append('fldSex', this.validateValue(this.fldSex , 'number'));
            formData.append('MajorOrientationId', this.validateValue(this.fldMajorOrientationId , 'number'));
            formData.append('LessonId', this.validateValue(this.fldLessonId , 'number'));
            //formData.append('fldSection', this.arraySection.join(''));
            formData.append('LessonOrientationId', this.validateValue(this.fldLessonOrientationId , 'number') );
            formData.append('fldDegree', this.validateValue(this.fldDegree , 'number') );
            formData.append('fldAcademicYear', this.validateValue(this.fldAcademicYear , 'number') );
            formData.append('fldDay', this.validateValue(this.fldDay , 'number') );
            formData.append('fldStartTime', this.SetTime(this.startHour , this.startMinut));
            formData.append('fldEndTime', this.SetTime(this.endHour , this.endMinut));
            formData.append('PersonId', this.validateValue(this.fldPersonId , 'number') );
            formData.append('ClassroomId', this.validateValue(this.fldClassroomId , 'number') );
            formData.append('fldTerm', this.validateValue(this.fldTerm , 'number') );
            formData.append('fldPlanningForTerm', this.validateValue(this.fldPlanningForTerm , 'number') );
            formData.append('fldRow', 0 );
            formData.append('fldCol', this.startHour-7 );
            this.$store.dispatch("CreatePlan", formData , config);//

            this.ExecGetPlanByYerTermDegreeGroupMajor();
        },

        validateValue(value , typeValue){
          if((value == "" || value == undefined ) && typeValue == "str") 
            return "0";

          if((value == "" || value == undefined || value < 0  ) && typeValue == "number") 
            return 0;

          return value;
        },

        validationForm(){
            let errMessage = "";
            // let startTime = parseInt( (this.startHour.toString()+(this.startMinut <10 ? "0"+this.startMinut.toString() : this.startMinut.toString() )))
            // let endTime =   parseInt(this.endHour.toString()+(this.endMinut<10 ? "0" + this.endMinut.toString():this.endMinut.toString()));

            let startTime = this.SetTime(this.startHour , this.startMinut)
            let endTime =   this.SetTime(this.endHour , this.endMinut)

            errMessage = parseInt(startTime) >=  parseInt(endTime) ? errMessage +"-"+"ساعت شروع نباید بزرگتر مساوی ساعت پایان باشد " :errMessage ;
            errMessage = this.fldGroupId == 0 ? errMessage +"-"+"گروه " : errMessage ;
            errMessage = this.fldMajorId == 0 ? errMessage + " - "+"رشته " : errMessage ;
            errMessage = this.fldLessonId == 0 ? errMessage + " - "+"درس " : errMessage ;
            errMessage = this.fldMajorOrientationId == 0 ? errMessage + " - "+"گرایش  " : errMessage ;
            // errMessage = this.fldLessonOrientationId == 0 ? errMessage + " - "+"گرایش تخصصی درس " : errMessage ;
            errMessage = this.fldDegree == 0 ? errMessage + " - "+"مقطع " : errMessage ;
            errMessage = this.fldAcademicYear == 0 ? errMessage + " - "+"سال تحصیلی " : errMessage ;
            errMessage = this.startHour == 0 ? errMessage + " - "+"ساعت شروع " : errMessage ;
            //errMessage = this.startMinut == 0 ? errMessage + " - "+"دقیقه شروع " : errMessage ;
            errMessage = this.endHour == 0 ? errMessage + " - "+"ساعت پایان " : errMessage ;
            //errMessage = this.endMinut == 0 ? errMessage + " - "+"دقیقه پایان " : errMessage ;
            errMessage = this.fldDay == 7 ? errMessage + " - "+"روز " : errMessage ;
            errMessage = this.fldPersonId == 0 ? errMessage + " - "+"استاد " : errMessage ;
            // errMessage = this.fldClassroomId == 0 ? errMessage + " - "+"شماره کلاس  " : errMessage ;
            return errMessage;
        },

        execGetPlanByDayAndTime(){
            if(this.fldDay == 7) return 
            if(this.startHour == 0)return 
            if(this.endHour == 0) return 
            if(this.fldPersonId == 0) return 
            if(this.arraySection == 0) return 
            if(this.fldTerm == 0) return 
            if(this.fldAcademicYear == 0) return 

            let param = 
              this.validateValue(this.fldDay , 'number') +";" + 
              (this.startHour.toString()+(this.startMinut <10 ? "0"+this.startMinut.toString() : this.startMinut.toString() ) )+";"+
              (this.endHour.toString()+(this.endMinut<10 ? "0" + this.endMinut.toString():this.endMinut.toString()))+";"+
              (this.validateValue(this.fldPersonId , 'number') ) +";"+
              (this.arraySection.join(''))+";"+
              (this.validateValue(this.fldTerm , 'number'))+";"+
              (this.validateValue(this.fldAcademicYear , 'number') );
            this.$store.dispatch("GetPlanByDayAndTime", param);//
        },

        ExecGetPlanByYerTermDegreeGroupMajor(){
            if(this.fldAcademicYear == 0) return 
            if(this.fldTerm == 0) return 
            if(this.fldDegree == 0) return 
            if(this.fldGroupId == 0) return 
            if(this.fldMajorId == 0) return 
            if(this.fldPlanningForTerm == 0) return 
            if(this.fldMajorOrientationId == 0) return 

            let param = 
              this.validateValue(this.fldAcademicYear , 'number') +";" + 
              (this.validateValue(this.fldTerm , 'number') ) +";"+
              (this.validateValue(this.fldDegree , 'number'))+";"+
              (this.validateValue(this.fldGroupId , 'number') )+";"+
              (this.validateValue(this.fldMajorId , 'number') )+";"+
              (this.validateValue(this.fldPlanningForTerm , 'number') )+";"+
              (this.validateValue(this.fldMajorOrientationId , 'number') );
            this.$store.dispatch("GetPlanByYerTermDegreeGroupMajor", param);//
        },

  
        ExecGetAllMajorByGroupId(){
          if(this.fldGroupId != undefined || this.fldGroupId > 0 ){
            this.$store.dispatch("GetAllMajorByGroupId",{
              id : this.fldGroupId
            })
          }
            this.ExecGetAllClassroomByGroupId()
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
            
          this.isShowMajorOrientation = true;
          this.ExecGetPlanByYerTermDegreeGroupMajor();
        },
        GetAllMajorOriantationByMajorId() {
            this.AllMajorOriantationList = this.$store.getters.GetAllMajorOriantationByMajorId;
            return this.AllMajorOriantationList.data;
        }, 
        
        ExecGetAllLessonByMajorId(){
          if(this.fldMajorId != undefined || this.fldMajorId > 0 ){
            this.$store.dispatch("GetAllLessonByMajorId",{
              id : this.fldMajorId
            })
          }
            this.isShowLesson =true;
        },
        GetAllLessonByMajorId() {
            this.AllLessonList = this.$store.getters.GetAllLessonByMajorId;
            return this.AllLessonList.data;
        },  
        
        ExecGetAllLessonOriantationByLessonId(){
           if(this.fldLessonId != undefined || this.fldLessonId > 0 ){
             this.$store.dispatch("GetAllLessonOriantationByLessonId",{
               id : this.fldLessonId
             })
           }

            if(this.AllLessonList.data == undefined || this.AllLessonList== null)
              return;
            
            var retLesson = this.AllLessonList.data.filter(el=> el.id == this.fldLessonId)
            this.endHour = (parseInt(this.startHour) + parseInt(retLesson[0].fldTheoreticalUnit)+parseInt(retLesson[0].fldPracticalUnit))-1;
        },
        GetAllLessonOriantationByLessonId() {
            this.AllLessonOriantation = this.$store.getters.GetAllLessonOriantationByLessonId;
            return this.AllLessonOriantation.data;
        }, 

        ExecGetAllPersonByPersonType(pi_persontype){
            this.$store.dispatch("GetAllPersonByPersonType",{
              id : pi_persontype
            })
        },

        GetAllPersonByPersonType() {
            this.AllPersonList = this.$store.getters.GetAllPersonByPersonType;
            return this.AllPersonList.data;
        }, 

        ExecGetAllClassroomByGroupId(){
          if(this.fldGroupId != undefined || this.fldGroupId > 0 ){
            this.$store.dispatch("GetAllClassroomByGroupId",{
              id : this.fldGroupId
            })
          }

        },

        GetAllClassroomByGroupId(){
          this.AllClassroomList = this.$store.getters.GetAllClassroomByGroupId;
          return this.AllClassroomList.data;
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

            //this.selectedPlanId= retCookie.id ,
            this.fldLessonId= retCookie.fldLessonId ,
            this.fldLessonOrientationId= retCookie.fldLessonOrientationId ,
            this.fldSex= retCookie.fldSex ,
            this.fldPersonId= retCookie.fldPersonId ,
            this.fldClassroomId= retCookie.fldClassroomId ,
            
            this.ExecGetAllMajorByGroupId()
            this.ExecGetAllMajorOriantationByMajorId()
            this.ExecGetAllLessonByMajorId()
            this.ExecGetAllLessonOriantationByLessonId()

            if(this.getTimeCookie() == undefined || this.getTimeCookie() == null) 
              return

            var retTimeCookie = this.getTimeCookie();
            if(retTimeCookie.time.toString().indexOf("{") != -1 ){//insert // {10 : 15}
               let strTime;
               strTime = retTimeCookie.time.replace('{' ,' ');
               strTime = strTime.replace('}' ,' ');
               this.startHour = parseInt(strTime.split(':')[1]);
            }else // edit
               this.startHour = this.getNumberTime(retTimeCookie.time , 'Hour');

            this.fldDay = retTimeCookie.day;
            this.fldLessonId = retTimeCookie.lessonId ;
            this.fldSex = retTimeCookie.sex;
            this.fldPersonId = retTimeCookie.personId ;
            this.fldLessonOrientationId = retTimeCookie.lessonOrientationId;
            this.endHour = this.getNumberTime(retTimeCookie.endTime , 'Hour');
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

    GetPlanById() {
      this.PlanById = this.$store.getters.GetPlanById;
      this.SelectedPlan(this.PlanById.data)
      return this.PlanById.data;
    }, 

  }, //computed

watch: {
   $route() {
      this.$store.dispatch("GetPlanById", this.$route.params.id);   }
},

created() {
      this.$store.dispatch("GetAllGroup");
      this.ExecGetAllPersonByPersonType(2);

      if(this.$route.params.id == 'undefined' ){
        this.setParamsFromPlanFilterPanel(this.$route.params.id) //1401;3;4;34;5;
      }
      else{//edit mode
        this.selectedPlanId = this.$route.params.id;
        this.$store.dispatch("GetPlanById", this.$route.params.id);
        this.isInsert = false;
        //console.log(this.$store.getters.GetPlanById.data)
        //let timeout = setTimeout(this.SelectedPlan(this.$store.getters.GetPlanById.data), 3000);
        //this.SelectedPlan(this.$store.getters.GetPlanById.data)
      }
      this.GetFilterParams();
      var retCookie = this.getCookie();
  //}
}

}; //default
</script>

<style >
    .inputed{
       background-color: #e9ecef;
       border-color: green;
    }
    .inputNumberStyle{
      width: 4%;
      margin-left: 3px !important;
      margin-right: 3px !important;
    }
    #container 
    .h-35{
      height: 35px;
    }
    .margin-r-5{
      margin-right : 5px;
    }
    .margin-b-5{
      margin-bottom : 5px;
    }
    .selectedItem{
        background-color: #e5e0e9;
      }

    .sizeOfLabel{
            width: 75px;
            padding-left: 2px;
            display: flex;
            align-content: center;
            justify-content: space-around;
            align-items: center;
            
    }


  .StringType{
         margin-right: 5px; margin-left: 5px;
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
        margin-top: 10px;
        margin-right: 50px
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