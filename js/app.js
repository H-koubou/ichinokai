(function($) {
  
  /* ==================================================
    Drawer Menu
  ================================================== */

  $(function(){
    const openBtn = $("#menuicon");
    const openBtnActive = ".active";
    const closeBtn = $("#close");
    const overlay = $("#overlay");
    const panel = $("#hamburgerwrap");
    function panelOpen() {
      overlay.fadeIn('fast');
      panel.addClass('open');
      openBtn.addClass('active');
    }
    function panelClose() {
      overlay.fadeOut('fast');
      panel.removeClass('open');
      openBtn.removeClass('active');
    }
    openBtn.on('click',function(){
      if($(".active").length) {
        panelClose();
      } else {
        panelOpen();
      }
    });
    closeBtn.on('click',function(){
      panelClose();
    });
    overlay.on('click',function(){
      panelClose();
    });
    $(window).on('resize',function(){
      panelClose();
    });
  });

})(jQuery);



  /* ==================================================
    PageTop
  ================================================== */
  //スクロール量を取得する関数
  function getScrolled() {
    return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
  };

  //トップに移動する関数
  function scrollToTop() {
    var scrolled = getScrolled();
    window.scrollTo( 0, Math.floor( scrolled / 2 ) );
    if ( scrolled > 0 ) {
      window.setTimeout( scrollToTop, 80 );
    }
  };

  //イベント登録
  // document.getElementById( 'js-pagetop-btn' ).addEventListener('click', () => {
  //   scrollToTop();;
  // });

  /* ==================================================
    スタッフ略歴
  ================================================== */
  document.querySelectorAll('.biographybox').forEach((targetBox) => {
    var bioBtn = targetBox.nextElementSibling;
    var contentsHeight = targetBox.clientHeight;
    targetBox.style.height = '0px';
    function openToggle() {
      bioBtn.classList.toggle('open');
      bioBtn.previousElementSibling.classList.toggle('open');
      var lastH = targetBox.style.height;
      targetBox.style.height = (lastH == '' || lastH == '0px') ? contentsHeight + 'px' : '0px';
    };
    bioBtn.addEventListener('click', () => {
      openToggle();
      if (bioBtn.classList.contains('open')) {
        bioBtn.textContent = '略歴を閉じる';
      }
      else {
        bioBtn.textContent = '略歴を見る';
      };
    });
  });

  /* ==================================================
    初めての方へ - よくある質問コンテンツ
  ================================================== */
  document.querySelectorAll('.beguinerfaqdetail').forEach((targetBox) => {
    var faqBtn = targetBox.nextElementSibling;
    var contentsHeight = targetBox.clientHeight;
    targetBox.style.height = '0px';
    function openToggle() {
      faqBtn.classList.toggle('open');
      faqBtn.previousElementSibling.classList.toggle('open');
      var lastH = targetBox.style.height;
      targetBox.style.height = (lastH == '' || lastH == '0px') ? contentsHeight + 'px' : '0px';
    };
    faqBtn.addEventListener('click', () => {
      openToggle();
      if (faqBtn.classList.contains('open')) {
        faqBtn.textContent = '回答を閉じる';
      }
      else {
        faqBtn.textContent = '回答を見る';
      };
    });
  });

