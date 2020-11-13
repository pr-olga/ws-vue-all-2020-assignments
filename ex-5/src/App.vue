<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view/>
  <!--
   TODO
   Assignment 7:
   Extract Discussion into separate component
  -->
  <!--
   TODO
   Assignment 7.1:
   Shorten aticle text and add read more button
   If the user clicks on the read button, the whole text gets rendered
   and the button 'read more disappeares'
  -->
  <!--
    For the sake of simplicity, example contains the code
    that is nessessary for this assignment only.
-->
</template>

<style lang="scss">
/**
 * For the sake of simplicity, example contains the code
 * that is nessessary for this assignment only.
 */
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

 /* General
    ========================================================================== */

 html,
 body {
   height: 100%;
   padding: 0;
   margin: 0;
 }

 *,
 *::before,
 *::after {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }

 .text-color--red {
   color: #e21912;
 }

 .button {
   width: 80px;
   height: 40px;
   border-radius: 3px;
   background-color: #fff;
 }

 .button:hover {
   cursor: pointer;
   outline-color: #292929;
 }

 .button--red {
   border: 2px solid #e21912;
   outline-color: #e21912;
   color: #e21912;
 }

 .button--green {
   border: 2px solid #008f39;
   outline-color: #008f39;
   color: #008f39;
 }

 .button--black {
   border: 2px solid #292929;
   outline-color: #292929;
   color: #292929;
 }

 #app {
   padding: 2rem;
   background-color: #eef0f1;
   color: #292929;
   font-size: 16px;
   font-family: Poppins, sans-serif;
 }

 .block {
   max-width: 750px;
   margin: 0 auto 20px auto;
   background-color: #fff;
 }
</style>
