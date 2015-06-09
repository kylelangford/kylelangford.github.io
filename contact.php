<?php
if(isset($_POST['submit'])){
    $to = "kyle@raskyl.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['input_name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>

<?php include 'inc/head-inc.php' ?>

<!-- Outline -->
<body>
  <?php include 'inc/nav-inc.php' ?>

  <section class="panel window contact">
    <div class="wrap">
      <!-- 1.1 Web UI -->
      <div class="contact">
        <h2><small>Contact</small></h2>
        <form method="post" class="validate" action="" autocomplete="off">


            <input class="killswitch" type="text">
            <input class="timestamp" type="text">

            <span class="input input-nao">
					    <input class="input-field input-field-nao input-required" type="text" id="input-name" required>
				    	<label class="input-label input-label-nao" for="input-name">
						    <span class="input-label-content input-label-content-nao">Name</span>
					    </label>
					    <svg class="graphic graphic-nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
						     <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
					    </svg>
			    	</span>

            <span class="input input-nao">
              <input class="input-field input-field-nao input-required" type="email" id="input-email" required>
              <label class="input-label input-label-nao" for="input-email">
                <span class="input-label-content input-label-content-nao">Email</span>
              </label>
              <svg class="graphic graphic-nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                 <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
              </svg>
            </span>

            <span class="input input-kozakura">
              <label class="input-label input-label-kozakura" for="message">
    						<span class="input-label-content input-label-content-kozakura">Message</span>
    					</label>
    					<textarea id="message" class="input-field input-field-kozakura input-required" rows="8" pattern=".{10,}" required title="10 Characters Minimum"></textarea>
    					<svg class="graphic graphic-kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
    						<path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"></path>
    					</svg>
    				</span>
            <div class="alert"><div>
            <button class="form-submit button" href="http://www.raskyl.com" disabled><span class="icon-paper-plane"></span></button>
            <input type="submit" name="submit" value="Submit">

        </form>
      </div>
    </div>
  </section>

<?php include 'inc/foot-inc.php' ?>
