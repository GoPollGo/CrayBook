$(function() {
  
  /*
   * Selectors
   */
  var LIKE_BUTTON_SELECTOR = 'button.like_link .default_message, button.cmnt_like_link .default_message';
  var SAVING_SELECTOR = 'button.like_link .saving_message, button.cmnt_like_link .saving_message';
  var LIKE_TEXT_SELECTOR = '.uiUfiLike';
  
  /*
   * Replacement strings
   */
  var LIKE_REPLACE = 'Dat Shit Cray';
  var UNLIKE_REPLACE = 'Not So Cray';
  var LIKE_THIS_REPLACE = 'think this shit is cray';
  var LIKES_THIS_REPLACE = 'thinks this shit is cray';
  
  /*
   * Do periodic replacements, since "Like" and "Unlike"
   * are updated with AJAX
   */
  setInterval(function() {
    // Replace "Like" and "Unlike"
    $(LIKE_BUTTON_SELECTOR).each(function() {
      replaceLike($(this));
    });
    $(SAVING_SELECTOR).each(function() {
      replaceLike($(this));
    });
    // Replace "like this" and "likes this"
    $(LIKE_TEXT_SELECTOR).each(function() {
      replaceLikeThis($(this));
    });
  }, 200);
  
  /*
   * Replace "Like" and "Unlike" text in given element
   */
  function replaceLike($elem) {
    var original = $elem.text().toLowerCase();
    if (original === "like") {
      $elem.text(LIKE_REPLACE);
    }
    else if (original === "unlike") {
      $elem.text(UNLIKE_REPLACE);
    }
  }
  
  /*
   * Replace "like this" and "likes this" descriptive text,
   * contained in a text node within this element
   */
  function replaceLikeThis($elem) {
    $elem.contents().each(function() {
      var _this = this;
      if (_this.nodeType === 3) {
        _this.textContent = _this.textContent.replace("like this", LIKE_THIS_REPLACE);
        _this.textContent = _this.textContent.replace("likes this", LIKES_THIS_REPLACE);
      }
      else {
        replaceLikeThis($(this));
      }
    });
  }
  
});