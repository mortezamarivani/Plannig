<template>
  <div>

                       <!--       <div class="card">
              <div class="card-header" style="direction:rtl;">
                <span class="Yekan_Font_Bold" >پنل سوال</span>
              </div>
              <div class="card-body" style="flex-direction: row;  justify-content: space-between; direction: rtl; ">
              </div>
              <div class="card-footer">
              </div>
            </div> -->

           <!-- Questions-->
          <div class="card">

            <div class="card-header" style="direction:rtl;">
              <span class="Yekan_Font_Bold" >پنل سوال</span>
            </div>

            <div class="card-body" style="flex-direction: row;  justify-content: space-between; direction: rtl; ">

                 <div class="input-group Yekan_Font_Bold margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold" >عنوان سوال</span>
                    <ckeditor :editor="editor" style="height: 8em;width: 83em;direction: rtl;"  v-model="fldTitle" :config="editorConfig"></ckeditor>
                  </div>
                  
                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold" >از رده سنی</span>
                    <input type="number"    class="form-control"  v-model="fldFromAges" >
                  </div>

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35"  >تا رده سنی</span>
                    <input type="number"    class="form-control"  v-model="fldToAges" >                   
                  </div>

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold" >رده سوال</span>
                    <input type="number"    class="form-control"  v-model="fldCategory" >
                  </div>

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35"  >نوع سوال</span>
                    <select class="form-select Yekan_Font_Bold" v-model="fldTypeQuestion"  >
                            <option value="0" selected>طیفی</option>
                            <option value="1">عدم طیفی</option>
                    </select>                    
                  </div>

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold" >ارزش سوال</span>
                    <input type="number"    class="form-control"  v-model="fldValue" >
                  </div>

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35"  >جنسیت</span>
                    <select class="form-select Yekan_Font_Bold" v-model="fldSex"  >
                            <option value="2" selected>مرد و زن</option>
                            <option value="0" >زن</option>
                            <option value="1">مرد</option>
                    </select>
                  </div>
                  

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold "  >تعداد گزینه ها</span>
                    <input type="number"    class="form-control" v-model="fldCountOfOptions" >
                  </div>

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35" >وضعیت</span>
                    <select class="form-select Yekan_Font_Bold" v-model="isDelete"  >
                            <option value="1" selected>غیرفعال</option>
                            <option value="0">فعال</option>
                    </select>
                  </div>

                  <div class="input-group margin-b-5" style="align-items: center" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold " style="height: 35px;" >وضعیت تاهل</span>

                    <div class="form-check form-check-inline margin-l-20">
                      <input class="form-check-input" type="checkbox" id="isSingel" value="1"  v-model="arraySingelOrMarrids">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isSingel">مجرد</label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20 " >
                      <input class="form-check-input" type="checkbox" id="isMarrid" value="2"  v-model="arraySingelOrMarrids">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isMarrid">متاهل</label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20 " >
                      <input class="form-check-input" type="checkbox" id="isWodow" value="3"  v-model="arraySingelOrMarrids">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isWodow">بیوه</label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="isDivorced" value="4"  v-model="arraySingelOrMarrids">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="isDivorced">مطلقه </label>
                    </div>
                    <div class="form-check form-check-inline margin-l-20" >
                      <input class="form-check-input" type="checkbox" id="allSelected" value="5"  @click="SetSelectedSingelOrMarridsChekbox()">
                      <label class="form-check-label ChekboxStyle Yekan_Font_Bold" for="allSelected">همه حالت ها </label>
                    </div>
                  </div>

            </div>

            <div class="card-footer">
                <!-- <button for question -->
                <a @click.prevent="NewQuestion()"  class="btn btn-outline-info" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Clear the all field in page"><span class="material-icons float-start deleteColorIcon IconSize" >clear</span></a>
                    <a @click="EditeQuestion(id)" class="btn btn-outline-info" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="you can edit all field in form"><span class="material-icons float-start deleteColorIcon IconSize" >create</span></a>
                    <a @click="DeleteQuestion(id)" class="btn btn-outline-info" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="You can delete thie item in page"  > <span class="material-icons float-start deleteColorIcon IconSize" >delete </span></a>

            </div>

          </div>

          <hr>
          
          <!-- Option-->
          <div class="card">
            
            <div class="card-header" style="direction:rtl;">
              <span class="Yekan_Font_Bold" >پنل گزینه ها </span>
            </div>

            <div class="card-body" style="flex-direction: row;  justify-content: space-between; direction: rtl; ">
                <!-- Options for TIFEEEE-->
                <div class="card shadow-sm   bg-body rounded" >
                  
                  <table class="table Yekan_Font_Bold "  >
                    <thead>
                      <tr  style="background-color: #f8f9fa" >
                        <th scope="col">#</th>
                        <th scope="col">ردیف </th>
                        <th scope="col" v-if="fldTypeQuestion == 1">گزینه </th>
                        <th scope="col">آتنایی</th>
                        <th scope="col">هرایی</th>
                        <th scope="col">افرودیتی</th>
                        <th scope="col">آدتیسی</th>
                        <th scope="col">دیمتری</th>
                        <th scope="col">پرسفونی</th>
                        <th scope="col">هستیای</th>
                        <th scope="col" >تا رنج </th>
                        <th scope="col">وضعیت</th>
                        <th scope="col">...</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(option , index) in GetQuestionsWithId" :key="index" :class="{selectedItem:selectedOptionId ==option.optionId }">
                        <th scope="row"  >{{index+1}}</th>
                        <th > {{option.fldOptionsRow}}</th>
                        <th v-if="fldTypeQuestion == 1"><span v-html="option.fldOptionsTitle"></span></th>
                        <!-- <td v-if="fldTypeQuestion == 1">{{option.fldOptionsTitle}}</td> -->
                        <td>{{option.fldAtna}}%</td>
                        <td>{{option.fldHera}}%</td>
                        <td>{{option.fldAfrodit}}%</td>
                        <td>{{option.fldAdetis}}%</td>
                        <td>{{option.fldDimter}}%</td>
                        <td>{{option.fldPersefon}}%</td>
                        <td>{{option.fldHestia}}%</td>
                        <th >{{option.fldToRange}}</th>
                        <td>{{option.isDeleteOption == true ? "غیرفعال" : "فعال"}}</td>
                        <td><!-- button for options -->
                          <div class="col" style="display: contents;">
                            <a @click="SelectOption(option.optionId)" class="btn btn-outline-info" 
                            data-bs-toggle="tooltip" data-bs-placement="top" title="You can delete thie item in page"  ><span class="material-icons float-start deleteColorIcon IconSize" >task_alt </span></a>

                          </div>
                         
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <!-- options edit panel -->
                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold" :disabled="fldTypeQuestion != 1">عنوان گزینه </span>
                    <ckeditor :editor="editor" v-model="fldOptionsTitle" :config="editorConfig" :disabled="fldTypeQuestion != 1"></ckeditor>
                  </div>
                  <div class="input-group margin-b-5" >
                     <span class="input-group-text sizeOfLabel Yekan_Font_Bold" >تا رنج </span>
                    <input type="number"    class="form-control"  v-model="fldToRange" >
                  </div>

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold "  >اتنا</span>
                    <input type="number"    class="form-control"  v-model="fldAtna" > 
                  </div>

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold" >هرایی </span>
                    <input type="number"    class="form-control"  v-model="fldHera" >
                  </div>
                  
                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold "   >افرودیتی</span>
                    <input type="number"    class="form-control"  v-model="fldAfrodit" >
                  </div>

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold" >آدتیسی </span>
                    <input type="number"    class="form-control"  v-model="fldAdetis" >
                  </div>
                  
                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold "  >دیمتری</span>
                    <input type="number"    class="form-control"  v-model="fldDimter" >
                  </div> 

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold" >پرسفونی </span>
                    <input type="number"    class="form-control"  v-model="fldPersefon" >
                  </div>
                  
                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold "  >هستیای</span>
                    <input type="number"    class="form-control"  v-model="fldHestia" >
                  </div>

                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold" >ردیف </span>
                    <input type="number"    class="form-control"  v-model="fldOptionsRow" >
                  </div>
                  
                  <div class="input-group margin-b-5" >
                    <span class="input-group-text sizeOfLabel Yekan_Font_Bold h-35" >وضعیت</span>
                    <select class="form-select Yekan_Font_Bold" v-model="isOptionDelete"  >
                            <option value="1" >غیرفعال</option>
                            <option value="0" selected>فعال</option>
                    </select>
                  </div>
                 </div>
            </div>

            <div class="card-footer">
            <!-- <button for Options -->
                  <router-link  to="/QuestionList"
                    active-class="active" class="btn btn-outline-info" ><span class="material-icons float-start deleteColorIcon IconSize" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Back to QuestionList">home</span></router-link>
                 <a @click="CreateOption()" class="btn btn-outline-info" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="you can edit all field in form"><span class="material-icons float-start deleteColorIcon IconSize" >add_circle_outline</span></a>

                  <a @click.prevent="NewOptions()"  class="btn btn-outline-info" 
                  data-bs-toggle="tooltip" data-bs-placement="top" title="Clear the all field in page"><span class="material-icons float-start deleteColorIcon IconSize" >clear</span></a>
                  <a @click="EditeOption()" class="btn btn-outline-info" 
                  data-bs-toggle="tooltip" data-bs-placement="top" title="you can edit all field in form"><span class="material-icons float-start deleteColorIcon IconSize" >create</span></a>
                  <a @click="DeleteOption()" class="btn btn-outline-info" 
                  data-bs-toggle="tooltip" data-bs-placement="top" title="You can delete thie item in page"  > <span class="material-icons float-start deleteColorIcon IconSize" >delete </span></a>
            </div>

          </div>



          <span style="display:none;">{{GetQuestionsWithId}}</span> 
  </div>
  
