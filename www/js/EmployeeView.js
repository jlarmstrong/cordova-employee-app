var EmployeeView = function(adapter, template, employee) {
  this.initialize = function() {
    this.el = $('<div/>');
    this.el.on('click', '.add-location-btn', this.addLocation);
  };

  this.addLocation = function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(
      function(position) {
        // in a real app you would store this info
        alert(position.coords.latitude + ',' + position.coords.longitude);
      },
      function() {
        alert('Error getting location');
      });
    return false;
  };

  this.render = function() {
    this.el.html(template(employee));
    return this;
  };

  this.initialize();
}
