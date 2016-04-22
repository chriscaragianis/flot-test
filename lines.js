var forecast;

var data = $.ajax( {
  url: 'data.json',
  success: function(resp) {
    forecast = resp;
    lines = [];
    for (var acct in forecast.accounts) {
       var dataObject = {};
       dataObject.label = acct;
       dataObject.data = forecast.accounts[acct].balances;
       lines.push(dataObject);
    }
    $.plot("#placeholder", lines);
    $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
  }
});
    // Add the Flot version string to the footer