</template>

<script>


import Vue from 'vue';
import Editor from '@tinymce/tinymce-vue'
import swal from 'sweetalert';


export default {
   components: {
      'editor': Editor,
      swal:swal,
      Vue
    },

  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        language: 'fr', 
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
            ]
        },
         editorDisabled: false

        } , 
      isSingel : false, // 1
      isMarrid : false, // 2
      isWodow : false , // 3
      isDivorced : false, // 4
      allSelected : false, // 5 
      arraySingelOrMarrids:[],
      fldSingelOrMarrid: [],
      fldToRange : 100,
      isOptionDelete:0,
      selectedOptionId:0,
      AllQuestionList:[],
      allQuestionsWithOptions :[],
      ShopDetailList:[],
      id: 0,
      fldTitle: "",
      fldTypeQuestion: 0,
      fldCategory: 0,
      fldSex: 0,
      fldFromAges: 0,
      fldToAges: 0,
      fldValue: 0,
      fldCountOfOptions: 2,
      fldOptionsRow: 0,
      fldOptionsTitle: "",
      fldAtna: 0,
      fldHera: 0,
      fldAfrodit: 0,
      fldAdetis: 0,
      fldDimter: 0,
      fldPersefon: 0,
      fldHestia: 0,
      isDelete : 0,
    };
  },
  methods: {
      SetSelectedSingelOrMarridsChekbox(){
        var allselected = document.getElementById("allSelected");
        if(allselected.checked ){
          this.arraySingelOrMarrids = []
          this.arraySingelOrMarrids = ["1","2","3","4"]
        }
        else
            this.arraySingelOrMarrids = []
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
      NewOptions(){
      this.fldOptionsTitle = "";
      this.fldAdetis = 0;
      this.fldAfrodit = 0;
      this.fldAtna = 0;
      this.fldDimter = 0;
      this.fldHera = 0;
      this.fldHestia = 0;
      this.fldPersefon= 0;
      this.fldOptionsRow= 0 ;
      },
      NewQuestion() {
        this.fldTitle = "";
        this.fldCategory = 0;
        this.fldSex = 0;
        this.arraySingelOrMarrids = [];
        this.fldFromAges = 0;
        this.fldToAges = 0;
        this.fldValue = 0;
        this.fldCountOfOptions= 0;
      },
      validateValue(value , typeValue){
          if((value == "" || value == undefined ) && typeValue == "str") 
            return "0";

          if((value == "" || value == undefined || value < 0  ) && typeValue == "number") 
            return 0;

          return value;
      },

      SelectOption(optionId){
        this.selectedOptionId = optionId;
        var selectedItem = this.GetQuestionsWithId.filter(Element => {
          return Element.optionId == optionId;
                      }); 
          this.fldOptionsTitle = selectedItem[0].fldOptionsTitle;
          this.fldAdetis = selectedItem[0].fldAdetis;
          this.fldAfrodit = selectedItem[0].fldAfrodit;
          this.fldAtna = selectedItem[0].fldAtna;
          this.fldDimter = selectedItem[0].fldDimter;
          this.fldHera = selectedItem[0].fldHera;
          this.fldHestia = selectedItem[0].fldHestia;
          this.fldPersefon = selectedItem[0].fldPersefon;
          this.fldOptionsRow = selectedItem[0].fldOptionsRow;
          this.isOptionDelete = selectedItem[0].isDeleteOption == true ? 1 : 0 ;
          this.fldToRange = selectedItem[0].fldToRange ;
          this.optionId = optionId ;
      },

     //SetAfterEditOption(option){
      // var selectedItem = this.GetQuestionsWithId.filter(Element => {
      //   return Element.optionId == option.id;
      //               }); 
      //   this.allQuestionsWithOptions.fldOptionsTitle = option.fldOptionsTitle;
        // this.fldAdetis = selectedItem[0].fldAdetis;
        // this.fldAfrodit = selectedItem[0].fldAfrodit;
        // this.fldAtna = selectedItem[0].fldAtna;
        // this.fldDimter = selectedItem[0].fldDimter;
        // this.fldHera = selectedItem[0].fldHera;
        // this.fldHestia = selectedItem[0].fldHestia;
        // this.fldPersefon = selectedItem[0].fldPersefon;
        // this.fldOptionsRow = selectedItem[0].fldOptionsRow;
        // this.isOptionDelete = selectedItem[0].isDeleteOption == true ? 1 : 0 ;
        // this.fldToRange = selectedItem[0].fldToRange ;
        // this.optionId = optionId ;
    //},

      CreateOption(){

         let config = {
                headers: {
                    "x-api-key": "YOUR_API_KEY"
                }
            } 
            if(this.fldTypeQuestion == 1  &&  this.fldOptionsTitle ==''){
              swal("اخطار", " برای سوالات عدم طیفی می بایستی گزینه وارد گردد", "warning");
              return;
            }

            let arrayOptionTitles = this.fldOptionsTitle.split("\n");
            alert(arrayOptionTitles.length)
            if(arrayOptionTitles.length > 0 && this.fldTypeQuestion == 1  ){//// adam tifi and fldTypeQuestion ==1 
                for (var i = 0; i < arrayOptionTitles.length; i++){
                  let formData = new FormData();
                  
                  formData.append('fldOptionsTitle', this.validateValue(arrayOptionTitles[i] , 'str') );
                  formData.append('fldToRange', this.validateValue(this.fldToRange , 'number') );
                  formData.append('fldAtna', this.validateValue(this.fldAtna , 'number') );
                  formData.append('fldHera', this.validateValue(this.fldHera , 'number') );
                  formData.append('fldAfrodit', this.validateValue(this.fldAfrodit , 'number') );
                  formData.append('fldAdetis', this.validateValue(this.fldAdetis , 'number') );
                  formData.append('fldDimter', this.validateValue(this.fldDimter , 'number') );
                  formData.append('fldPersefon', this.validateValue(this.fldPersefon , 'number') );
                  formData.append('fldHestia', this.validateValue(this.fldHestia , 'number') );
                  formData.append('QuestionId', this.$route.params.id );
                  formData.append('isDelete', this.isOptionDelete == "" || this.isOptionDelete == undefined  ? false : this.isOptionDelete == "1" ?true : false);
                  formData.append('fldOptionsRow', this.validateValue(this.fldOptionsRow , 'number') );
                  this.$store.dispatch("CreateOption", formData ,config);//
               }
            }else if(this.fldTypeQuestion == 0 ){ // tifi and fldTypeQuestion == 0 
                  let formData = new FormData();
                  formData.append('fldOptionsTitle', 'طیفی');
                  formData.append('fldToRange', this.validateValue(this.fldToRange , 'number') );
                  formData.append('fldAtna', this.validateValue(this.fldAtna , 'number') );
                  formData.append('fldHera', this.validateValue(this.fldHera , 'number') );
                  formData.append('fldAfrodit', this.validateValue(this.fldAfrodit , 'number') );
                  formData.append('fldAdetis', this.validateValue(this.fldAdetis , 'number') );
                  formData.append('fldDimter', this.validateValue(this.fldDimter , 'number') );
                  formData.append('fldPersefon', this.validateValue(this.fldPersefon , 'number') );
                  formData.append('fldHestia', this.validateValue(this.fldHestia , 'number') );
                  formData.append('QuestionId', this.$route.params.id );
                  formData.append('isDelete', this.isOptionDelete == "" || this.isOptionDelete == undefined  ? false : this.isOptionDelete == "1" ?true : false);
                  formData.append('fldOptionsRow', this.validateValue(this.fldOptionsRow , 'number') );
                  this.$store.dispatch("CreateOption", formData ,config);//
            }

      },

       DeleteQuestion(id) {
       if(this.GetQuestionsWithId.length > '0'){
        swal("امکان حذف اطلاعات موجود نمی باشد", " ابتدا می بایستی  گزینه های مربوط به سوال  را حذف نمایید", "warning");
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
            const question = {id:id }; 
            this.$store.dispatch("DeleteQuestion", question);
            this.New();
          } else {
          }
        }); 
       },

      DeleteOption(){
          if(this.selectedOptionId == 0 ){
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
                const options = {id:this.selectedOptionId }; 
                this.$store.dispatch("DeleteOption", options);
            } else {
            }
          }); 
      },
    
      EditeQuestion() {
       /*  this.SumSingelOrMarrids(this.arraySingelOrMarrids)
       return;  */

          swal({
            title: "ویرایش اطلاعات!",
            text: "آیا از ویرایش اطلاعات مطمن هستید؟",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                if(this.fldTitle =="" ){
                  alert('لطفا عنوان سوال را وارد کنید');
                  return;
                }
                // alert(this.fldTypeQuestion);
                // if(this.fldTypeQuestion =="" ||  this.fldTypeQuestion == undefined){
                //   alert('لطفا نوع سوال را درست انتخاب نمایید');
                //   return;
                // }

              /*  if(this.fldCategory == "" ||  this.fldCategory == undefined){
                  alert('لطفا رده سوال را درست انتخاب نمایید');
                  return;
                }

                if(this.fldSex == "" ||  this.fldSex == undefined || this.fldSex < 0){
                  alert('لطفا جنسیت را درست انتخاب نمایید');
                  return;
                }

                if(this.fldAges == "" ||  this.fldAges == undefined || this.fldAges < 0 ){
                  alert('لطفا سن را درست انتخاب نمایید');
                  return;
                }

                if(this.fldSingelOrMarrid == "" ||  this.fldSingelOrMarrid == undefined || this.fldSingelOrMarrid < 0 ){
                  alert('لطفا وضعیت تاهل را درست انتخاب نمایید');
                  return;
                }

                if(this.fldValue == "" ||  this.fldValue == undefined || this.fldValue < 0 ){
                  alert('لطفا وضعیت تاهل را درست انتخاب نمایید');
                  return;
                }

                if(this.fldCountOfOptions == "" ||  this.fldCountOfOptions == undefined || this.fldCountOfOptions < 0 ){
                  alert('لطفا تعداد گزینه ها را درست انتخاب نمایید');
                  return;
                }

                if(this.isDelete == "" ||  this.isDelete == undefined || this.isDelete < 0 ){
                  alert('لطفا وضعیت را درست انتخاب نمایید');
                  return;
                } */
                const question = {
                  fldTitle : this.fldTitle,
                  fldTypeQuestion: this.fldTypeQuestion == ""|| this.fldTypeQuestion == undefined  ? 0 : this.fldTypeQuestion,
                  fldCategory: this.fldCategory == ""  ? 0 : this.fldCategory,
                  fldSex: this.fldSex == ""  ? 0 : this.fldSex,
                  fldFromAges: this.fldFromAges == "" || this.fldFromAges < 0 ? 0 : this.fldFromAges,
                  fldToAges: this.fldToAges == "" || this.fldToAges < 0 ? 0 : this.fldToAges,
                  fldSingelOrMarrid: this.SumSingelOrMarrids (this.arraySingelOrMarrids),
                  fldValue: this.fldValue == "" || this.fldValue < 0 ? 0 : this.fldValue,
                  fldCountOfOptions: this.fldCountOfOptions == "" || this.fldCountOfOptions < 0 ? 0 : this.fldCountOfOptions,
                  id: this.$route.params.id,
                  isDelete: this.isDelete == "" || this.isDelete == undefined ? false : this.isDelete == "1" ?true : false,
                };
                console.log(question)
                this.$store.dispatch("EditQuestion", question);
            } 
          }); 
      },

      EditeOption() {
        alert(this.selectedOptionId)
          if(this.selectedOptionId == 0 ){
            swal("اخطار", " لطفا گزینه مورد نظر را برای ویرایش انتخاب نمایید", "warning");
            return;
          }
          if(this.fldOptionsTitle =="" ){
            swal("اخطار", " لطفا عنوان گزینه را وارد کنید", "warning");
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
                const option = {
                  //this.fldTypeQuestion == 0 equel TAIF
                  //this.fldTypeQuestion != 0 equel ADAM TAIF
                  fldToRange :   this.fldToRange == ""|| this.fldToRange == undefined || this.fldToRange <0 ? 0 : this.fldToRange,
                  fldOptionsTitle :  this.fldTypeQuestion == 0 || this.fldOptionsTitle == ""|| this.fldOptionsTitle == undefined  ? "طیفی" : this.fldOptionsTitle,
                  fldAtna: this.fldAtna == ""|| this.fldAtna == undefined || this.fldAtna <0 ? 0 : this.fldAtna,
                  fldHera: this.fldHera == ""|| this.fldHera == undefined  || this.fldHera <0? 0 : this.fldHera,
                  fldAfrodit: this.fldAfrodit == ""|| this.fldAfrodit == undefined || this.fldAfrodit <0 ? 0 : this.fldAfrodit,
                  fldAdetis: this.fldAdetis == ""|| this.fldAdetis == undefined || this.fldAdetis <0 ? 0 : this.fldAdetis,
                  fldDimter: this.fldDimter == ""|| this.fldDimter == undefined || this.fldDimter <0 ? 0 : this.fldDimter,
                  fldPersefon: this.fldPersefon == ""|| this.fldPersefon == undefined || this.fldPersefon <0 ? 0 : this.fldPersefon,
                  fldHestia: this.fldHestia == ""|| this.fldHestia == undefined || this.fldHestia <0 ? 0 : this.fldHestia,
                  id: this.selectedOptionId,
                  isDelete: this.isOptionDelete == "" || this.isOptionDelete == undefined  ? false : this.isOptionDelete == "1" ?true : false,
                  fldOptionsRow: this.fldOptionsRow == "" || this.fldOptionsRow == undefined || this.fldOptionsRow <0 ? 0 : this.fldOptionsRow,
                };
                this.$store.dispatch("EditeOption", option);
              //this.SetAfterEditOption(option);
            } 
          }); 
      },

      SumSingelOrMarrids(value){
        let concatStr = "" ;
        for(let i=0;i<value.length;i++){
          if(value[i] != '')
           concatStr = concatStr + value[i] ;
        }
        console.log(concatStr)
        return concatStr;
      }

  },

