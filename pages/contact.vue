<template>
<div class="container">
  <form action="action_page.php">

    <label for="fname">Full Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Email Address</label>
    <input type="text" id="lname" name="lastname" placeholder="Your email address..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="usa">USA</option>
      <option value="uk">UK</option>
      <option value="canada">Canada</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
</div>
</template>

<style scoped>
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  padding: 20px;
  border:#35495e 1px solid;
}
</style>