<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../../../_css/normalize.css">
  <link rel="stylesheet" href="css/prototype.css">
  <script src="../../../_js/vendor/modernizr-2.6.2.min.js"></script>
</head>
<body class="single">

  <?php include 'inc/header.php'; ?>
  <?php include 'inc/nav.php'; ?>

  <div class="offset-header-nav">
    <div id="js-parallax-window" class="parallax-window">
      <div class="parallax-static-content">
        <b>Parallax Window</b>
      </div>
      <div id="js-parallax-background" class="parallax-background"></div>
    </div>
  </div>

  <div class="row">
    <article class="body">
      <p class="type">Article Type</p>
      <h1>Article Heading</h1>
      <h2></h2>
      <p class="date">30 Mar 2014</p>
      <p><span>Lorem ipsum dolor sit amet</span>, consectetur adipisicing elit. Consequatur a, ullam, voluptatum incidunt neque doloremque vel inventore distinctio laudantium harum illo quam nulla dolor alias iure impedit! Accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, a, ullam, voluptatum incidunt neque porro numquam doloremque vel inventore distinctio laudantium harum illo quam nulla dolor alias iure impedit.
        <a href="javascript:void(0)" class="read-more">Read More <span>&rsaquo;</span></a>
      </p>

      <h3>Subheading lorem</h3>
      <p><span>Consequatur ullam, voluptatum</span> incidunt neque porro numquam doloremque vel inventore distinctio laudantium harum illo quam nulla dolor alias iure impedit. Accusamus. Consequatur, a, ullam, voluptatum incidunt neque porro numquam doloremque vel inventore distinctio laudantium harum illo quam nulla dolor alias iure impedit! Accusamus.</p>
      <hr>
      <p class="author">Author Name</p>
      <div class="side-image">
        <div class="images-wrapper"></div>
        <div class="content">
          <h4>Topic Name</h4>
          <h1>Message with a gradient image</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam assumenda nihil suscipit obcaecati sit, cum quod corporis adipisci ipsam, fugiat, quae error. Eaque commodi, dicta quidem explicabo mollitia inventore quibusdam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam assumenda nihil suscipit obcaecati sit, cum quod corporis adipisci ipsam, fugiat, quae error. Eaque commodi, dicta quidem explicabo mollitia inventore quibusdam.</p>
          <button>Read more</button>
        </div>
      </div>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue.</p>

      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </article>
  </div>

  <?php include 'inc/footer.php'; ?>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="js/headroom.js"></script>
  <script src="js/app.js"></script>

  <script>
    $(document).ready(function() {
      parallax();
    });

    $(window).scroll(function(e) {
      parallax();
    });
  </script>
</body>
</html>

