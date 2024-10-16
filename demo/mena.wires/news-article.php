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
<body class="single">

  <?php include 'inc/header.php'; ?>
  <?php include 'inc/nav-full.php'; ?>

  <div class="row offset-header-nav">
    <aside id="back-button" class="sidebar push">
      <a href="news.php">Back to News Page</a>
    </aside>
    <article class="body push scroll-on-page">
      <img src="img/news-article-1.jpg">
      <p class="type">News</p>
      <h1>Nullam id dolor id nibh ultricies vehicula ut id elit.</h1>
      <h2></h2>
      <p class="date">30 Mar 2014</p>
      <hr>
      <p class="author">Author Name</p>

      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue.</p>
      <section>
        <h3 id="scroll-link-1">First Target</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aliquid necessitatibus, repudiandae veniam labore, consequatur maiores dolore unde non deleniti, aliquam minima ex nulla error eveniet vel tempore, in incidunt?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aliquid necessitatibus, repudiandae veniam labore, consequatur maiores dolore unde non deleniti, aliquam minima ex nulla error eveniet vel tempore, in incidunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aliquid necessitatibus, repudiandae veniam labore, consequatur maiores dolore unde non deleniti, aliquam minima ex nulla error eveniet vel tempore, in incidunt?</p>
      </section>
      <section>
        <h3 id="scroll-link-2">Second Target</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aliquid necessitatibus, repudiandae veniam labore, consequatur maiores dolore unde non deleniti, aliquam minima ex nulla error eveniet vel tempore, in incidunt?</p>
      </section>
      <section>
        <h3 id="scroll-link-3">Last Target</h3>
        <p>lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aliquid necessitatibus, repudiandae veniam labore, consequatur maiores dolore unde non deleniti, aliquam minima ex nulla error eveniet vel tempore, in incidunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aliquid necessitatibus, repudiandae veniam labore, consequatur maiores dolore unde non deleniti, aliquam minima ex nulla error eveniet vel tempore, in incidunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aliquid necessitatibus, repudiandae veniam labore, consequatur maiores dolore unde non deleniti, aliquam minima ex nulla error eveniet vel tempore, in incidunt?</p>
        <small style="font-size:.5em;">END.</small>
        <hr>
        <p><span>Maybe you'll find this interesting -</span> Consectetur adipisicing elit. Consequatur a, ullam, voluptatum incidunt neque doloremque vel inventore distinctio laudantium harum illo quam nulla dolor alias iure impedit! Accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus! Lorem ipsum dolor sit amet.
          <a href="/news-article-2.php" class="read-more">Read More <span>&rsaquo;</span></a>
        </p>

        <a class="scroll-on-page-link" href="/news.php">Back to News</a>
      </section>

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

