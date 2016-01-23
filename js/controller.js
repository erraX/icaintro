export default class Controller {
    constructor() {
        this.bindEvents();
        this.route();
    }

    /**
     * 路由
     *
     */
    _router = {
        intro: () => {
            this.unsetActiveNav();
            this.unsetActiveTab();
            $('.nav').find('li').eq(0).addClass('active');
            $('.content').eq(0).addClass('active');
        },
        people: () => {
            this.unsetActiveNav();
            this.unsetActiveTab();
            $('.nav').find('li').eq(1).addClass('active');
            $('.content').eq(1).addClass('active');
        },
        // paper: () => {
        //     this.unsetActiveNav();
        //     this.unsetActiveTab();
        //     $('.nav').find('li').eq(2).addClass('active');
        //     $('.content').eq(2).addClass('active');
        // },
        research: () => {
            this.unsetActiveNav();
            this.unsetActiveTab();
            $('.nav').find('li').eq(2).addClass('active');
            $('.content').eq(2).addClass('active');
        },
        // about: () => {
        //     this.unsetActiveNav();
        //     this.unsetActiveTab();
        //     $('.nav').find('li').eq(3).addClass('active');
        //     $('.content').eq(3).addClass('active');
        // },
    };

    unsetActiveNav() {
        $('.nav').find('li').removeClass('active');
    }

    unsetActiveTab() {
        $('.content').removeClass('active');
    }

    getHash() {
        return window.location.hash.slice(1) || 'intro';
    }

    bindEvents() {
        $(window).on('hashchange', ::this.route);
    }
    
    route(e) {
        let hash = this.getHash();

        if (this._router[hash] && typeof this._router[hash] === 'function') {
            this._router[hash]();
        }
    }
}
