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
  <meta name="theme-color" content="#db5945">
  <meta name="transition-elements" content="#header">
  <link rel="stylesheet" href="../../../_css/normalize.css">
  <link rel="stylesheet" href="css/prototype.css">
  <script src="../../../_js/vendor/modernizr-2.6.2.min.js"></script>
</head>
<body>

  <?php include 'inc/header.php'; ?>
  <?php include 'inc/nav-full.php'; ?>

  <div class="row offset-header-nav">

    <h1 class="title push">Chapters</h1>

    <div id="masonry" class="grid-items-lines push">
      <div class="flex-boxes chapters">
        <a href="section.php" class="flex-box no-padding">
          <img src="img/chapter-1.jpg">
          <div class="content">
            <h1 class="flex-title badge">Beacon Chapter</h1>
            <p>Lorem adipisicing elit. Voluptas consectetur tempora quis nam, officia tenetur blanditiis in illo dolor?</p>          </div>
        </a>
        <a href="javascript:void(0)" class="flex-box no-padding">
          <img src="http://placehold.it/300x200">
          <div class="content">
            <h1 class="flex-title">Berkshire Chapter</h1>
            <p>Lorem adipisicing elit. Voluptas consectetur tempora quis nam, officia tenetur blanditiis in illo dolor?</p>
          </div>
        </a>
        <a href="javascript:void(0)" class="flex-box no-padding">
          <img src="http://placehold.it/300x200">
          <div class="content">
            <h1 class="flex-title">Central Chapter</h1>
            <p>Lorem adipisicing elit. Voluptas consectetur tempora quis nam, officia tenetur blanditiis in illo dolor?</p>
          </div>
        </a>
        <a href="javascript:void(0)" class="flex-box no-padding">
          <img src="http://placehold.it/300x200">
          <div class="content">
            <h1 class="flex-title">Mayflower Chapter</h1>
            <p>Lorem adipisicing elit. Voluptas consectetur tempora quis nam, officia tenetur blanditiis in illo dolor?</p>          </div>
        </a>
        <a href="javascript:void(0)" class="flex-box no-padding">
          <img src="http://placehold.it/300x200">
          <div class="content">
            <h1 class="flex-title">Pioneer Chapter</h1>
            <p>Lorem adipisicing elit. Voluptas consectetur tempora quis nam, officia tenetur blanditiis in illo dolor?</p>          </div>
        </a>
      </div>

    </div>

  </div>

  <?php include 'inc/footer.php'; ?>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="bower_components/masonry/dist/masonry.pkgd.min.js"></script>
  <script src="js/headroom.js"></script>
  <script src="js/app.js"></script>

  <script>
    // var $container = $('.flex-boxes');
    // initialize
    // $container.masonry({
    //  itemSelector: '.flex-box'
    // });
  </script>

</body>
</html>


