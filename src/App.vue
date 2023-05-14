<template>
<div id="app">
  <div class="container" style="direction:ltr;" >
    <md-app md-mode="fixed" style="direction: rtl;">
      <md-app-toolbar class="md-primary" style="color : red;background-color:rgb(245 245 245 / 99%);border-radius: 10px;    direction: rtl;"> 
        <md-button class="md-icon-button" style="color : red;" @click="menuVisible = !menuVisible">
          <md-icon style="color : red;">menu</md-icon>
        </md-button>

          <div class="md-toolbar-section-end">
            </div>
                  <div class="row" style="direction:ltr">
                  <div class="col-sm-12 pull-right">
                    <div class="mainmenu pull-right">

                      <ul class="nav navbar-nav collapse navbar-collapse">
                        <li>      
                        <router-link to="/" active-class="active"  exact><span class="material-icons IconColor">info</span>  
                        </router-link>
                        </li>

                        <li>
                          <router-link to="/PlanList" activ-class="active"> 
                              <span class="material-icons IconColor">today</span>
                          </router-link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>


      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" >
        <md-divider></md-divider>
        <md-list>
          <md-list-item class="Yekan_Font">
            <router-link class="LinkStyle" to="/" activ-class="active"><span class="material-icons IconColor">info</span> درباره ما</router-link>
          </md-list-item>
          <md-list-item class="Yekan_Font">
          <router-link class="LinkStyle" to="/PlanList" activ-class="active"><span class="material-icons IconColor">today</span> مدیریت برنامه ها</router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content style="border-right: 0px solid transparent;">
          <transition enter-active-class="animated fadeIn">
          <router-view></router-view>
          </transition>
      </md-app-content>

    </md-app>
  </div>
</div>
</template>

<script>
export default {
 name: 'Reveal',
  data: () => ({
    menuVisible: false,
    Authenticated : false,
    UserFullName :''
  }),
}
</script>
<style  scoped>
  .Yekan_Font {
    font-family: Yekan,tahoma !important;
    font-weight: 100;
    font: small-caption;
  }

  .LinkStyle{
    display: flex; 
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
  }
  .md-app {
    max-height: 100%;
  }

  .md-drawer {
    width: 200px;
    max-width: calc(100vw - 125px);
   }
   .IconColor{
      color: #898e93;
    }
</style>