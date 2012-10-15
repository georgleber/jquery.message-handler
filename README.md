jQuery Message-Handler
===============

jQuery Javascript plugin, which shows up system messages like info, error or warning messages  or exceptions.


## Usage

Include ``jquery.ui.message-handler.js`` in your HTML:

```html
<link rel="stylesheet" href="jquery.ui.message-handler.css" />
<script type="text/javascript" src="jquery.ui.message-handler.js"></script>
```

You can show up the message dialogs as follows:

```javascript
showInfoMessage("This is an example Info-Message", "Info-Message", function(data) {
    alert("Return type: " + data);
});

showErrorMessage("This is an example Error-Message", "Error-Message", function(data) {
    alert("Return type: " + data);
});

showWarningMessage("This is an example Warning-Message", "Warning-Message", function(data) {
    alert("Return type: " + data);
});

showException("This could be an exception thrown in your framework", function(data) {
    alert("Return type: " + data);
});
```

    
## Dependencies

You need following libraries for this plugin: 
* jQuery 1.8.0+
* jQuery UI 1.8+


## Changelog

+ **v1.0** [2012-10-15]
  - public release


## Licensing

Released under MIT License.

* * *

Copyright (c) 2012 Georg Henkel / Develman.de