computed: {
     GetQuestionsWithId() {
      this.allQuestionsWithOptions = this.$store.getters.GetQuestionsWithId;
       console.log(this.allQuestionsWithOptions);

        if(this.allQuestionsWithOptions != undefined && 
           this.allQuestionsWithOptions.data != undefined) {
            this.allQuestionsWithOptions.data.forEach(o => {
              this.fldTitle = o.fldTitle;
              this.arraySingelOrMarrids = this.GetSelectedSingelOrMarridsChekbox(o.fldSingelOrMarrid);
              this.fldCountOfOptions = o.fldCountOfOptions;
              this.fldSex = o.fldSex;
              this.fldFromAges = o.fldFromAges;
              this.fldToAges = o.fldToAges;
              this.fldValue = o.fldValue;
              this.fldTypeQuestion = o.fldTypeQuestion;
              this.fldCategory = o.fldCategory;
              this.isDelete = o.isDeleteQuestion == true ? 1 : 0 ;
            });
          }
      return this.allQuestionsWithOptions.data;
    }, 


  }, //computed

 watch: {
   $route() {
      this.$store.dispatch("GetQuestionsWithId", {
        id: this.$route.params.id
      });
    }
  }, //

created() {
    // var r = document.getElementsByClassName("ck ck-reset ck-editor ck-rounded-corners");
    // console.log(r)
    // r[0].style["height"] = "8em";
    // r[0].style["width"] = "83em";
    // r[0].style["direction"] = "rtl;";
    if(this.$route.params.id >0){
      this.$store.dispatch("GetQuestionsWithId", {
      id: this.$route.params.id
    });}

    ClassicEditor.create( document.querySelector( '#editor' ), {
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    } )
    .catch( error => {
        console.log( error );
    } );


  } //created

}; //default
</script>

<style >
    .h-35{
      height: 35px;
    }
    .margin-r-5{
      margin-right : 5px;
    }
    .margin-l-20{
      margin-left: 20px;
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

       .ChekboxStyle{
        display: flex;
        align-content: center;
        justify-content: space-around;
        align-items: center;
      }


  .StringType{
        /* background-color: #fff3cd; margin-right: 5px; margin-left: 5px; */
          margin-right: 5px; margin-left: 5px;
        color: #969090;
        font-size: xx-small;
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