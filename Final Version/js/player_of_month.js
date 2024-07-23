// mouseover the image
const img = document.querySelector('.bestplayer');
const state = document.querySelector('.state');

img.addEventListener('mouseenter', () => {
   if (img.style.transform === 'translateX(0%)'){
      img.style.transform = 'translateX(-25%)';
      state.style.zIndex = '0';
      state.style.transform = 'translateX(25%)';
      
   } else {
      img.style.transform = 'translateX(0%)';
      state.style.transform = 'translateX(0%)';
      state.style.zIndex = '-1';
   }
})

// State1
const state1_img = document.querySelector('.state1_img');
const state1_data = document.querySelector('.state1_data');

state1_img.addEventListener('mouseenter', () => {
   if (state1_data.style.transform === 'translateY(-150%)'){
      state1_data.style.transform = 'translateY(0%)';
      state1_data.style.zIndex = '0';
      state1_data.style.marginTop  = '30px';
      
   } else {
      state1_data.style.transform = 'translateY(-150%)';
      state1_data.style.zIndex = '-1';
      state1_data.style.marginTop  = '0px';
   }
})

// State2
const state2_img = document.querySelector('.state2_img');
const state2_data = document.querySelector('.state2_data');

state2_img.addEventListener('mouseenter', () => {
   if (state2_data.style.transform === 'translateY(-150%)'){
      state2_data.style.transform = 'translateY(0%)';
      state2_data.style.zIndex = '0';
      state2_data.style.marginTop  = '30px';
      
   } else {
      state2_data.style.transform = 'translateY(-150%)';
      state2_data.style.zIndex = '-1';
      state2_data.style.marginTop  = '0px';
   }
})

// State3
const state3_img = document.querySelector('.state3_img');
const state3_data = document.querySelector('.state3_data');

state3_img.addEventListener('mouseenter', () => {
   if (state3_data.style.transform === 'translateY(-150%)'){
      state3_data.style.transform = 'translateY(0%)';
      state3_data.style.zIndex = '0';
      state3_data.style.marginTop  = '30px';
      
   } else {
      state3_data.style.transform = 'translateY(-150%)';
      state3_data.style.zIndex = '-1';
      state3_data.style.marginTop  = '0px';
   }
})
// State4
const state4_img = document.querySelector('.state4_img');
const state4_data = document.querySelector('.state4_data');

state4_img.addEventListener('mouseenter', () => {
   if (state4_data.style.transform === 'translateY(-150%)'){
      state4_data.style.transform = 'translateY(0%)';
      state4_data.style.zIndex = '0';
      state4_data.style.marginTop  = '30px';
      
   } else {
      state4_data.style.transform = 'translateY(-150%)';
      state4_data.style.zIndex = '-1';
      state4_data.style.marginTop  = '0px';
   }
})
// State5
const state5_img = document.querySelector('.state5_img');
const state5_data = document.querySelector('.state5_data');

state5_img.addEventListener('mouseenter', () => {
   if (state5_data.style.transform === 'translateY(-150%)'){
      state5_data.style.transform = 'translateY(0%)';
      state5_data.style.zIndex = '0';
      state5_data.style.marginTop  = '30px';
   } else {
      state5_data.style.transform = 'translateY(-150%)';
      state5_data.style.zIndex = '-1';
   }  state5_data.style.marginTop  = '0px';
})
// State6
const state6_img = document.querySelector('.state6_img');
const state6_data = document.querySelector('.state6_data');

state6_img.addEventListener('mouseenter', () => {
   if (state6_data.style.transform === 'translateY(-150%)'){
      state6_data.style.transform = 'translateY(0%)';
      state6_data.style.zIndex = '0';
      state6_data.style.marginTop  = '30px';
   } else {
      state6_data.style.transform = 'translateY(-150%)';
      state6_data.style.zIndex = '-1';
      state6_data.style.marginTop  = '0px';
      
   }
})