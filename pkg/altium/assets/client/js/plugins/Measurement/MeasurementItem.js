/**
 * Measurement Plugin - MeasurementItem Class
 * Data model for measurement items with coordinate calculations
 */
"use strict";

(function (Measurement) {

    // Measurement modes enum
    var MeasurementMode = {
        Free: 0,
        PointToPoint: 1,
        ObjectToObject: 2,
    };

    /**
     * MeasurementItem class for storing and calculating measurement data
     */
    function MeasurementItem(point, unitName, mode, boardOrigin) {
        this.mode = mode;
        this.boardOrigin = boardOrigin;
        this.from = point.slice();
        this.to = point.slice();
        this.unitName = unitName;
        this._measurementItem = {};
    }

    MeasurementItem.prototype = {
        get from() {
            return this._from;
        },
        set from(e) {
            this._from = this.createItemPointProxy(e);
        },
        get fromObject() {
            return this._fromObject;
        },
        set fromObject(e) {
            this.fromObjectId = e.primitive.pcbId;
            this._fromObject = e;
            this.translateObjectCoordinates(this._fromObject);
        },
        get to() {
            return this._to;
        },
        set to(e) {
            this._to = this.createItemPointProxy(e);
        },
        get toObject() {
            return this._toObject;
        },
        set toObject(e) {
            this.toObjectId = e.primitive.pcbId;
            this._toObject = e;
            this.translateObjectCoordinates(this._toObject);
        },
        get unitName() {
            return this._unitName;
        },
        set unitName(e) {
            this._unitName = e;
            this.onMeasurementItemChanged();
        },

        toAppModel: function () {
            this._measurementItem.id = this.id;
            this._measurementItem.mode = this.mode;
            this._measurementItem.from = this.getPointCoordinates(this.from);
            this._measurementItem.fromObject = this.fromObject;
            this._measurementItem.fromObjectId = this.fromObjectId;
            this._measurementItem.to = this.getPointCoordinates(this.to);
            this._measurementItem.toObject = this.toObject;
            this._measurementItem.toObjectId = this.toObjectId;
            this._measurementItem.unitName = this.unitName;
            this._measurementItem.unitMult = this.unitMult;
            this._measurementItem.x = this.x;
            this._measurementItem.y = this.y;
            this._measurementItem.xy = this.xy;
            return this._measurementItem;
        },

        createItemPointProxy: function (e) {
            var self = this;
            return new Proxy(e, {
                set: function (e, n, r) {
                    var o = e[n] !== r,
                        i = Reflect.set(e, n, r);
                    if (o) {
                        self.onMeasurementItemChanged();
                    }
                    return i;
                },
            });
        },

        onMeasurementItemChanged: function () {
            var e = "mil" === this.unitName ? 100 : 2.54;
            this.unitMult = e;
            this.x = e * Math.abs(this.from[0] - this.to[0]);
            this.y = e * Math.abs(this.from[1] - this.to[1]);
            this.xy =
                e *
                Math.sqrt(
                    Math.pow(this.from[0] - this.to[0], 2) +
                    Math.pow(this.from[1] - this.to[1], 2)
                );
        },

        translateObjectCoordinates: function (e) {
            if (e.coordinates) {
                var t = e.coordinates;
                if (void 0 !== t.x) {
                    t.x = t.x - this.boardOrigin[0];
                }
                if (void 0 !== t.y) {
                    t.y = t.y - this.boardOrigin[1];
                }
                if (void 0 !== t.x1) {
                    t.x1 = t.x1 - this.boardOrigin[0];
                }
                if (void 0 !== t.y1) {
                    t.y1 = t.y1 - this.boardOrigin[1];
                }
            }
        },

        getPointCoordinates: function (e) {
            var self = this;
            if (this.boardOrigin.every(function (e) { return 0 === e; })) {
                return e;
            }
            return e.slice().map(function (e, n) {
                return e - self.boardOrigin[n];
            });
        },
    };

    // Export to namespace
    Measurement.MeasurementItem = MeasurementItem;
    Measurement.MeasurementMode = MeasurementMode;

})(window.Measurement = window.Measurement || {});
