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
    <div id="masonry" class="grid-items-lines push">
      <div class="flex-boxes">
        <a href="javascript:void(0)" class="flex-box flex-box-big">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_2_dark.png" alt="">
          <h1 class="flex-title">Mass ENA</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nostrum, libero! Laborum distinctio necessitatibus voluptates eaque officiis, unde illo, earum voluptatum rerum, reiciendis ipsa ex dolorem a dicta, maxime aliquam.</p>
        </a>
        <a href="javascript:void(0)" class="flex-box">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1_dark.png" alt="">
          <h1 class="flex-title">About Mass ENA</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestiae fugiat tenetur fugit atque dignissimos, fugiat natus vitae.</p>
        </a>
        <a href="javascript:void(0)" class="flex-box">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3_dark.png" alt="">
          <h1 class="flex-title">Chapters</h1>
          <p>Lorem adipisicing elit. Voluptas consectetur tempora quis nam, officia tenetur blanditiis in illo dolor?</p>
        </a>
        <a href="javascript:void(0)" class="flex-box">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_2_dark.png" alt="">
          <h1 class="flex-title">Events</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quis ipsum, officia, aperiam tenetur dolor molestiae voluptate perferendis dolorem vel ex, unde fugit blanditiis sapiente.</p>
        </a>
        <a href="javascript:void(0)" class="flex-box">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_2_dark.png" alt="">
          <h1 class="flex-title">Resources</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo obcaecati in provident illo.</p>
        </a>
        <a href="javascript:void(0)" class="flex-box">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3_dark.png" alt="">
          <h1 class="flex-title">News</h1>
          <p>Lorem ipsum dolor sit amet, elit. Rem, illum.</p>
        </a>
        <a class="flex-box">
          <div class="hover-tile-outer">
            <div class="hover-tile-container">
              <div class="hover-tile hover-tile-visible">
                Hover
              </div>
              <div class="hover-tile hover-tile-hidden">
                <h4>Hidden Copy</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, hic, dolore, labore,provident eligendi fugiat ad exercitationem.</p>
              </div>
            </div>
          </div>
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
    var $container = $('.flex-boxes');
    // initialize
    $container.masonry({
      itemSelector: '.flex-box'
    });
  </script>

</body>
</html>

