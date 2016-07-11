"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var cpty_service_1 = require('./cpty.service');
var CptyListComponent = (function () {
    function CptyListComponent(_cptyService) {
        this._cptyService = _cptyService;
        this.pageTitle = 'Kontrahenci';
    }
    CptyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._cptyService.getCpties()
            .subscribe(function (cpties) { return _this.cpties = cpties; }, function (error) { return _this.errorMessage = error; });
    };
    CptyListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/cpty/cpty-list.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [cpty_service_1.CptyService])
    ], CptyListComponent);
    return CptyListComponent;
}());
exports.CptyListComponent = CptyListComponent;
//# sourceMappingURL=cpty-list.component.js.map