(self.webpackChunkjoblify = self.webpackChunkjoblify || []).push([
  [803],
  {
    229: (e, t, a) => {
      "use strict";
      var n = a(294),
        l = a(745);
      function r(e) {
        return e.split(" ").pop();
      }
      function s(e) {
        var t = e.className,
          a = void 0 === t ? "" : t;
        return n.createElement(
          "div",
          { className: a },
          n.createElement(
            "svg",
            {
              className: r(a) + "__icon " + r(a) + "__icon_small",
              width: "26",
              height: "21",
              viewBox: "0 0 26 21",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n.createElement("path", {
              d: "M24.5275 4.20508C19.5471 1.88267 13.8597 3.5384 11.8243 7.90325C9.78899 12.2681 12.1764 17.6892 17.1568 20.0116C22.1372 22.334 14.5353 14.4813 16.5706 10.1165C18.606 5.75163 29.5079 6.52748 24.5275 4.20508Z",
              fill: "#9B4CFF",
            }),
            n.createElement("path", {
              d: "M16.2778 8.17418C16.2778 12.1769 2.6685 24.7189 7.73865 15.1025C3.46471 15.1025 0 12.3568 0 8.96985C0 5.58287 3.46471 2.83718 7.73865 2.83718C12.0126 2.83718 16.2778 3.8668 16.2778 8.17418Z",
              fill: "#8AFFCF",
            })
          ),
          n.createElement(
            "svg",
            {
              className: r(a) + "__icon " + r(a) + "__icon_regular",
              width: "37",
              height: "30",
              viewBox: "0 0 37 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n.createElement("path", {
              d: "M34.9047 5.9842C27.8172 2.67922 19.7235 5.03546 16.8271 11.247C13.9306 17.4586 17.3281 25.1732 24.4156 28.4782C31.5032 31.7832 20.6849 20.6082 23.5814 14.3966C26.4779 8.18507 41.9923 9.28917 34.9047 5.9842Z",
              fill: "#9B4DFF",
            }),
            n.createElement("path", {
              d: "M23.1648 11.6326C23.1648 17.3288 3.7975 35.1771 11.0128 21.4922C4.93058 21.4922 0 17.5848 0 12.7649C0 7.94489 4.93058 4.03754 11.0128 4.03754C17.0949 4.03754 23.1648 5.50277 23.1648 11.6326Z",
              fill: "#8AFFCF",
            })
          ),
          n.createElement(
            "svg",
            {
              className: r(a) + "__icon " + r(a) + "__icon_large",
              width: "37",
              height: "30",
              viewBox: "0 0 37 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n.createElement("path", {
              d: "M34.9047 5.9842C27.8172 2.67922 19.7235 5.03546 16.8271 11.247C13.9306 17.4586 17.3281 25.1732 24.4156 28.4782C31.5032 31.7832 20.6849 20.6082 23.5814 14.3966C26.4779 8.18507 41.9923 9.28917 34.9047 5.9842Z",
              fill: "#9B4DFF",
            }),
            n.createElement("path", {
              d: "M23.1648 11.6326C23.1648 17.3288 3.7975 35.1771 11.0128 21.4922C4.93058 21.4922 0 17.5848 0 12.7649C0 7.94489 4.93058 4.03754 11.0128 4.03754C17.0949 4.03754 23.1648 5.50277 23.1648 11.6326Z",
              fill: "#8AFFCF",
            })
          ),
          n.createElement("p", { className: r(a) + "__text" }, "Joblify")
        );
      }
      function i(e) {
        var t,
          l = e.imageName,
          r = e.className,
          s = e.imageType,
          i = e.alt,
          c = a(330)("./" + l + ".avif"),
          o = a(336)("./" + l + ".webp");
        return (
          console.log(o),
          (t =
            "jpg" == s ? a(810)("./" + l + ".jpg") : a(260)("./" + l + ".png")),
          n.createElement(
            "picture",
            { className: r },
            n.createElement("source", {
              type: "image/avif",
              srcSet: c,
              alt: i,
            }),
            n.createElement("source", {
              type: "image/webp",
              srcSet: o,
              alt: i,
            }),
            n.createElement("img", { className: r, src: t, alt: i })
          )
        );
      }
      function c(e) {
        var t = e.color,
          a = e.className;
        return n.createElement(
          "svg",
          {
            className: a,
            viewBox: "0 0 151 151",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          n.createElement("circle", {
            cx: "75.5",
            cy: "75.5",
            r: "75.5",
            fill: t,
          })
        );
      }
      function o(e) {
        var t = e.className;
        return n.createElement(
          "div",
          { className: t },
          n.createElement(
            "div",
            { className: "sign-in__cont" },
            n.createElement(i, {
              className: "sign-in__overlay",
              imageName: "sign-in_overlay",
              imageType: "png",
              alt: "overlay",
            }),
            n.createElement("h1", null, "Log in"),
            n.createElement(
              "form",
              { className: "sign-in-form" },
              n.createElement(p, { type: "email", name: "Email" }),
              n.createElement(p, { type: "password", name: "Password" }),
              n.createElement(
                "div",
                { className: "sign-in-form__sub-input sub-input" },
                n.createElement(
                  "div",
                  { className: "remember-user" },
                  n.createElement("input", {
                    type: "checkbox",
                    name: "remember-user",
                    id: "remember-user",
                  }),
                  n.createElement(
                    "label",
                    { htmlFor: "remember-user" },
                    "Remember User"
                  )
                ),
                n.createElement(
                  "a",
                  { href: "#", className: "forgot-password" },
                  "Forgot Password"
                )
              )
            ),
            n.createElement(
              "button",
              { className: "sign-in__button", type: "submit" },
              "Sign in"
            ),
            n.createElement(
              "div",
              { className: "sign-in__or" },
              n.createElement("hr", null),
              n.createElement("span", null, "OR"),
              n.createElement("hr", null)
            ),
            n.createElement(
              "div",
              { className: "sign-in__log-alt-cont" },
              n.createElement(
                m,
                { platform: "Google" },
                n.createElement(
                  "svg",
                  {
                    className: "log-Alternative__icon",
                    width: "20",
                    height: "21",
                    viewBox: "0 0 20 21",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  n.createElement("path", {
                    d: "M20 10.4477C20 9.75865 19.9333 9.04734 19.8222 8.38049H10.1973V12.3149H15.7099C15.4876 13.5819 14.7541 14.6934 13.6649 15.4047L16.9547 17.9609C18.8886 16.1604 20 13.5375 20 10.4477Z",
                    fill: "#4280EF",
                  }),
                  n.createElement("path", {
                    d: "M10.1973 20.4061C12.9536 20.4061 15.2654 19.4948 16.9547 17.9388L13.6649 15.4048C12.7535 16.0272 11.5754 16.3828 10.1973 16.3828C7.52987 16.3828 5.2848 14.5823 4.46235 12.1816L1.08363 14.7824C2.81745 18.2278 6.32954 20.4061 10.1973 20.4061Z",
                    fill: "#34A353",
                  }),
                  n.createElement("path", {
                    d: "M4.46235 12.1593C4.04001 10.8923 4.04001 9.51411 4.46235 8.24709L1.08363 5.62415C-0.361211 8.51384 -0.361211 11.9148 1.08363 14.7822L4.46235 12.1593Z",
                    fill: "#F6B704",
                  }),
                  n.createElement("path", {
                    d: "M10.1973 4.04595C11.6421 4.02373 13.0647 4.57944 14.1095 5.57971L17.0214 2.64557C15.1764 0.911752 12.7313 -0.0218404 10.1973 0.000387949C6.32953 0.000387949 2.81745 2.17877 1.08363 5.62417L4.46235 8.24712C5.2848 5.82422 7.52987 4.04595 10.1973 4.04595Z",
                    fill: "#E54335",
                  })
                )
              ),
              n.createElement(
                m,
                { platform: "Apple" },
                n.createElement(
                  "svg",
                  {
                    className: "log-alternative__icon",
                    width: "21",
                    height: "21",
                    viewBox: "0 0 21 21",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  n.createElement("path", {
                    d: "M13.5725 4.54125C13.9033 4.15999 14.1555 3.71715 14.3147 3.23814C14.4739 2.75914 14.5368 2.25341 14.5 1.75C13.4845 1.83198 12.5418 2.30961 11.875 3.08C11.5557 3.44923 11.3138 3.87877 11.1635 4.34319C11.0132 4.80761 10.9576 5.29746 11 5.78375C11.4954 5.78788 11.9851 5.67796 12.4312 5.4625C12.8772 5.24704 13.2678 4.93183 13.5725 4.54125V4.54125ZM15.7775 11.0513C15.7834 10.3808 15.96 9.72284 16.2907 9.13955C16.6214 8.55626 17.0952 8.06685 17.6675 7.7175C17.3063 7.19708 16.8289 6.76798 16.273 6.46422C15.7171 6.16045 15.0981 5.99038 14.465 5.9675C13.1 5.8275 11.84 6.76375 11.1138 6.76375C10.3875 6.76375 9.36376 5.985 8.22626 6.0025C7.48263 6.027 6.75803 6.24381 6.12316 6.63179C5.48828 7.01977 4.9648 7.56567 4.60376 8.21625C3.06376 10.8938 4.21001 14.875 5.75001 17.0362C6.45001 18.095 7.32501 19.2938 8.48001 19.25C9.63501 19.2062 10.0113 18.5325 11.35 18.5325C12.6888 18.5325 13.1 19.25 14.2375 19.2237C15.375 19.1975 16.18 18.1388 16.915 17.08C17.4357 16.3113 17.8424 15.4714 18.1225 14.5863C17.4291 14.2905 16.8374 13.7981 16.4207 13.1699C16.0039 12.5417 15.7803 11.8051 15.7775 11.0513V11.0513Z",
                    fill: "black",
                  })
                )
              ),
              n.createElement(
                "div",
                {
                  className: "sign-in__log-alternative log-alternative",
                  style: { border: "2px solid var(--bg_2)" },
                },
                n.createElement(
                  "p",
                  { className: "log-alternative__context" },
                  "Sign Up"
                )
              )
            )
          ),
          n.createElement(c, {
            className: "sign-in__ellipse-bg-1 ellipse",
            color: "var(--bg_1) ",
          }),
          n.createElement(c, {
            className: "sign-in__ellipse-bg-2 ellipse",
            color: "var(--bg_2) ",
          })
        );
      }
      function m(e) {
        var t = e.platform,
          a = e.children;
        return n.createElement(
          "div",
          { className: "sign-in__log-alternative log-alternative" },
          a,
          n.createElement(
            "p",
            { className: "log-alternative__context" },
            "Continue with ",
            t
          )
        );
      }
      function p(e) {
        var t = e.type,
          a = e.name;
        return n.createElement(
          "div",
          { className: "sign-input sign-in__sign-input" },
          n.createElement("label", { htmlFor: t }, a),
          n.createElement(
            "div",
            { className: "sign-input__input-cont" },
            n.createElement(
              "span",
              { className: "input-cont__placeholder" },
              a
            ),
            n.createElement("input", { type: t, name: t, id: t })
          )
        );
      }
      var g = [
        {
          id: 0,
          name: "img_1_1280x1920",
          type: "jpg",
          description: "Collaborative Work Ethics",
        },
        {
          id: 1,
          name: "img_2_1280x1920",
          type: "jpg",
          description: "Collaborative Work Ethics",
        },
      ];
      function _(e) {
        var t = e.className;
        return n.createElement(
          "div",
          { className: t, style: { position: "absolute" } },
          n.createElement(
            "svg",
            {
              className: r(t) + "__fill main-circle",
              width: "588",
              height: "588",
              viewBox: "0 0 588 588",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n.createElement("path", {
              d: "M587.004 293.501C587.004 455.598 455.599 587.003 293.502 587.003C131.405 587.003 0 455.598 0 293.501C0 131.405 131.405 0 293.502 0C455.599 0 587.004 131.405 587.004 293.501Z",
              fill: "#28272F",
            })
          ),
          n.createElement(
            "svg",
            {
              className: r(t) + "__ring main-cicle",
              width: "600",
              height: "600",
              viewBox: "0 0 600 600",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n.createElement("path", {
              d: "M598.5 300.08C598.5 464.732 465.023 598.21 300.37 598.21C135.718 598.21 2.24072 464.732 2.24072 300.08C2.24072 135.428 135.718 1.95056 300.37 1.95056C465.023 1.95056 598.5 135.428 598.5 300.08Z",
              stroke: "#BEBEBE",
              strokeOpacity: "0.4",
              strokeWidth: "3",
            })
          ),
          n.createElement(f, {
            className: r(t) + "__log-in-context log-in-context",
          }),
          n.createElement(u, {
            className: r(t) + "__log-in-images log-in-images",
          }),
          n.createElement(c, {
            className: "circle-container__ellipse ellipse__bg-1 ellipse",
            color: "var(--bg_1)",
          }),
          n.createElement(c, {
            className: "circle-container__ellipse ellipse__bg-2 ellipse",
            color: "var(--bg_2)",
          })
        );
      }
      function f(e) {
        var t = e.className;
        return n.createElement(
          "div",
          { className: t },
          n.createElement(
            "p",
            { className: r(t) + "__header" },
            "Job Opportunities and Services Offered By Professionals"
          ),
          n.createElement(
            "p",
            { className: r(t) + "__body" },
            "Market your skills or Find a suitable person qualified for the job"
          )
        );
      }
      function u(e) {
        var t = e.className,
          a = g.map(function (e) {
            return n.createElement(i, {
              key: e.id,
              className: r(t) + "__image",
              imageName: e.name,
              alt: e.description,
              imageType: e.type,
            });
          });
        return n.createElement("div", { className: t }, a);
      }
      function v(e) {
        var t = e.className;
        return n.createElement(
          "div",
          { className: t },
          n.createElement(
            "p",
            { className: r(t) + "__context" },
            "Don't have a Joblify Account ?"
          ),
          n.createElement(
            "button",
            { className: r(t) + "__buttton  button_bg-2 button" },
            "Sign Up"
          )
        );
      }
      function d() {
        return n.createElement(
          "div",
          { className: "log-in-form" },
          n.createElement(s, {
            className: "log-in-form__brand-logo brand-logo",
          }),
          n.createElement(v, { className: "log-in-form__sign-up sign-up" }),
          n.createElement(o, { className: "log-in-form__sign-in sign-in " }),
          n.createElement(c, {
            className: "log-in-form__ellipse_bg-2 ellipse",
            color: "#9b4cff",
          }),
          n.createElement(c, {
            className: "log-in-form__ellipse_bg-1 ellipse",
            color: "#8affcf",
          }),
          n.createElement(_, {
            className: "log-in-form__circle-container circle-container",
          })
        );
      }
      l.createRoot(document.getElementById("root")).render(
        n.createElement(d, null)
      );
    },
    330: (e, t, a) => {
      var n = {
        "./img_1_1280x1920.avif": 943,
        "./img_2_1280x1920.avif": 49,
        "./img_3_1280x1920.avif": 535,
        "./sign-in_overlay.avif": 498,
      };
      function l(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (l.keys = function () {
        return Object.keys(n);
      }),
        (l.resolve = r),
        (e.exports = l),
        (l.id = 330);
    },
    810: (e, t, a) => {
      var n = {
        "./img_1_1280x1920.jpg": 800,
        "./img_2_1280x1920.jpg": 844,
        "./img_3_1280x1920.jpg": 787,
      };
      function l(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (l.keys = function () {
        return Object.keys(n);
      }),
        (l.resolve = r),
        (e.exports = l),
        (l.id = 810);
    },
    260: (e, t, a) => {
      var n = { "./sign-in_overlay.png": 248 };
      function l(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (l.keys = function () {
        return Object.keys(n);
      }),
        (l.resolve = r),
        (e.exports = l),
        (l.id = 260);
    },
    336: (e, t, a) => {
      var n = {
        "./img_1_1280x1920.webp": 685,
        "./img_2_1280x1920.webp": 421,
        "./img_3_1280x1920.webp": 990,
        "./sign-in_overlay.webp": 389,
      };
      function l(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (l.keys = function () {
        return Object.keys(n);
      }),
        (l.resolve = r),
        (e.exports = l),
        (l.id = 336);
    },
    943: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/04ffc57b544db6b41731.avif";
    },
    800: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/9d93cd53075f131a56fa.jpg";
    },
    685: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/073e7949140333cd4f92.webp";
    },
    49: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/82db1fcac218242207b8.avif";
    },
    844: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/24d476e71cbfd6a07ec9.jpg";
    },
    421: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/dbcdccd90c1604e938d7.webp";
    },
    535: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/82f5c3874bfa02b1dfd4.avif";
    },
    787: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/73746560bf8ec98b8eb5.jpg";
    },
    990: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/505273e5f69bbf9bd0c2.webp";
    },
    498: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/c3f126ca0edf9c08417a.avif";
    },
    248: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/732d72a4105a95394a30.png";
    },
    389: (e, t, a) => {
      "use strict";
      e.exports = a.p + "assets/61e497a05c22fee403bd.webp";
    },
  },
  (e) => {
    e((e.s = 229));
  },
]);