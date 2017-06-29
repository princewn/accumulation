questions
 		data: function () {
    this.a = 100
    setTimeout(function() {
      this.a 
    }.bind(this), 1e9)
  },
