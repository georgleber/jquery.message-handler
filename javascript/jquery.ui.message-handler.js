// jQuery Message Handler Plugin
//
// Version 1.0
//
// Georg Henkel
// www.Develman.de (http://www.develman.de)
// 14 October 2012
//
// Usage:
//		showInfoMessage(message, [title, callback] )
//		showErrorMessage(message, [title, callback] )
//		showWarnMessage(message, [title, callback] )
//		showException(exception, [callback] )
//
// License:
// 
// This plugin is licensed under the MIT License and
// is copyright 2012 by Develman.de
//
(function($) {
	$.MessageHandler = {
		showMessage: function(type, message, title, callback) {
			this._buildMessageDialog(type, message, title);
			$("BODY").append(this.dialog);
			
			if (type == 'warn') {
				$('#message-dialog').dialog({
					modal: true,
					minWidth: 450,
					minHeight: 200,
					position: 'center',
					buttons: {
						Ok: function() {
							if (callback) callback(true);
							$(this).dialog("close");
							($this).remove();
						},
						Cancel: function() {
							if (callback) callback(false);
							$(this).dialog("close");
						}
					},
					close: function() {
						$(this).remove();
					}
				});
			} else {
				$('#message-dialog').dialog({
					modal: true,
					minWidth: 450,
					minHeight: 200,
					position: 'center',
					buttons: {
						Ok: function() {
							if (callback) callback(true);
							$(this).dialog("close");
						}
					},
					close: function() {
						$(this).remove();
					}
				});
			}
		},
		
		showException: function(exception, callback) {
			this.dialog = '<div id="message-dialog" title="Interner Server Fehler">' +
			'<span class="icon-error"></span>' +
			'<p>Bei der Kommunikation mit dem Server ist ein unerwarteter Fehler aufgetreten.<br/>Bitte informieren Sie Ihren Systemadministrator.</p>' +
			'<div class="message-exception-scrollbox" style="display:none">' +
			'<textarea>' + exception + '</textarea></div></div>';
			
			$("BODY").append(this.dialog);
			$('#message-dialog').dialog({
				modal: true,
				minWidth: 550,
				minHeight: 250,
				position: 'center',
				buttons: {
					Ok: function() {
						$(".message-exception-scrollbox", this).hide();
						if (callback) callback(true);
						$(this).dialog("close");
					},
					Detail: function() {
						$(".message-exception-scrollbox", this).show();
					}
				},
				close: function() {
					$(this).remove();
				}
			});
		},
		
		_buildMessageDialog: function(type, message, title) {
			var iconClass = "icon-info";
			switch (type) {
				case "info":
					iconClass = "icon-info";
					if (title == null) title = "Info";
					break;
				
				case "error":
					iconClass = "icon-error";
					if (title == null) title = "Error";
					break;
				
				case "warn":
					iconClass = "icon-warn";
					if (title == null) title = "Warning";
					break;
			}
			
			this.dialog = '<div id="message-dialog" title="' + title + '">' +
			    			'<span class="' + iconClass + '"></span>' +
			    		  '<p>' + message + '</p></div>';
		}
	},
  	
	// Shortcut functions
	showInfoMessage = function(message, title, callback) {
		$.MessageHandler.showMessage('info', message, title, callback);
	}
	
	showErrorMessage = function(message, title, callback) {
		$.MessageHandler.showMessage('error', message, title, callback);
	}
	
	showWarningMessage = function(message, title, callback) {
		$.MessageHandler.showMessage('warn', message, title ,callback);
	}
	
	showException = function(exception, callback) {
		$.MessageHandler.showException(exception, callback);
	}
})(jQuery);
