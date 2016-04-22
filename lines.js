var plot_data = function(forecast) {
  lines = [];
  for (var acct in forecast.accounts) {
     var dataObject = {};
     dataObject.label = acct;
     dataObject.data = forecast.accounts[acct].balances;
     lines.push(dataObject);
  }
  return lines;
}

var xaxis_data = function(forecast) {
  var dataObject = {
    mode: "time",
    ticklength: 0,
    timeformat: "%m/%d/%y"
  }  
  return dataObject;
}

var data = $.ajax( {
  url: 'data.json',
  success: function(resp) {
    $.plot("#placeholder", plot_data(resp), {
        xaxis: xaxis_data(resp)
    });
    $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
  }
});
    
