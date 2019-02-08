$(document).ready(function() {
  navBindings();
  $('.slideInLeft').css('opacity', 0).animate({
    opacity: 1
  }, {
    queue: false,
    duration: 700
  }).animate({
    left: '0px'
  }, {
    queue: false,
    duration: 700
  })
  $(".handle").on('click', function() {
    $('nav ul').toggleClass('show');
  });
  //Back-to-top function
  $(window).scroll(function() {
    if ($(this).scrollTop() > 450) {
      $('.backToTop').fadeIn('slow');
    } else {
      $('.backToTop').fadeOut();
    }
  });
  $('.backToTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 750);
    return false;
  });
  //before and after project img toggle
  $('#before').click(function(e) {
    e.preventDefault();
    $('.img-change').fadeOut('fast', function() {
      $('.img-change').fadeIn('fast').attr("src", 'img/stone_willow_before.png');
    })
  })
  $('#after').click(function(e) {
    e.preventDefault();
    $('.img-change').fadeOut('fast', function() {
      $('.img-change').fadeIn('fast').attr("src", 'img/stone_willow.png');
    })
  })
  $('#quoteScroll').click(function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $(document).height()
    }, 1000);
  })
});

function navBindings() {
  $("ul a, #aboutMe").click(function(e) {
    var sectionID = e.currentTarget.id + "Section";
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#" + sectionID).offset().top
    }, 1000)
  })
};
var recentlyUsed = [0];
var recentColor = [0];
var quotes = [{
  author: 'Michael Scott',
  text: '\"Sometimes I\'ll start a sentence and I don\'t even know where it\'s going. I just hope I find it along the way.\"'
}, {
  author: 'Jim Halpert',
  text: '</br> \"Bears. Beets. Battlestar Galactica.\"'
}, {
  author: 'Stanley Hudson',
  text: '</br> "I\'ll slap you in the face with a rainbow."'
}, {
  author: 'Creed Bratton',
  text: '</br> \"What\’s a text?\”'
}, {
  author: 'Dwight Schrute',
  text: '\"How would I describe myself? Three words: Hard-working. Alpha-male. Jackhammer. Merciless. Insatiable.\"'
}, {
  author: 'Michael Scott',
  text: '</br> \"It\'s never too early for ice-cream, Jim.\"'
}, {
  author: 'Michael Scott',
  text: '</br> \"I do think I am very approachable, but maybe I need to be even approachabler.\"'
}, {
  author: 'Michael Scott',
  text: '</br>"I\'m not superstitious, but I am a little stitious."'
}, {
  author: 'Michael Scott',
  text: '</br>\"There is such a thing as good grief. Just ask Charlie Brown.\"'
}, {
  author: 'Kevin Malone',
  text: '</br>\"Are you on email?\"'
}, {
  author: 'Dwight Schrute',
  text: '</br>\"You couldn\'t handle my undivided attention.\"'
}, {
  author: 'Dwight Schrute',
  text: '</br>\"I really should have a Tweeter account."'
}, {
  author: 'Michael Scott',
  text: '\"You know what they say. \"Fool me once, strike one, but fool me twice...strike three.\"\"'
}, {
  author: 'Michael Scott',
  text: '</br>\"Well, just tell him to call me as ASAP as possible.\"'
}, {
  author: 'Andy Bernard',
  text: '</br>\"Sorry I annoyed you with my friendship.\"'
}, {
  author: 'Michael Scott',
  text: '</br>\"When I discovered YouTube, I didn\'t work for five days.\"'
}];
var colors = ["#34495e", "#9ebd9e", "#dd855c", "#777d90", "#d9534f", "#5cb85c", "#428bca", "#dd7788", "#667799", "#088da5", "#fa8072", "#8d2b22", "#00ced1", "#6b7074", "#dd9977", "#665566", "#2980b9",
  "#95a5a6", "#e67e22"
];
var getNextRandomQuote = function() {
  var nextIndex = Math.floor(Math.random() * (quotes.length - 1));
  if (recentlyUsed.indexOf(nextIndex) > 0) {
    return getNextRandomQuote();
  } else {
    return nextIndex;
  }
};
var getQuote = function() {
  var quoteText = document.getElementById('quote');
  var authText = document.getElementById('author');
  var newQuoteIndex = getNextRandomQuote();
  var newQuote = quotes[newQuoteIndex];
  quoteText.style.opacity = 0;
  authText.style.opacity = 0;
  var delayChange = function() {
    quoteText.innerHTML = newQuote.text;
    authText.innerHTML = newQuote.author + '<button id="quoteBtn" onClick="getQuote(); changeColor(); btnOpacity();"> <i class="fa fa-refresh" aria-hidden="true"></i></button>';
    quoteText.style.opacity = 1;
    authText.style.opacity = 1;
    if (recentlyUsed.length > 5) {
      recentlyUsed.shift();
    }
  }
  setTimeout(delayChange, 750);
  console.log(recentlyUsed);
  return recentlyUsed.push(newQuoteIndex);
};
var getNextRandomColor = function() {
  var nextIndex = Math.floor(Math.random() * (colors.length - 1));
  if (recentColor.indexOf(nextIndex) > 0) {
    return getNextRandomColor();
  } else {
    return nextIndex;
  }
};
var changeColor = function() {
  var colorIndex = getNextRandomColor();
  var footerColor = document.getElementById('footer-color')
  footerColor.style.backgroundColor = colors[colorIndex];
  if (recentColor.length > 4) {
    recentColor.shift();
  }
  console.log(colors[colorIndex]);
  return recentColor.push(colorIndex);
};
var btnOpacity = function() {
  var quoteBtn = document.getElementById('quoteBtn');
  quoteBtn.style.opacity = 0;
  var delayChange = function() {
    quoteBtn.style.opacity = 1;
  }
  setTimeout(delayChange, 750);
};