<?php include 'inc/head-inc.php' ?>

<!-- Outline -->
<body>
  <?php include 'inc/nav-inc.php' ?>

  <section class="panel contact">
    <div class="wrap">
      <!-- 1.1 Web UI -->
      <div class="contact">
        <h2><small>Contact</small></h2>
        <form method="post" action="">
    			<table>
    				<label for="Name">Name:</label>
    				<input type="text" name="Name" />
    				<label for="Email">Email:</label>
    				<input type="text" name="Email" />
    				<label for="Message">Message:</label>
    				<textarea name="Message" rows="10"></textarea>
            <button href="http://www.raskyl.com">Submit</button>
    			</table>
        </form>
      </div>
    </div>
  </section>

<?php include 'inc/foot-inc.php' ?>
