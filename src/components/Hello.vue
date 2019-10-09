<template>
  <div class="fluid container">  
<div class="container">
<div class="row">
  <div class="col-lg-5 col-md-5 col-sm-5">
    <div class="row raft">
      <draggable element="span" v-model="list2" v-bind="dragOptions" :move="onMove">
        <transition-group name="no" class="list-group" tag="ul">
          <li class="list-group-item-left col-sm-6 col-md-6 col-lg-6 " v-for="element in list2" :key="element.order">            
            <img class="konkurenti-left" :src='element.name' />            
          </li>
        </transition-group>
      </draggable>
    </div>


       <div class="row raft">
      <draggable element="span" v-model="list3" v-bind="dragOptions" :move="onMove">
        <transition-group name="no" class="list-group" tag="ul">
          <li class="list-group-item-left col-sm-6 col-md-6 col-lg-6" v-for="element in list3" :key="element.order">
           
            <img class="konkurenti-left" :src='element.name' />            
          </li>
        </transition-group>
      </draggable>
    </div>
        <div class="row raft">
      <draggable element="span" v-model="list4" v-bind="dragOptions" :move="onMove">
        <transition-group name="no" class="list-group" tag="ul">
          <li class="list-group-item-left col-sm-6 col-md-6 col-lg-6" v-for="element in list4" :key="element.order">
            
            <img class="konkurenti-left" :src='element.name' />            
          </li>
        </transition-group>
      </draggable>
    </div>
        <div class="row raft">
      <draggable element="span" v-model="list5" v-bind="dragOptions" :move="onMove">
        <transition-group name="no" class="list-group" tag="ul">
          <li class="list-group-item-left col-sm-6 col-md-6 col-lg-6" v-for="element in list5" :key="element.order">
            
            <img class="konkurenti-left" :src='element.name' />            
          </li>
        </transition-group>
      </draggable>
    </div>
        <div class="row raft">
      <draggable element="span" v-model="list6" v-bind="dragOptions" :move="onMove">
        <transition-group name="no" class="list-group" tag="ul">
          <li class="list-group-item-left col-sm-6 col-md-6 col-lg-6" v-for="element in list6" :key="element.order">
            
            <img class="konkurenti-left" :src='element.name' />           
          </li>
        </transition-group>
      </draggable>
    </div>
        <div class="row raft">
      <draggable element="span" v-model="list7" v-bind="dragOptions" :move="onMove">
        <transition-group name="no" class="list-group" tag="ul">
          <li class="list-group-item-left col-sm-6 col-md-6 col-lg-6" v-for="element in list7" :key="element.order">
            
            <img class="konkurenti-left" :src='element.name' />            
          </li>
        </transition-group>
      </draggable>
    </div>
        <div class="row raft">
      <draggable element="span" v-model="list8" v-bind="dragOptions" :move="onMove">
        <transition-group name="no" class="list-group" tag="ul">
          <li class="list-group-item-left col-sm-6 col-md-6 col-lg-6" v-for="element in list8" :key="element.order">
           
            <img class="konkurenti-left" :src='element.name' />            
          </li>
        </transition-group>
      </draggable>
    </div>
        <div class="row raft">
      <draggable element="span" v-model="list9" v-bind="dragOptions" :move="onMove">
        <transition-group name="no" class="list-group" tag="ul">
          <li class="list-group-item-left col-sm-6 col-md-6 col-lg-6" v-for="element in list9" :key="element.order">            
            <img class="konkurenti-left" :src='element.name' />            
          </li>
        </transition-group>
      </draggable>
    </div>
    </div>
<div v-if="end=false"><h1>ererere </h1></div>
  <div class="col-md-7 col-lg-7 col-sm-7">
    <button class="btn btn-primary btn-sm" @click.prevent="playSound('./tiktik/1.wav')"><span class="fa fa-play-circle-o"></span></button>
   <div v-if="listString.length==2"><mesazhi></mesazhi></div>
   
   
    <div class="row  test">
      <draggable class="list-group" tag="ul" v-model="list" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false" >
        <transition-group type="transition" :name="'flip-list'">
          <div class="col-md-6 col-lg-6 col-sm-6  list-group-item.right" v-for="element in list" :key="element.order">          
            <img class="konkurenti" :src='element.name' />            
          </div>
        </transition-group>
      </draggable>
    </div>
    </div>

  </div>
  </div>


<!--
    <div class="list-group col-lg-6 col-md-6">
      <pre>{{listString}}</pre>
    </div>
    <div class="list-group col-lg-6 col-md-6">
      <pre>{{list2String}}</pre>
    </div>
-->


  </div>
</template>

<script>
import draggable from "vuedraggable";
const message = [
  "./img/1.png",
  "./img/2.png",
  "./img/3.png",
  "./img/4.png",
  "./img/5.png",
  "./img/6.png",
  "./img/7.png",
  "./img/8.png"
];

export default {
  name: "hello",
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      list2: [],
      list3:[],
      list4:[],
      list5:[],
      list6:[],
      list7:[],
      list8:[],
      list9:[],
      editable: true,
      isDragging: false,
      delayedDragging: false
    };
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
    },
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost",
      };
    },
    listString() {
      return JSON.stringify(this.list, null, 2);
    },
    list2String() {
      return JSON.stringify(this.list2, null, 2);
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  }
};
</script>

<style>
.list-group-item.right {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd;
}
.list-group-item-left{
list-style: none;

}
.konkurenti-left{
  max-height: 70px;
}
.konkurenti{
  max-width:200px;
  max-height:200px;
}

body{
  background-image: url("/img/background.png");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.raft{
    border-bottom: 20px solid #7d007d;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 30px;
  margin:0 !important;

}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
  font-size:20px;
  float:left;
}
</style>
