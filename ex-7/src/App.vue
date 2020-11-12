<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view/>
  <!--
   TODO
   Assignment 9:
   Modify Form and comments such way that each time one sends a comment
   it is going to be added to the list and do not overwrite the current comment
  -->
  <!--
   TODO
   Assignment 10:
   Extract alert in separate component and show it, if the author name is 'Donald'
   In this case:
          1. the message is not allowed to be posted
          2. a button close is on the block. If the button is clicked, message dissapears
          3. There is an input field on the modal, whre the person must set the number
          (Note: use lifecycle hook to clean the field)
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

 #nav {
   display: flex;
   justify-content: space-between;
 }
</style>
