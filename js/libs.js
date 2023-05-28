var swiper = new Swiper(".section-movie", {
    slidesPerView: "2.5",
    spaceBetween: 0,
    lazy: true,
    breakpoints: {
        415: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        600: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
        1230: {
            slidesPerView: 7,
            spaceBetween: 0,
            navigation: {
                nextEl: ".slider-button-next",
                prevEl: ".slider-button-prev",
            },
        },
        2000: {
            slidesPerView: 12,
            spaceBetween: 0,
            navigation: {
                nextEl: ".slider-button-next",
                prevEl: ".slider-button-prev",
            },
        },
    },
});

var swiper = new Swiper(".section-movie-v2", {
    slidesPerView: "2.5",
    spaceBetween: 0,
    lazy: true,
    breakpoints: {
        320: {
            slidesPerView: 2.1,
            spaceBetween: 0,
        },
        600: {
            slidesPerView: 3.2,
            spaceBetween: 0,
        },
        1230: {
            slidesPerView: 4.2,
            spaceBetween: 0,
            navigation: {
                nextEl: ".slider-button-next",
                prevEl: ".slider-button-prev",
            },
        },
        2000: {
            slidesPerView: 6.2,
            spaceBetween: 0,
            navigation: {
                nextEl: ".slider-button-next",
                prevEl: ".slider-button-prev",
            },
        },
    },
});

var swiper = new Swiper(".related-movie", {
    slidesPerView: "2.5",
    spaceBetween: 0,
    lazy: true,
    init: true,
    breakpoints: {
        415: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        600: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
        1230: {
            slidesPerView: 7,
            spaceBetween: 0,
            navigation: {
                nextEl: ".slider-button-next",
                prevEl: ".slider-button-prev",
            },
        },
        2000: {
            slidesPerView: 12,
            spaceBetween: 0,
            navigation: {
                nextEl: ".slider-button-next",
                prevEl: ".slider-button-prev",
            },
        },
    },
});

var swiper = new Swiper(".slider-main", {
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".main-slider__next-btn",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,
    watchSlidesProgress: true,
});

