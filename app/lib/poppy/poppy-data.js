/**
 * Created by melloboy89 on 5/30/2015.
 */
var popups = (function(){
    var abstractPopup = (function(){
        function AbstractPopup(type, title, message, callback, position, timeout, autoHide, closeButton){
            this._popupData = {
                type: type,
                title: title,
                message: message,
                position: position,
                timeout: timeout,
                autoHide: autoHide,
                closeButton: closeButton
            }
        }

        return AbstractPopup;
    })();

    var successPopup = (function(){
        function SuccessPopup(type, title, message, callback, position, timeout, autoHide, closeButton){
            abstractPopup.call(this, type, title, message, 'false', 'bottomLeft', 3000, true, true);
        }

        SuccessPopup.extends(abstractPopup);

        return SuccessPopup;
    })();

    var infoPopup = (function(){
        function InfoPopup(type, title, message, callback, position, timeout, autoHide, closeButton){
            abstractPopup.call(this, type, title, message, 'false', 'topLeft', 0, true, true);
        }

        InfoPopup.extends(abstractPopup);

        return InfoPopup;
    })();

    var errorPopup = (function(){
        function ErrorPopup(type, title, message, callback, position, timeout, autoHide, closeButton){
            abstractPopup.call(this, type, title, message, 'false', 'topRight', 3000, true, false);
        }

        ErrorPopup.extends(abstractPopup);

        return ErrorPopup;
    })();

    var warningPopup = (function(){
        function WarningPopup(type, title, message, callback, position, timeout, autoHide, closeButton, callback){
            abstractPopup.call(this, type, title, message, 'true', 'bottomRight', 0, false, false);
        }

        WarningPopup.extends(abstractPopup);

        return WarningPopup;
    })();

    return {
        success: successPopup,
        info: infoPopup,
        error: errorPopup,
        warning: warningPopup
    }
})();

Function.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};