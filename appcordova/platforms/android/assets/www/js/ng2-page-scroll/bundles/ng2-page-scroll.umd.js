(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/platform-browser', '@angular/common'], factory) :
    (factory((global.ng2 = global.ng2 || {}, global.ng2.page = global.ng2.page || {}, global.ng2.page.scroll = global.ng2.page.scroll || {}),global.ng.core,global.ng.router,global.ng.platform-browser,global.ng.common));
}(this, (function (exports,_angular_core,_angular_router,_angular_platformBrowser,_angular_common) { 'use strict';

var EasingLogic = (function () {
    function EasingLogic() {
    }
    return EasingLogic;
}());
var PageScrollConfig = (function () {
    function PageScrollConfig() {
    }
    Object.defineProperty(PageScrollConfig, "defaultEasingLogic", {
        // Getter and setter to avoid auto completion to suggest calling the method
        get: function () {
            return PageScrollConfig._easingLogic;
        },
        set: function (easingLogic) {
            PageScrollConfig._easingLogic = easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The number of milliseconds to wait till updating the scroll position again.
     * Small amounts may produce smoother animations but require more processing power.
     * @type {number}
     * @private
     */
    PageScrollConfig._interval = 10;
    PageScrollConfig._defaultNamespace = 'default';
    /**
     * The duration how long a scrollTo animation should last by default.
     * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
     * @type {number}
     */
    PageScrollConfig.defaultDuration = 1250;
    /**
     * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
     * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
     * @type {number}
     */
    PageScrollConfig.defaultScrollOffset = 0;
    /**
     * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
     * @type {string[]}
     * @private
     */
    PageScrollConfig._interruptEvents = ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'];
    /**
     * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
     * scroll animation.
     * @type {number[]}
     * @private
     */
    PageScrollConfig._interruptKeys = [33, 34, 35, 36, 38, 40];
    /**
     * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
     * interrupting event while a scroll animation takes place, the scroll animation stops.
     * @type {boolean}
     */
    PageScrollConfig.defaultInterruptible = true;
    PageScrollConfig._easingLogic = {
        ease: function (t, b, c, d) {
            // Linear easing
            return c * t / d + b;
        }
    };
    return PageScrollConfig;
}());

/**
 * Created by sebastianfuss on 02.09.16.
 */
var PageScrollUtilService = (function () {
    function PageScrollUtilService() {
    }
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param variable
     * @returns {boolean} true the variable is undefined or null
     */
    PageScrollUtilService.isUndefinedOrNull = function (variable) {
        return (typeof variable === 'undefined') || variable === undefined || variable === null;
    };
    PageScrollUtilService.extractElementPosition = function (document, scrollTargetElement) {
        var body = document.body;
        var docEl = document.documentElement;
        var windowPageYOffset = document.defaultView && document.defaultView.pageYOffset || undefined;
        var windowPageXOffset = document.defaultView && document.defaultView.pageXOffset || undefined;
        var scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (PageScrollUtilService.isUndefinedOrNull(scrollTargetElement)) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        var box = scrollTargetElement.getBoundingClientRect();
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    return PageScrollUtilService;
}());

var PageScrollService = (function () {
    function PageScrollService() {
        var _this = this;
        this.runningInstances = [];
        this.onInterrupted = {
            report: function (event, pageScrollInstance) {
                if (pageScrollInstance.interruptible &&
                    (event.type !== 'keyup' || PageScrollConfig._interruptKeys.indexOf(event.keyCode) >= 0)) {
                    _this.stopAll(pageScrollInstance.namespace);
                }
            }
        };
        if (PageScrollService.instanceCounter > 0 && _angular_core.isDevMode()) {
            console.warn('An instance of PageScrollService already exists, usually ' +
                'including one provider should be enough, so double check.');
        }
        PageScrollService.instanceCounter++;
    }
    PageScrollService.prototype.stopInternal = function (interrupted, pageScrollInstance) {
        var index = this.runningInstances.indexOf(pageScrollInstance);
        if (index >= 0) {
            this.runningInstances.splice(index, 1);
        }
        if (pageScrollInstance.interruptListenersAttached) {
            pageScrollInstance.detachInterruptListeners();
        }
        if (pageScrollInstance.timer) {
            clearInterval(pageScrollInstance.timer);
            pageScrollInstance.fireEvent(!interrupted);
            return true;
        }
        return false;
    };
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param pageScrollInstance
     */
    PageScrollService.prototype.start = function (pageScrollInstance) {
        var _this = this;
        // Stop all possibly running scroll animations in the same namespace
        this.stopAll(pageScrollInstance.namespace);
        if (pageScrollInstance.scrollTopSources === null || pageScrollInstance.scrollTopSources.length === 0) {
            // No scrollingViews specified, thus we can't animate anything
            if (_angular_core.isDevMode()) {
                console.warn('No ScrollTopSource specified, this ng2-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        var startScrollTopFound = false;
        // Get the start scroll position from the scrollingViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.scrollTopSources.forEach(function (scrollingView) {
            if (PageScrollUtilService.isUndefinedOrNull(scrollingView)) {
                return;
            }
            // Get the scrolltop value of the first scrollTopSource that returns a value for its "scrollTop" property
            // that is not undefined and unequal to 0
            if (!startScrollTopFound && scrollingView.scrollTop) {
                // We found a scrollingView that does not have scrollTop 0
                // Return the scrollTop value, as this will be our startScrollTop
                pageScrollInstance.startScrollTop = scrollingView.scrollTop;
                startScrollTopFound = true;
            }
        });
        var pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        pageScrollInstance.targetScrollTop = Math.round(pageScrollInstance.extractScrollTargetPosition().top - pageScrollOffset);
        // Calculate the distance we need to go in total
        pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollTop - pageScrollInstance.startScrollTop;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            // We weren't able to find the target position, maybe the element does not exist?
            if (_angular_core.isDevMode()) {
                console.log('Scrolling not possible, as we can\'t find the specified target');
            }
            pageScrollInstance.fireEvent(false);
            return;
        }
        if (pageScrollInstance.distanceToScroll === 0) {
            // We're at the final destination already
            // OR we need to scroll down but are already at the end
            // OR we need to scroll up but are at the top already
            if (_angular_core.isDevMode()) {
                console.log('Scrolling not possible, as we can\'t get any closer to the destination');
            }
            pageScrollInstance.fireEvent(true);
            return;
        }
        if (pageScrollInstance.duration <= PageScrollConfig._interval) {
            // We should go there directly, as our "animation" would have one big step
            // only anyway and this way we save the interval stuff
            if (_angular_core.isDevMode()) {
                console.log('Scroll duration shorter that interval length, jumping to target');
            }
            pageScrollInstance.setScrollTopPosition(pageScrollInstance.targetScrollTop);
            pageScrollInstance.fireEvent(true);
            return;
        }
        // Register the interrupt listeners if we want an interruptible scroll animation
        if (pageScrollInstance.interruptible ||
            (PageScrollUtilService.isUndefinedOrNull(pageScrollInstance.interruptible) && PageScrollConfig.defaultInterruptible)) {
            pageScrollInstance.attachInterruptListeners(this.onInterrupted);
        }
        // Let's get started, get the start time...
        pageScrollInstance.startTime = new Date().getTime();
        // .. and calculate the end time (when we need to finish at last)
        pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.duration;
        pageScrollInstance.timer = setInterval(function (_pageScrollInstance) {
            // Take the current time
            var currentTime = new Date().getTime();
            // Determine the new scroll position
            var newScrollTop;
            var stopNow = false;
            if (_pageScrollInstance.endTime <= currentTime) {
                // We're over the time already, so go the targetScrollTop (aka destination)
                newScrollTop = _pageScrollInstance.targetScrollTop;
                stopNow = true;
            }
            else {
                // Calculate the scrollTop position based on the current time using the easing function
                newScrollTop = Math.round(_pageScrollInstance.easingLogic.ease(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollTop, _pageScrollInstance.distanceToScroll, _pageScrollInstance.duration));
            }
            // Set the new scrollTop to all scrollTopSource elements
            if (!_pageScrollInstance.setScrollTopPosition(newScrollTop)) {
                // Setting the new scrollTop value failed for all ScrollingViews
                // early stop the scroll animation to save resources
                stopNow = true;
            }
            // At the end do the internal stop maintenance and fire the pageScrollFinish event
            // (otherwise the event might arrive at "too early")
            if (stopNow) {
                _this.stopInternal(false, _pageScrollInstance);
            }
        }, PageScrollConfig._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    };
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param namespace
     * @returns {boolean}
     */
    PageScrollService.prototype.stopAll = function (namespace) {
        var _this = this;
        if (this.runningInstances.length > 0) {
            var stoppedSome_1 = false;
            this.runningInstances.forEach(function (pageScrollInstance, index) {
                if (PageScrollUtilService.isUndefinedOrNull(namespace) || namespace.length === 0 ||
                    pageScrollInstance.namespace === namespace) {
                    stoppedSome_1 = true;
                    _this.stopInternal(true, pageScrollInstance);
                }
            });
            return stoppedSome_1;
        }
        return false;
    };
    PageScrollService.prototype.stop = function (pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    };
    PageScrollService.instanceCounter = 0;
    PageScrollService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    PageScrollService.ctorParameters = [];
    return PageScrollService;
}());

/**
 * Created by sebastianfuss on 29.08.16.
 */
/**
 * Represents a scrolling action
 */
var PageScrollInstance = (function () {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances: {@link PageScrollInstance#simpleInstance}
     * @param namespace
     * @param document
     */
    function PageScrollInstance(namespace, document) {
        /**
         * These properties will be set during instance construction
         */
        /* A namespace to "group" scroll animations together and stopping some does not stop others */
        this._namespace = PageScrollConfig._defaultNamespace;
        /* Offset in px that the animation should stop above that target element */
        this._offset = PageScrollConfig.defaultScrollOffset;
        /* Duration in milliseconds the scroll animation should last */
        this._duration = PageScrollConfig.defaultDuration;
        /* Easing function to manipulate the scrollTop value over time */
        this._easingLogic = PageScrollConfig.defaultEasingLogic;
        /* Boolean whether the scroll animation should stop on user interruption or not */
        this._interruptible = PageScrollConfig.defaultInterruptible;
        /* Event emitter to notify the world about the scrolling */
        this._pageScrollFinish = new _angular_core.EventEmitter();
        /**
         * These properties will be set/manipulated if the scroll animation starts
         */
        /* The initial value of the scrollTop position when the animation starts */
        this._startScrollTop = 0;
        /* Whether an interrupt listener is attached to the body or not */
        this._interruptListenersAttached = false;
        /* References to the timer instance that is used to perform the scroll animation to be
         able to clear it on animation end*/
        this._timer = null;
        this._namespace = namespace;
        this.document = document;
    }
    /*
     * Factory methods for instance creation
     */
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param namespace Optional namespace to group scroll animations logically
     *
     * @returns {PageScrollInstance}
     */
    PageScrollInstance.simpleInstance = function (document, scrollTarget, namespace) {
        return PageScrollInstance.advancedInstance(document, scrollTarget, null, namespace, null, null, null, null);
    };
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param namespace Optional namespace to group scroll animations logically
     *
     * @returns {PageScrollInstance}
     */
    PageScrollInstance.simpleInlineInstance = function (document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.advancedInstance(document, scrollTarget, [scrollingView], namespace, null, null, null, null);
    };
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param namespace Optional namespace to group scroll animations logically
     * @param pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finished
     *
     * @returns {PageScrollInstance}
     */
    PageScrollInstance.advancedInstance = function (document, scrollTarget, scrollingViews, namespace, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        if (scrollingViews === void 0) { scrollingViews = null; }
        if (pageScrollOffset === void 0) { pageScrollOffset = null; }
        if (pageScrollInterruptible === void 0) { pageScrollInterruptible = null; }
        if (pageScrollEasingLogic === void 0) { pageScrollEasingLogic = null; }
        if (pageScrollDuration === void 0) { pageScrollDuration = null; }
        if (pageScrollFinishListener === void 0) { pageScrollFinishListener = null; }
        if (PageScrollUtilService.isUndefinedOrNull(namespace) || namespace.length <= 0) {
            namespace = PageScrollConfig._defaultNamespace;
        }
        var pageScrollInstance = new PageScrollInstance(namespace, document);
        if (PageScrollUtilService.isUndefinedOrNull(scrollingViews) || scrollingViews.length === 0) {
            pageScrollInstance._isInlineScrolling = false;
            pageScrollInstance._scrollTopSources = [document.documentElement, document.body, document.body.parentNode];
        }
        else {
            pageScrollInstance._isInlineScrolling = true;
            pageScrollInstance._scrollTopSources = scrollingViews;
        }
        pageScrollInstance._scrollTarget = scrollTarget;
        if (!PageScrollUtilService.isUndefinedOrNull(pageScrollOffset)) {
            pageScrollInstance._offset = pageScrollOffset;
        }
        if (!PageScrollUtilService.isUndefinedOrNull(pageScrollEasingLogic)) {
            pageScrollInstance._easingLogic = pageScrollEasingLogic;
        }
        if (!PageScrollUtilService.isUndefinedOrNull(pageScrollDuration)) {
            pageScrollInstance._duration = pageScrollDuration;
        }
        if (!PageScrollUtilService.isUndefinedOrNull(pageScrollFinishListener)) {
            pageScrollInstance._pageScrollFinish = pageScrollFinishListener;
        }
        pageScrollInstance._interruptible = pageScrollInterruptible ||
            (PageScrollUtilService.isUndefinedOrNull(pageScrollInterruptible) && PageScrollConfig.defaultInterruptible);
        return pageScrollInstance;
    };
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @returns {HTMLElement}
     */
    PageScrollInstance.prototype.extractScrollTargetPosition = function () {
        var scrollTargetElement;
        if (typeof this._scrollTarget === 'string') {
            scrollTargetElement = this.document.getElementById(this._scrollTarget.substr(1));
        }
        else {
            scrollTargetElement = this._scrollTarget;
        }
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this._isInlineScrolling) {
            return { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
        }
        return PageScrollUtilService.extractElementPosition(this.document, scrollTargetElement);
    };
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @returns {number}
     */
    PageScrollInstance.prototype.getCurrentOffset = function () {
        return this._offset;
    };
    /**
     * Sets the "scrollTop" property for all scrollingViews to the provided value
     * @param position
     * @return true if at least for one ScrollTopSource the scrollTop value could be set and it kept the new value.
     *          false if it failed for all ScrollTopSources, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    PageScrollInstance.prototype.setScrollTopPosition = function (position) {
        // Set the new scrollTop to all scrollTopSource elements
        return this.scrollTopSources.reduce(function (oneAlreadyWorked, scrollTopSource) {
            if (scrollTopSource && !PageScrollUtilService.isUndefinedOrNull(scrollTopSource.scrollTop)) {
                scrollTopSource.scrollTop = position;
                // Return true of setting the new scrollTop value worked
                if (scrollTopSource.scrollTop === position) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }, false);
    };
    /**
     * Trigger firing a animation finish event
     * @param value Whether the animation finished at the target (true) or got interrupted (false)
     */
    PageScrollInstance.prototype.fireEvent = function (value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    };
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param interruptReporter
     */
    PageScrollInstance.prototype.attachInterruptListeners = function (interruptReporter) {
        var _this = this;
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = function (event) {
            interruptReporter.report(event, _this);
        };
        PageScrollConfig._interruptEvents.forEach(function (event) { return _this.document.body.addEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = true;
    };
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     */
    PageScrollInstance.prototype.detachInterruptListeners = function () {
        var _this = this;
        PageScrollConfig._interruptEvents.forEach(function (event) { return _this.document.body.removeEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = false;
    };
    Object.defineProperty(PageScrollInstance.prototype, "namespace", {
        get: function () {
            return this._namespace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollTopSources", {
        get: function () {
            return this._scrollTopSources;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startScrollTop", {
        get: function () {
            return this._startScrollTop;
        },
        set: function (value) {
            this._startScrollTop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "targetScrollTop", {
        get: function () {
            return this._targetScrollTop;
        },
        set: function (value) {
            this._targetScrollTop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "distanceToScroll", {
        get: function () {
            return this._distanceToScroll;
        },
        set: function (value) {
            this._distanceToScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "easingLogic", {
        get: function () {
            return this._easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptible", {
        get: function () {
            return this._interruptible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "timer", {
        get: function () {
            return this._timer;
        },
        set: function (value) {
            this._timer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptListenersAttached", {
        get: function () {
            return this._interruptListenersAttached;
        },
        enumerable: true,
        configurable: true
    });
    return PageScrollInstance;
}());

var PageScroll = (function () {
    function PageScroll(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollEasing = null;
        this.pageScroll = null;
        this.pageScrollFinish = new _angular_core.EventEmitter();
        this.document = document;
    }
    PageScroll.prototype.ngOnDestroy = function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    };
    PageScroll.prototype.generatePageScrollInstance = function () {
        if (PageScrollUtilService.isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = PageScrollInstance.advancedInstance(this.document, this.href, null, this.pageScroll, this.pageScrollOffset, this.pageScrollInterruptible, this.pageScrollEasing, this.pageScrollDuration, this.pageScrollFinish);
        }
        return this.pageScrollInstance;
    };
    PageScroll.prototype.handleClick = function (clickEvent) {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            // We need to navigate their first.
            // Navigation is handled by the routerLink directive
            // so we only need to listen for route change
            // Note: the change event is also emitted when navigating to the current route again
            var subscription_1 = this.router.events.subscribe(function (routerEvent) {
                if (routerEvent instanceof _angular_router.NavigationEnd) {
                    subscription_1.unsubscribe();
                    _this.pageScrollService.start(_this.generatePageScrollInstance());
                }
                else if (routerEvent instanceof _angular_router.NavigationError || routerEvent instanceof _angular_router.NavigationCancel) {
                    subscription_1.unsubscribe();
                }
            });
        }
        else {
            this.pageScrollService.start(this.generatePageScrollInstance());
        }
        return false; // to preventDefault()
    };
    PageScroll.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[pageScroll]',
                    host: {
                        '(click)': 'handleClick($event)',
                    }
                },] },
    ];
    /** @nocollapse */
    PageScroll.ctorParameters = [
        { type: PageScrollService, },
        { type: _angular_router.Router, decorators: [{ type: _angular_core.Optional },] },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_platformBrowser.DOCUMENT,] },] },
    ];
    PageScroll.propDecorators = {
        'routerLink': [{ type: _angular_core.Input },],
        'href': [{ type: _angular_core.Input },],
        'pageScrollOffset': [{ type: _angular_core.Input },],
        'pageScrollDuration': [{ type: _angular_core.Input },],
        'pageScrollEasing': [{ type: _angular_core.Input },],
        'pageScrollInterruptible': [{ type: _angular_core.Input },],
        'pageScroll': [{ type: _angular_core.Input },],
        'pageScrollFinish': [{ type: _angular_core.Output },],
    };
    return PageScroll;
}());

/**
 * Created by sebastianfuss on 03.09.16.
 */
var Ng2PageScrollModule = (function () {
    function Ng2PageScrollModule() {
    }
    Ng2PageScrollModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [_angular_common.CommonModule],
                    declarations: [PageScroll],
                    exports: [PageScroll],
                    providers: [
                        { provide: PageScrollService, useClass: PageScrollService }
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2PageScrollModule.ctorParameters = [];
    return Ng2PageScrollModule;
}());

exports.Ng2PageScrollModule = Ng2PageScrollModule;
exports.PageScroll = PageScroll;
exports.PageScrollService = PageScrollService;
exports.EasingLogic = EasingLogic;
exports.PageScrollConfig = PageScrollConfig;
exports.PageScrollInstance = PageScrollInstance;
exports.PageScrollUtilService = PageScrollUtilService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
