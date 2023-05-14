<template>
  <!--<div class="container" style="direction:ltr">-->
  <div   style="direction:ltr">

  <div class="col-md-12">

  <div class="jumbotron" style="direction :rtl">
      <div class="imageStyle">
          <!-- <img src="../../assets/images/uni.png"> -->
          <img src="../../assets/images/uni2.png" style="border-radius: 90px;height: 80px; width: 80px;">
          <h2 class="display-4">دانشگاه شیراز    </h2>
      </div>
      <p class="lead fw-bold Yekan_Font">برنامه ثبت برنامه گروهها </p>
      <hr class="fst-italic ">
        <p class="Yekan_Font" style="text-align: justify;">
          با استفاده از این سیستم دیگر نیازی نیست مدیران گروه بصورت دستی برنامه ترم بندی را بر روی کاغذ بنویسند فقط کافیست در این سیستم ثبت نمایند و بصورت اتومات کلاس به هر برنامه تخصیص داده خواهد شد و تاریخ امتحان نیز توسط سیستم تخصیص داده خواهد شد 
          یکی دیگر از قابلیت های این سیستم امکان ارتباط با هر کدام از سامانه های اموزشی در داخل دانشگاهها خواهد بود
        </p>
      <span class="Yekan_Font_Bold spanStyle"> لیست برنامه های ثبت شده بر طبق فیلتر بصورت تقویم : </span>
      <img src="../../assets/images/01.png">
      <span class="Yekan_Font_Bold spanStyle"> لیست برنامه های ثبت شده بر طبق فیلتر بصورت تقویم برای همه روزها : </span>
      <img src="../../assets/images/02.png">
      <span class="Yekan_Font_Bold spanStyle">فرم ثبت برنامه : </span>
      <img src="../../assets/images/03.png">
      <span class="Yekan_Font_Bold spanStyle">لیست برنامه های ثبت شده بر طبق فیلتر : </span>
      <img src="../../assets/images/04.png">
    </div>
  </div>


<!-- <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">dsdg</div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    <md-progress-spinner md-mode="determinate" :md-value="amount">40%</md-progress-spinner>
    <md-progress-spinner class="md-accent" md-mode="determinate" :md-value="amount"></md-progress-spinner>
<input type="range" v-model.number="amount"> {{ amount }}% -->

  <!-- <div class="row">

    <div class="col-sm-4">
      <div class="card shadow">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="card shadow">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>


      <div class="col-sm-4 ">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>

  </div>

  <div class="shadow-lg p-3 mb-5 bg-body rounded">
    <div class="d-flex bd-highlight">
      <div class="p-2 flex-fill bd-highlight">Flex item with a lot of content</div>
      <div class="p-2 flex-fill bd-highlight">Flex item</div>
      <div class="p-2 flex-fill bd-highlight">Flex item</div>
    </div>
  </div>





<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>



<div class="card border-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-dark">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card border-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-dark">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card border-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-dark">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<div class="card-deck">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>



<div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>

<div class="container px-4">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>


<div class="btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>



<div class="callout">...</div>


<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>

<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>


<div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-start">Example Button floated left</button><div class="vr"></div>
  <button type="button" class="btn btn-secondary float-end">Example Button floated right</button><div class="vr"></div>
  <button type="button" class="btn btn-secondary float-start">Example Button floated left</button><div class="vr"></div>
  <button type="button" class="btn btn-secondary float-end">Example Button floated right</button><div class="vr"></div>
</div>




<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse bd-highlight">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>

<div class="position-relative">
  <div class="position-absolute top-0 start-0">qq</div>
  <div class="position-absolute top-0 end-0">qq</div>
  <div class="position-absolute top-50 start-50">qq</div>
  <div class="position-absolute bottom-50 end-50">qq</div>
  <div class="position-absolute bottom-0 start-0">qq</div>
  <div class="position-absolute bottom-0 end-0">qq</div>
</div>

<button type="button" class="btn btn-primary position-relative">
  Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
</button>

<button type="button" class="btn btn-dark position-relative">
  Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</button>

<button type="button" class="btn btn-primary position-relative">
  Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
</button>

<div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>

<i class="fa-solid fa-thumbs-up fa-5x"></i>

<div class="fa-3x">
  <i class="fa-solid fa-sync fa-spin"></i>
  <i class="fa-solid fa-circle-notch fa-spin"></i>
  <i class="fa-solid fa-cog fa-spin"></i>
  <i class="fa-solid fa-cog fa-spin fa-spin-reverse"></i>
  <i class="fa-solid fa-spinner fa-spin-pulse"></i>
  <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>
</div>

<i class="fas fa-basketball-hoop"></i>
<span class="material-icons md-18">face</span>
<span class="material-icons">
search
</span>

<span class="material-icons">
production_quantity_limits
</span>

<div class="bd-callout bd-callout-danger">
<strong>This is a danger callout.</strong> Example text to show it in action.
</div>

<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>


   -->
  <!--<img  v-bind:src="GetImageAddress + '01.png'" v-show="true" />-->




</div>
</template>
/*lang="scss"*/
<style  scoped>
  .spanStyle{
        color: #1051e3;
      font-size: large;
  }
  .imageStyle{
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
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
  .md-app {
    max-height: 100%;
    border: 1px solid rgba(#000, .12);
        background-color: hotpink;

  }

  .md-app-toolbar {
    height: 50px;
    background-color: hotpink;
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
        background-color:white;

  }
</style>

<script>
export default {
  name: 'Flexible',
  data: () => ({
    amount : 50 ,
    menuVisible: false,
	  name:"morteza"
  }),
    computed: {
    GetImageAddress(){
      // this.showPreview = false;
        return this.$store.getters.GetImageAddress
}},

}
</script>

