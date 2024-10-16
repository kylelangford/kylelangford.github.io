<h2 class="title">Contact Us</h2>
<br />
<p>We'd <span class="accent-color">love</span> to hear from you.</p>
<!--
Alert Box
-->

<!-- Contant Form -->
<form data-abide autocomplete="off" method="get">
  <!--
  Hidden Field
  Time Since Last Push
  -->
  <div class="row">
    <div class="large-12 columns">
      <label>Name</label>
      <input type="text" name="name" value="<?php echo @$_REQUEST['name']; ?>" id="yourName" placeholder="First Last" required pattern="[a-zA-Z]+">
      <!--Error Message -->
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Email</label>
      <input type="text" name="sendTo" id="yourEmail" value="<?php echo @$_REQUEST['sendTo']; ?>" placeholder="email@domain.com" required>
      <!--Error Message -->
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Message</label>
      <textarea style="margin-bottom:0px;" name="message" rows="2" required><?php echo @$_REQUEST['message']; ?></textarea>
    </div>
    <hr class="thin spacer" />
    <div class="large-12 columns">
      <button type="submit" class="button">Submit</button>
    </div>
  </div>

</form>
<!-- End Contant Form -->