$(document).ready(function () {
    $(".swiper-button-next").removeClass("swiper-button-disabled");

    $(".movie_short-rating, .rating").each(function () {
        var tr = $(this),
            trc = parseInt(tr.text(), 10);
        if (trc < 4) {
            tr.addClass("low");
        } else if (trc < 7) {
            tr.addClass("middle");
        }
    });

    $(document).ready(function () {
        $(".movie__description-data_full").wTextSlicer({
            height: "110",
            textExpand: "Expandir gráfico",
            textHide: "Свернуть сюжет",
        });
    });

    $(document).ready(function () {
        $(".facts").wTextSlicer({
            height: "110",
            textExpand: "Развернуть",
            textHide: "Свернуть",
        });
    });

    $(".muted-video").click(function () {
        if ($("#trailer-fon").prop("muted")) {
            $("#trailer-fon").prop("muted", false);
            $(this).addClass("unmute-video");
        } else {
            $("#trailer-fon").prop("muted", true);
            $(this).removeClass("unmute-video");
        }
        console.log($("video").prop("muted"));
    });

    var elem = document.getElementById("trailer-fon");
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE11 */
            elem.msRequestFullscreen();
        }
    }

    $(".tabs-block").each(function () {
        $(this).find(".tabs-block__select span:first").addClass("is-active");
        $(this).find(".tabs-block__content:first").removeClass("d-none");
    });
    $(".tabs-block__select").on("click", "span:not(.is-active)", function () {
        $(this).addClass("is-active").siblings().removeClass("is-active").parents(".tabs-block").find(".tabs-block__content").hide().eq($(this).index()).fadeIn(0);
        setTimeout(function () {
            $(window).lazyLoadXT();
        }, 300);
    });

    $("#add-commbtn").click(function () {
        $(".add-comm-form").fadeToggle(200);
    });

    $(".comment-item__reply").click(function () {
        $(".add-comm-form").fadeToggle(200);
    });

    $("body").on("click", ".ac-textarea textarea", function () {
        $(".add-comm-form").addClass("active").find(".ac-protect").slideDown(400);
    });

    $("body").append('<div class="overlay hidden"></div>');

    $(document).on("click", ".js-show-login", function () {
        $(".overlay, .login").fadeIn(200);
        $("body").addClass("modal-opened");
        return false;
    });
    $(document).on("click", ".overlay, .login__close", function () {
        $(".overlay, .login").fadeOut(200);
        $("body").removeClass("modal-opened");
    });

    $(document).on("click", ".js-show-search", function () {
        $(".overlay, .search-modal").fadeIn(200);
        $("body").addClass("modal-opened");
        return false;
    });
    $(document).on("click", ".overlay, .search__close", function () {
        $(".overlay, .search-modal").fadeOut(200);
        $("body").removeClass("modal-opened");
    });

    $(document).on("click", ".js-toggle-search", function () {
        $(".search-wrap").slideToggle(200);
        $(this).toggleClass("is-active").find(".fal").toggleClass("fa-search fa-times");
    });

    $(document).on("click", ".xion-fullplayer_btn a", function () {
        $(".xion-fullplayer, .xion-fullplayer_logo, .xion-fullplayer_poster, .xion-fullplayer_btn").fadeOut(200);
        $(".xion-fullplayer_videoplayer").css("display", "block");
    });

    $(".js-show-mobile-menu").click(function () {
        $(".overlay").fadeIn(200);
        $("#mobile-menu, .mobile-menu-close").addClass("is-active");
        $("body").addClass("mobile-menu-is-opened");
    });
    $(document).on("click", ".overlay, .login__close, .mobile-menu-close", function () {
        $(".overlay, .login").fadeOut(200);
        $("#mobile-menu, .mobile-menu-close").removeClass("is-active");
        $("body").removeClass("modal-is-opened mobile-menu-is-opened");
    });

    $("body").on("click", ".mobile-menu .submenu > a", function () {
        $(this).next(".mobile-menu .header__menu-hidden").toggleClass("is-active");
        $(this).toggleClass("is-active");
        return false;
    });

    $("body").append('<div class="overlay"></div><div class="mobile-menu" id="mobile-menu"></div><div class="mobile-menu-close"><span class="fal fa-times"></span></div><div id="scrolltop"><span class="fal fa-long-arrow-up"></span></div>');
    $(".js-this-in-mobile-menu").each(function () {
        $(this).clone().prependTo("#mobile-menu");
    });

    var gotop = $("#scrolltop");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            gotop.fadeIn(200);
        } else {
            gotop.fadeOut(200);
        }
    });
    gotop.click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    $(document).on("click", ".form__textarea-inside textarea, .fr-wrapper", function () {
        $(".add-comments-form").find(".form__row--protect").removeClass("hidden");
    });
    $("#dle-content > #dle-ajax-comments").appendTo($("#inner-page__comments"));
});

jQuery.fn.wTextSlicer = function (options) {
    var options = jQuery.extend(
        {
            height: "200",
            textExpand: "expand text",
            textHide: "hide text",
        },
        options
    );
    return this.each(function () {
        var a = $(this),
            h = a.outerHeight();
        if (h > options.height) {
            a.addClass("slice slice-masked")
                .attr("data-height", h)
                .height(options.height)
                .after('<div class="slice-btn"><span>' + options.textExpand + "</span></div>");
        }
        var bt = $(this).next(".slice-btn").children("span");
        bt.click(function () {
            var ah = parseInt(a.css("height"), 10);
            ah == h ? a.css({ height: options.height }) : a.css({ height: h });
            bt.text(bt.text() == options.textExpand ? options.textHide : options.textExpand);
            a.toggleClass("slice-masked");
        });
    });
};
