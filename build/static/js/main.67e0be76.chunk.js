(this["webpackJsonpmern-react"] = this["webpackJsonpmern-react"] || []).push([
  [0],
  {
    139: function (e, t, a) {
      e.exports = a(190);
    },
    144: function (e, t, a) {},
    145: function (e, t, a) {},
    146: function (e, t, a) {},
    154: function (e, t, a) {},
    155: function (e, t, a) {
      e.exports = a.p + "static/media/background.4ca83ada.png";
    },
    156: function (e, t, a) {
      e.exports = a.p + "static/media/dsc.569e1296.png";
    },
    157: function (e, t, a) {
      e.exports = a.p + "static/media/microsoft.3781301a.png";
    },
    158: function (e, t, a) {
      e.exports = a.p + "static/media/mozilla.9e2725b5.png";
    },
    159: function (e, t, a) {
      e.exports = a.p + "static/media/notes1.00cf0944.png";
    },
    160: function (e, t, a) {
      e.exports = a.p + "static/media/notes2.d581d8ff.png";
    },
    161: function (e, t, a) {
      e.exports = a.p + "static/media/notes3.a008851f.png";
    },
    162: function (e, t, a) {
      e.exports = a.p + "static/media/notes4.b65858f5.png";
    },
    163: function (e, t, a) {},
    164: function (e, t, a) {},
    165: function (e, t, a) {
      var n = {
        "./banner1.jpg": 79,
        "./carousel-one.jpg": 93,
        "./carousel-three.jpg": 94,
        "./carousel-two.jpg": 95,
        "./user1.jpg": 80,
      };
      function r(e) {
        var t = i(e);
        return a(t);
      }
      function i(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (r.keys = function () {
        return Object.keys(n);
      }),
        (r.resolve = i),
        (e.exports = r),
        (r.id = 165);
    },
    189: function (e, t, a) {},
    190: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        i = a(10),
        o = a.n(i),
        l = (a(144), a(30)),
        c = a(31),
        s = a(33),
        m = a(32),
        u = (a(145), a(51)),
        d = a(7),
        p = a(236),
        g = a(235),
        b = a(229),
        E = a(254),
        h = a(253),
        v = a(238),
        f = a(231),
        C = a(232),
        x = a(233),
        y = a(234),
        w = a(112),
        k = a.n(w),
        j = a(237),
        N = a(36),
        O = a(227),
        S = a(13),
        D = a(11),
        T = a(239),
        I = a(108),
        _ = a.n(I),
        R = a(109),
        L = a.n(R),
        P = a(110),
        B = a.n(P),
        M = a(111),
        z = a.n(M),
        A = a(69),
        U = a.n(A),
        H = a(107),
        W = a.n(H),
        q =
          (a(146),
          Object(O.a)(function (e) {
            var t;
            return {
              root: {
                display: "flex",
                "& .MuiPaper-root": {
                  backgroundColor: "#1d1d1d",
                  boxShadow: "3px 3px 8px #000",
                },
              },
              drawer:
                ((t = {}),
                Object(d.a)(t, e.breakpoints.up("sm"), {
                  width: 190,
                  flexShrink: 0,
                }),
                Object(d.a)(t, "zIndex", 10),
                Object(d.a)(t, "height", "auto"),
                Object(d.a)(t, "border", 0),
                t),
              appBar: Object(d.a)({ marginLeft: 190 }, e.breakpoints.up("sm"), {
                width: "100%",
              }),
              menuButton: Object(d.a)(
                { marginRight: e.spacing(2) },
                e.breakpoints.up("sm"),
                { display: "none" }
              ),
              toolbar: Object(d.a)({}, e.mixins.toolbar, { marginBottom: 0 }),
              drawerPaper: { width: 190 },
              toolbarButtons: Object(d.a)(
                { marginLeft: "auto", marginRight: 5 },
                e.breakpoints.down("sm"),
                { marginRight: e.spacing(-2) }
              ),
              logoHide: Object(d.a)(
                { display: "none" },
                e.breakpoints.up("sm"),
                { display: "block", paddingRight: "10px" }
              ),
              btn_1: Object(d.a)(
                {
                  backgroundColor: "#e84a5f",
                  marginRight: "10px",
                  borderRadius: "5px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#2a363b",
                    color: "#171717",
                    boxShadow: "none",
                  },
                },
                e.breakpoints.down("sm"),
                { padding: "3px 11px" }
              ),
              hide: { display: "none" },
              sidebar: { backgroundColor: "#1d1d1d", height: "100vh" },
              tabs_tabs: { color: "white" },
            };
          }));
      var V = function (e) {
          var t = e.container,
            n = e.onRouteChange,
            i = e.loginStatus,
            o = e.loggedIn,
            l = q(),
            c = Object(S.a)(),
            s = r.a.useState(!1),
            m = Object(u.a)(s, 2),
            d = m[0],
            w = m[1],
            O = function () {
              w(!d);
            },
            I = r.a.createElement(
              "div",
              { className: l.sidebar },
              r.a.createElement(
                "div",
                { className: "".concat(l.toolbar, " top-nav") },
                r.a.createElement("img", {
                  src: a(63),
                  style: {
                    height: "57px",
                    position: "relative",
                    left: "32%",
                    bottom: "15%",
                  },
                  alt: "logo",
                })
              ),
              r.a.createElement(b.a, null),
              r.a.createElement(
                f.a,
                null,
                r.a.createElement(
                  C.a,
                  {
                    key: "User Profile",
                    component: D.b,
                    to: "/user",
                    className: i ? l.tabs_tabs : l.hide,
                    onClick: function () {
                      n("user");
                    },
                  },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(W.a, { className: l.tabs_tabs })
                  ),
                  r.a.createElement(y.a, { primary: "User Profile" })
                ),
                r.a.createElement(
                  C.a,
                  {
                    key: "Events",
                    component: D.b,
                    to: "/events",
                    className: l.tabs_tabs,
                    onClick: function () {
                      n("events");
                    },
                  },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(_.a, { className: l.tabs_tabs })
                  ),
                  r.a.createElement(y.a, { primary: "Events" })
                ),
                r.a.createElement(
                  C.a,
                  {
                    key: "Clubs",
                    component: D.b,
                    to: "/clubs",
                    className: l.tabs_tabs,
                    onClick: function () {
                      n("clubs");
                    },
                  },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(L.a, { className: l.tabs_tabs })
                  ),
                  r.a.createElement(y.a, {
                    primary: "Clubs",
                    className: l.tabs_tabs,
                  })
                ),
                r.a.createElement(
                  C.a,
                  {
                    key: "Resources",
                    component: D.b,
                    to: "/resources",
                    className: l.tabs_tabs,
                    onClick: function () {
                      n("resources");
                    },
                  },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(B.a, { className: l.tabs_tabs })
                  ),
                  r.a.createElement(y.a, {
                    primary: "Resources",
                    className: l.tabs_tabs,
                  })
                ),
                r.a.createElement(
                  C.a,
                  {
                    key: "Contact",
                    component: D.b,
                    to: "/contact",
                    className: l.tabs_tabs,
                    onClick: function () {
                      n("contact");
                    },
                  },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(U.a, { className: l.tabs_tabs })
                  ),
                  r.a.createElement(y.a, {
                    primary: "Contact",
                    className: l.tabs_tabs,
                  })
                ),
                r.a.createElement(b.a, { style: { marginTop: "30px" } }),
                r.a.createElement(
                  C.a,
                  {
                    key: "Help",
                    component: D.b,
                    to: "/help",
                    className: l.tabs_tabs,
                    onClick: function () {
                      n("help");
                    },
                  },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(z.a, { className: l.tabs_tabs })
                  ),
                  r.a.createElement(y.a, {
                    primary: "Help",
                    className: l.tabs_tabs,
                  })
                )
              )
            );
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              { className: l.root },
              r.a.createElement(g.a, null),
              r.a.createElement(
                p.a,
                { position: "fixed", className: l.appBar },
                r.a.createElement(
                  j.a,
                  { className: "top-nav" },
                  r.a.createElement(
                    v.a,
                    {
                      color: "inherit",
                      "aria-label": "open drawer",
                      edge: "start",
                      onClick: O,
                      className: l.menuButton,
                    },
                    r.a.createElement(k.a, null)
                  ),
                  r.a.createElement(
                    D.b,
                    { to: "/" },
                    r.a.createElement("img", {
                      src: a(63),
                      style: { height: "45px" },
                      alt: "logo",
                      className: l.logoHide,
                      component: D.b,
                      to: "/",
                      onClick: function () {
                        n("home");
                      },
                    })
                  ),
                  r.a.createElement(
                    N.a,
                    {
                      variant: "h5",
                      align: "center",
                      noWrap: !0,
                      component: D.b,
                      to: "/",
                      className: "title",
                      style: { fontWeight: "bold" },
                      onClick: function () {
                        n("home");
                      },
                    },
                    "CLUSTER"
                  ),
                  r.a.createElement(
                    "div",
                    { className: l.toolbarButtons },
                    r.a.createElement(
                      T.a,
                      {
                        variant: "contained",
                        className: i ? l.hide : l.btn_1,
                        onClick: function () {
                          n("login");
                        },
                        component: D.b,
                        to: "/login",
                      },
                      "Log in"
                    ),
                    r.a.createElement(
                      T.a,
                      {
                        variant: "contained",
                        className: i ? l.hide : l.btn_1,
                        component: D.b,
                        to: "/signup",
                        onClick: function () {
                          n("signup");
                        },
                      },
                      "Sign up"
                    ),
                    r.a.createElement(
                      T.a,
                      {
                        variant: "contained",
                        className: i ? l.btn_1 : l.hide,
                        component: D.b,
                        to: "/home",
                        onClick: function () {
                          n("home"), o(!1);
                        },
                      },
                      "Sign out"
                    )
                  )
                )
              ),
              r.a.createElement(
                "nav",
                { className: l.drawer, "aria-label": "mailbox folders" },
                r.a.createElement(
                  h.a,
                  { smUp: !0, implementation: "css" },
                  r.a.createElement(
                    E.a,
                    {
                      container: t,
                      variant: "temporary",
                      anchor: "rtl" === c.direction ? "right" : "left",
                      open: d,
                      onClose: O,
                      classes: { paper: l.drawerPaper },
                      ModalProps: { keepMounted: !0 },
                    },
                    I
                  )
                ),
                r.a.createElement(
                  h.a,
                  { xsDown: !0, implementation: "css" },
                  r.a.createElement(
                    E.a,
                    {
                      classes: { paper: l.drawerPaper },
                      variant: "permanent",
                      open: !0,
                    },
                    I
                  )
                )
              )
            )
          );
        },
        F = a(113),
        J = a.n(F),
        G =
          (a(153),
          a(154),
          [
            {
              title: "Vulputate Mollis Ultricies Fermentum Parturient",
              description:
                "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
              button: "Read More",
              image: "https://i.imgur.com/DvmN8Hx.jpg",
              user: "Luan Gjokaj",
              userProfile: "https://i.imgur.com/JSW6mEk.png",
            },
            {
              title: "Tortor Dapibus Commodo Aenean Quam",
              description:
                "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
              button: "Discover",
              image: "https://i.imgur.com/DCdBXcq.jpg",
              user: "Erich Behrens",
              userProfile: "https://i.imgur.com/0Clfnu7.png",
            },
            {
              title: "Phasellus volutpat metus",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
              button: "Buy now",
              image: "https://i.imgur.com/ZXBtVw7.jpg",
              user: "Bruno Vizovskyy",
              userProfile: "https://i.imgur.com/4KeKvtH.png",
            },
          ]);
      var Q = function () {
          return r.a.createElement(
            J.a,
            { autoplay: 3e3 },
            G.map(function (e, t) {
              return r.a.createElement("div", {
                key: t,
                className: "slider-content",
                style: {
                  background: "url('".concat(
                    e.image,
                    "') no-repeat center center"
                  ),
                },
              });
            })
          );
        },
        $ = a(240),
        K = a(243),
        X = a(242),
        Z = a(241),
        Y = Object(O.a)({
          root: {
            maxWidth: 280,
            marginTop: "40px",
            border: 0,
            boxShadow: "none",
            "&:hover": { backgroundColor: "white" },
          },
          media: { paddingTop: 0, marginTop: 0, height: "auto" },
          img: { height: "120px", width: "120px", alignSelf: "center" },
          content_card: { textAlign: "center" },
        }),
        ee = function (e) {
          var t = Y();
          return r.a.createElement(
            $.a,
            { className: t.root },
            r.a.createElement(
              "div",
              { style: { display: "flex", justifyContent: "center" } },
              r.a.createElement(Z.a, {
                className: "".concat(t.media, " ").concat(t.img),
                image: a(56)("./".concat(e.img)),
                title: e.name,
              })
            ),
            r.a.createElement(
              X.a,
              { className: t.content_card },
              r.a.createElement(
                N.a,
                { variant: "h5", component: "h2" },
                e.name
              ),
              r.a.createElement(
                N.a,
                {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  style: { color: "#253859" },
                },
                e.desc
              )
            ),
            r.a.createElement(
              "div",
              { style: { display: "flex", justifyContent: "center" } },
              r.a.createElement(
                K.a,
                null,
                r.a.createElement(
                  T.a,
                  {
                    size: "small",
                    variant: "contained",
                    style: { backgroundColor: "#ff6769", color: "white" },
                  },
                  "Join"
                )
              )
            )
          );
        },
        te = a(244),
        ae = a(124),
        ne = Object(O.a)(function (e) {
          return {
            root: {
              display: "flex",
              flexWrap: "wrap",
              "& > *": {
                width: "100%",
                height: "auto",
                backgroundColor: "#D9D4F0",
                padding: "30px 50px",
                textAlign: "center",
              },
            },
          };
        });
      function re(e) {
        var t = ne();
        return r.a.createElement(
          "div",
          { className: t.root },
          r.a.createElement(
            ae.a,
            { elevation: 3 },
            r.a.createElement(N.a, { varient: "p" }, e.desc),
            r.a.createElement("br", null),
            r.a.createElement(
              T.a,
              {
                size: "small",
                variant: "contained",
                style: { backgroundColor: "#17233b", color: "white" },
              },
              e.btn
            )
          )
        );
      }
      var ie = a(77),
        oe = [
          {
            url: "carousel-two.jpg",
            title: "Event1 registrations open",
            width: "30%",
            link: "/events",
          },
          {
            url: "carousel-one.jpg",
            title: "WT notes added",
            width: "30%",
            link: "/resources",
          },
          {
            url: "carousel-three.jpg",
            title: "New club on campus!",
            width: "30%",
            link: "/clubs",
          },
        ],
        le = Object(O.a)(function (e) {
          var t;
          return {
            root: {
              display: "flex",
              flexWrap: "wrap",
              minWidth: 300,
              width: "100%",
              justifyContent: "center",
            },
            image:
              ((t = { position: "relative", height: 200, margin: "17px" }),
              Object(d.a)(t, e.breakpoints.down("sm"), {
                width: "100% !important",
                height: 100,
              }),
              Object(d.a)(t, "&:hover, &$focusVisible", {
                zIndex: 1,
                "& $imageBackdrop": { opacity: 0.15 },
                "& $imageMarked": { opacity: 0 },
                "& $imageTitle": { border: "4px solid currentColor" },
              }),
              t),
            focusVisible: {},
            imageButton: {
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: e.palette.common.white,
            },
            imageSrc: {
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            },
            imageBackdrop: {
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: e.palette.common.black,
              opacity: 0.4,
              transition: e.transitions.create("opacity"),
            },
            imageTitle: {
              position: "relative",
              padding: ""
                .concat(e.spacing(2), "px ")
                .concat(e.spacing(4), "px ")
                .concat(e.spacing(1) + 6, "px"),
            },
            imageMarked: {
              height: 3,
              width: 18,
              backgroundColor: e.palette.common.white,
              position: "absolute",
              bottom: -2,
              left: "calc(50% - 9px)",
              transition: e.transitions.create("opacity"),
            },
          };
        });
      function ce() {
        var e = le();
        return r.a.createElement(
          "div",
          { className: e.root },
          oe.map(function (t) {
            return r.a.createElement(
              ie.a,
              {
                focusRipple: !0,
                key: t.title,
                className: e.image,
                focusVisibleClassName: e.focusVisible,
                style: { width: t.width },
                component: D.b,
                to: t.link,
              },
              r.a.createElement("span", {
                className: e.imageSrc,
                style: {
                  backgroundImage: "url(".concat(
                    a(56)("./".concat(t.url)),
                    ")"
                  ),
                },
              }),
              r.a.createElement("span", { className: e.imageBackdrop }),
              r.a.createElement(
                "span",
                { className: e.imageButton },
                r.a.createElement(
                  N.a,
                  {
                    component: "span",
                    variant: "subtitle1",
                    color: "inherit",
                    className: e.imageTitle,
                  },
                  t.title,
                  r.a.createElement("span", { className: e.imageMarked })
                )
              )
            );
          })
        );
      }
      a(163);
      var se = function () {
          return r.a.createElement(
            "div",
            { id: "Home" },
            r.a.createElement(
              "div",
              { id: "overlay" },
              r.a.createElement(Q, null),
              r.a.createElement(
                te.a,
                {
                  container: !0,
                  style: { display: "flex", justifyContent: "space-evenly" },
                },
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(ee, {
                    img: "dsc.png",
                    name: "Developer Students Club",
                    desc:
                      "Club description.Club description.\r Club description. Club description. Club desciption.",
                  })
                ),
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(ee, {
                    img: "mozilla.png",
                    name: "Mozilla Firefox Campus Club",
                    desc:
                      "Club description.Club description.\r Club description. Club description. Club desciption.",
                  })
                ),
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(ee, {
                    img: "microsoft.png",
                    name: "Microsoft Student Partners",
                    desc:
                      "Club description.Club description.\r Club description. Club description. Club desciption.",
                  })
                )
              ),
              r.a.createElement("br", null),
              r.a.createElement(re, {
                desc:
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sodales\r odio, vitae consequat magna. Donec hendrerit purus non leo laoreet, imperdiet \r porta ligula placerat. Vivamus molestie nisl diam, vel vestibulum arcu pharetra \r sollicitudin. Suspendisse scelerisque ante et imperdiet tempor. Quisque vitae\r risus non diam auctor lobortis id eu mauris. Pellentesque commodo urna quis\r neque luctus ultricies. Mauris pretium posuere orci, id tincidunt ante \r tincidunt in.",
                btn: "Signup Now!",
              }),
              r.a.createElement("br", null),
              r.a.createElement("br", null),
              r.a.createElement(
                N.a,
                { variant: "h5", align: "center", style: { color: "white" } },
                "Recent updates"
              ),
              r.a.createElement("br", null),
              r.a.createElement(ce, null),
              r.a.createElement("br", null),
              r.a.createElement("br", null)
            )
          );
        },
        me = a(245),
        ue = a(249),
        de = a(71),
        pe = a.n(de),
        ge = a(72),
        be = a.n(ge),
        Ee = a(73),
        he = a.n(Ee),
        ve = a(74),
        fe = a.n(ve);
      a(37);
      function Ce() {
        return r.a.createElement(
          N.a,
          {
            variant: "body2",
            color: "textSecondary",
            style: { textAlign: "center", marginTop: 8, color: "white" },
          },
          "Copyright \xa9 ",
          r.a.createElement(
            me.a,
            { color: "inherit", href: "https://material-ui.com/" },
            "Aztechs"
          ),
          " ",
          new Date().getFullYear(),
          "."
        );
      }
      var xe = Object(O.a)(function (e) {
        return {
          root: {
            "& .MuiButton-root": { paddingTop: 0 },
            "& .MuiTextField-root": { color: "white" },
          },
          main: { marginTop: e.spacing(8), marginBottom: e.spacing(2) },
          footer: {
            padding: e.spacing(3, 2),
            marginTop: "auto",
            textAlign: "center",
            backgroundColor:
              "light" === e.palette.type
                ? e.palette.grey[200]
                : e.palette.grey[800],
          },
          a: { backgroundColor: "#131313" },
          newsletter: Object(d.a)(
            {
              padding: "2% 3%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
              border: 0,
              color: "white",
            },
            e.breakpoints.down("sm"),
            { flexDirection: "column", alignItems: "center" }
          ),
          email: {
            width: "45%",
            height: "47px",
            color: "white",
            backgroundColor: "#bfbfbf",
            borderRadius: "7px",
          },
          btn_1: Object(d.a)(
            {
              backgroundColor: "#e84a5f",
              paddingTop: e.spacing(0),
              paddingBottom: e.spacing(0),
              marginTop: e.spacing(0),
              borderRadius: "5px",
              boxShadow: "none",
              height: "40px",
              "&:hover": {
                backgroundColor: "#2a363b",
                color: "#e84a5f",
                boxShadow: "none",
              },
            },
            e.breakpoints.down("sm"),
            { marginTop: 10 }
          ),
          info: Object(d.a)(
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              border: 0,
              backgroundColor: "#181818",
              color: "white",
              padding: "3% 18%",
            },
            e.breakpoints.down("sm"),
            { flexDirection: "column" }
          ),
          two: Object(d.a)({}, e.breakpoints.down("sm"), { marginTop: 10 }),
          icons: { fontSize: 25, color: "white" },
        };
      });
      function ye() {
        var e = xe();
        return r.a.createElement(
          "div",
          { className: e.root, id: "footer" },
          r.a.createElement(g.a, null),
          r.a.createElement(
            $.a,
            { className: e.a },
            r.a.createElement(
              "div",
              { className: e.newsletter },
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  N.a,
                  { variant: "h6" },
                  " Be the first to get updates!"
                ),
                r.a.createElement(
                  N.a,
                  { variant: "body2" },
                  "Subscribe and join our newletter today."
                )
              ),
              r.a.createElement(ue.a, {
                id: "outlined-basic",
                variant: "filled",
                label: "Email",
                type: "text",
                className: " ".concat(e.email),
                color: "secondary",
              }),
              r.a.createElement(
                T.a,
                { variant: "contained", className: e.btn_1 },
                "Subscribe"
              )
            ),
            r.a.createElement(b.a, {
              variant: "middle",
              style: { backgroundColor: "#4e4e4e" },
            }),
            r.a.createElement(
              "div",
              { className: e.info },
              r.a.createElement(
                "div",
                null,
                r.a.createElement(N.a, { variant: "body1" }, "About"),
                r.a.createElement(
                  N.a,
                  { variant: "body2" },
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum volutpat sem, nec tincidunt mi laoreet et vestibulum."
                )
              ),
              r.a.createElement(
                "div",
                { className: e.two },
                r.a.createElement(N.a, { variant: "body1" }, "Information"),
                r.a.createElement(
                  N.a,
                  { variant: "body2" },
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum volutpat sem, nec tincidunt mi laoreet et."
                )
              )
            ),
            r.a.createElement(b.a, { variant: "middle" }),
            r.a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBotton: 10,
                  alignItems: "center",
                },
              },
              r.a.createElement("img", {
                src: a(63),
                height: "35",
                width: "35",
                style: { marginLeft: 65 },
                alt: "logo",
              }),
              r.a.createElement(b.a, {
                orientation: "vertical",
                flexItem: !0,
                style: {
                  marginLeft: 45,
                  marginRight: 35,
                  backgroundColor: "#4e4e4e",
                },
              }),
              r.a.createElement(pe.a, { className: e.icons }),
              "\u2002",
              r.a.createElement(be.a, { className: e.icons }),
              "\u2002",
              r.a.createElement(he.a, { className: e.icons }),
              "\u2002",
              r.a.createElement(fe.a, { className: e.icons }),
              r.a.createElement("br", null),
              r.a.createElement("br", null)
            ),
            r.a.createElement(Ce, null)
          )
        );
      }
      var we = a(43),
        ke = a(114),
        je = a(5);
      var Ne = Object(je.a)(function (e) {
          return {
            root: Object(ke.a)({}, e.mixins.gutters(), {
              paddingTop: e.spacing(1),
              paddingBottom: e.spacing(1),
              marginTop: 75,
              marginBottom: 23,
            }),
            title: Object(d.a)({ marginLeft: 190 }, e.breakpoints.down("xs"), {
              marginLeft: 0,
            }),
          };
        })(function (e) {
          var t = e.classes;
          return r.a.createElement(
            "div",
            { className: t.title },
            r.a.createElement(
              ae.a,
              { className: t.root, elevation: 0 },
              r.a.createElement(N.a, { variant: "h4", align: "center" }, e.name)
            )
          );
        }),
        Oe = Object(O.a)(function (e) {
          return {
            root: {
              "& .MuiTextField-root": { margin: e.spacing(1), width: "25ch" },
              "& > *": { margin: e.spacing(1) },
            },
          };
        }),
        Se = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).handleEmailChange = function (e) {
                return n.setState({ email: e.target.value });
              }),
              (n.handlePwdChange = function (e) {
                return n.setState({ password: e.target.value });
              }),
              (n.handleData = function () {
                fetch("https://test-express-app-2801.herokuapp.com/login", {
                  method: "post",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email: n.state.email,
                    password: n.state.password,
                  }),
                })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    e._id &&
                      (n.props.onRouteChange("user"),
                      n.props.loadUser(e),
                      n.props.loggedIn(!0));
                  })
                  .catch(function (e) {
                    n.setState({ err: !0 }), console.log("idar tak aaya mai");
                  });
              }),
              (n.state = { email: "", password: "", err: !1 }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(Ne, { name: "Login" }),
                    r.a.createElement(
                      "div",
                      { id: "login" },
                      r.a.createElement(
                        "form",
                        {
                          className: "".concat(Oe.root, " "),
                          noValidate: !0,
                          autoComplete: "off",
                        },
                        r.a.createElement(ue.a, {
                          id: "outlined-username-input",
                          label: "Email",
                          type: "text",
                          variant: "outlined",
                          className: "email-input",
                          value: this.state.email,
                          onChange: this.handleEmailChange,
                        }),
                        r.a.createElement("br", null),
                        r.a.createElement("br", null),
                        r.a.createElement(ue.a, {
                          id: "filled-password-input",
                          label: "Password",
                          type: "password",
                          value: this.state.password,
                          onChange: this.handlePwdChange,
                          autoComplete: "current-password",
                          variant: "filled",
                        }),
                        r.a.createElement("br", null),
                        r.a.createElement("br", null),
                        r.a.createElement(
                          T.a,
                          {
                            variant: "contained",
                            onClick: this.handleData,
                            style: { backgroundColor: "primary" },
                            component: D.b,
                            to: "/user",
                          },
                          "Login"
                        ),
                        r.a.createElement("br", null),
                        r.a.createElement("br", null),
                        this.state.err
                          ? r.a.createElement(
                              N.a,
                              { style: { color: "red" } },
                              "Email/Password Incorrect"
                            )
                          : null,
                        r.a.createElement(
                          N.a,
                          null,
                          "Don't have an account yet??"
                        ),
                        r.a.createElement(
                          T.a,
                          { color: "default", component: D.b, to: "/signup" },
                          "Signup Now"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        De = a(255),
        Te = Object(O.a)(function (e) {
          return {
            root: {
              maxWidth: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: 90,
            },
            media: {
              position: "relative",
              width: "100vw",
              height: 320,
              backgroundSize: "cover",
              boxShadow: "2px 2px 6px #000",
            },
            large: {
              position: "absolute",
              top: 200,
              left: "auto",
              width: e.spacing(25),
              height: e.spacing(25),
              margin: 0,
              padding: 0,
              boxShadow: "2px 2px 8px #000",
            },
            info: { margin: "auto 5%", backgroundColor: "#0c0d0e" },
            btn_1: {
              backgroundColor: "#e84a5f",
              borderRadius: "5px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#0c0d0e",
                color: "#e84a5f",
                boxShadow: "none",
              },
            },
          };
        });
      function Ie(e) {
        var t = Te(),
          n = e.username;
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            "div",
            { className: t.banner },
            r.a.createElement(
              $.a,
              { className: t.root },
              r.a.createElement(Z.a, { className: t.media, image: a(79) }),
              r.a.createElement(De.a, {
                alt: "Remy Sharp",
                src: a(80),
                className: t.large,
              })
            ),
            r.a.createElement(
              N.a,
              {
                variant: "h5",
                align: "center",
                style: { marginTop: 17, color: "#8694ad" },
              },
              n
            ),
            r.a.createElement(
              N.a,
              { variant: "body1", align: "center", className: t.info },
              "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            ),
            r.a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 23,
                  marginBottom: 15,
                },
              },
              r.a.createElement(
                T.a,
                { variant: "contained", className: t.btn_1 },
                "Edit profile"
              )
            )
          )
        );
      }
      var _e = a(115),
        Re = a.n(_e),
        Le =
          (a(164),
          Object(O.a)({
            root: {
              minWidth: 240,
              marginTop: "40px",
              border: ".5px solid #263859",
              "&:hover": { backgroundColor: "#8694ad" },
              marginRight: 12,
              backgroundColor: "#6b778d",
              color: "white",
            },
            img: { height: 150, width: 240, alignSelf: "center" },
            content_card: { textAlign: "center" },
          })),
        Pe = function (e) {
          var t = Le();
          return r.a.createElement(
            $.a,
            { className: t.root },
            r.a.createElement(
              "div",
              { style: { display: "flex", justifyContent: "center" } },
              r.a.createElement(Z.a, {
                className: " ".concat(t.img),
                image: a(165)("./".concat(e.img, ".jpg")),
              })
            ),
            r.a.createElement(
              X.a,
              { className: t.content_card },
              r.a.createElement(
                N.a,
                { variant: "h5", component: "h2", style: { color: "#17223b" } },
                e.name
              ),
              r.a.createElement(
                N.a,
                { variant: "body2", component: "p", style: { color: "white" } },
                e.date,
                r.a.createElement("br", null),
                e.time,
                r.a.createElement("br", null),
                e.place
              )
            )
          );
        },
        Be = [
          {
            name: "event1",
            date: "1/1/2020",
            place: "Online",
            time: "10:00am to 1:00pm",
            img: "carousel-one",
          },
          {
            name: "event2",
            date: "2/1/2020",
            place: "Auditorium",
            time: "12:00pm to 2:00pm",
            img: "carousel-two",
          },
          {
            name: "event3",
            date: "3/1/2020",
            place: "5th floor auditorium",
            time: "3:00pm to 4:00pm",
            img: "carousel-three",
          },
          {
            name: "event4",
            date: "4/1/2020",
            place: "Auditorium",
            time: "10:00am to 11:00am",
            img: "carousel-one",
          },
          {
            name: "event5",
            date: "5/1/2020",
            place: "Online",
            time: "9:00am to 12:00pm",
            img: "carousel-two",
          },
          {
            name: "event6",
            date: "6/1/2020",
            place: "5th floor auditorium",
            time: "10:00am to 1:00pm",
            img: "carousel-three",
          },
          {
            name: "event7",
            date: "7/1/2020",
            place: "Online",
            time: "8:00am to 10:00am",
            img: "carousel-one",
          },
          {
            name: "event8",
            date: "8/1/2020",
            place: "Auditorium",
            time: "10:00am to 1:00pm",
            img: "carousel-two",
          },
          {
            name: "event9",
            date: "9/1/2020",
            place: "Online",
            time: "10:00am to 1:00pm",
            img: "carousel-three",
          },
        ],
        Me = function (e) {
          var t = e.name;
          return r.a.createElement(
            "div",
            { className: "scroll-menu-arrows" },
            t
          );
        },
        ze = Me({ name: "<", className: "arrow-prev" }),
        Ae = Me({ name: ">", className: "arrow-next" }),
        Ue = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            Object(l.a)(this, a);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = { selected: 0 }),
              (e.onSelect = function (t) {
                e.setState({ selected: t });
              }),
              e
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.state.selected,
                    t = Be.map(function (e) {
                      var t = e.name,
                        a = e.date,
                        n = e.time,
                        i = e.place,
                        o = e.img;
                      return r.a.createElement(Pe, {
                        name: t,
                        key: t,
                        date: a,
                        time: n,
                        place: i,
                        img: o,
                      });
                    });
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(Re.a, {
                      data: t,
                      arrowLeft: ze,
                      arrowRight: Ae,
                      selected: e,
                      onSelect: this.onSelect,
                      wheel: !0,
                      dragging: !0,
                    }),
                    r.a.createElement("br", null),
                    r.a.createElement("br", null),
                    r.a.createElement("br", null)
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        He = Object(O.a)(function (e) {
          return {
            root: {
              textAlign: "center",
              marginTop: 40,
              backgroundColor: "#0c0d0e",
              color: "white",
            },
            container: Object(d.a)(
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              },
              e.breakpoints.down("sm"),
              { flexDirection: "column" }
            ),
            row: Object(d.a)(
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              },
              e.breakpoints.down("sm"),
              { justifyContent: "center" }
            ),
            title: Object(d.a)(
              { fontSize: "20px", marginTop: "10px" },
              e.breakpoints.down("sm"),
              { marginTop: "12px" }
            ),
            text: Object(d.a)(
              { fontSize: "16px", marginTop: "10px" },
              e.breakpoints.down("sm"),
              { marginTop: "12px" }
            ),
            club: { marginTop: "10px", fontSize: "18px", fontWeight: "bold" },
            media: { width: 300, height: 170 },
            events: {
              marginTop: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              textAlign: "left",
              border: 0,
              boxShadow: "none",
            },
          };
        });
      function We(e) {
        var t = He(),
          a = e.email,
          n = e.name,
          i = e.phone,
          o = e.department;
        return r.a.createElement(
          $.a,
          { className: t.root },
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "h5" }, "Personal Details"),
          r.a.createElement("br", null),
          r.a.createElement(
            "div",
            { className: t.container },
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "div",
                { className: t.row },
                r.a.createElement("br", null),
                r.a.createElement("br", null),
                r.a.createElement(N.a, { className: t.title }, "Name:"),
                "\xa0\xa0",
                r.a.createElement(N.a, { className: t.text }, n)
              ),
              r.a.createElement(
                "div",
                { className: t.row },
                r.a.createElement(N.a, { className: t.title }, "Email:"),
                "\xa0\xa0",
                r.a.createElement(N.a, { className: t.text }, a)
              ),
              r.a.createElement(
                "div",
                { className: t.row },
                r.a.createElement(N.a, { className: t.title }, "Phone:"),
                "\xa0\xa0",
                r.a.createElement(N.a, { className: t.text }, i)
              ),
              r.a.createElement(
                "div",
                { className: t.row },
                r.a.createElement(N.a, { className: t.title }, "Department:"),
                "\xa0\xa0",
                r.a.createElement(N.a, { className: t.text }, o)
              ),
              r.a.createElement("br", null)
            ),
            r.a.createElement(b.a, {
              orientation: "vertical",
              flexItem: !0,
              style: { marginLeft: -50, backgroundColor: "#6b778d" },
            }),
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                N.a,
                { className: "".concat(t.club, " ,").concat(t.title) },
                "Clubs joined:"
              ),
              r.a.createElement(
                N.a,
                { className: t.club },
                "Developer Students Club"
              ),
              r.a.createElement(N.a, { className: t.text }, "Organizer"),
              r.a.createElement(N.a, { className: t.club }, "Mozilla club"),
              r.a.createElement(N.a, { className: t.text }, "Designer")
            )
          ),
          r.a.createElement("br", null),
          r.a.createElement("br", null),
          r.a.createElement(b.a, {
            variant: "middle",
            style: { backgroundColor: "#6b778d" },
          }),
          r.a.createElement("br", null),
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "h5" }, "Registered events"),
          r.a.createElement(Ue, null)
        );
      }
      var qe = Object(O.a)({
        root: { backgroundColor: "#0c0d0e", color: "white" },
      });
      var Ve = function (e) {
          var t = qe();
          return r.a.createElement(
            "div",
            { id: "user", className: t.root },
            r.a.createElement(Ie, { username: e.user.username }),
            r.a.createElement(We, {
              email: e.user.email,
              name: e.user.name,
              phone: e.user.phone,
              department: e.user.department,
            })
          );
        },
        Fe = Object(O.a)(function (e) {
          return {
            root: {
              "& .MuiTextField-root": { margin: e.spacing(1), width: "25ch" },
              "& > *": { margin: e.spacing(1) },
            },
          };
        }),
        Je = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            Object(l.a)(this, a);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                name: "",
                username: "",
                email: "",
                password: "",
                phone: "",
                department: "",
              }),
              (e.handleNameChange = function (t) {
                return e.setState({ name: t.target.value });
              }),
              (e.handlePwdChange = function (t) {
                return e.setState({ password: t.target.value });
              }),
              (e.handleEmailChange = function (t) {
                return e.setState({ email: t.target.value });
              }),
              (e.handleUserChange = function (t) {
                return e.setState({ username: t.target.value });
              }),
              (e.handlePhoneChange = function (t) {
                return e.setState({ phone: t.target.value });
              }),
              (e.handleDepartmentChange = function (t) {
                return e.setState({ department: t.target.value });
              }),
              (e.handleData = function () {
                fetch("https://test-express-app-2801.herokuapp.com/signup", {
                  method: "post",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email: e.state.email,
                    password: e.state.password,
                    name: e.state.name,
                    username: e.state.username,
                    department: e.state.department,
                    phone: e.state.phone,
                  }),
                })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (t) {
                    t &&
                      (e.props.loadUser(t),
                      e.props.onRouteChange("user"),
                      e.props.loggedIn(!0));
                  });
              }),
              e
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(Ne, { name: "Signup" }),
                    r.a.createElement(
                      "div",
                      { id: "signup" },
                      r.a.createElement(
                        "form",
                        {
                          className: Fe.root,
                          noValidate: !0,
                          autoComplete: "off",
                        },
                        r.a.createElement(ue.a, {
                          id: "outlined-name-input",
                          label: "Full name",
                          type: "text",
                          variant: "outlined",
                          value: this.state.name,
                          onChange: this.handleNameChange,
                        }),
                        r.a.createElement("br", null),
                        r.a.createElement(ue.a, {
                          id: "outlined-username-input",
                          label: "Username",
                          type: "text",
                          variant: "outlined",
                          value: this.state.username,
                          onChange: this.handleUserChange,
                        }),
                        r.a.createElement("br", null),
                        r.a.createElement(ue.a, {
                          id: "outlined-username-input",
                          label: "Phone",
                          type: "text",
                          variant: "outlined",
                          value: this.state.phone,
                          onChange: this.handlePhoneChange,
                        }),
                        r.a.createElement("br", null),
                        r.a.createElement(ue.a, {
                          id: "outlined-username-input",
                          label: "Department",
                          type: "text",
                          variant: "outlined",
                          value: this.state.department,
                          onChange: this.handleDepartmentChange,
                        }),
                        r.a.createElement("br", null),
                        r.a.createElement(ue.a, {
                          id: "outlined-email-input",
                          label: "Email",
                          type: "email",
                          variant: "outlined",
                          value: this.state.email,
                          onChange: this.handleEmailChange,
                        }),
                        r.a.createElement("br", null),
                        r.a.createElement(ue.a, {
                          id: "outlined-password-input",
                          label: "Password",
                          type: "password",
                          variant: "outlined",
                          value: this.state.password,
                          onChange: this.handlePwdChange,
                        }),
                        r.a.createElement("br", null),
                        r.a.createElement("br", null),
                        r.a.createElement(
                          T.a,
                          {
                            variant: "contained",
                            onClick: this.handleData,
                            component: D.b,
                            to: "/user",
                          },
                          "Signup"
                        ),
                        r.a.createElement(
                          N.a,
                          null,
                          "Already have an account??"
                        ),
                        r.a.createElement(
                          T.a,
                          { color: "default", component: D.b, to: "/login" },
                          "Login Now"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Ge = a(3),
        Qe = a(246),
        $e = a(247),
        Ke = a(116),
        Xe = a.n(Ke),
        Ze = a(117),
        Ye = a.n(Ze),
        et = a(118),
        tt = a.n(et),
        at = Object(O.a)(function (e) {
          return {
            root: {
              maxWidth: 310,
              marginBottom: "24px",
              boxShadow: "1px 1px 3px #17233b",
            },
            media: { height: 0, paddingTop: "45.25%" },
            expand: {
              transform: "rotate(0deg)",
              marginLeft: "auto",
              transition: e.transitions.create("transform", {
                duration: e.transitions.duration.shortest,
              }),
            },
            expandOpen: { transform: "rotate(180deg)" },
            avatar: { backgroundColor: "#13233c" },
            link: { "&:hover": { textDecoration: "none" } },
            red: { color: "red" },
          };
        });
      function nt(e) {
        var t = at(),
          n = r.a.useState(!1),
          i = Object(u.a)(n, 2),
          o = i[0],
          l = i[1];
        return r.a.createElement(
          $.a,
          { className: t.root },
          r.a.createElement(Qe.a, {
            avatar: r.a.createElement(
              De.a,
              { "aria-label": "recipe", className: t.avatar },
              e.name
            ),
            action: r.a.createElement(
              "div",
              null,
              r.a.createElement(
                v.a,
                { "aria-label": "add to favorites" },
                r.a.createElement(Xe.a, null)
              ),
              r.a.createElement(
                v.a,
                { "aria-label": "share" },
                r.a.createElement(Ye.a, null)
              )
            ),
            title: e.event,
            subheader: e.dateTime,
          }),
          r.a.createElement(Z.a, {
            className: t.media,
            image: a(56)("./".concat(e.pic)),
            title: "Paella dish",
          }),
          r.a.createElement(
            X.a,
            null,
            r.a.createElement(
              N.a,
              { variant: "body2", color: "textSecondary", component: "p" },
              e.desc
            )
          ),
          r.a.createElement(
            K.a,
            { disableSpacing: !0 },
            r.a.createElement(
              me.a,
              {
                href: "https://www.google.com/forms/about/",
                target: "_blank",
                rel: "noopener",
                className: t.link,
              },
              r.a.createElement(
                T.a,
                {
                  size: "small",
                  variant: "contained",
                  style: { backgroundColor: "#ff6769", color: "white" },
                },
                "Register now!"
              )
            ),
            r.a.createElement(
              v.a,
              {
                className: Object(Ge.a)(
                  t.expand,
                  Object(d.a)({}, t.expandOpen, o)
                ),
                onClick: function () {
                  l(!o);
                },
                "aria-expanded": o,
                "aria-label": "show more",
              },
              r.a.createElement(tt.a, null)
            )
          ),
          r.a.createElement(
            $e.a,
            { in: o, timeout: "auto", unmountOnExit: !0 },
            r.a.createElement(
              X.a,
              null,
              r.a.createElement(N.a, { paragraph: !0 }, "Event organizers:"),
              r.a.createElement(N.a, { paragraph: !0 }, "Event description")
            )
          )
        );
      }
      var rt = function () {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(Ne, { name: "Events" }),
            r.a.createElement(
              "div",
              { id: "events" },
              r.a.createElement(
                te.a,
                {
                  container: !0,
                  style: { display: "flex", justifyContent: "space-evenly" },
                },
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(nt, {
                    name: "A",
                    event: "Event 1",
                    dateTime: "April 28 2020, 10:00am to 12:00pm",
                    pic: "carousel-one.jpg",
                    desc:
                      "Event description.Event description.\r Event description. Event description. Event desciption.",
                  })
                ),
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(nt, {
                    name: "B",
                    event: "Event 2",
                    dateTime: "May 29 2020, 11:00am to 1:00pm",
                    pic: "carousel-two.jpg",
                    desc:
                      "Event description.Event description.\r Event description. Event description. Event desciption.",
                  })
                ),
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(nt, {
                    name: "C",
                    event: "Event 3",
                    dateTime: "June 30 2020, 12:00pm to 2:00pm",
                    pic: "carousel-three.jpg",
                    desc:
                      "Event description.Event description.\r Event description. Event description. Event desciption.",
                  })
                ),
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(nt, {
                    name: "D",
                    event: "Event 4",
                    dateTime: "April 28 2020, 10:00am to 12:00pm",
                    pic: "carousel-one.jpg",
                    desc:
                      "Event description.Event description.\r Event description. Event description. Event desciption.",
                  })
                ),
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(nt, {
                    name: "E",
                    event: "Event 5",
                    dateTime: "May 29 2020, 11:00am to 1:00pm",
                    pic: "carousel-two.jpg",
                    desc:
                      "Event description.Event description.\r Event description. Event description. Event desciption.",
                  })
                ),
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(nt, {
                    name: "F",
                    event: "Event 6",
                    dateTime: "June 30 2020, 12:00pm to 2:00pm",
                    pic: "carousel-three.jpg",
                    desc:
                      "Event description.Event description.\r Event description. Event description. Event desciption.",
                  })
                )
              )
            )
          );
        },
        it = a(76),
        ot = a.n(it),
        lt = function (e) {
          return r.a.createElement(
            ot.a,
            {
              flipOnHover: !0,
              flipDirection: "horizontal",
              style: {
                width: "450px",
                height: "250px",
                marginBottom: "25px",
                marginRight: "25px",
              },
            },
            r.a.createElement(
              it.FrontSide,
              {
                style: {
                  backgroundImage: " url(".concat(
                    a(56)("./".concat(e.img)),
                    ")"
                  ),
                  backgroundSize: "cover",
                },
              },
              r.a.createElement("br", null),
              r.a.createElement("br", null),
              r.a.createElement("br", null),
              r.a.createElement(
                "div",
                { style: { backgroundColor: "rgba(0,0,0,0.3)" } },
                r.a.createElement("hr", {
                  style: {
                    height: "4px",
                    backgroundColor: "white",
                    width: "60%",
                  },
                }),
                r.a.createElement(
                  "h1",
                  { style: { textAlign: "center", color: "white" } },
                  e.name
                ),
                r.a.createElement("hr", {
                  style: {
                    height: "4px",
                    backgroundColor: "white",
                    width: "60%",
                  },
                })
              )
            ),
            r.a.createElement(
              it.BackSide,
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                },
              },
              r.a.createElement(N.a, { variant: "h5" }, e.name),
              r.a.createElement("br", null),
              r.a.createElement(
                N.a,
                {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  style: { color: "#253859" },
                  align: "center",
                },
                e.desc
              ),
              r.a.createElement("br", null),
              r.a.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                  },
                },
                r.a.createElement(
                  me.a,
                  {
                    href: "https://www.google.com/forms/about/",
                    target: "_blank",
                    rel: "noopener",
                    style: { textDecoration: "none" },
                  },
                  r.a.createElement(
                    T.a,
                    {
                      size: "small",
                      variant: "contained",
                      style: {
                        backgroundColor: "#ff6769",
                        color: "white",
                        textDecoration: "none",
                      },
                    },
                    "Join Club!"
                  )
                ),
                "\u2002",
                r.a.createElement(
                  T.a,
                  {
                    size: "small",
                    variant: "contained",
                    style: {
                      backgroundColor: "#ff6769",
                      color: "white",
                      textDecoration: "none",
                    },
                    component: me.a,
                    to: "/events",
                  },
                  "Checkout events!"
                )
              )
            )
          );
        };
      var ct = function () {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(Ne, { name: "Clubs" }),
            r.a.createElement(
              "div",
              { id: "clubs" },
              r.a.createElement(
                te.a,
                {
                  container: !0,
                  style: { display: "flex", justifyContent: "center" },
                },
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(lt, {
                    name: "Developer Students Club",
                    desc:
                      "Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.",
                    img: "carousel-three.jpg",
                  })
                ),
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(lt, {
                    name: "Mozilla Campus Club",
                    desc:
                      "Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.",
                    img: "carousel-two.jpg",
                  })
                ),
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(lt, {
                    name: "Microsoft student partners",
                    desc:
                      "Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.",
                    img: "carousel-one.jpg",
                  })
                ),
                r.a.createElement(
                  te.a,
                  { item: !0 },
                  r.a.createElement(lt, {
                    name: "ACM",
                    desc:
                      "Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.",
                    img: "carousel-two.jpg",
                  })
                )
              )
            )
          );
        },
        st = a(123),
        mt = a(251),
        ut = a(248),
        dt = a(250),
        pt = Object(O.a)(function (e) {
          return {
            root: {
              marginRight: "30px",
              marginLeft: "30px",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              backgroundColor: e.palette.background.paper,
            },
            panel: { boxShadow: "1px 1px 4px #000", padding: "10px" },
            media: {
              marginTop: "10px",
              height: 250,
              width: 220,
              marginRight: "27px",
            },
            note_img: Object(d.a)(
              { display: "flex", flexDirection: "row" },
              e.breakpoints.down("sm"),
              { flexDirection: "column" }
            ),
          };
        });
      function gt(e) {
        var t = pt();
        return r.a.createElement(
          "div",
          null,
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "h4", align: "center" }, e.topic),
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "p" }, e.intro),
          r.a.createElement("br", null),
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "h5" }, "Course outline"),
          r.a.createElement(
            f.a,
            { component: "nav", "aria-label": "main mailbox folders" },
            e.course.map(function (e) {
              return r.a.createElement(
                C.a,
                null,
                r.a.createElement(y.a, { primary: e[0], secondary: e[1] })
              );
            })
          ),
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "h5" }, "Notes"),
          r.a.createElement(
            "div",
            { className: t.note_img },
            e.img.map(function (e) {
              return r.a.createElement(
                D.b,
                { to: "/notes/".concat(e[1]), target: "_blank", download: !0 },
                r.a.createElement(Z.a, {
                  className: t.media,
                  image: a(56)("./".concat(e[0])),
                  title: e[2],
                })
              );
            })
          )
        );
      }
      function bt(e) {
        var t = e.children,
          a = e.value,
          n = e.index,
          i = Object(st.a)(e, ["children", "value", "index"]);
        return r.a.createElement(
          "div",
          Object.assign(
            {
              role: "tabpanel",
              hidden: a !== n,
              id: "simple-tabpanel-".concat(n),
              "aria-labelledby": "simple-tab-".concat(n),
            },
            i
          ),
          a === n &&
            r.a.createElement(dt.a, { p: 3 }, r.a.createElement(N.a, null, t))
        );
      }
      function Et(e) {
        return {
          id: "simple-tab-".concat(e),
          "aria-controls": "simple-tabpanel-".concat(e),
        };
      }
      var ht = Object(O.a)(function (e) {
        return {
          root: {
            marginRight: "30px",
            marginLeft: "30px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            backgroundColor: e.palette.background.paper,
          },
          panel: { boxShadow: "1px 1px 4px #000", padding: "10px" },
          media: {
            marginTop: "10px",
            height: 230,
            width: 200,
            paddingTop: "3%",
          },
        };
      });
      function vt() {
        var e = ht(),
          t = r.a.useState(0),
          a = Object(u.a)(t, 2),
          n = a[0],
          i = a[1];
        return r.a.createElement(
          "div",
          { className: e.root },
          r.a.createElement(
            p.a,
            { position: "static", style: { zIndex: 0 } },
            r.a.createElement(
              mt.a,
              {
                value: n,
                onChange: function (e, t) {
                  i(t);
                },
                "aria-label": "simple tabs example",
                centered: !0,
              },
              r.a.createElement(ut.a, Object.assign({ label: "ICS" }, Et(0))),
              r.a.createElement(ut.a, Object.assign({ label: "GUI" }, Et(1))),
              r.a.createElement(ut.a, Object.assign({ label: "LAC" }, Et(2)))
            )
          ),
          r.a.createElement(
            bt,
            { value: n, index: 0, className: e.panel },
            r.a.createElement(gt, {
              topic: "Introduction to Computer Science",
              intro:
                "This course introduces computer concepts including fundamental functions and operations of the computer.\r Topics include basic introduction to Operating systems, Data structures, Database and computer networks\r and internet. Upon completion, students should be able to demonstrate an understanding of the role and\r function of computers and use the computer to solve problems.",
              course: [
                [
                  "Basics Of Computer And Data Processing",
                  "An Overview of the Computer System, Levels of Computer language, Program language translator, Software: Types of Software,Computer virus, How to deal with virus. How Computers Represent Data. Number System",
                ],
                [
                  "The Operating System And Data Structures",
                  "Operating Systems and Basics: Overview of Operating System, The user interface, Operating system services, Operating system Functions,Types of operating system,Introduction to Data Structure.",
                ],
                [
                  "Introduction To Database",
                  " Data, information, Database, Types of database, Database Management System, Introduction to Relational Database management system",
                ],
              ],
              img: [
                ["notes1.png", "operating_system.pdf", "Os notes"],
                ["notes2.png", "data_structure.pdf", "Ds notes"],
              ],
            })
          ),
          r.a.createElement(
            bt,
            { value: n, index: 1, className: e.panel },
            r.a.createElement(gt, {
              topic: "Graphical User Interface",
              intro:
                " This course is an introduction to web design and development of website in the information fields. It is designed to provide understanding of basic web development\r concepts and process, web design best practices, web page creation",
              course: [
                [
                  "Introduction to Web",
                  "Introduction and Web Development Strategies, History of Web and Internet, Protocols governing Web, Connecting to Internet,Introduction to basic Internet services and tools",
                ],
                [
                  "Domain registration and web hosting",
                  " Domain Registration,Shared Hosting: Linux Hosting, Windows Hosting, Reseller Hosting,Specialized Hosting: WordPress Hosting, CMS Hosting, Ecommerce Hosting.",
                ],
                [
                  "Web page designing",
                  "HTML:HTML elements, Attributes, HTML list, table, images, frames, iframe ,forms, classes, ID, links.",
                ],
              ],
              img: [
                ["notes3.png", "html_basics.pdf", "Html basics"],
                ["notes2.png", "lists_tables.pdf", "Lists and tables"],
              ],
            })
          ),
          r.a.createElement(
            bt,
            { value: n, index: 2, className: e.panel },
            r.a.createElement(gt, {
              topic: "Linear Algebra and Calculus",
              intro:
                "This is the engineering mathematics basic course. It deals with fundamental\r concepts of maths like calculus. Partial derivatives and matrices are covered in this course.",
              course: [
                [
                  "Partial Derivatives",
                  "Chain rule, Scalar point function,Vector point function, direction derivative,gradient vector,tangent plane, normal line,total differential,maxima and minima.",
                ],
                [
                  "Vector Calculus",
                  "Derivative of vector function,velocity of a particle,divergence,physical significance of divergence,gradient,physical significance of gradient,irrotational vectors,solenoidal vectors",
                ],
                [
                  "Matrices",
                  " introduction,matrix multiplication,gauss divergence theorem,gauss elemination method, rank-nullity theorem,eigen values,eigen vectos",
                ],
              ],
              img: [["notes4.png", "vector_calculus.pdf", "Vector calculus"]],
            })
          )
        );
      }
      var ft = function () {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(Ne, { name: "Resources" }),
            r.a.createElement(
              "div",
              { id: "about" },
              r.a.createElement(re, {
                desc:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sodales\r odio, vitae consequat magna. Donec hendrerit purus non leo laoreet, imperdiet \r porta ligula placerat. Vivamus molestie nisl diam, vel vestibulum arcu pharetra \r sollicitudin. Suspendisse scelerisque ante et imperdiet tempor. Quisque vitae\r risus non diam auctor lobortis id eu mauris.",
                btn: "Check out Workshops!",
              }),
              r.a.createElement("br", null),
              r.a.createElement("br", null)
            ),
            r.a.createElement(
              "div",
              { id: "resources" },
              r.a.createElement(
                N.a,
                { variant: "h6", align: "center" },
                "Check out notes of various subjects along with previous papers to help you study better!!"
              ),
              r.a.createElement("br", null),
              r.a.createElement(vt, null),
              r.a.createElement("br", null),
              r.a.createElement("br", null),
              r.a.createElement("br", null)
            )
          );
        },
        Ct = a(119),
        xt = a.n(Ct),
        yt =
          (a(189),
          function (e) {
            var t = e.text;
            return r.a.createElement("div", null, t);
          }),
        wt = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(l.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: "map" },
                    r.a.createElement(
                      xt.a,
                      {
                        bootstrapURLKeys: { key: "abcdef" },
                        defaultCenter: this.props.center,
                        defaultZoom: this.props.zoom,
                      },
                      r.a.createElement(yt, {
                        lat: 59.955413,
                        lng: 30.337844,
                        text: "My Marker",
                      })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      wt.defaultProps = { center: { lat: 59.95, lng: 30.33 }, zoom: 11 };
      var kt = wt,
        jt = a(120),
        Nt = a.n(jt),
        Ot = a(121),
        St = a.n(Ot),
        Dt = a(122),
        Tt = a.n(Dt),
        It = Object(O.a)(function (e) {
          return {
            root: Object(d.a)(
              {
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                zIndex: -3,
                "& > *": {
                  margin: e.spacing(1),
                  width: e.spacing(16),
                  height: e.spacing(16),
                },
                marginLeft: 190,
              },
              e.breakpoints.down("xs"),
              { flexDirection: "column", marginLeft: 0 }
            ),
            content: Object(d.a)(
              {
                height: "57vh",
                width: "50vw",
                marginLeft: "-130px",
                paddingLeft: "130px",
                display: "flex",
                alignItems: "center",
              },
              e.breakpoints.down("sm"),
              {
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 0,
                marginTop: "-30px",
                paddingTop: "45px",
                width: "85vw",
              }
            ),
            map: Object(d.a)({}, e.breakpoints.down("sm"), { width: "100%" }),
          };
        });
      var _t = function () {
          var e = It();
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(Ne, { name: "Contact Us" }),
            r.a.createElement(
              "div",
              { id: "contact" },
              r.a.createElement(
                "div",
                { className: e.root },
                r.a.createElement(kt, { className: e.map }),
                r.a.createElement(
                  ae.a,
                  { elevation: 2, className: e.content },
                  r.a.createElement(
                    f.a,
                    { component: "nav", "aria-label": "main mailbox folders" },
                    r.a.createElement(
                      C.a,
                      null,
                      r.a.createElement(
                        x.a,
                        null,
                        r.a.createElement(Nt.a, null)
                      ),
                      r.a.createElement(y.a, {
                        primary: "Address",
                        secondary: "Vasna-Bhaili road, Vadodara,Gujarat",
                      })
                    ),
                    r.a.createElement(
                      C.a,
                      null,
                      r.a.createElement(
                        x.a,
                        null,
                        r.a.createElement(St.a, null)
                      ),
                      r.a.createElement(y.a, {
                        primary: "Phone no.",
                        secondary: "0265-2222222",
                      })
                    ),
                    r.a.createElement(
                      C.a,
                      null,
                      r.a.createElement(
                        x.a,
                        null,
                        r.a.createElement(Tt.a, null)
                      ),
                      r.a.createElement(y.a, {
                        primary: "Email",
                        secondary: "uni@nuv.ac.in",
                      })
                    ),
                    r.a.createElement(
                      C.a,
                      null,
                      r.a.createElement(
                        x.a,
                        null,
                        r.a.createElement(U.a, null)
                      ),
                      r.a.createElement(
                        "div",
                        { style: { display: "flex", flexDirection: "column" } },
                        r.a.createElement(y.a, { primary: "Socials" }),
                        r.a.createElement(
                          "div",
                          null,
                          r.a.createElement(pe.a, null),
                          "\u2002",
                          r.a.createElement(be.a, null),
                          "\u2002",
                          r.a.createElement(he.a, null),
                          "\u2002",
                          r.a.createElement(fe.a, null)
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Rt = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            return (
              Object(l.a)(this, a),
              ((e = t.call(this)).loadUser = function (t) {
                e.setState({
                  user: {
                    id: t._id,
                    username: t.username,
                    name: t.name,
                    email: t.email,
                    phone: t.phone,
                    department: t.department,
                  },
                });
              }),
              (e.loggedIn = function (t) {
                e.setState({ loginStatus: t }),
                  e.state.loginStatus ||
                    e.setState({
                      user: {
                        id: "",
                        username: "",
                        name: "",
                        email: "",
                        phone: "",
                        department: "",
                      },
                    });
              }),
              (e.onRouteChange = function (t) {
                e.setState({ route: t });
              }),
              (e.state = {
                route: "home",
                loginStatus: !1,
                user: {
                  id: "",
                  name: "",
                  email: "",
                  username: "",
                  phone: "",
                  department: "",
                },
              }),
              e
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "renderSwitch",
                value: function (e) {
                  switch (e) {
                    case "home":
                      return r.a.createElement(we.a, {
                        exact: !0,
                        link: "/home",
                        component: se,
                      });
                    case "login":
                      return r.a.createElement(
                        we.a,
                        { link: "/login" },
                        r.a.createElement(Se, {
                          onRouteChange: this.onRouteChange,
                          loadUser: this.loadUser,
                          loggedIn: this.loggedIn,
                          loginStatus: this.state.loginStatus,
                        })
                      );
                    case "signup":
                      return r.a.createElement(
                        we.a,
                        { link: "/signup" },
                        r.a.createElement(Je, {
                          onRouteChange: this.onRouteChange,
                          loadUser: this.loadUser,
                          loggedIn: this.loggedIn,
                        })
                      );
                    case "user":
                      return r.a.createElement(
                        we.a,
                        { link: "/user" },
                        r.a.createElement(Ve, { user: this.state.user })
                      );
                    case "events":
                      return r.a.createElement(
                        we.a,
                        { link: "/events" },
                        r.a.createElement(rt, null)
                      );
                    case "clubs":
                      return r.a.createElement(
                        we.a,
                        { link: "/clubs" },
                        r.a.createElement(ct, null)
                      );
                    case "resources":
                      return r.a.createElement(
                        we.a,
                        { link: "/resources" },
                        r.a.createElement(ft, null)
                      );
                    case "contact":
                      return r.a.createElement(
                        we.a,
                        { link: "/contact" },
                        r.a.createElement(_t, null)
                      );
                    default:
                      return "404 page not found";
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(V, {
                      onRouteChange: this.onRouteChange,
                      loginStatus: this.state.loginStatus,
                      loggedIn: this.loggedIn,
                    }),
                    this.renderSwitch(this.state.route),
                    r.a.createElement(ye, null)
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(
        r.a.createElement(D.a, null, r.a.createElement(Rt, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    37: function (e, t, a) {},
    56: function (e, t, a) {
      var n = {
        "./Logo.png": 63,
        "./background.png": 155,
        "./banner1.jpg": 79,
        "./carousel-one.jpg": 93,
        "./carousel-three.jpg": 94,
        "./carousel-two.jpg": 95,
        "./dsc.png": 156,
        "./microsoft.png": 157,
        "./mozilla.png": 158,
        "./notes1.png": 159,
        "./notes2.png": 160,
        "./notes3.png": 161,
        "./notes4.png": 162,
        "./user1.jpg": 80,
      };
      function r(e) {
        var t = i(e);
        return a(t);
      }
      function i(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (r.keys = function () {
        return Object.keys(n);
      }),
        (r.resolve = i),
        (e.exports = r),
        (r.id = 56);
    },
    63: function (e, t, a) {
      e.exports = a.p + "static/media/Logo.ed6bf91b.png";
    },
    79: function (e, t, a) {
      e.exports = a.p + "static/media/banner1.29b86c24.jpg";
    },
    80: function (e, t, a) {
      e.exports = a.p + "static/media/user1.1d0b42f1.jpg";
    },
    93: function (e, t, a) {
      e.exports = a.p + "static/media/carousel-one.5d01ae34.jpg";
    },
    94: function (e, t, a) {
      e.exports = a.p + "static/media/carousel-three.434e2bd6.jpg";
    },
    95: function (e, t, a) {
      e.exports = a.p + "static/media/carousel-two.e586ae79.jpg";
    },
  },
  [[139, 1, 2]],
]);
//# sourceMappingURL=main.67e0be76.chunk.js.map
