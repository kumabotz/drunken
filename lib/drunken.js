exports.drunken = function(text, vala, valb) {
  function out(val) {
    return text.replace(vala, valb);
  }
  return out(vala, valb);
}

//var text = "To live long, eat like a cat, drink like a dog.";
//var out = text.replace('cat', 'dog');
//console.log(out);